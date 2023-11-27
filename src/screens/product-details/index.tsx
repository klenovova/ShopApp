import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { StackParamList } from "../../ShoppersStopStack";
import { commonStyles } from "../../common-styles";
import Button from "../../components/button";
import Cart from "../../components/cart";
import { useCartContext } from "../../context";
import { calculateCartCount, getFormattedCurrency } from "../../utils";
import { lightBlack, mustardYellow } from "../../colors";
import { useQuery } from "react-query";
import { fetchProduct } from "../../api";
import { StarRatingDisplay } from "react-native-star-rating-widget";
import { productDetailsStyles } from "./styles";

const ProductDetails = () => {
	const {
		params: { productId },
	} = useRoute<
		RouteProp<
			{
				ProductDetails: StackParamList["ProductDetails"];
			},
			"ProductDetails"
		>
	>();

	const { data: productData } = useQuery(
		["fetching-product-by-id", productId],
		() => fetchProduct(productId),
		{
			onSuccess: (data) => console.log("RESPONSE", data),
			onError: (err) => console.error(err),
			staleTime: 5 * 60 * 60 * 1000,
		}
	);

	const { cartItems, onAddToCart } = useCartContext();
	const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

	if (!productData) return <></>;
	return (
		<ScrollView>
			<View style={[commonStyles.spreadInARow, productDetailsStyles.header]}>
				<Button
					iconName="chevron-left"
					onPress={() => navigation.goBack()}
					size={40}
				/>
				<Cart
					cartItemsCount={calculateCartCount(cartItems)}
					onCartClick={() => navigation.navigate("CartDetails")}
				/>
			</View>
			<View style={productDetailsStyles.title}>
				<Text style={[commonStyles.addFont]}>{productData.brand}</Text>
				<Text style={[commonStyles.addFont, productDetailsStyles.productName]}>
					{productData.title}
				</Text>
				<View style={productDetailsStyles.reviews}>
					<StarRatingDisplay
						rating={productData.rating}
						color={mustardYellow}
						emptyColor={lightBlack}
						starSize={20}
					/>
					<Text style={[commonStyles.addFont, productDetailsStyles.reviewText]}>
						110 Reviews
					</Text>
				</View>
			</View>
			<View style={productDetailsStyles.priceDetails}>
				<Text style={[commonStyles.addFont, productDetailsStyles.priceValue]}>
					{getFormattedCurrency(productData.price)}
					<Text style={productDetailsStyles.normalFont}>/unit</Text>
				</Text>
				<View style={productDetailsStyles.discountPill}>
					<Text
						style={[commonStyles.addFont, productDetailsStyles.discountValue]}
					>
						{productData.discountPercentage}% OFF
					</Text>
				</View>
			</View>
			<View style={productDetailsStyles.ctaContainer}>
				<TouchableOpacity
					style={productDetailsStyles.btnOutlined}
					onPress={() => onAddToCart(productData)}
				>
					<Text
						style={[commonStyles.addFont, productDetailsStyles.btnOutlinedText]}
					>
						Add To Cart
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={productDetailsStyles.btnFilled}>
					<Text
						style={[commonStyles.addFont, productDetailsStyles.btnFilledText]}
					>
						Buy Now
					</Text>
				</TouchableOpacity>
			</View>
			<View style={productDetailsStyles.descriptionContainer}>
				<Text style={[commonStyles.addFont, productDetailsStyles.detailsText]}>
					Details
				</Text>
				<Text style={[commonStyles.addFont, productDetailsStyles.description]}>
					{productData.description}
				</Text>
			</View>
		</ScrollView>
	);
};

export default ProductDetails;
