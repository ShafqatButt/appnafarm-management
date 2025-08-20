import AppText from "@/src/components/appText";
import { GST } from "@/src/theme/globalStyles";
import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";

type Props = {
  title: string;
  subTitle: string;
  containerStyle?: StyleProp<ViewStyle>;
};

const AuthHeader = ({ title, subTitle, containerStyle }: Props) => {
  return (
    <View style={containerStyle}>
      <AppText
        font={"SEMI_BOLD"}
        size={"2XL"}
        color={"GREEN_500"}
        style={GST.MB2}
      >
        {title}
      </AppText>
      <AppText size={"BASE"}>{subTitle}</AppText>
    </View>
  );
};

export default AuthHeader;
