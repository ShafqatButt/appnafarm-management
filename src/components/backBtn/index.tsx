import { arrowBack } from "@/src/assets/icons";
import AppIcon from "@/src/components/appIcon";
import { GST } from "@/src/theme/globalStyles";
import { router } from "expo-router";
import React from "react";

const BackBtn = () => (
  <AppIcon
    path={arrowBack}
    size={26}
    onPress={() => router.back()}
    containerStyle={GST.MY3}
  />
);

export default BackBtn;
