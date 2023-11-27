import Toast from "react-native-simple-toast";

export const getFormattedCurrency = (value: number) => {
	const amount = Math.floor(value);
	return `$${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
};
