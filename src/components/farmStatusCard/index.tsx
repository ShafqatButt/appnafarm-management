import { area, crop, linkArrow, plot, plus } from "@/src/assets/icons";
import { farmPoster } from "@/src/assets/images";
import AppText from "@/src/components/appText";
import FloatingBtn from "@/src/components/floatingBtn";
import { BlurView } from "@react-native-community/blur";
import { GST } from "@/src/theme/globalStyles";
import { RF, WP } from "@/src/theme/responsive";
import React from "react";
import { StyleSheet, View } from "react-native";
import GraphicBtnWrapper from "@/src/components/graphicCardWrapper";
import StatusValue from "../statusValue";
import { useRouter } from "expo-router";

type Props = {
  plots: number;
  acres: number;
  crops: number;
  t: TrxFunc;
};

const FarmStatusCard = ({ plots, acres, crops, t }: Props) => {
  const router = useRouter();
  return (
    <GraphicBtnWrapper
      imageSrc={farmPoster}
      imageStyle={styles.container}
      disabled
    >
      <AppText color={"WHITE"} size={"LG"} font={"BOLD"}>
        {t("appnafarm")}
      </AppText>
      <View style={styles.blurContainer}>
        <BlurView
          style={[StyleSheet.absoluteFill, {}]}
          blurType={"light"}
          blurAmount={15}
        />
        <StatusValue
          icon={plot}
          value={plots}
          unit={t("plots")}
          containerStyle={GST.MB1}
        />
        <StatusValue
          icon={area}
          value={acres}
          unit={t("acres")}
          containerStyle={GST.MB1}
        />
        <StatusValue icon={crop} value={crops} unit={t("crops")} />
      </View>
      <FloatingBtn
        icon={plus}
        onPress={() => router.push("/addFarm")}
        bottom={0}
        left={0}
      />
      <FloatingBtn
        icon={linkArrow}
        onPress={() => router.push("/appnafarm")}
        bottom={0}
        right={0}
      />
    </GraphicBtnWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    height: RF(270),
    width: WP(50) - RF(16),
  },
  blurContainer: {
    padding: RF(8),
    overflow: "hidden",
    borderRadius: RF(12),
    ...GST.MT2,
  },
});

export default FarmStatusCard;
