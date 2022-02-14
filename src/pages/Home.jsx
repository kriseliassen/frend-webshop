import React from "react";
import { useQuery } from "react-query";
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
						<div className="categories__card">{category.name}</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Home;
