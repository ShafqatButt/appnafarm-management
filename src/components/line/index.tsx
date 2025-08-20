import { StyleSheet, Text, View, ViewStyle } from "react-native";
import React from "react";
import { COLORS } from "@/src/theme/colors";
import { GST } from "@/src/theme/globalStyles";
import { RF } from "@/src/theme/responsive";

interface Props {
  containerStyle?: ViewStyle;
}

const Line = ({ containerStyle }: Props) => {
  return <View style={[styles.lineContainer, containerStyle]}></View>;
};

export default Line;

const styles = StyleSheet.create({
  lineContainer: {
    borderWidth: 0.5,
    borderColor: COLORS.GRAY_800,
    ...GST.MX3,
    borderRadius: RF(1),
  },
});
