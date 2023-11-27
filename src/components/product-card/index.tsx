import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "../icon";
import { iconVariants } from "../../constants";
import { heartRed, lightGrey, navyBlue } from "../../colors";
import { Product } from "../../interface";
import { productCardStyles } from "./styles";
import { commonStyles } from "../../common-styles";
import { getFormattedCurrency } from "../../utils";
import FastImage from "react-native-fast-image";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../../ShoppersStopStack";

interface Props {
	product: Product;
	onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: Props) => {
	const [isWishlisted, setIsWishlisted] = useState<boolean>(false);
	const onHeartClick = () => setIsWishlisted((prev) => !prev);
	const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();
	return (
		<TouchableOpacity
			onPress={() =>
				navigation.navigate("ProductDetails", {
					productId: product.id,
				})
			}
			style={[productCardStyles.productCard]}
		>
			<FastImage
				source={{ uri: product.thumbnail }}
				style={productCardStyles.productImage}
			/>
			<View style={[commonStyles.spreadInARow]}>
				<View>
					<Text style={[productCardStyles.textBlack, commonStyles.addFont]}>
						{getFormattedCurrency(product.price)}
					</Text>
					<Text
						style={[
							productCardStyles.textMuted,
							productCardStyles.truncate,
							commonStyles.addFont,
						]}
						numberOfLines={2}
						ellipsizeMode="tail"
					>
						{product.title}
					</Text>
				</View>
				<TouchableOpacity onPress={() => onAddToCart(product)}>
					<Icon
						icon={{
							variant: iconVariants.antDesign,
							name: "pluscircle",
						}}
						color={navyBlue}
						size={24}
					/>
				</TouchableOpacity>
			</View>
			<TouchableOpacity
				onPress={onHeartClick}
				style={productCardStyles.wishlistIcon}
			>
				<Icon
					icon={{
						name: isWishlisted ? "heart" : "hearto",
						variant: iconVariants.antDesign,
					}}
					color={isWishlisted ? heartRed : lightGrey}
					size={14}
				/>
			</TouchableOpacity>
		</TouchableOpacity>
	);
};

export default ProductCard;
