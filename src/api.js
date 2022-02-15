export const getCategories = async () => {
	const res = await fetch("https://frend-ecom-api.azurewebsites.net/Category");
	return res.json();
};

export const getProducts = async () => {
	const res = await fetch("https://frend-ecom-api.azurewebsites.net/Product");
	return res.json();
};

export const getProduct = async (id) => {
	const res = await fetch(
		`https://frend-ecom-api.azurewebsites.net/Product/${id}`
	);
	return res.json();
};
