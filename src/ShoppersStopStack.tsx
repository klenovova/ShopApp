import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/home";
import CartDetails from "./screens/cart-details";
import { CartItem, Product } from "./interface";

export type StackParamList = {
	Home: undefined;
	CartDetails: {
		cartItems: CartItem[];
		onAddToCart: (product: Product) => void;
		onRemoveFromCart: (productId: number) => void;
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
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default ShoppersStopStack;
