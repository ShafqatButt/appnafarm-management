import {
  ImageSourcePropType,
  StatusBar,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import AppImage from "@/src/components/appImage";
import { bell } from "@/src/assets/icons";
import { COLORS, ColorType } from "@/src/theme/colors";
import { GST } from "@/src/theme/globalStyles";
import { RF } from "@/src/theme/responsive";
import AppIcon from "@/src/components/appIcon";
import { Source } from "react-native-fast-image";
import PlacesInput from "./placesInput";
import {
  GooglePlaceData,
  GooglePlaceDetail,
} from "react-native-google-places-autocomplete";

const AddFarmHeader = ({
  icon,
  onPress,
  tintColor,
  containerStyle,
  onPlaceSelection,
}: {
  icon: ImageSourcePropType | Source | any;
  onPress?: () => void;
  tintColor?: ColorType;
  containerStyle?: ViewStyle;
  onPlaceSelection?: (
    data: GooglePlaceData,
    detail: GooglePlaceDetail | null
  ) => void;
}) => {
  return (
    <View style={[styles.mainContainer, containerStyle]}>
      {/* <StatusBar
        barStyle={'light-content'}
        backgroundColor={COLORS.GREEN_250}
      /> */}
      <View style={styles.subHeaderContainer}>
        <AppIcon
          path={icon}
          size={32}
          onPress={onPress}
          tintColor={tintColor}
        />
        {/* <PlacesInput onPlaceSelection={onPlaceSelection} /> */}
        <AppImage path={bell} size={40} tintColor={"WHITE"} />
      </View>
    </View>
  );
};

export default AddFarmHeader;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.GREEN_250,
    height: "10%",
    borderBottomLeftRadius: RF(18),
    borderBottomRightRadius: RF(18),
    position: "absolute",
    // bottom: RF(100),
    // bottom: 100,
    // height: 200,
    // top: 0,
    // bottom: 100,
    left: 0,
    right: 0,
  },
  subHeaderContainer: {
    marginHorizontal: RF(14),
    marginTop: RF(25),
    ...GST.FLEX_ROW_SPACED,
    // position: 'absolute',
    // left: 0,
    // right: 0,
    // bottom: 100,
    // top: 10,
    // height: 200,
    // bottom: 0,
    // top: 100,
    // height: 100,
    // left: 0,
    // right: 0,
  },
  logoContainer: {
    backgroundColor: COLORS.WHITE,
    borderRadius: RF(35),
    alignItems: "center",
    width: RF(70),
    height: RF(70),
  },
});
