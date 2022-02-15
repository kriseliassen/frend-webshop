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

	const addToCart = (product) => {
		console.log("added to cart", product);
		// ADD TO CART-STATE
	};

	return (
		<Router>
			<div className="App">
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/cart" element={<Cart cartContent={cartContent} />} />
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
