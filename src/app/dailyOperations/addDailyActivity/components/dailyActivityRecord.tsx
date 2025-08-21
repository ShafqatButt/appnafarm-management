import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import AppText from "@/src/components/appText";
import LineSeparator from "../../components/lineSeparator";
import { RF } from "@/src/theme/responsive";
import { GST } from "@/src/theme/globalStyles";
import { COLORS } from "@/src/theme/colors";

const DailyActivityRecord = ({
  data,
  date,
  activityType,
  description,
}: {
  data: ActivityRecord[];
  date: string;
  activityType: string;
  description: string;
}) => {
  return (
    <ScrollView
      style={styles.activityMainContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={[GST.FLEX_ROW_SPACED, GST.MX3, { height: RF(44) }]}>
        <AppText size={"XS"} font={"SEMI_BOLD"}>
          {date}
        </AppText>
        <AppText size={"XS"} font={"SEMI_BOLD"}>
          {activityType}
        </AppText>
        <AppText size={"XS"} font={"SEMI_BOLD"}>
          {description}
        </AppText>
      </View>
      <LineSeparator />
      <View>
        {data.map((item, index) => (
          <View
            style={{
              backgroundColor: index % 2 === 0 ? COLORS.GRAY_10 : "",
            }}
          >
            <View style={styles.activityRecordSubContainer}>
              <AppText>{item?.date}</AppText>
              <AppText>{item?.activityType}</AppText>
              <AppText>{item?.description}</AppText>
            </View>
            <LineSeparator />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default DailyActivityRecord;

const styles = StyleSheet.create({
  activityMainContainer: {
    borderWidth: RF(1.5),
    borderColor: COLORS.GRAY_20,
    ...GST.MX3,
    ...GST.MT3,
    flex: 1,
    ...GST.MB4,
  },
  activityRecordSubContainer: {
    ...GST.FLEX_ROW_SPACED,
    height: RF(72),
    ...GST.MX3,
  },
});
