import { checkCircle, crossCircle } from "@/src/assets/icons";
import AppIcon from "@/src/components/appIcon";
import { COLORS } from "@/src/theme/colors";
import { FONTS } from "@/src/theme/fonts";
import { RF } from "@/src/theme/responsive";
import React from "react";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";

const { GREEN_500, RED_600, GREEN_200, RED_100, BLACK_800 } = COLORS;

const { SEMI_BOLD, REGULAR } = FONTS;

const toastConfig = {
  success: (props: any) => (
    <BaseToast
      {...props}
      style={styles.successContainer}
      contentContainerStyle={styles.contentContainer}
      text1NumberOfLines={10}
      text2NumberOfLines={10}
      text1Style={styles.text1Style}
      text2Style={styles.text2Style}
      renderLeadingIcon={() => (
        <AppIcon
          path={checkCircle}
          size={16}
          containerStyle={styles.iconContainer}
        />
      )}
    />
  ),
  error: (props: any) => (
    <ErrorToast
      {...props}
      style={styles.errorContainer}
      contentContainerStyle={styles.contentContainer}
      text1Style={styles.text1Style}
      text2Style={styles.text2Style}
      text1NumberOfLines={10}
      text2NumberOfLines={10}
      renderLeadingIcon={() => (
        <AppIcon
          path={crossCircle}
          size={16}
          containerStyle={styles.iconContainer}
          tintColor={"RED_600"}
        />
      )}
    />
  ),
};

const ToastMessage = () => {
  const { top } = useSafeAreaInsets();
  return (
    <Toast config={toastConfig} topOffset={top + RF(20)} position={"bottom"} />
  );
};

const styles = StyleSheet.create({
  successContainer: {
    borderLeftColor: GREEN_500,
    backgroundColor: GREEN_200,
    height: undefined,
    paddingVertical: RF(8),
  },
  errorContainer: {
    borderLeftColor: RED_600,
    backgroundColor: RED_100,
    height: undefined,
    paddingVertical: RF(8),
  },
  contentContainer: {
    paddingRight: RF(16),
    paddingLeft: RF(12),
  },
  text1Style: {
    fontSize: RF(14),
    fontFamily: SEMI_BOLD,
  },
  text2Style: {
    fontSize: RF(14),
    fontFamily: REGULAR,
    color: BLACK_800,
  },
  iconContainer: {
    marginLeft: RF(12),
    marginTop: RF(2),
  },
});

export default ToastMessage;
