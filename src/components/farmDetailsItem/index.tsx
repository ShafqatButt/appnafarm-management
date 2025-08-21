import React from "react";
import AppIcon from "@/src/components/appIcon";
import AppText from "@/src/components/appText";
import { GST } from "@/src/theme/globalStyles";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { Source } from "react-native-fast-image";

const FarmDetailsItem = ({
  icon,
  label,
  value,
  valueContainerStyle,
}: {
  label: string;
  icon: Source;
  value?: string | number;
  valueContainerStyle?: StyleProp<ViewStyle>;
}) => (
  <View style={[GST.FLEX_ROW, GST.FLEX]}>
    <AppIcon
      path={icon}
      size={18}
      tintColor={"GREEN_500"}
      containerStyle={GST.MR1}
    />
    <View style={styles.container}>
      <AppText font={"SEMI_BOLD"} size={"SM"} color={"GREEN_500"}>
        {label}
      </AppText>
      <View style={valueContainerStyle}>
        <AppText font={"MEDIUM"} size={"SM"}>
          {value as string | number}
        </AppText>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
  },
});

export default FarmDetailsItem;
