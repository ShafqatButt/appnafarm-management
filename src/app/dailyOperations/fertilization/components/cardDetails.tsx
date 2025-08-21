import { StyleSheet, View } from "react-native";
import React from "react";
import GraphicBtnWrapper from "@/src/components/graphicCardWrapper";
import AppText from "@/src/components/appText";
import { area, crop, locPin } from "@/src/assets/icons";
import { GST } from "@/src/theme/globalStyles";
import { RF } from "@/src/theme/responsive";
import { FARM_POSTER } from "@/src/app/addFarm/components/farmTypeCard";
import FarmCardValue from "@/src/components/farmCardValue";

type Props = {
  title: string;
  farm: {
    address: string;
    cropType: string;
    size: string;
    title: string;
  };
};

const CardDetails = ({ title, farm }: Props) => {
  return (
    <GraphicBtnWrapper
      imageSrc={FARM_POSTER[farm?.cropType as CropType]}
      gradientColorB={"OVERLAY_A"}
      imageStyle={styles.imageContainer}
      containerStyle={styles.viewContainer}
    >
      <AppText color={"WHITE"} size={"LG"} font={"BOLD"}>
        {title}
      </AppText>
      <FarmCardValue
        icon={locPin}
        label={farm?.address as string}
        iconSize={12}
      />
      <View style={GST.FLEX_END}>
        <View style={GST.FLEX_ROW}>
          <FarmCardValue
            icon={crop}
            label={farm?.cropType}
            containerStyle={GST.MR2}
          />
          <FarmCardValue icon={area} label={farm?.size} />
        </View>
      </View>
    </GraphicBtnWrapper>
  );
};

export default CardDetails;

const styles = StyleSheet.create({
  viewContainer: {
    ...GST.MX3,
    ...GST.MT3,
  },
  imageContainer: {
    height: RF(130),
    width: "100%",
  },
});
