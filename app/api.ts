import { API_BASE_URL } from "./constants"
import { ProductListingResponse } from "./interface";

export const fetchProductList = async () => {
    try {
        const response = await fetch(API_BASE_URL);
        const data: ProductListingResponse = await response.json();
        return data;
    } catch (err) {
        console.log(err)
    }
};

export const fetchProduct = async (productId: string) => {
    try {
        const response = await fetch(`${API_BASE_URL}/${productId}`);
        return response;
    } catch (err) {
        console.log(err)
    }
}