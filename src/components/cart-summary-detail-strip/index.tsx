import React from "react";
import { commonStyles } from "../../common-styles";
import { getFormattedCurrency } from "../../utils";
import { Text, View } from "react-native";
import { cartSummaryDetailStripStyles } from "./styles";

interface Props {
	detailName: string;
	detailValue: number;
}

const CartSummaryDetailStrip = ({ detailName, detailValue }: Props) => {
	return (
		<View
			style={[
				commonStyles.spreadInARow,
				cartSummaryDetailStripStyles.container,
			]}
		>
			<Text
				style={[commonStyles.addFont, cartSummaryDetailStripStyles.colorGrey]}
			>
				{detailName}
			</Text>
			<Text
				style={[commonStyles.addFont, cartSummaryDetailStripStyles.colorBlack]}
			>
				{getFormattedCurrency(detailValue)}
			</Text>
		</View>
	);
};

export default CartSummaryDetailStrip;
