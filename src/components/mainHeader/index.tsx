import {
  ImageSourcePropType,
  StatusBar,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import AppImage from "@/src/components/appImage";
import { bell, search } from "@/src/assets/icons";
import { COLORS, ColorType } from "@/src/theme/colors";
import { GST } from "@/src/theme/globalStyles";
import { RF } from "@/src/theme/responsive";
import AppIcon from "@/src/components/appIcon";
import Input from "@/src/components/input";
import { useTranslation } from "react-i18next";
import { Source } from "react-native-fast-image";

const MainHeader = ({
  icon,
  onPress,
  tintColor,
  value,
  onChangeText,
  onRightIconPress,
  containerStyle,
}: {
  icon: ImageSourcePropType | Source | any;
  onPress?: () => void;
  tintColor?: ColorType;
  value?: string;
  onChangeText?: (text: string) => void;
  onRightIconPress?: () => void;
  containerStyle?: ViewStyle;
}) => {
  const { t } = useTranslation("translation", {
    keyPrefix: "planningAndRotationScreen",
  });
  return (
    <View style={[styles.mainContainer, containerStyle]}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={COLORS.GREEN_250}
      />
      <View style={styles.subHeaderContainer}>
        <AppIcon
          path={icon}
          size={32}
          onPress={onPress}
          tintColor={tintColor}
        />
        <Input
          placeholder={t("searchBarPlaceholder")}
          mainContainerStyle={styles.searchBarMainContainer}
          containerStyle={styles.searchBarContainer}
          rightIcon={search}
          value={value}
          onChangeText={onChangeText}
          onRightIconPress={onRightIconPress}
        />
        <AppImage path={bell} size={40} tintColor={"WHITE"} />
      </View>
    </View>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.GREEN_250,
    height: "12%",
    borderBottomLeftRadius: RF(18),
    borderBottomRightRadius: RF(18),
  },
  subHeaderContainer: {
    marginHorizontal: RF(14),
    marginTop: RF(20),
    ...GST.FLEX_ROW_SPACED,
  },
  logoContainer: {
    backgroundColor: COLORS.WHITE,
    borderRadius: RF(35),
    alignItems: "center",
    width: RF(70),
    height: RF(70),
  },
  searchBarMainContainer: {
    flex: 1,
    ...GST.MB0,
    ...GST.MX3,
  },
  searchBarContainer: {
    height: RF(45),
    borderRadius: 30,
  },
});
