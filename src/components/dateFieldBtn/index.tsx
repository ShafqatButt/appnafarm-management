import { calendar } from "@/src/assets/icons";
import AppIcon from "@/src/components/appIcon";
import AppText from "@/src/components/appText";
import Pressable from "@/src/components/pressable";
import { COLORS } from "@/src/theme/colors";
import { GST } from "@/src/theme/globalStyles";
import { RF } from "@/src/theme/responsive";
import { format } from "date-fns";
import React, { useState } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import DatePicker from "react-native-date-picker";

interface Props {
  date: Date;
  onSelect: (date: Date) => void;
  placeholder?: string;
  containerStyle?: ViewStyle;
  error?: string;
  label: string;
}

const { GRAY_100 } = COLORS;

const DateFieldBtn = ({
  date,
  placeholder = "",
  onSelect,
  containerStyle,
  error,
  label,
}: Props) => {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const toggleDatePicker = () => setShowDatePicker(!showDatePicker);

  const dateSelectionHandler = (date: Date) => {
    onSelect(date);
    toggleDatePicker();
  };

  return (
    <>
      <View style={GST.MB4}>
        {!!label && (
          <AppText font={"SEMI_BOLD"} size={"SM"} style={GST.MB1}>
            {label}
          </AppText>
        )}
        <Pressable
          style={[
            styles.dropdownBtn,
            containerStyle as ViewStyle,
            error ? GST.ERROR_BORDER : {},
          ]}
          onPress={toggleDatePicker}
        >
          <AppText
            contain
            size={"BASE"}
            color={date ? "BLACK_700" : "GRAY_300"}
            numberOfLines={1}
            style={GST.MR1}
          >
            {date ? format(date, "PP") : placeholder}
          </AppText>
          <AppIcon path={calendar} size={24} />
        </Pressable>
      </View>
      <DatePicker
        modal
        mode={"date"}
        open={showDatePicker}
        date={new Date()}
        onConfirm={dateSelectionHandler}
        onCancel={toggleDatePicker}
      />
    </>
  );
};

const styles = StyleSheet.create({
  dropdownBtn: {
    backgroundColor: GRAY_100,
    borderRadius: RF(14),
    height: RF(56),
    ...GST.FLEX_ROW_SPACED,
    ...GST.PX3,
  },
});

export default DateFieldBtn;
