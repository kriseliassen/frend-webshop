import "../styles/Cart.css";

const Cart = ({ cartContent, removeFromCart, itemsInCart }) => {
	const totalSum = cartContent.reduce(
		(acc, item) => acc + item.quantity * item.price,
		0
	);

	return (
		<div className="container">
			<h1 className="heading">Cart</h1>
			<div className="Cart">
				<div className="Cart__content">
					{cartContent.length > 0 &&
						cartContent.map((item) => (
							<div key={item.id} className="Cart__product">
								<img
									src={item.variant.image}
									alt={item.name + item.variant.name}
									className="Cart__image"
								/>
								<div className="Cart__product--details">
									<h3 className="title">{item.name}</h3>
									<p>Color - {item.variant.name}</p>
									<p className="">{item.price} NOK</p>
									<p className="">Quantity - {item.quantity}</p>
								</div>
								<p className="Cart__product--subtotal">
									{item.price * item.quantity} NOK
								</p>
								<button
									className="btn Cart__btn--remove"
									onClick={() => removeFromCart(item.id)}
								>
									X
								</button>
							</div>
						))}
					{cartContent.length === 0 && (
						<div className="message--box">
							<p className="message--text">Your cart is empty.</p>
						</div>
					)}
				</div>
				<div className="Cart__summary">
					<h2 className="subheading">Cart total</h2>
					<p>You have {itemsInCart} items in your cart</p>
					<p className="Cart__total">
						<span>TOTAL</span>
						{totalSum} NOK
					</p>
					<button className="btn btn--checkout">Go to checkout</button>
				</div>
			</div>
		</div>
	);
};

export default Cart;
