import { closeIcon } from "@/src/assets/icons";
import AppIcon from "@/src/components/appIcon";
import { COLORS } from "@/src/theme/colors";
import { RF, WP } from "@/src/theme/responsive";
import React from "react";
import {
  ImageBackground,
  ImageStyle,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";

const { WHITE } = COLORS;

type Props = {
  imageUrl: string;
  onRemove: () => void;
  imageStyleContainer?: ViewStyle;
  imageStyle?: StyleProp<ImageStyle>;
};

const PreviewImage = ({
  imageUrl,
  onRemove,
  imageStyleContainer,
  imageStyle,
}: Props) => (
  <View style={styles.previewImageMainContainer}>
    <ImageBackground
      resizeMode={"cover"}
      style={[styles.previewImageContainer, imageStyleContainer]}
      imageStyle={[styles.previewImage, imageStyle]}
      source={{ uri: imageUrl }}
    >
      <AppIcon
        path={closeIcon}
        size={12}
        containerStyle={styles.peviewImageCancelBtn}
        onPress={onRemove}
      />
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  previewImageMainContainer: {
    alignItems: "center",
    padding: RF(5),
  },
  previewImageContainer: {
    width: WP(35),
    height: WP(30),
  },
  previewImage: {
    borderRadius: RF(10),
  },
  peviewImageCancelBtn: {
    position: "absolute",
    top: RF(3),
    right: RF(3),
    backgroundColor: WHITE,
    padding: RF(6),
    borderRadius: RF(30),
  },
});

export default PreviewImage;
