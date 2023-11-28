import React from "react";
import { verticalScale } from "../../scale";
import { black, darkWhite } from "../../colors";
import { iconVariants } from "../../constants";
import Icon from "../icon";
import { TouchableOpacity } from "react-native";

interface Props {
	iconName: string;
	onPress: () => void;
	size: number;
	iconVariant?: string;
	iconColor?: string;
}

const Button = ({
	iconName,
	onPress,
	size,
	iconVariant = iconVariants.entypo,
	iconColor = "black",
}: Props) => {
	return (
		<TouchableOpacity
			style={{
				width: verticalScale(size),
				height: verticalScale(size),
				borderRadius: verticalScale(size / 2),
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: darkWhite,
			}}
			onPress={onPress}
		>
			<Icon
				icon={{ name: iconName, variant: iconVariant }}
				size={verticalScale(0.35 * size)}
				color={iconColor}
			/>
		</TouchableOpacity>
	);
};

export default Button;
