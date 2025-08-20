import AppIcon from "@/src/components/appIcon";
import AppText from "@/src/components/appText";
import { GST } from "@/src/theme/globalStyles";
import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";

type Props = {
  icon: number;
  label: string;
  containerStyle?: StyleProp<ViewStyle>;
  iconSize?: number;
};

const FarmCardValue = ({
  icon,
  label,
  iconSize = 16,
  containerStyle,
}: Props) => (
  <View style={[GST.FLEX_ROW, containerStyle]}>
    <AppIcon path={icon} size={iconSize} containerStyle={GST.MR1} />
    <AppText size={"SM"} font={"MEDIUM"} color={"WHITE"}>
      {label}
    </AppText>
  </View>
);

export default FarmCardValue;
