import AppText from "@/src/components/appText";
import Pressable from "@/src/components/pressable";
import { GST } from "@/src/theme/globalStyles";
import React from "react";

const MapTypeBtn = ({
  isSelected,
  title,
  onPress,
}: {
  isSelected: boolean;
  title: string;
  onPress: () => void;
}) => (
  <Pressable onPress={onPress} style={GST.P2}>
    <AppText font={isSelected ? "SEMI_BOLD" : "REGULAR"} size={"BASE"}>
      {title}
    </AppText>
  </Pressable>
);

export default MapTypeBtn;
