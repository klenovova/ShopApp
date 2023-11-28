import React, { useMemo } from "react";
import {
	View,
	Text,
	ScrollView,
	FlatList,
	TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackParamList } from "../../ShoppersStopStack";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { commonStyles } from "../../common-styles";
import CartSummaryDetailStrip from "../../components/cart-summary-detail-strip";
import Button from "../../components/button";
import ProductInCart from "../../components/product-in-cart";
import { useCartContext } from "../../context";
import { cartDetailStyles } from "./styles";
import { calculateCartCount } from "../../utils";

const CartDetails = () => {
	const { cartItems, onAddToCart, onRemoveFromCart } = useCartContext();
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
			<View style={cartDetailStyles.header}>
				<Button
					iconName="chevron-left"
					onPress={() => navigation.goBack()}
					size={40}
				/>
				<Text style={[commonStyles.addFont, cartDetailStyles.headerText]}>
					Shopping Cart ({calculateCartCount(cartItems)})
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
			<TouchableOpacity style={cartDetailStyles.editButton}>
				<Text
					style={[
						commonStyles.addFont,
						cartDetailStyles.editButton,
						cartDetailStyles.editText,
					]}
				>
					Edit
				</Text>
			</TouchableOpacity>
			{!!cartItems.length ? (
				<View style={cartDetailStyles.cartSummary}>
					<CartSummaryDetailStrip
						detailName="Subtotal"
						detailValue={subTotalAmount}
					/>
					<CartSummaryDetailStrip detailName="Delivery" detailValue={2} />
					<CartSummaryDetailStrip
						detailName="Total"
						detailValue={subTotalAmount + 2}
					/>
					<TouchableOpacity style={cartDetailStyles.cartSummaryCta}>
						<Text
							style={[
								commonStyles.addFont,
								cartDetailStyles.cartSummaryCtaText,
							]}
						>
							Proceed to checkout
						</Text>
					</TouchableOpacity>
				</View>
			) : (
				<Text style={[commonStyles.addFont, cartDetailStyles.errorMessage]}>
					You don't have anything on your cart right now.
				</Text>
			)}
		</ScrollView>
	);
};

export default CartDetails;
