import AppIcon from "@/src/components/appIcon";
import AppText from "@/src/components/appText";
import { GST } from "@/src/theme/globalStyles";
import { RF } from "@/src/theme/responsive";
import React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

type Props = {
  icon: number;
  value: number;
  unit: string;
  containerStyle?: StyleProp<ViewStyle>;
};

const StatusValue = ({ icon, value, unit, containerStyle }: Props) => (
  <View style={[GST.FLEX_ROW, containerStyle]}>
    <AppIcon path={icon} size={18} containerStyle={GST.MR1} />
    <View style={styles.subContainer}>
      <AppText
        size={"BASE"}
        font={"BOLD"}
        color={"WHITE"}
        style={styles.txtSpacing}
      >
        {value}
      </AppText>
      <AppText size={"TINY"} color={"WHITE"}>
        {unit}
      </AppText>
    </View>
  </View>
);

const styles = StyleSheet.create({
  subContainer: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  txtSpacing: {
    marginRight: RF(2),
  },
});

export default StatusValue;
