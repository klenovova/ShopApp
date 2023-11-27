import { StyleSheet } from "react-native";
import { black, darkWhite, navyBlue, white } from "../../colors";
import { FONT_SIZES } from "../../constants";
import { horizontalScale, verticalScale } from "../../scale";

export const cartDetailStyles = StyleSheet.create({
	header: {
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: horizontalScale(20),
		paddingVertical: verticalScale(20),
	},
	headerText: {
		color: black,
		fontSize: FONT_SIZES.B1,
		marginLeft: horizontalScale(20),
	},
	editButton: {
		flexDirection: "row",
		justifyContent: "flex-end",
		paddingHorizontal: horizontalScale(20),
	},
	editText: {
		color: navyBlue,
		paddingVertical: verticalScale(10),
	},
	cartSummary: {
		paddingHorizontal: horizontalScale(20),
		paddingVertical: verticalScale(15),
		backgroundColor: darkWhite,
		borderRadius: horizontalScale(12),
		marginHorizontal: horizontalScale(10),
	},
	cartSummaryCta: {
		backgroundColor: navyBlue,
		height: verticalScale(50),
		justifyContent: "center",
		alignItems: "center",
		borderRadius: horizontalScale(20),
		marginTop: verticalScale(20),
	},
	cartSummaryCtaText: {
		color: white,
		fontSize: FONT_SIZES.B2,
	},
});
