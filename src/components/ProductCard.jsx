import { Link } from "react-router-dom";
import "../styles/ProductCard.css";

const ProductCard = ({ product }) => {
	return (
		<div>
			<Link to={`/products/${product.id}`}>
				<img
					src={product.variants[0].image}
					alt={product.name + product.variants[0].name}
					className="ProductCard__img"
				/>
			</Link>
			<Link to={`/products/${product.id}`}>
				<h2 className="title">{product.name}</h2>
			</Link>
			<p>{product.price} NOK</p>
			{product.variants.length > 1 && <p>{product.variants.length} colors</p>}
		</div>
	);
};

export default ProductCard;
