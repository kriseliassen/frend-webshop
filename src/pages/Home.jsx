import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const getCategories = async () => {
	const res = await fetch("https://frend-ecom-api.azurewebsites.net/Category");
	return res.json();
};

const Home = () => {
	const { data, isLoading, isError, error } = useQuery(
		"categories",
		getCategories
	);

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
			{!isLoading && !isError && (
				<div className="categories">
					{data.map((category) => (
						<div className="category--card">
							<Link to={`/category/${category.name}`}>
								<img
									className="category--image"
									src={
										category.name === "T-shirts"
											? `${process.env.PUBLIC_URL}/assets/images/tshirts.jpg`
											: `${process.env.PUBLIC_URL}/assets/images/${category.name}.jpg`
									}
									alt={category.name}
								/>
								<span className="category--title">{category.name}</span>
							</Link>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Home;
