import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getProduct } from "../api.js";
import "../styles/Product.css";

const Product = ({ addToCart }) => {
	const [selectedVariant, setSelectedVariant] = useState(null);
	const [confirmationMessage, setConfirmationMessage] = useState(null);
	const { id } = useParams();

	const { status, data, isLoading, isError } = useQuery("product", () =>
		getProduct(id)
	);

	useEffect(() => {
		if (status === "success") {
			setSelectedVariant(data.variants[0]);
		}
	}, [status, data]);

	const handleAddToCart = () => {
		addToCart({
			id: data.id,
			name: data.name,
			price: data.price,
			variant: {
				id: selectedVariant.id,
				name: selectedVariant.name,
				image: selectedVariant.image,
			},
		});
		setConfirmationMessage("Item added to cart!");
		setTimeout(() => {
			setConfirmationMessage(null);
		}, 1000);
	};

	return (
		<div className="container">
			{isLoading ? (
				<div className="message--box">
					<span className="message--text">Loading...</span>
				</div>
			) : (
				!isLoading &&
				isError && (
					<div className="message--box">
						<span className="message--text">
							Oops, there was an error loading the page.
						</span>
					</div>
				)
			)}
			{selectedVariant && (
				<div className="Product__content">
					<img
						src={selectedVariant.image}
						alt={data.name + selectedVariant.name}
						className="Product__img"
					/>
					<div className="Product__info">
						<h1 className="title">{data.name}</h1>
						<p>{data.price} NOK</p>
						<div className="Product__options">
							<p>{selectedVariant.name}</p>
							{data.variants.length > 1 && (
								<div className="Product__variants">
									{data.variants.map((variant) => (
										<button
											key={variant.id}
											onClick={() => setSelectedVariant(variant)}
											className={`Product__variant--btn ${
												selectedVariant.id === variant.id &&
												"disabled img--disabled"
											}`}
											disabled={selectedVariant.id === variant.id}
										>
											<img
												src={variant.image}
												alt={variant.name}
												className="Product__img--thumbnail"
											/>
										</button>
									))}
								</div>
							)}
						</div>
						<button className="btn btn--cart" onClick={handleAddToCart}>
							Add to cart
						</button>
						{confirmationMessage && (
							<p className="Product__confirmation">{confirmationMessage}</p>
						)}
						<p className="Product__description">{data.description}</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default Product;
