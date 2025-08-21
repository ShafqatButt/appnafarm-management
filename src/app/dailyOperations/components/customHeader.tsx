import { StatusBar, StyleSheet, View, ViewStyle } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { COLORS } from "@/src/theme/colors";
import { GST } from "@/src/theme/globalStyles";
import AppImage from "@/src/components/appImage";
import { headerLogo } from "@/src/assets/images";
import AppText from "@/src/components/appText";
import { bell } from "@/src/assets/icons";
import { RF } from "@/src/theme/responsive";

interface Props {
  title: string;
  mainContainerStyle?: ViewStyle;
}

const CustomHeader = ({ title, mainContainerStyle }: Props) => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={[styles.mainContainer, mainContainerStyle]}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={COLORS.GREEN_250}
      />
      <View style={[styles.subHeaderContainer, { marginTop: top }]}>
        <View style={GST.FLEX_ROW}>
          <AppImage
            path={headerLogo}
            size={60}
            customStyle={styles.logoContainer}
          />
          <AppText
            font={"BOLD"}
            size={"1XL"}
            color={"WHITE"}
            style={styles.titleStyle}
          >
            {title}
          </AppText>
        </View>
        <AppImage path={bell} size={30} tintColor={"WHITE"} />
      </View>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.GREEN_250,
    // height: "16%",
    borderBottomLeftRadius: RF(18),
    borderBottomRightRadius: RF(18),
    paddingBottom: RF(10),
  },
  logoContainer: {
    backgroundColor: COLORS.WHITE,
    borderRadius: RF(35),
    alignItems: "center",
    alignSelf: "center",
  },
  subHeaderContainer: {
    marginHorizontal: RF(14),
    // marginTop: RF(40),
    ...GST.FLEX_ROW_SPACED,
  },
  titleStyle: {
    left: 15,
  },
});
