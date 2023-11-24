import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "./scale";
import { white } from "./colors";

export const commonStyles = StyleSheet.create({
    padding: {
        // paddingVertical: verticalScale(10),
        // paddingHorizontal: horizontalScale(20),
    },
    mainScreenContainer: {
        backgroundColor: white,
    },
    spreadInARow: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    separatorMargin: {
        marginVertical: verticalScale(10)
    }
});