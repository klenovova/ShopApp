import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/home";
import CartDetails from "./screens/cart-details";
import { CartItem, Product } from "./interface";
import ProductDetails from "./screens/product-details";

export type StackParamList = {
	Home: undefined;
	CartDetails: undefined;
	ProductDetails: {
		productId: number;
	};
};

const ShoppersStopStack = () => {
	const Stack = createNativeStackNavigator<StackParamList>();
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Home"
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen
					name="CartDetails"
					component={CartDetails}
					options={{ animation: "slide_from_bottom" }}
				/>
				<Stack.Screen
					name="ProductDetails"
					component={ProductDetails}
					options={{ animation: "slide_from_right" }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default ShoppersStopStack;
