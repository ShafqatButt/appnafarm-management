import AppText from "@/src/components/appText";
import { GST } from "@/src/theme/globalStyles";
import { FontSizeType } from "@/src/types";
import React from "react";
import { View } from "react-native";

type Props = {
  label: string;
  value: number | undefined;
  labelSize?: FontSizeType;
  valueSize?: FontSizeType;
  key?: number | undefined;
};

const FarmStats = ({
  label,
  value,
  labelSize = "SM",
  valueSize = "LG",
  key,
}: Props) => (
  <View style={GST.ALIGN_CENTER} key={key}>
    <AppText size={valueSize} font={"BOLD"} color={"GREEN_500"}>
      {value}
    </AppText>
    <AppText font={"SEMI_BOLD"} size={labelSize}>
      {label}
    </AppText>
  </View>
);

export default FarmStats;
