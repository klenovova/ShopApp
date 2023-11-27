import { StyleSheet } from "react-native";
import { black, grey } from "../../colors";
import { horizontalScale } from "../../scale";

export const cartSummaryDetailStripStyles = StyleSheet.create({
	container: {
		paddingHorizontal: horizontalScale(15),
	},
	colorGrey: {
		color: grey,
	},
	colorBlack: {
		color: black,
		fontWeight: "500",
	},
});
