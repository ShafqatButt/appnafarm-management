import AppIcon from "@/src/components/appIcon";
import AppText from "@/src/components/appText";
import Pressable from "@/src/components/pressable";
import { COLORS } from "@/src/theme/colors";
import { GST } from "@/src/theme/globalStyles";
import { RF, WP } from "@/src/theme/responsive";
import React from "react";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Source } from "react-native-fast-image";

type Props = {
  icon: Source;
  title: string;
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
};

const ShortcutCard = ({ icon, title, containerStyle, titleStyle }: Props) => (
  <Pressable style={[styles.container, containerStyle as ViewStyle]}>
    <AppIcon path={icon} size={56} />
    <AppText center size={"BASE"} font={"SEMI_BOLD"} style={titleStyle}>
      {title}
    </AppText>
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    height: RF(90),
    width: WP(30),
    justifyContent: "center",
    alignItems: "center",
    ...GST.MB3,
  },
});

export default ShortcutCard;
