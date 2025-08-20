import { arrowDown } from "@/src/assets/icons";
import AppIcon from "@/src/components/appIcon";
import AppText from "@/src/components/appText";
import DropdownSheet from "@/src/components/dropdownSheet";
import Pressable from "@/src/components/pressable";
import { COLORS } from "@/src/theme/colors";
import { GST } from "@/src/theme/globalStyles";
import { RF } from "@/src/theme/responsive";
import React, { useRef } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Modalize } from "react-native-modalize";

interface Props {
  value: string;
  onSelect: (item: string) => void;
  placeholder?: string;
  containerStyle?: ViewStyle;
  error?: string;
  label: string;
  data: string[];
  sheetTitle?: string;
  position?: "absolute" | "relative" | undefined;
  modalHeight?: number | undefined;
}

const { GRAY_100 } = COLORS;

const DropdownBtn = ({
  value,
  placeholder = "",
  onSelect,
  containerStyle,
  error,
  label,
  data,
  sheetTitle = "",
  modalHeight,
}: Props) => {
  const sheetRef = useRef<Modalize>(null);

  const openSheet = () => sheetRef.current?.open();

  const closeSheet = () => sheetRef.current?.close();

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
          onPress={openSheet}
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
      <DropdownSheet
        title={sheetTitle}
        ref={sheetRef}
        data={data}
        onClosePress={closeSheet}
        onSelect={(item: string) => {
          onSelect(item);
          closeSheet();
        }}
        selectedItem={value}
        modalheight={modalHeight}
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

export default DropdownBtn;
