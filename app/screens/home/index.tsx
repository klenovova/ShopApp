import React, { useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import { useHomepage } from "./hooks";
import Cart from "../../components/cart";
import { commonStyles } from "../../common-styles";
import ProductCard from "../../components/product-card";
import { homepageStyles } from "./styles";
import { FONT_SIZES, iconVariants } from "../../constants";
import { black, grey, lightGrey } from "../../colors";
import { horizontalScale, verticalScale } from "../../scale";
import Icon from "../../components/icon";

const Home = () => {
	const { productList, isProductListLoading } = useHomepage();

	useEffect(() => {
		if (isProductListLoading === false && !productList) {
			// TODO: Redirect to API Failure screen.
		}
	}, [isProductListLoading]);

	if (!productList?.products) {
		return null;
	}

	return (
		<ScrollView contentContainerStyle={[commonStyles.mainScreenContainer]}>
			<View style={homepageStyles.header}>
				<View style={[commonStyles.spreadInARow, commonStyles.separatorMargin]}>
					<Text style={homepageStyles.hey}>Hey, Arnab</Text>
					<Cart />
				</View>
				<View style={homepageStyles.searchBar}>
					<Text>Search Products or Store</Text>
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

			<Text
				style={{
					fontSize: FONT_SIZES.H1,
					color: black,
					paddingHorizontal: horizontalScale(20),
					marginVertical: verticalScale(10),
				}}
			>
				Recommended
			</Text>
			<View style={homepageStyles.productsContainer}>
				{productList.products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</View>
		</ScrollView>
	);
};

export default Home;
