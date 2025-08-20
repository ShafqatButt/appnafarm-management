import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { lines, logo } from "@/src/assets/images";
import { COLORS } from "@/src/theme/colors";
import { RF } from "@/src/theme/responsive";
import ProgressBar from "@/src/components/progressBar";
import AppImage from "@/src/components/appImage";
import AppText from "@/src/components/appText";
import { useTranslation } from "react-i18next";

const { WHITE, GREEN_500 } = COLORS;

interface Props {
  progress: number;
}

const InvestorHeader = ({ progress }: Props) => {
  const { t } = useTranslation("translation", {
    keyPrefix: "InvestorSetp1Screen",
  });
  return (
    <View style={styles.containerStyle}>
      <StatusBar barStyle={"light-content"} />
      <ImageBackground
        source={lines}
        style={styles.backgroundImage}
        imageStyle={styles.customImageStyle}
      >
        <ProgressBar
          color={"WHITE"}
          progress={progress}
          backgroundColor={"GREEN_250"}
          customStyle={styles.progressBarCustomStyle}
        />
        <View style={styles.titleContainer}>
          <AppImage
            path={logo}
            size={60}
            tintColor={"GREEN_500"}
            containerStyle={styles.logo}
          />
          <AppText
            font={"SEMI_BOLD"}
            size={"2XL"}
            color={"WHITE"}
            style={styles.title}
          >
            {t("headerTitle")}
          </AppText>
        </View>
      </ImageBackground>
    </View>
  );
};

export default InvestorHeader;

const styles = StyleSheet.create({
  backgroundImage: {
    backgroundColor: GREEN_500,
    flex: 1,
  },
  customImageStyle: {
    tintColor: WHITE,
    resizeMode: "cover",
  },
  progressBarCustomStyle: {
    marginTop: RF(65),
  },
  title: {
    marginLeft: RF(10),
  },
  titleContainer: {
    marginHorizontal: RF(14),
    marginTop: RF(25),
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    backgroundColor: COLORS.WHITE,
    borderRadius: RF(35),
    alignItems: "center",
    width: RF(70),
    height: RF(70),
  },
  containerStyle: {
    height: "25%",
  },
});
