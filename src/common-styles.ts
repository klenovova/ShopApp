import { StyleSheet } from "react-native";
import { verticalScale } from "./scale";
import { white } from "./colors";

export const commonStyles = StyleSheet.create({
	mainScreenContainer: {
		backgroundColor: white,
	},
	spreadInARow: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	separatorMargin: {
		marginVertical: verticalScale(10),
	},
	addFont: {
		fontFamily: "Manrope-Regular",
	},
});
