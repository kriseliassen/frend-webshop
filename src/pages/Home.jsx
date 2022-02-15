import React from "react";
import { useQuery } from "react-query";
import { getCategories } from "../api";
import ImageCard from "../components/ImageCard";
import "../styles/Home.css";

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
						<button className="btn hero__button">Shop now</button>
					</div>
					<div className="categories" id="categories">
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
