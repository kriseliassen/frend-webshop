import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/App.css";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import Product from "./pages/Product";

const App = () => {
	const [cartContent, setCartContent] = useState([]);

	const numberOfItemsInCart = cartContent.reduce(
		(acc, item) => acc + item.quantity,
		0
	);

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

	const removeFromCart = (id) => {
		setCartContent((prev) => {
			return prev.filter((item) => item.variant.id !== id);
		});
	};

	return (
		<Router>
			<div className="App">
				<Navbar numberOfItemsInCart={numberOfItemsInCart} />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/cart"
						element={
							<Cart
								cartContent={cartContent}
								removeFromCart={removeFromCart}
								numberOfItemsInCart={numberOfItemsInCart}
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
