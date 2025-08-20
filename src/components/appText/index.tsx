import { COLORS, ColorType } from "@/src/theme/colors";
import { FONTS, FONT_SIZES } from "@/src/theme/fonts";
import { GST } from "@/src/theme/globalStyles";
import { RF } from "@/src/theme/responsive";
import { FontSizeType, FontType } from "@/src/types";
import React from "react";
import { Text, TextProps, View } from "react-native";

interface Props extends TextProps {
  size: FontSizeType;
  color: ColorType;
  font: FontType;
  onPress: () => void;
  contain: boolean;
  center: boolean;
  lineHeight: number;
}

const AppText = (props: Partial<Props>) => {
  const {
    size = "XS",
    color = "BLACK_700",
    font = "REGULAR",
    style,
    numberOfLines = 0,
    onPress,
    contain,
    center,
    lineHeight,
  } = props;

  return (
    <View style={contain && GST.FLEX}>
      <Text
        onPress={onPress}
        numberOfLines={numberOfLines}
        style={[
          style,
          {
            fontFamily: FONTS[font],
            fontSize: RF(FONT_SIZES[size]),
            color: COLORS[color],
            textAlign: center ? "center" : "auto",
            lineHeight: lineHeight && RF(lineHeight),
            letterSpacing: 0.5,
          },
        ]}
      >
        {props.children}
      </Text>
    </View>
  );
};

export default AppText;
