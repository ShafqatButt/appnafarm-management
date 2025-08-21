import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { RF } from "@/src/theme/responsive";
import { COLORS } from "@/src/theme/colors";

const LineSeparator = () => {
  return <View style={styles.separatorContainer} />;
};

export default LineSeparator;

const styles = StyleSheet.create({
  separatorContainer: {
    borderWidth: RF(0.6),
    borderColor: COLORS.GRAY_20,
  },
});
