import React from "react";

const Cart = ({ cartContent, setCartContent }) => {
	return (
		<div className="container">
			Cart contains {cartContent.length} items
			<button onClick={() => setCartContent([])}>Empty cart</button>
		</div>
	);
};

export default Cart;
