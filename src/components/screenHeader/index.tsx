import { arrowBack } from "@/src/assets/icons";
import AppIcon from "@/src/components/appIcon";
import AppText from "@/src/components/appText";
import { COLORS } from "@/src/theme/colors";
import { GST } from "@/src/theme/globalStyles";
import { RF } from "@/src/theme/responsive";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

const { GREEN_250 } = COLORS;

const ScreenHeader = ({ title }: { title: string }) => (
  <View style={styles.headerContainer}>
    <AppIcon
      path={arrowBack}
      size={26}
      onPress={() => router.back()}
      containerStyle={GST.FLEX}
      tintColor={"WHITE"}
    />
    <View style={styles.titleContainer}>
      <AppText size={"XL"} color={"WHITE"} font={"BOLD"}>
        {title}
      </AppText>
    </View>
    <View style={GST.FLEX} />
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    ...GST.FLEX_ROW_SPACED,
    ...GST.PX3,
    ...GST.PT2,
    ...GST.PB4,
    backgroundColor: GREEN_250,
  },
  titleContainer: {
    flex: 8,
    alignItems: "center",
  },
});

export default ScreenHeader;
