import React from "react";
import { Link } from "react-router-dom";
import "../styles/ImageCard.css";

const ImageCard = ({ name }) => {
	return (
		<div className="ImageCard__card">
			<Link to={`/category/${name}`}>
				<img
					className="ImageCard__img"
					src={
						name === "T-shirts"
							? `${process.env.PUBLIC_URL}/assets/images/tshirts.jpg`
							: `${process.env.PUBLIC_URL}/assets/images/${name}.jpg`
					}
					alt={name}
				/>
				<span className="ImageCard__title title">{name}</span>
			</Link>
		</div>
	);
};

export default ImageCard;
