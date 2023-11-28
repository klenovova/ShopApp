import { StyleSheet } from "react-native";
import { black, lightGrey } from "../../colors";
import { FONT_SIZES } from "../../constants";
import { horizontalScale, verticalScale } from "../../scale";

export const productInCartStyles = StyleSheet.create({
	container: {
		marginHorizontal: horizontalScale(20),
		alignItems: "center",
		borderBottomWidth: verticalScale(0.25),
		borderBottomColor: lightGrey,
		paddingVertical: verticalScale(10),
	},
	rowCenter: {
		flexDirection: "row",
		alignItems: "center",
	},
	marginLeft: {
		marginLeft: horizontalScale(25),
	},
	productTitle: {
		color: black,
		fontWeight: "bold",
		fontSize: FONT_SIZES.B2,
		maxWidth: horizontalScale(150),
	},
	productPrice: {
		color: black,
		fontSize: FONT_SIZES.B2,
	},
	productFrequency: {
		color: black,
		fontWeight: "bold",
		fontSize: FONT_SIZES.B2,
		marginHorizontal: horizontalScale(15),
	},
	productThumbnail: {
		height: verticalScale(50),
		width: verticalScale(50),
		borderRadius: verticalScale(4),
	},
});
