import React, { useEffect, useMemo } from "react";
import {
	View,
	Text,
	ScrollView,
	FlatList,
	TouchableOpacity,
} from "react-native";
import { black, darkWhite, navyBlue, royalBlue, white } from "../../colors";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackParamList } from "../../ShoppersStopStack";
import { FONT_SIZES } from "../../constants";
import { horizontalScale, verticalScale } from "../../scale";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { commonStyles } from "../../common-styles";
import CartSummaryDetailStrip from "../../components/cart-summary-detail-strip";
import Button from "../../components/button";
import ProductInCart from "../../components/product-in-cart";

const CartDetails = () => {
	const {
		params: { cartItems, onAddToCart, onRemoveFromCart },
	} = useRoute<
		RouteProp<
			{
				CartDetails: StackParamList["CartDetails"];
			},
			"CartDetails"
		>
	>();

	const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();
	const subTotalAmount = useMemo(() => {
		let currentSubTotalAmount = 0;
		cartItems.forEach((cartItem) => {
			currentSubTotalAmount += cartItem.product.price * cartItem.count;
		});
		return currentSubTotalAmount;
	}, [JSON.stringify(cartItems)]);
	return (
		<ScrollView>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					paddingHorizontal: horizontalScale(20),
					paddingVertical: verticalScale(20),
				}}
			>
				<Button
					iconName="chevron-left"
					onPress={() => navigation.goBack()}
					size={40}
				/>
				<Text
					style={[
						commonStyles.addFont,
						{
							color: black,
							fontSize: FONT_SIZES.B1,
							marginLeft: horizontalScale(20),
						},
					]}
				>
					Shopping Cart ({cartItems.length})
				</Text>
			</View>
			<FlatList
				data={cartItems}
				renderItem={({ item }) => (
					<ProductInCart
						productInCart={item}
						addToCart={onAddToCart}
						removeFromCart={onRemoveFromCart}
					/>
				)}
				keyExtractor={(productInCart) => `${productInCart.product.id}`}
			/>
			<TouchableOpacity
				style={{
					flexDirection: "row",
					justifyContent: "flex-end",
					paddingHorizontal: horizontalScale(20),
				}}
			>
				<Text
					style={[
						commonStyles.addFont,
						{ color: navyBlue, paddingVertical: verticalScale(10) },
					]}
				>
					Edit
				</Text>
			</TouchableOpacity>
			<View
				style={{
					paddingHorizontal: horizontalScale(20),
					paddingVertical: verticalScale(15),
					backgroundColor: darkWhite,
					borderRadius: horizontalScale(12),
					marginHorizontal: horizontalScale(10),
				}}
			>
				<CartSummaryDetailStrip
					detailName="Subtotal"
					detailValue={subTotalAmount}
				/>
				<CartSummaryDetailStrip detailName="Delivery" detailValue={2} />
				<CartSummaryDetailStrip
					detailName="Total"
					detailValue={subTotalAmount + 2}
				/>
				<TouchableOpacity
					style={{
						backgroundColor: navyBlue,
						height: verticalScale(50),
						justifyContent: "center",
						alignItems: "center",
						borderRadius: horizontalScale(20),
						marginTop: verticalScale(20),
					}}
				>
					<Text
						style={[
							commonStyles.addFont,
							{ color: white, fontSize: FONT_SIZES.B2 },
						]}
					>
						Proceed to checkout
					</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
};

export default CartDetails;
