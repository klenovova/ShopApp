import { createContext, useContext } from "react";
import { CartContextType } from "./interface";

const CartContext = createContext<CartContextType | null>(null);

export const CartContextProvider = CartContext.Provider;

export const useCartContext = () => {
	const cartContext = useContext(CartContext);
	return cartContext!;
};
