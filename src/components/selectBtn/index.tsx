import { tickCircle } from "@/src/assets/icons";
import AppIcon from "@/src/components/appIcon";
import AppText from "@/src/components/appText";
import Pressable from "@/src/components/pressable";
import { COLORS } from "@/src/theme/colors";
import { GST } from "@/src/theme/globalStyles";
import { RF } from "@/src/theme/responsive";
import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

const { GREEN_500, GREEN_200 } = COLORS;

type Props = {
  title: string;
  subTitle?: string;
  onPress: () => void;
  containerStyle?: ViewStyle | ViewStyle[];
  isSelected: boolean;
  subTitleNumberOfLines?: number;
};

const SelectBtn = ({
  title,
  subTitle,
  onPress,
  containerStyle,
  isSelected,
  subTitleNumberOfLines = 2,
}: Props) => {
  return (
    <Pressable
      style={[
        {
          backgroundColor: isSelected ? GREEN_500 : GREEN_200,
          // height: subTitle ? RF(90) : RF(56),
        },
        styles.buttonStyle,
        containerStyle as ViewStyle,
      ]}
      onPress={onPress}
    >
      <View style={GST.FLEX}>
        <AppText
          center={!subTitle}
          font={"SEMI_BOLD"}
          size={"BASE"}
          color={isSelected ? "WHITE" : "BLACK_800"}
        >
          {title}
        </AppText>
        {subTitle && (
          <AppText
            size={"SM"}
            color={isSelected ? "WHITE" : "BLACK_800"}
            numberOfLines={subTitleNumberOfLines}
          >
            {subTitle}
          </AppText>
        )}
      </View>
      {isSelected && (
        <AppIcon
          path={tickCircle}
          size={22}
          containerStyle={styles.tickContainer}
        />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    ...GST.MB2,
    paddingRight: RF(42),
    paddingLeft: RF(16),
    ...GST.FLEX_ROW,
    borderRadius: RF(14),
    justifyContent: "center",
    ...GST.PY4,
  },
  tickContainer: {
    position: "absolute",
    right: RF(16),
  },
});

export default SelectBtn;
