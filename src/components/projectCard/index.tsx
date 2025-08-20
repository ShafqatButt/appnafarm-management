import { Pressable, StyleSheet, View, ViewStyle } from "react-native";
import React from "react";
import { RF } from "@/src/theme/responsive";
import { COLORS } from "@/src/theme/colors";
import { GST } from "@/src/theme/globalStyles";
import AppImage from "@/src/components/appImage";
import AppText from "@/src/components/appText";
import { locPin, area } from "@/src/assets/icons";
import { useTranslation } from "react-i18next";
import InfoCard from "@screens/projects/components/inforCard";
import ProgressBar from "@/src/components/progressBar";
import { rice } from "@/src/assets/images";

interface Props extends Project {
  containerStyle?: ViewStyle;
}

const ProjectCard = ({
  image,
  title,
  location,
  totalArea,
  amount,
  fundedPercentage,
  returnPercentage,
  grossYieldPercentage,
  netYieldPercentage,
  progress,
  containerStyle,
}: Props) => {
  const { t } = useTranslation("translation", {
    keyPrefix: "projectsScreen",
  });
  return (
    <Pressable style={[styles.mainContainer, containerStyle]}>
      <AppImage
        path={image ?? rice}
        resizeMode={"cover"}
        height={120}
        width={300}
        radius={12}
        containerStyle={styles.imageContainer}
      />
      <AppText size={"BASE"} font={"BOLD"} style={GST.MT2}>
        {title}
      </AppText>
      <View style={[GST.FLEX_ROW, GST.MT2]}>
        <AppImage path={locPin} size={16} tintColor={"BLACK_600"} />
        <AppText size={"SM"} style={GST.ML1}>
          {location}
        </AppText>
        <AppImage
          path={area}
          size={16}
          tintColor={"BLACK_600"}
          containerStyle={GST.ML3}
        />
        <AppText size={"SM"} style={GST.ML1}>
          {totalArea} {t("acres")}
        </AppText>
      </View>
      <View style={[GST.FLEX_ROW_SPACED, GST.MT2]}>
        <AppText font={"SEMI_BOLD"} size={"BASE"}>
          $ {amount.toLocaleString()}
        </AppText>
        <AppText font={"MEDIUM"} size={"SM"}>
          {fundedPercentage}% {t("funded")}
        </AppText>
      </View>
      <ProgressBar
        progress={progress}
        customStyle={styles.progressBarContainer}
        backgroundColor={"WHITE"}
      />
      <InfoCard
        title={t("return")}
        percentage={returnPercentage}
        containerStyle={GST.MT3}
      />
      <InfoCard
        title={t("grossYield")}
        percentage={grossYieldPercentage}
        containerStyle={GST.MT1}
      />
      <InfoCard
        title={t("netYield")}
        percentage={netYieldPercentage}
        containerStyle={[GST.MT1, GST.MB3]}
      />
    </Pressable>
  );
};

export default ProjectCard;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.WHITE_100,
    ...GST.MT3,
    borderRadius: RF(12),
    ...GST.PX3,
    flex: 1,
    ...GST.MX3,
  },
  imageContainer: {
    ...GST.MT3,
    alignItems: "center",
  },
  progressBarContainer: {
    width: "100%",
    ...GST.MT2,
  },
});
