import AppIcon from "@/src/components/appIcon";
import { COLORS } from "@/src/theme/colors";
import { RF } from "@/src/theme/responsive";
import React from "react";
import { StyleSheet } from "react-native";
import { Source } from "react-native-fast-image";

type Props = {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  onPress: () => void;
  icon: Source;
};

const FloatingBtn = ({ top, bottom, left, right, onPress, icon }: Props) => (
  <AppIcon
    path={icon}
    size={24}
    containerStyle={[styles.container, { top, bottom, left, right }]}
    onPress={onPress}
  />
);

const styles = StyleSheet.create({
  container: {
    width: RF(38),
    height: RF(38),
    borderRadius: RF(20),
    backgroundColor: COLORS.WHITE,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
});

export default FloatingBtn;
