import Pressable from "@/src/components/pressable";
import { COLORS, ColorType } from "@/src/theme/colors";
import { GST } from "@/src/theme/globalStyles";
import { RF } from "@/src/theme/responsive";
import React from "react";
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  ViewStyle,
} from "react-native";
import { ResizeMode, Source } from "react-native-fast-image";

type Props = {
  path: ImageSourcePropType | Source | any;
  uri: string;
  resizeMode: ResizeMode;
  size: number;
  width: number;
  height: number;
  customStyle: StyleProp<ImageStyle>;
  onPress: () => void;
  tintColor: ColorType;
  containerStyle: ViewStyle | ViewStyle[];
  radius: number;
};

const AppIcon = ({
  path,
  uri,
  resizeMode = "contain",
  size,
  width = 0,
  height = 0,
  customStyle,
  onPress,
  tintColor,
  containerStyle,
  radius,
}: Partial<Props>) => {
  return (
    <>
      <Pressable
        disabled={!onPress}
        onPress={onPress}
        hitSlop={GST.HITSLOP}
        style={containerStyle}
      >
        <Image
          source={uri ? { uri } : path}
          style={[
            {
              width: RF(size || width),
              height: RF(size || height),
              borderRadius: radius ? RF(radius) : 0,
              resizeMode,
              tintColor: tintColor && COLORS[tintColor],
            },
            customStyle,
          ]}
        />
      </Pressable>
    </>
  );
};

export default AppIcon;
