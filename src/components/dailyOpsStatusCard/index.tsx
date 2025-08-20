import { dailyOpPoster } from "@/src/assets/images";
import AppText from "@/src/components/appText";
import GraphicBtnWrapper from "@/src/components/graphicCardWrapper";
import { RF, WP } from "@/src/theme/responsive";
import React from "react";
import { StyleSheet } from "react-native";

type Props = {
  t: TrxFunc;
  onPressCard?: () => void;
};

const DailyOpsStatusCard = ({ t, onPressCard }: Props) => {
  return (
    <GraphicBtnWrapper
      imageSrc={dailyOpPoster}
      imageStyle={styles.container}
      onPress={onPressCard}
    >
      <AppText color={"WHITE"} size={"LG"} font={"BOLD"}>
        {t("dailyOps")}
      </AppText>
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

export default DailyOpsStatusCard;
