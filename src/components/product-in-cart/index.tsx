import React from "react";
import { Text, View } from "react-native";
import Button from "../button";
import { getFormattedCurrency } from "../../utils";
import { horizontalScale, verticalScale } from "../../scale";
import { commonStyles } from "../../common-styles";
import Icon from "../icon";
import { FONT_SIZES, iconVariants } from "../../constants";
import { black, lightGrey } from "../../colors";
import { Product } from "../../interface";

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
		<View
			style={[
				commonStyles.spreadInARow,
				{
					marginHorizontal: horizontalScale(20),
					alignItems: "center",
					borderBottomWidth: verticalScale(0.25),
					borderBottomColor: lightGrey,
					paddingVertical: verticalScale(10),
				},
			]}
		>
			<View style={{ flexDirection: "row", alignItems: "center" }}>
				<Icon
					icon={{ name: "image", variant: iconVariants.feather }}
					size={40}
					color={lightGrey}
				/>
				<View style={{ marginLeft: horizontalScale(25) }}>
					<Text
						style={[
							commonStyles.addFont,
							{
								color: black,
								fontWeight: "bold",
								fontSize: FONT_SIZES.B2,
								maxWidth: horizontalScale(150),
							},
						]}
						ellipsizeMode="tail"
						numberOfLines={2}
					>
						{productInCart.product.title}
					</Text>
					<Text
						style={[
							commonStyles.addFont,
							{
								color: black,
								fontSize: FONT_SIZES.B2,
							},
						]}
					>
						{getFormattedCurrency(productInCart.product.price)}
					</Text>
				</View>
			</View>
			<View style={{ flexDirection: "row", alignItems: "center" }}>
				<Button
					iconName="minus"
					onPress={() => removeFromCart(productInCart.product.id)}
					size={25}
				/>
				<Text
					style={[
						commonStyles.addFont,
						{
							color: black,
							fontWeight: "bold",
							fontSize: FONT_SIZES.B2,
							marginHorizontal: horizontalScale(15),
						},
					]}
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
