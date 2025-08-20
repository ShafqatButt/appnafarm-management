import { COLORS, ColorType } from "@/src/theme/colors";
import { GST } from "@/src/theme/globalStyles";
import { RF, WP } from "@/src/theme/responsive";
import React from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { Bar } from "react-native-progress";

const { WHITE } = COLORS;

type Props = {
  progress: number;
  color?: ColorType;
  backgroundColor?: ColorType;
  customStyle?: ViewStyle | ViewStyle[];
};

const ProgressBar = ({
  progress,
  color = "GREEN_500",
  backgroundColor = "GRAY_100",
  customStyle,
}: Props) => (
  <Bar
    progress={progress}
    width={WP(100) - RF(24)}
    height={RF(12)}
    style={[
      styles.barStyle,
      { backgroundColor: COLORS[backgroundColor] },
      customStyle as ViewStyle,
    ]}
    color={COLORS[color]}
    borderColor={WHITE}
    borderWidth={0.5}
  />
);

const styles = StyleSheet.create({
  barStyle: {
    alignSelf: "center",
    borderRadius: 30,
    ...GST.MB1,
  },
});

export default ProgressBar;
