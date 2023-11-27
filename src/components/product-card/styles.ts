import { StyleSheet } from "react-native";
import { black, darkGrey, darkWhite } from "../../colors";
import { horizontalScale, verticalScale } from "../../scale";
import { FONT_SIZES } from "../../constants";

export const productCardStyles = StyleSheet.create({
	productCard: {
		width: horizontalScale(155),
		backgroundColor: darkWhite,
		borderRadius: horizontalScale(12),
		padding: horizontalScale(15),
		marginBottom: verticalScale(10),
		marginRight: horizontalScale(10),
	},
	productImage: {
		height: verticalScale(120),
		width: horizontalScale(120),
		borderRadius: horizontalScale(12),
		resizeMode: "cover",
		marginBottom: verticalScale(5),
	},
	textBlack: {
		color: black,
		fontSize: FONT_SIZES.H4,
	},
	textMuted: {
		color: darkGrey,
		fontSize: FONT_SIZES.L1,
	},
	truncate: {
		maxWidth: horizontalScale(100),
	},
	wishlistIcon: {
		position: "absolute",
		padding: horizontalScale(25),
	},
});
