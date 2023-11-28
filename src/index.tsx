import React, { useState } from "react";
import ShoppersStopStack from "./ShoppersStopStack";
import { CartContextProvider } from "./context";
import { useQuery } from "react-query";
import { fetchProductList } from "./api";
import { CartItem, Product } from "./interface";
import { STALE_TIME } from "./constants";

const ShoppersStop = () => {
	const { data: productList, isLoading: isProductListLoading } = useQuery(
		["fetching-product-list"],
		() => fetchProductList(),
		{
			staleTime: STALE_TIME,
		}
	);

	const [cartItems, setCartItems] = useState<CartItem[]>([]);

	const onAddToCart = (product: Product) => {
		setCartItems((prev) => {
			const indexOfExistingProduct = prev.findIndex(
				(_product) => _product.product.id === product.id
			);
			if (indexOfExistingProduct !== -1) {
				const newCart = [...prev];
				newCart[indexOfExistingProduct] = {
					product,
					count: prev[indexOfExistingProduct].count + 1,
				};
				return [...newCart];
			} else {
				return [...prev, { product, count: 1 }];
			}
		});
	};

	const onRemoveFromCart = (productId: number) => {
		setCartItems((prev) => {
			const indexOfRemovingProduct = prev.findIndex(
				(_product) => _product.product.id === productId
			);
			if (prev[indexOfRemovingProduct].count === 1) {
				const newCart = [...prev];
				return newCart.filter((cartItem) => cartItem.product.id !== productId);
			} else {
				const newCart = [...prev];
				newCart[indexOfRemovingProduct].count -= 1;
				return [...newCart];
			}
		});
	};
	return (
		<CartContextProvider
			value={{
				productList,
				isProductListLoading,
				cartItems,
				setCartItems,
				onAddToCart,
				onRemoveFromCart,
			}}
		>
			<ShoppersStopStack />
		</CartContextProvider>
	);
};

export default ShoppersStop;
