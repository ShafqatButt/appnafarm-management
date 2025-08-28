import AppIcon from "@/src/components/appIcon";
import AppText from "@/src/components/appText";
import Pressable from "@/src/components/pressable";
import { COLORS } from "@/src/theme/colors";
import { GST } from "@/src/theme/globalStyles";
import { RF } from "@/src/theme/responsive";
import React from "react";
import { StyleSheet, ViewStyle } from "react-native";

const { GRAY_50, GRAY_150 } = COLORS;

type Props = {
  icon: number;
  title: string;
  containerStyle?: ViewStyle;
};

const ModuleCard = ({ icon, title, containerStyle }: Props) => (
  <Pressable style={[styles.container, containerStyle as ViewStyle]}>
    <AppIcon path={icon} size={90} />
    <AppText size={"BASE"} font={"MEDIUM"}>
      {title}
    </AppText>
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    ...GST.SHADOW,
    borderWidth: 1,
    borderColor: GRAY_150,
    borderRadius: RF(12),
    backgroundColor: GRAY_50,
    ...GST.PX2,
    ...GST.PY4,
    height: RF(160),
    width: RF(145),
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default ModuleCard;
