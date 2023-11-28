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
import {
	grey,
	heartRed,
	lightBlack,
	lightGrey,
	mustardYellow,
} from "../../colors";
import { useQuery } from "react-query";
import { fetchProduct } from "../../api";
import { StarRatingDisplay } from "react-native-star-rating-widget";
import { productDetailsStyles } from "./styles";
import Carousel from "react-native-reanimated-carousel";
import FastImage from "react-native-fast-image";
import { horizontalScale, verticalScale } from "../../scale";
import { useState } from "react";
import { iconVariants, STALE_TIME } from "../../constants";
import Icon from "../../components/icon";

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
			staleTime: STALE_TIME,
		}
	);

	const { cartItems, onAddToCart } = useCartContext();
	const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();
	const [currentImage, setCurrentImage] = useState(0);
	const [isWishlisted, setIsWishlisted] = useState<boolean>(false);
	const onHeartClick = () => setIsWishlisted((prev) => !prev);

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
				<Text style={[commonStyles.addFont, productDetailsStyles.brandName]}>
					{productData.brand}
				</Text>
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
			<View style={productDetailsStyles.descriptionContainer}>
				<Carousel
					data={productData.images}
					renderItem={({ item }) => (
						<>
							<FastImage
								source={{ uri: item }}
								style={productDetailsStyles.carouselItems}
								resizeMode="center"
							/>
						</>
					)}
					loop
					pagingEnabled
					onSnapToItem={(currentCarouselItem) =>
						setCurrentImage(currentCarouselItem)
					}
					width={horizontalScale(320)}
					height={verticalScale(160)}
				/>
				<TouchableOpacity
					onPress={onHeartClick}
					style={productDetailsStyles.wishlistIcon}
				>
					<Icon
						icon={{
							name: isWishlisted ? "heart" : "hearto",
							variant: iconVariants.antDesign,
						}}
						color={isWishlisted ? heartRed : grey}
						size={20}
					/>
				</TouchableOpacity>
				<View
					style={{
						flexDirection: "row",
					}}
				>
					{Array.from({ length: productData.images.length }).map((_, index) => (
						<View
							key={index}
							style={[
								productDetailsStyles.pageTab,
								currentImage === index
									? productDetailsStyles.selectedPageTab
									: {},
							]}
						/>
					))}
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
