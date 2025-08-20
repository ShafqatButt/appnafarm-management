import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "@/src/theme/colors";
import { RF } from "@/src/theme/responsive";
import AppImage from "@/src/components/appImage";
import { headerLogo, logo } from "@/src/assets/images";
import AppText from "@/src/components/appText";
import { bell } from "@/src/assets/icons";
import { GST } from "@/src/theme/globalStyles";

interface Props {
  title: string;
}

const InvestorTabHeader = ({ title }: Props) => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={COLORS.GREEN_250}
      />
      <View style={styles.subHeaderContainer}>
        <View style={GST.FLEX_ROW}>
          <AppImage
            path={headerLogo}
            size={60}
            tintColor={"GREEN_500"}
            containerStyle={styles.logoContainer}
          />
          <AppText
            font={"SEMI_BOLD"}
            size={"3XL"}
            color={"WHITE"}
            style={styles.titleStyle}
          >
            {title}
          </AppText>
        </View>
        <AppImage path={bell} size={40} tintColor={"WHITE"} />
      </View>
    </View>
  );
};

export default InvestorTabHeader;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.GREEN_250,
    // height: '18%',
    borderBottomLeftRadius: RF(18),
    borderBottomRightRadius: RF(18),
  },
  logoContainer: {
    backgroundColor: COLORS.WHITE,
    borderRadius: RF(35),
    alignItems: "center",
    width: RF(70),
    height: RF(70),
  },
  subHeaderContainer: {
    marginHorizontal: RF(14),
    marginTop: RF(10),
    ...GST.FLEX_ROW_SPACED,
  },
  titleStyle: {
    left: 15,
  },
});
