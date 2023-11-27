import { CartItem } from "./interface";

export const getFormattedCurrency = (value: number) => {
	const amount = Math.floor(value);
	return `$${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
};

export const calculateCartCount = (cartItems: CartItem[]) => {
	let cartCount = 0;
	cartItems.forEach((cartItem) => (cartCount += cartItem.count));
	return cartCount;
};
