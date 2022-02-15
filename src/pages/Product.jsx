import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getProduct } from "../api.js";
import "../styles/Product.css";

const Product = ({ addToCart }) => {
	const [selectedVariant, setSelectedVariant] = useState(null);
	const { id } = useParams();

	const { status, data, isLoading, isError, error } = useQuery("product", () =>
		getProduct(id)
	);

	useEffect(() => {
		if (status === "success") {
			setSelectedVariant(data.variants[0]);
		}
	}, [status, data]);

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
							Oops, there was an error: {error.message}
						</span>
					</div>
				)
			)}
			{selectedVariant && (
				<>
					<div>
						<img
							src={selectedVariant.image}
							alt={data.name + selectedVariant.name}
						/>
					</div>
					<div>
						<h1>{data.name}</h1>
						<p>{data.price} NOK</p>
						<p>{selectedVariant.name}</p>
						{data.variants.length > 1 && (
							<div>
								{data.variants.map((variant) => (
									<button
										key={variant.name}
										onClick={() => setSelectedVariant(variant)}
										className="Product__variant"
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
						<button
							className="btn btn--cart"
							onClick={() =>
								addToCart({
									id: data.id,
									name: data.name,
									price: data.price,
									variant: {
										id: selectedVariant.id,
										name: selectedVariant.name,
										image: selectedVariant.image,
									},
								})
							}
						>
							Add to cart
						</button>
						<p>{data.description}</p>
					</div>
				</>
			)}
		</div>
	);
};

export default Product;
