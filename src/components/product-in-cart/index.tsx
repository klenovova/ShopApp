import React from "react";
import { Text, View } from "react-native";
import Button from "../button";
import { getFormattedCurrency } from "../../utils";
import { commonStyles } from "../../common-styles";
import Icon from "../icon";
import { iconVariants } from "../../constants";
import { lightGrey } from "../../colors";
import { Product } from "../../interface";
import { productInCartStyles } from "./styles";
import FastImage from "react-native-fast-image";
import { verticalScale } from "../../scale";

interface Props {
	productInCart: {
		product: Product;
		count: number;
	};
	addToCart: (product: Product) => void;
	removeFromCart: (productId: number) => void;
}

const ProductInCart = ({ productInCart, addToCart, removeFromCart }: Props) => {
	return (
		<View style={[commonStyles.spreadInARow, productInCartStyles.container]}>
			<View style={productInCartStyles.rowCenter}>
				{productInCart.product.thumbnail ? (
					<FastImage
						source={{ uri: productInCart.product.thumbnail }}
						resizeMode="cover"
						style={productInCartStyles.productThumbnail}
					/>
				) : (
					<Icon
						icon={{ name: "image", variant: iconVariants.feather }}
						size={40}
						color={lightGrey}
					/>
				)}
				<View style={productInCartStyles.marginLeft}>
					<Text
						style={[commonStyles.addFont, productInCartStyles.productTitle]}
						ellipsizeMode="tail"
						numberOfLines={2}
					>
						{productInCart.product.title}
					</Text>
					<Text
						style={[commonStyles.addFont, productInCartStyles.productPrice]}
					>
						{getFormattedCurrency(productInCart.product.price)}
					</Text>
				</View>
			</View>
			<View style={productInCartStyles.rowCenter}>
				<Button
					iconName="minus"
					onPress={() => removeFromCart(productInCart.product.id)}
					size={25}
				/>
				<Text
					style={[commonStyles.addFont, productInCartStyles.productFrequency]}
				>
					{productInCart.count}
				</Text>
				<Button
					iconName="plus"
					onPress={() => addToCart(productInCart.product)}
					size={25}
				/>
			</View>
		</View>
	);
};

export default ProductInCart;
