import { StyleSheet } from "react-native";
import {
	black,
	darkWhite,
	mustardYellow,
	navyBlue,
	royalBlue,
	white,
} from "../../colors";
import { deviceWidth, horizontalScale, verticalScale } from "../../scale";
import { FONT_SIZES } from "../../constants";

export const homepageStyles = StyleSheet.create({
	header: {
		backgroundColor: navyBlue,
		minHeight: verticalScale(192),
		paddingHorizontal: horizontalScale(20),
		paddingVertical: verticalScale(15),
		justifyContent: "space-between",
	},
	hey: {
		fontSize: FONT_SIZES.H3,
		color: darkWhite,
		fontFamily: "Manrope-Regular",
	},
	textMuted: {
		opacity: 0.5,
		textTransform: "uppercase",
		fontWeight: "bold",
		letterSpacing: horizontalScale(0.5),
		fontFamily: "Manrope-Regular",
	},
	iconMargin: {
		marginLeft: horizontalScale(5),
	},
	textWhite: {
		color: white,
		fontFamily: "Manrope-Regular",
	},
	searchBar: {
		backgroundColor: royalBlue,
		height: verticalScale(56),
		borderRadius: verticalScale(28),
		paddingHorizontal: horizontalScale(20),
		justifyContent: "center",
		alignItems: "flex-start",
	},
	productsContainer: {
		width: deviceWidth,
		paddingHorizontal: horizontalScale(20),
	},
	discountBanners: {
		width: 0.75 * deviceWidth,
		backgroundColor: mustardYellow,
		paddingVertical: verticalScale(20),
		paddingHorizontal: horizontalScale(25),
		borderRadius: horizontalScale(12),
		marginRight: horizontalScale(20),
		marginTop: verticalScale(20),
	},
	recommendedText: {
		fontSize: FONT_SIZES.H1,
		color: black,
		paddingHorizontal: horizontalScale(20),
		marginVertical: verticalScale(10),
		fontFamily: "Manrope-Regular",
	},
	getText: {
		fontSize: FONT_SIZES.H3,
		fontWeight: "300",
		fontFamily: "Manrope-Regular",
	},
	discountPercentage: {
		fontSize: FONT_SIZES.H2,
		fontWeight: "800",
		fontFamily: "Manrope-Regular",
	},
	numberOfOrders: {
		fontSize: FONT_SIZES.L1,
		fontFamily: "Manrope-Regular",
		fontWeight: "300",
	},
	boldNumberOfOrders: {
		fontSize: FONT_SIZES.L1,
		fontFamily: "Manrope-Regular",
		fontWeight: "bold",
	},
	discountImage: {
		height: verticalScale(70),
		width: verticalScale(70),
	},
	discountContainerMargin: {
		marginHorizontal: horizontalScale(20),
	},
});
