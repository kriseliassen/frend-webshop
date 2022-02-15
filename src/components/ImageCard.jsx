import React from "react";
import { Link } from "react-router-dom";

const ImageCard = ({ name }) => {
	return (
		<div className="category--card">
			<Link to={`/category/${name}`}>
				<img
					className="category--image"
					src={
						name === "T-shirts"
							? `${process.env.PUBLIC_URL}/assets/images/tshirts.jpg`
							: `${process.env.PUBLIC_URL}/assets/images/${name}.jpg`
					}
					alt={name}
				/>
				<span className="category--title">{name}</span>
			</Link>
		</div>
	);
};

export default ImageCard;
