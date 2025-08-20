import { Pressable, StyleSheet, Text, View, ViewStyle } from "react-native";
import React from "react";
import AppIcon from "@/src/components/appIcon";
import { plus } from "@/src/assets/icons";
import { GST } from "@/src/theme/globalStyles";
import AppText from "@/src/components/appText";
import { RF } from "@/src/theme/responsive";
import { COLORS } from "@/src/theme/colors";

interface Props {
  title: string;
  containerStyle?: ViewStyle;
  onPress: () => void;
}

const PlusBtn = ({ title, containerStyle, onPress }: Props) => {
  return (
    <Pressable
      style={[styles.actionBtnContainer, containerStyle]}
      onPress={onPress}
    >
      <AppIcon
        path={plus}
        size={24}
        containerStyle={GST.MR2}
        onPress={() => null}
      />
      <AppText size={"SM"} color={"GREEN_500"} font={"SEMI_BOLD"}>
        {title}
      </AppText>
    </Pressable>
  );
};

export default PlusBtn;

const styles = StyleSheet.create({
  actionBtnContainer: {
    justifyContent: "center",
    borderRadius: RF(12),
    backgroundColor: COLORS.WHITE,
    height: RF(50),
    ...GST.SHADOW,
    ...GST.FLEX_ROW,
    ...GST.MX3,
  },
});
