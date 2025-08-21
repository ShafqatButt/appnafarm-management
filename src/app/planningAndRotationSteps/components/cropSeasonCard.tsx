import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Line from "@/src/components/line";
import AppText from "@/src/components/appText";
import { GST } from "@/src/theme/globalStyles";
import AppIcon from "@/src/components/appIcon";
import { paid, unpaid } from "@/src/assets/icons";

interface Props extends CropsSeasonListProps {}

const CropSeasonCard = ({ farmLocation, crops, season, status }: Props) => {
  return (
    <>
      <Line />
      <View style={[GST.FLEX_ROW_SPACED, GST.MT3, GST.MX3, GST.MB3]}>
        <View>
          <AppText size={"LG"} font={"MEDIUM"}>
            {farmLocation}
          </AppText>
          <AppText font={"MEDIUM"} size={"SM"} style={GST.MT1}>
            Crops: {crops}
          </AppText>
          <AppText
            font={"BOLD"}
            size={"SM"}
            color={"GREEN_500"}
            style={GST.MT1}
          >
            season: {season}
          </AppText>
        </View>
        <View style={GST.FLEX_ROW_CENTER}>
          <AppText
            size={"LG"}
            font={"MEDIUM"}
            color={status == "paid" ? "GREEN_900" : "RED_700"}
          >
            {status}
          </AppText>
          <AppIcon
            containerStyle={GST.ML2}
            path={status == "paid" ? paid : unpaid}
            size={22}
          />
        </View>
      </View>
    </>
  );
};

export default CropSeasonCard;

const styles = StyleSheet.create({});
