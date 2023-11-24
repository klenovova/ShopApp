import { StyleSheet } from "react-native";
import { darkWhite, lightGrey, navyBlue, royalBlue, white } from "../../colors";
import { deviceWidth, horizontalScale, verticalScale } from "../../scale";
import { FONT_SIZES } from "../../constants";

export const homepageStyles = StyleSheet.create({
    header: {
        backgroundColor: navyBlue, 
        minHeight: verticalScale(192),
        paddingHorizontal: horizontalScale(20),
        paddingVertical: verticalScale(15),
        justifyContent: "space-between"
    },
    hey: {
        fontSize: FONT_SIZES.H3,
        color: darkWhite
    },
    textMuted: {
        opacity: 0.5,
        textTransform: "uppercase",
        fontWeight: "bold",
        letterSpacing: horizontalScale(0.5),
    },
    iconMargin: {
        marginLeft: horizontalScale(5)
    },
    textWhite: {
        color: white
    },
    searchBar: {
        backgroundColor: royalBlue,
        height: verticalScale(56),
        borderRadius: verticalScale(28),
        paddingHorizontal: horizontalScale(20),
        justifyContent: 'center',
        alignItems: "flex-start"
    },
    productsContainer: {
        width: deviceWidth,
        flexDirection: "row",
        flexWrap: "wrap",
        paddingHorizontal: horizontalScale(20),
        justifyContent: "space-between"
    }
});