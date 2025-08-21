import { Pressable, StyleSheet } from "react-native";
import React from "react";
import { GST } from "@/src/theme/globalStyles";
import { RF } from "@/src/theme/responsive";
import { COLORS } from "@/src/theme/colors";
import AppText from "@/src/components/appText";

interface Props {
  title: string;
}

const SelectBtn = ({ title }: Props) => {
  return (
    <Pressable style={styles.buttonContainer}>
      <AppText size={"SM"} font={"SEMI_BOLD"} color={"GREEN_850"}>
        {title}
      </AppText>
    </Pressable>
  );
};

export default SelectBtn;

const styles = StyleSheet.create({
  buttonContainer: {
    paddingRight: RF(42),
    paddingLeft: RF(16),
    borderRadius: RF(12),
    ...GST.PY4,
    ...GST.MT6,
    backgroundColor: COLORS.WHITE,
    ...GST.SHADOW,
    alignItems: "center",
  },
});
