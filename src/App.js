import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import Home from "./pages/Home";
import Product from "./pages/Product";
import { useState } from "react";

const App = () => {
	const [cartContent, setCartContent] = useState([]);

	const itemsInCart = cartContent.reduce((acc, item) => acc + item.quantity, 0);

	const addToCart = (product) => {
		setCartContent((prev) => {
			const isItemInCart = prev.find(
				(item) => item.variant.id === product.variant.id
			);

			if (isItemInCart) {
				return prev.map((item) =>
					item.variant.id === product.variant.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				);
			}
			return [...prev, { ...product, quantity: 1 }];
		});
	};

	return (
		<Router>
			<div className="App">
				<Navbar itemsInCart={itemsInCart} />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/cart"
						element={
							<Cart
								cartContent={cartContent}
								setCartContent={setCartContent}
								itemsInCart={itemsInCart}
							/>
						}
					/>
					<Route path="/category/:name" element={<Category />} />
					<Route
						path="/products/:id"
						element={<Product addToCart={addToCart} />}
					/>
				</Routes>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
