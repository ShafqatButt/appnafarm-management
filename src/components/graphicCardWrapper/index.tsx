import Pressable from "@/src/components/pressable";
import { COLORS, ColorType } from "@/src/theme/colors";
import { GST } from "@/src/theme/globalStyles";
import { RF } from "@/src/theme/responsive";
import React, { ReactNode } from "react";
import {
  ImageBackground,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

type Props = {
  children: ReactNode;
  imageSrc: ImageSourcePropType;
  imageStyle?: StyleProp<ImageStyle>;
  gradientStyle?: StyleProp<ViewStyle>;
  containerStyle?: ViewStyle;
  gradientColorA?: ColorType;
  gradientColorB?: ColorType;
  disabled?: boolean;
  onPress?: () => void;
};

const GraphicCardWrapper = ({
  disabled,
  children,
  imageSrc,
  imageStyle,
  gradientStyle,
  containerStyle,
  gradientColorA = "OVERLAY_A",
  gradientColorB = "OVERLAY_B",
  onPress,
}: Props) => {
  return (
    <Pressable style={containerStyle} disabled={disabled} onPress={onPress}>
      <ImageBackground
        source={imageSrc}
        style={[styles.image, imageStyle]}
        imageStyle={[styles.image, imageStyle]}
      >
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={[styles.gradient, gradientStyle]}
          colors={[COLORS[gradientColorA], COLORS[gradientColorB]]}
        >
          <View style={[GST.FLEX, GST.M3]}>{children}</View>
        </LinearGradient>
      </ImageBackground>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    borderRadius: RF(12),
    width: RF(100),
    height: RF(100),
    resizeMode: "stretch",
  },
  gradient: {
    flex: 1,
    borderRadius: RF(12),
  },
});

export default GraphicCardWrapper;
