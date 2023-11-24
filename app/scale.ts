import { Dimensions } from "react-native";

const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window');
const guidelineDimensions = { width: 360, height: 640 };

const horizontalScale = (size: number) => deviceWidth / guidelineDimensions.width * size;
const verticalScale = (size: number) => deviceHeight / guidelineDimensions.height * size;

export { horizontalScale, verticalScale, deviceWidth, deviceHeight };