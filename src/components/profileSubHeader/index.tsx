import { StyleSheet, Text, View, ViewStyle } from "react-native";
import React from "react";
import { RF } from "@/src/theme/responsive";
import { COLORS } from "@/src/theme/colors";
import { GST } from "@/src/theme/globalStyles";
import AppText from "@/src/components/appText";
import ProgressBar from "@/src/components/progressBar";
import SelectBtn from "./component/selectBtn";

interface Props {
  progress?: number;
  showProgressBar?: boolean;
  title?: string;
  subTitle: string;
  btnTitle: string;
  containerStyle?: ViewStyle | ViewStyle[];
}

const ProfileSubHeader = ({
  progress = 0.25,
  showProgressBar,
  title = "",
  subTitle = "",
  btnTitle = "",
  containerStyle,
}: Props) => {
  return (
    <View style={[styles.mainContainer, containerStyle as ViewStyle]}>
      <AppText font={"BOLD"} size={"LG"} style={GST.MT1}>
        {title}
      </AppText>
      <AppText size={"BASE"} font={"MEDIUM"} style={[GST.PR2, GST.MT1]}>
        {subTitle}
      </AppText>
      {showProgressBar && (
        <>
          <ProgressBar
            progress={progress}
            color={"GREEN_500"}
            backgroundColor={"WHITE"}
            customStyle={styles.barContainer}
          />
          <AppText
            size={"SM"}
            font={"SEMI_BOLD"}
            color={"GREEN_850"}
            style={styles.stepText}
          >
            2/4 Steps Completed
          </AppText>
        </>
      )}

      <SelectBtn title={btnTitle} />
    </View>
  );
};

export default ProfileSubHeader;

const styles = StyleSheet.create({
  mainContainer: {
    ...GST.PY3,
    width: "100%",
    backgroundColor: COLORS.WHITE_100,
    borderRadius: RF(12),
    ...GST.PX3,
  },
  barContainer: {
    width: RF(365),
    ...GST.MT4,
  },
  stepText: {
    alignSelf: "flex-end",
    ...GST.MT1,
  },
});
