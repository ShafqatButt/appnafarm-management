import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "@/src/components/appText";
import { GST } from "@/src/theme/globalStyles";
import ProgressBar from "@/src/components/progressBar";

interface Props {
  title: string;
  showProgress: number;
  description?: string;
  isDescription?: boolean;
}

const SubHeader = ({
  title,
  showProgress,
  description,
  isDescription,
}: Props) => {
  return (
    <>
      <AppText size={"2XL"} font={"BOLD"} style={[GST.MT4, GST.MX3]}>
        {title}
      </AppText>
      <ProgressBar
        progress={showProgress}
        customStyle={GST.MT1}
        backgroundColor={"GRAY_850"}
      />
      {isDescription && (
        <AppText size={"BASE"} style={[GST.MT1, GST.MX3]}>
          {description}
        </AppText>
      )}
    </>
  );
};

export default SubHeader;

const styles = StyleSheet.create({});
