import { linkArrow } from "@/src/assets/icons";
import { marketPoster } from "@/src/assets/images";
import AppText from "@/src/components/appText";
import FloatingBtn from "@/src/components/floatingBtn";
import GraphicBtnWrapper from "@/src/components/graphicCardWrapper";
import { RF, WP } from "@/src/theme/responsive";
import React from "react";
import { StyleSheet } from "react-native";

type Props = {
  t: TrxFunc;
};

const MarketStatusCard = ({ t }: Props) => {
  return (
    <GraphicBtnWrapper
      imageSrc={marketPoster}
      imageStyle={styles.container}
      disabled
    >
      <AppText color={"WHITE"} size={"LG"} font={"BOLD"}>
        {t("market")}
      </AppText>
      <FloatingBtn icon={linkArrow} onPress={() => null} bottom={0} right={0} />
    </GraphicBtnWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    height: RF(135) - RF(4),
    width: WP(50) - RF(16),
    alignSelf: "flex-end",
  },
});

export default MarketStatusCard;
