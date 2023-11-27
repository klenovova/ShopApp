import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import FastImage from "react-native-fast-image";
import CartIcon from "../../assets/cart-image.png";
import DarkCartIcon from "../../assets/cart-image-black.png";
import { cartStyles } from "./styles";
import { commonStyles } from "../../common-styles";

interface Props {
	cartItemsCount: number;
	onCartClick: () => void;
	fromHomepage?: boolean;
}

const Cart = ({ cartItemsCount, onCartClick, fromHomepage = false }: Props) => {
	return (
		<TouchableOpacity onPress={onCartClick}>
			<FastImage
				source={fromHomepage ? CartIcon : DarkCartIcon}
				style={cartStyles.cartIcon}
			/>
			{!!cartItemsCount && (
				<View
					style={[
						cartStyles.cartCount,
						fromHomepage
							? cartStyles.cartCountBorderBlue
							: cartStyles.cartCountBorderWhite,
					]}
				>
					<Text style={[commonStyles.addFont, cartStyles.cartCountText]}>
						{cartItemsCount}
					</Text>
				</View>
			)}
		</TouchableOpacity>
	);
};

export default Cart;
