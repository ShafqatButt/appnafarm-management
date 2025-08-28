import { area, crop, locPin, ring, tickCircle } from "@/src/assets/icons";
import { sugarcane } from "@/src/assets/images";
import AppText from "@/src/components/appText";
import GraphicBtnWrapper from "@/src/components/graphicCardWrapper";
import { GST } from "@/src/theme/globalStyles";
import { RF } from "@/src/theme/responsive";
import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import AppIcon from "@/src/components/appIcon";
import Pressable from "@/src/components/pressable";
import FarmCardValue from "../farmCardValue";
import { FARM_POSTER } from "@/src/app/addFarm/components/farmTypeCard";

type Props = {
  title?: string;
  address?: string;
  cropType?: CropType;
  size: string;
  containerStyle?: ViewStyle | ViewStyle[];
  onPress: () => void;
  isSelected?: boolean;
  cropTitle?: string;
  dailyOperations?: boolean;
  onPressCircle?: () => void;
};

const FarmCard = ({
  title,
  address,
  cropType,
  size,
  containerStyle,
  onPress,
  isSelected,
  cropTitle,
  dailyOperations = false,
  onPressCircle,
}: Props) => (
  <GraphicBtnWrapper
    imageSrc={FARM_POSTER[cropType as CropType] ?? sugarcane}
    imageStyle={styles.container}
    containerStyle={containerStyle as ViewStyle}
    gradientColorB={"OVERLAY_A"}
    onPress={onPress}
  >
    <View style={GST.FLEX_ROW_SPACED}>
      <View>
        <AppText color={"WHITE"} size={"LG"} font={"BOLD"}>
          {title}
        </AppText>
        <FarmCardValue icon={locPin} label={address as string} iconSize={12} />
      </View>
      {dailyOperations && (
        <AppIcon
          path={isSelected ? tickCircle : ring}
          size={22}
          onPress={onPressCircle}
        />
      )}
    </View>
    <View style={GST.FLEX_END}>
      <View style={GST.FLEX_ROW}>
        <FarmCardValue
          icon={crop}
          label={cropTitle as string}
          containerStyle={GST.MR2}
        />
        <FarmCardValue icon={area} label={size} />
      </View>
    </View>
  </GraphicBtnWrapper>
);

const styles = StyleSheet.create({
  container: {
    height: RF(130),
    width: RF(230),
  },
});

export default FarmCard;
