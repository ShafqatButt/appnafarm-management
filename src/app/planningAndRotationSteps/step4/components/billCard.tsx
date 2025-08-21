import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { GST } from "@/src/theme/globalStyles";
import { COLORS } from "@/src/theme/colors";
import { RF } from "@/src/theme/responsive";
import { lines } from "@/src/assets/images";
import AppText from "@/src/components/appText";
import { FONTS, FONT_SIZES } from "@/src/theme/fonts";
import { useTranslation } from "react-i18next";

interface Props {
  bill: number;
}

const BillCard = ({ bill }: Props) => {
  const { t } = useTranslation("translation", {
    keyPrefix: "planningStep4Screen",
  });

  return (
    <ImageBackground style={styles.imageContainer} source={lines}>
      <AppText font={"MEDIUM"} size={"LG"} center style={GST.MT3}>
        {t("bill")}
      </AppText>
      <Text style={styles.textStyle}>
        $ {bill.toLocaleString()}
        <Text>USD</Text>
      </Text>
    </ImageBackground>
  );
};

export default BillCard;

const styles = StyleSheet.create({
  imageContainer: {
    ...GST.PY3,
    backgroundColor: COLORS.WHITE_100,
    ...GST.MT5,
    borderRadius: RF(12),
    ...GST.PX3,
    ...GST.MX3,
  },
  textStyle: {
    alignSelf: "center",
    textAlign: "center",
    ...GST.MT5,
    ...GST.MB5,
    fontFamily: FONTS.BOLD,
    fontSize: FONT_SIZES["4XL"],
    color: COLORS.GREEN_500,
  },
});
