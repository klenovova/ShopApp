import React from "react";
import { Pressable, Text, View } from "react-native";
import Icon from "../icon";
import { iconVariants } from "../../constants";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { navyBlue, royalBlue } from "../../colors";
import { Product } from "../../interface";
import { productCardStyles } from "./styles";
import { commonStyles } from "../../common-styles";
import { getFormattedCurrency } from "../../utils";
import FastImage from "react-native-fast-image";

interface Props {
	product: Product;
}

const ProductCard = ({ product }: Props) => {
	return (
		<View style={[productCardStyles.productCard]}>
			<FastImage
				source={{ uri: product.thumbnail }}
				style={productCardStyles.productImage}
			/>
			<View style={[commonStyles.spreadInARow]}>
				<View>
					<Text style={productCardStyles.textBlack}>
						{getFormattedCurrency(product.price)}
					</Text>
					<Text
						style={[productCardStyles.textMuted, productCardStyles.truncate]}
						numberOfLines={2}
						ellipsizeMode="tail"
					>
						{product.title}
					</Text>
				</View>
				<Pressable>
					<Icon
						icon={{
							variant: iconVariants.antDesign,
							name: "pluscircle",
						}}
						color={navyBlue}
						size={24}
					/>
				</Pressable>
			</View>
		</View>
	);
};

export default ProductCard;
