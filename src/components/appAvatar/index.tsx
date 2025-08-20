import { user } from "@/src/assets/icons";
import Pressable from "@/src/components/pressable";
import { COLORS } from "@/src/theme/colors";
import { RF } from "@/src/theme/responsive";
import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import FastImage, {
  ImageStyle,
  ResizeMode,
  Source,
} from "react-native-fast-image";

const { GRAY_200 } = COLORS;

interface Props {
  path?: Source | any;
  uri?: string | null | any;
  size?: number;
  resizeMode?: ResizeMode;
  containerStyle?: ViewStyle | Array<ViewStyle>;
  onPress?: () => void;
  pressable?: boolean;
  imageStyle?: ImageStyle;
}

const AppAvatar = ({
  path,
  uri,
  size = 30,
  resizeMode = "contain",
  containerStyle,
  onPress,
  pressable,
  imageStyle,
}: Props) => {
  return (
    <Pressable disabled={!pressable} onPress={onPress}>
      <View
        style={[
          styles.container,
          { width: RF(size), height: RF(size), borderRadius: RF(size) / 2 },
          !uri && !path && styles.placeholderContainer,
          containerStyle,
        ]}
      >
        <FastImage
          source={uri ? { uri } : path ? path : user}
          style={[uri || path ? styles.img : styles.placeholder, imageStyle]}
          resizeMode={
            resizeMode ? resizeMode : uri || path ? "cover" : "contain"
          }
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: "100%",
  },
  placeholder: {
    width: "100%",
    height: "80%",
  },
  placeholderContainer: {
    justifyContent: "flex-end",
  },
  container: {
    alignSelf: "center",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: GRAY_200,
  },
});

export default AppAvatar;
