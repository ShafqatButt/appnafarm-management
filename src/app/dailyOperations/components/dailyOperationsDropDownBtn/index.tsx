import { arrowDown } from "@/src/assets/icons";
import AppIcon from "@/src/components/appIcon";
import AppText from "@/src/components/appText";
import Pressable from "@/src/components/pressable";
import { COLORS } from "@/src/theme/colors";
import { GST } from "@/src/theme/globalStyles";
import { RF } from "@/src/theme/responsive";
import React, { useCallback, useMemo, useRef } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import CustomBottomSheet from "./customBottomSheet";

interface Props {
  value: string;
  onSelect: (item: string) => void;
  placeholder?: string;
  containerStyle?: ViewStyle;
  error?: string;
  label: string;
  data: string[];
  sheetTitle?: string;
}

const { GRAY_100 } = COLORS;

const DailyOperationsDropDownBtn = ({
  value,
  placeholder = "",
  onSelect,
  containerStyle,
  error,
  label,
  data,
  sheetTitle = "",
}: Props) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = ["25%", "50%", "90%"];

  const openBottomSheet = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);

  const closeBottomSheet = useCallback(() => {
    bottomSheetRef.current?.close();
  }, [onSelect]);

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
          onPress={openBottomSheet}
        >
          <AppText
            contain
            size={"BASE"}
            color={value ? "BLACK_700" : "GRAY_300"}
            numberOfLines={1}
            style={GST.MR1}
          >
            {value || placeholder}
          </AppText>
          <AppIcon path={arrowDown} size={24} />
        </Pressable>
      </View>
      <CustomBottomSheet
        ref={bottomSheetRef}
        data={data}
        snapPoints={snapPoints}
        onSelect={(item: string) => {
          onSelect(item);
          closeBottomSheet();
        }}
        selectedItem={value}
        title={sheetTitle}
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

export default DailyOperationsDropDownBtn;
