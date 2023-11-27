import React, { useState } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import { useHomepage } from "./hooks";
import Cart from "../../components/cart";
import { commonStyles } from "../../common-styles";
import ProductCard from "../../components/product-card";
import { homepageStyles } from "./styles";
import { iconVariants } from "../../constants";
import { lightGrey } from "../../colors";
import Icon from "../../components/icon";
import ImageFallback from "../../assets/image-fallback.png";
import FastImage from "react-native-fast-image";
import { Product } from "../../interface";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../../ShoppersStopStack";
import { useCartContext } from "../../context";

const Home = () => {
	const {
		productList,
		cartItems,
		onAddToCart,
		onRemoveFromCart,
	} = useCartContext();
	const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

	if (!productList?.products) {
		return null;
	}

	const onCartClick = () =>
		navigation.navigate("CartDetails", {
			cartItems,
			onAddToCart,
			onRemoveFromCart,
		});

	return (
		<ScrollView contentContainerStyle={[commonStyles.mainScreenContainer]}>
			<View style={homepageStyles.header}>
				<View style={[commonStyles.spreadInARow, commonStyles.separatorMargin]}>
					<Text style={homepageStyles.hey}>Hey, Arnab</Text>
					<Cart
						cartItemsCount={cartItems.length}
						onCartClick={onCartClick}
						fromHomepage
					/>
				</View>
				<View style={homepageStyles.searchBar}>
					<Text style={commonStyles.addFont}>Search Products or Store</Text>
				</View>

				<View style={[commonStyles.spreadInARow]}>
					<View>
						<Text style={homepageStyles.textMuted}>Delivery To</Text>
						<Text style={homepageStyles.textWhite}>
							Green Way 3000, Sylhet,
							<Icon
								style={[homepageStyles.textMuted, homepageStyles.iconMargin]}
								icon={{ variant: iconVariants.entypo, name: "chevron-down" }}
								color={`${lightGrey}99`}
							/>{" "}
						</Text>
					</View>
					<View>
						<Text style={homepageStyles.textMuted}>Within</Text>
						<Text style={homepageStyles.textWhite}>
							1 Hour
							<Icon
								style={[homepageStyles.textMuted, homepageStyles.iconMargin]}
								icon={{ variant: iconVariants.entypo, name: "chevron-down" }}
								color={`${lightGrey}99`}
							/>{" "}
						</Text>
					</View>
				</View>
			</View>

			<ScrollView
				horizontal
				contentContainerStyle={homepageStyles.discountContainerMargin}
			>
				{Array.from({ length: 5 }).map((_, index) => (
					<View
						style={[homepageStyles.discountBanners, commonStyles.spreadInARow]}
						key={index}
					>
						<FastImage
							source={ImageFallback}
							style={homepageStyles.discountImage}
						/>
						<View>
							<Text style={homepageStyles.getText}>Get</Text>
							<Text style={homepageStyles.discountPercentage}>
								{Math.round(50 / (index + 1))}% off
							</Text>
							<Text style={homepageStyles.numberOfOrders}>
								On first{" "}
								{!!index && (
									<Text style={homepageStyles.boldNumberOfOrders}>
										0{index + 1}{" "}
									</Text>
								)}
								order{index === 0 ? "" : "s"}
							</Text>
						</View>
					</View>
				))}
			</ScrollView>

			<Text style={homepageStyles.recommendedText}>Recommended</Text>
			<FlatList
				data={productList.products}
				numColumns={2}
				initialNumToRender={20}
				contentContainerStyle={homepageStyles.productsContainer}
				renderItem={({ item }) => (
					<ProductCard product={item} onAddToCart={onAddToCart} />
				)}
				keyExtractor={(product) => `${product.id}`}
			/>
		</ScrollView>
	);
};

export default Home;
