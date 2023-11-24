import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Feather from "react-native-vector-icons/Feather";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import FontAwesomeIcon5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Octicons from "react-native-vector-icons/Octicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import ZocialIcons from "react-native-vector-icons/Zocial";
import FontistoIcons from "react-native-vector-icons/Fontisto";
import FoundationIcons from "react-native-vector-icons/Foundation";
import FastImage, { Source } from "react-native-fast-image";
import { iconVariants } from "../../constants";

interface Props {
	icon?: {
		variant: string;
		name: string;
	};
	size?: number;
	color?: string;
	style?: Record<string, unknown> | Record<string, unknown>[];
	image?: number | Source | undefined;
	height?: number;
	width?: number;
}

const Icon = (props: Props) => {
	const { icon, size, style, image, height, width } = props;

	if (image) {
		return (
			<FastImage
				source={image}
				style={[{ width: width || size, height: height || size }, { ...style }]}
				resizeMode="contain"
			/>
		);
	}

	if (!icon) return null;

	const { variant, name } = icon;
	const iconProps = { ...props, name };
	switch (variant) {
		case iconVariants.antDesign: {
			return <AntDesign {...iconProps} />;
		}
		case iconVariants.entypo: {
			return <Entypo {...iconProps} />;
		}
		case iconVariants.evil: {
			return <EvilIcons {...iconProps} />;
		}
		case iconVariants.feather: {
			return <Feather {...iconProps} />;
		}
		case iconVariants.fontawesome: {
			return <FontAwesomeIcon {...iconProps} />;
		}
		case iconVariants.fontawesome5: {
			return <FontAwesomeIcon5 {...iconProps} />;
		}
		case iconVariants.ionIcons: {
			return <Ionicons {...iconProps} />;
		}
		case iconVariants.material: {
			return <MaterialIcon {...iconProps} />;
		}
		case iconVariants.materialCommunity: {
			return <MaterialCommunityIcons {...iconProps} />;
		}
		case iconVariants.octIcons: {
			return <Octicons {...iconProps} />;
		}
		case iconVariants.simpleLineIcons: {
			return <SimpleLineIcons {...iconProps} />;
		}
		case iconVariants.zocialIcons: {
			return <ZocialIcons {...iconProps} />;
		}
		case iconVariants.fontisto: {
			return <FontistoIcons {...iconProps} />;
		}
		case iconVariants.foundation: {
			return <FoundationIcons {...iconProps} />;
		}
		default: {
			return <AntDesign {...iconProps} />;
		}
	}
};

export default Icon;
