import { StyleSheet } from "react-native";
import {
	black,
	darkWhite,
	grey,
	lightGrey,
	mustardYellow,
	navyBlue,
	white,
} from "../../colors";
import { FONT_SIZES } from "../../constants";
import { horizontalScale, verticalScale } from "../../scale";

export const productDetailsStyles = StyleSheet.create({
	header: {
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: horizontalScale(20),
		paddingVertical: verticalScale(20),
	},
	title: {
		paddingHorizontal: horizontalScale(20),
	},
	brandName: {
		color: black,
		fontSize: FONT_SIZES.H1,
	},
	productName: {
		color: black,
		fontSize: FONT_SIZES.H1,
		fontWeight: "bold",
	},
	reviews: {
		flexDirection: "row",
		marginVertical: verticalScale(10),
	},
	reviewText: {
		color: lightGrey,
		fontSize: FONT_SIZES.B1,
	},
	priceDetails: {
		flexDirection: "row",
		paddingHorizontal: horizontalScale(20),
		alignItems: "center",
	},
	priceValue: {
		color: navyBlue,
		fontSize: FONT_SIZES.B1,
		fontWeight: "bold",
	},
	normalFont: {
		fontWeight: "normal",
	},
	discountPill: {
		height: verticalScale(20),
		borderRadius: verticalScale(10),
		backgroundColor: navyBlue,
		alignItems: "center",
		justifyContent: "center",
		marginLeft: horizontalScale(10),
		paddingHorizontal: horizontalScale(10),
	},
	discountValue: {
		color: white,
		fontSize: FONT_SIZES.L1,
	},
	ctaContainer: {
		flexDirection: "row",
		paddingHorizontal: horizontalScale(20),
		justifyContent: "space-between",
	},
	btnOutlined: {
		flex: 1,
		borderWidth: 1,
		borderColor: navyBlue,
		height: verticalScale(50),
		justifyContent: "center",
		alignItems: "center",
		borderRadius: horizontalScale(20),
		marginTop: verticalScale(20),
		marginRight: horizontalScale(10),
	},
	btnOutlinedText: {
		color: navyBlue,
		fontSize: FONT_SIZES.B2,
		fontWeight: "bold",
	},
	btnFilled: {
		flex: 1,
		backgroundColor: navyBlue,
		height: verticalScale(50),
		justifyContent: "center",
		alignItems: "center",
		borderRadius: horizontalScale(20),
		marginTop: verticalScale(20),
		marginLeft: horizontalScale(10),
	},
	btnFilledText: {
		color: white,
		fontSize: FONT_SIZES.B2,
		fontWeight: "bold",
	},
	descriptionContainer: {
		paddingHorizontal: horizontalScale(20),
		marginVertical: verticalScale(20),
	},
	detailsText: {
		color: black,
		fontSize: FONT_SIZES.B1,
	},
	description: {
		color: lightGrey,
		fontSize: FONT_SIZES.B1,
	},
	carouselItems: {
		height: verticalScale(160),
		width: horizontalScale(320),
	},
	pageTab: {
		width: horizontalScale(20),
		height: verticalScale(5),
		borderRadius: verticalScale(5),
		backgroundColor: grey,
		marginRight: horizontalScale(2.5),
	},
	selectedPageTab: {
		backgroundColor: mustardYellow,
		width: horizontalScale(22),
	},
	wishlistIcon: {
		position: "absolute",
		top: horizontalScale(25),
		right: horizontalScale(45),
		height: verticalScale(40),
		width: verticalScale(40),
		borderRadius: verticalScale(8),
		backgroundColor: darkWhite,
		alignItems: "center",
		justifyContent: "center",
	},
});
