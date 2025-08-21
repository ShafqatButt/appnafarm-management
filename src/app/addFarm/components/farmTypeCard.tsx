import { ring, tickCircle } from "@/src/assets/icons";
import { cotton, potato, rice, sugarcane, wheat } from "@/src/assets/images";
import AppIcon from "@/src/components/appIcon";
import AppText from "@/src/components/appText";
import GraphicBtnWrapper from "@/src/components/graphicCardWrapper";
import { GST } from "@/src/theme/globalStyles";
import { RF, WP } from "@/src/theme/responsive";
import React from "react";
import { ImageSourcePropType, StyleSheet, View, ViewStyle } from "react-native";

type Props = {
  title: string;
  cropType: CropType;
  containerStyle?: ViewStyle;
  onPress: () => void;
  isSelected: boolean;
};

export const FARM_POSTER: { [key in CropType]: ImageSourcePropType } = {
  rice: rice,
  sugarcane: sugarcane,
  wheat: wheat,
  corn: wheat,
  cotton: cotton,
  potato: potato,
  maize: wheat,
  tomato: potato,
  cucumber: cotton,
};

const FarmTypeCard = ({
  title,
  cropType,
  containerStyle,
  onPress,
  isSelected,
}: Props) => (
  <GraphicBtnWrapper
    imageSrc={FARM_POSTER[cropType] ?? sugarcane}
    imageStyle={styles.container}
    containerStyle={containerStyle}
    gradientColorB={"OVERLAY_A"}
    onPress={onPress}
  >
    <View style={styles.titleContainer}>
      <AppText
        color={"WHITE"}
        size={"LG"}
        font={"BOLD"}
        style={{ textTransform: "capitalize" }}
      >
        {title}
      </AppText>
    </View>
    <AppIcon
      path={isSelected ? tickCircle : ring}
      size={22}
      containerStyle={styles.checkContainer}
    />
  </GraphicBtnWrapper>
);

const styles = StyleSheet.create({
  container: {
    height: RF(100),
    width: WP(100) / 2 - RF(16),
    ...GST.MB2,
  },
  checkContainer: {
    position: "absolute",
    right: 0,
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default FarmTypeCard;
