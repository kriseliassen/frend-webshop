import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

import { getCategories, getProducts } from "../api";
import ProductCard from "../components/ProductCard";
import "../styles/Category.css";

const Category = () => {
	const { name } = useParams();

	const categories = useQuery("categories", getCategories).data;
	const { data, isLoading, isError } = useQuery("products", getProducts);

	const categoryId = categories?.find((category) => category.name === name).id;

	const getProductsInCategory = (data) => {
		return data.filter((item) => item.categoryId.includes(categoryId));
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
			{data && (
				<>
					<h1 className="heading">{name}</h1>
					<div className="products">
						{getProductsInCategory(data).map((item) => (
							<ProductCard key={item.id} product={item} />
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default Category;
