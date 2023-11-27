import { StyleSheet } from "react-native";
import { verticalScale } from "../../scale";
import { brightYellow, navyBlue, white } from "../../colors";
import { FONT_SIZES } from "../../constants";

export const cartStyles = StyleSheet.create({
	cartIcon: {
		height: verticalScale(18),
		width: verticalScale(18),
	},
	cartCount: {
		height: verticalScale(20),
		width: verticalScale(20),
		borderRadius: verticalScale(10),
		backgroundColor: brightYellow,
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 3,
		position: "absolute",
		left: verticalScale(8),
		bottom: verticalScale(8),
	},
	cartCountBorderBlue: {
		borderColor: navyBlue,
	},
	cartCountBorderWhite: {
		borderColor: white,
	},
	cartCountText: {
		fontSize: FONT_SIZES.B2,
		fontWeight: "bold",
		color: white,
	},
});
