import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import ImageCard from "../components/ImageCard";
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
				<>
					<div className="hero">
						<img
							src={`${process.env.PUBLIC_URL}/assets/images/hero.jpg`}
							alt="hero"
							className="hero__image"
						/>
					</div>
					<div className="categories">
						{data.map((category) => (
							<ImageCard key={category.id} name={category.name} />
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default Home;
