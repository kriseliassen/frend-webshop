import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
	return (
		<div className="ProductCard__card">
			<Link to={`/products/${product.id}`}>
				<img
					src={product.variants[0].image}
					alt={product.name + product.variants[0].name}
					className="ProductCard__img"
				/>
				<h2>{product.name}</h2>
			</Link>
			{product.variants.length > 1 && <p>{product.variants.length} colors</p>}
			<p>{product.price.toFixed(2)} NOK</p>
		</div>
	);
};

export default ProductCard;
