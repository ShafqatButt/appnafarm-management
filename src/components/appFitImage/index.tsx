import Pressable from "@/src/components/pressable";
import React from "react";
import { ImageURISource, ViewStyle } from "react-native";
import FitImage from "react-native-fit-image";

const CustomFitImage = ({
  uri,
  path,
  onPress,
  containerStyle,
}: {
  path?: any;
  uri?: ImageURISource | string | any | undefined;
  onPress?: () => void;
  containerStyle?: ViewStyle;
}) => {
  return (
    <Pressable onPress={onPress} style={containerStyle}>
      <FitImage source={path ? path : { uri }} />
    </Pressable>
  );
};

export default CustomFitImage;
