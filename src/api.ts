import { API_BASE_URL } from "./constants";
import { Product, ProductListingResponse } from "./interface";

export const fetchProductList = async () => {
	try {
		const response = await fetch(`${API_BASE_URL}?limit=250`);
		const data: ProductListingResponse = await response.json();
		return data;
	} catch (err) {
		console.log(err);
	}
};

export const fetchProduct = async (productId: number) => {
	try {
		const response = await fetch(`${API_BASE_URL}/${productId}`);
		const data: Product = await response.json();
		return data;
	} catch (err) {
		console.log(err);
	}
};
