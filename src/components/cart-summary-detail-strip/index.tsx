import React from "react";
import { commonStyles } from "../../common-styles";
import { horizontalScale } from "../../scale";
import { getFormattedCurrency } from "../../utils";
import { black, grey } from "../../colors";
import { Text, View } from "react-native";

interface Props {
	detailName: string;
	detailValue: number;
}

const CartSummaryDetailStrip = ({ detailName, detailValue }: Props) => {
	return (
		<View
			style={[
				commonStyles.spreadInARow,
				{ paddingHorizontal: horizontalScale(15) },
			]}
		>
			<Text style={[commonStyles.addFont, { color: grey }]}>{detailName}</Text>
			<Text style={[commonStyles.addFont, { color: black, fontWeight: "500" }]}>
				{getFormattedCurrency(detailValue)}
			</Text>
		</View>
	);
};

export default CartSummaryDetailStrip;
