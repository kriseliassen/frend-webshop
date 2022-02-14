import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import Home from "./pages/Home";
import Product from "./pages/Product";

const App = () => {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/category/:name" element={<Category />} />
				<Route path="/products/:id" element={<Product />} />
			</Routes>
			<Footer />
		</Router>
	);
};

export default App;
