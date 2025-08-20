import AppIcon from "@/src/components/appIcon";
import AppText from "@/src/components/appText";
import { COLORS } from "@/src/theme/colors";
import { FONTS, FONT_SIZES } from "@/src/theme/fonts";
import { GST } from "@/src/theme/globalStyles";
import { RF } from "@/src/theme/responsive";
import React, { ForwardedRef, forwardRef } from "react";
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";
import { Source } from "react-native-fast-image";

const { BLACK_800, GRAY_300, GRAY_100 } = COLORS;

interface InputProp extends TextInputProps {
  containerStyle: StyleProp<ViewStyle>;
  mainContainerStyle: StyleProp<ViewStyle>;
  error: string;
  label?: string;
  rightIcon: Source;
  onRightIconPress: () => void;
}

const Input = forwardRef(
  (props: Partial<InputProp>, ref: ForwardedRef<TextInput>) => {
    const {
      containerStyle,
      mainContainerStyle,
      multiline,
      error,
      label,
      rightIcon,
      onRightIconPress,
    } = props;

    return (
      <View style={[GST.MB4, mainContainerStyle]}>
        {!!label && (
          <AppText font={"SEMI_BOLD"} size={"SM"} style={GST.MB1}>
            {label}
          </AppText>
        )}
        <View
          style={[
            styles.container,
            containerStyle,
            multiline && styles.flexStart,
            multiline && styles.multiline,
            !!error && GST.ERROR_BORDER,
          ]}
        >
          <TextInput
            ref={ref}
            {...props}
            scrollEnabled={multiline}
            style={[
              styles.input,
              {
                color: COLORS.BLACK_700,
                paddingVertical: multiline ? RF(4) : 0,
              },
            ]}
            placeholderTextColor={GRAY_300}
          />
          {rightIcon && (
            <AppIcon
              path={rightIcon}
              size={24}
              onPress={onRightIconPress}
              containerStyle={GST.PX3}
            />
          )}
        </View>
        {!!error && (
          <AppText size={"XS"} color={"RED_600"} style={GST.MT1}>
            {error}
          </AppText>
        )}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  input: {
    fontSize: RF(FONT_SIZES.BASE),
    fontFamily: FONTS.REGULAR,
    color: BLACK_800,
    flex: 1,
    ...GST.PX3,
    paddingTop: 0,
    paddingBottom: 0,
  },
  container: {
    backgroundColor: GRAY_100,
    borderRadius: RF(14),
    height: RF(56),
    ...GST.FLEX_ROW_SPACED,
  },
  multiline: {
    height: RF(140),
  },
  flexStart: {
    alignItems: "flex-start",
  },
});

export default Input;
