import AppIcon from "@/src/components/appIcon";
import AppText from "@/src/components/appText";
import Pressable from "@/src/components/pressable";
import { FontSizeType, FontType } from "@/src/types";
import { COLORS, ColorType } from "@/src/theme/colors";
import { GST } from "@/src/theme/globalStyles";
import { RF } from "@/src/theme/responsive";
import React from "react";
import { DimensionValue, StyleSheet, ViewStyle } from "react-native";
import { Source } from "react-native-fast-image";

const { GRAY_150, GREEN_500, WHITE } = COLORS;

type Props = {
  title: string;
  onPress: () => void;
  containerStyle?: ViewStyle | ViewStyle[];
  disabled?: boolean;
  icon?: Source;
  iconTintColor?: ColorType;
  loading?: boolean;
  width?: DimensionValue;
  iconPosition?: "left" | "right";
  titleColor?: ColorType;
  font?: FontType;
  titleSize?: FontSizeType;
  bgColor?: ColorType;
};

const PrimaryBtn = ({
  title,
  onPress,
  icon,
  containerStyle,
  disabled,
  iconTintColor,
  loading,
  iconPosition = "left",
  font = "SEMI_BOLD",
  titleSize = "BASE",
  bgColor = "GREEN_500",
  titleColor = "WHITE",
}: Props) => {
  return (
    <Pressable
      disabled={disabled || loading}
      style={[
        { backgroundColor: COLORS[bgColor] },
        styles.buttonStyle,
        disabled ? styles.disabledContainer : {},
        containerStyle as ViewStyle,
      ]}
      onPress={onPress}
    >
      {icon && iconPosition == "left" && (
        <AppIcon
          path={icon}
          size={30}
          tintColor={iconTintColor}
          containerStyle={GST.MR2}
        />
      )}
      <AppText
        center
        font={font}
        size={titleSize}
        color={disabled ? "BLACK_600" : titleColor}
      >
        {title}
      </AppText>
      {icon && iconPosition == "right" && (
        <AppIcon
          path={icon}
          size={24}
          tintColor={iconTintColor}
          containerStyle={GST.ML2}
        />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    height: RF(56),
    ...GST.PX4,
    ...GST.FLEX_ROW,
    borderRadius: RF(14),
    justifyContent: "center",
    borderColor: GREEN_500,
    borderWidth: 1,
    alignItems: "center",
  },
  disabledContainer: {
    backgroundColor: GRAY_150,
    borderColor: GRAY_150,
  },
});

export default PrimaryBtn;
