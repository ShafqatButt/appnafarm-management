import { StyleSheet, View } from "react-native";
import React, { forwardRef } from "react";
import { COLORS } from "@/src/theme/colors";
import { HP, RF } from "@/src/theme/responsive";
import { GST } from "@/src/theme/globalStyles";
import AppText from "@/src/components/appText";
import { useTranslation } from "react-i18next";
import { FieldType } from "..";
import DateFieldBtn from "@/src/components/dateFieldBtn";
import { Modalize } from "react-native-modalize";
import DropdownBtn from "@/src/components/dropdownBtn";

const FilterModal = forwardRef(
  (
    {
      toggleFilterModal,
      data,
      state,
      updateState,
      onPressClose,
      onClosePress,
    }: {
      onClosePress: () => void;
      toggleFilterModal: () => void;
      data: {
        type: FieldType;
        data: string[];
      }[];
      state: {
        fromDate: string | Date;
        toDate: string | Date;
        activityType: string | Date;
        item: string | Date;
        status: string | Date;
      };
      updateState: (key: FieldType, value: string | Date) => void;
      onPressClose: () => void;
    },
    ref
  ) => {
    const { t } = useTranslation("translation", {
      keyPrefix: "addDailyActivityScreen",
    });
    return (
      <Modalize
        ref={ref}
        adjustToContentHeight
        handlePosition={"inside"}
        handleStyle={GST.SHEET_HANDLE}
        modalStyle={GST.SHEET_MODAL_STYLE}
        onOverlayPress={onClosePress}
      >
        <View style={styles.mainContainer}>
          <AppText size={"BASE"} font={"SEMI_BOLD"} style={GST.MT10}>
            {t("applyFilter")}
          </AppText>
          <View style={GST.MT5}>
            {data.map(({ type, data }) => {
              return (
                <DropdownBtn
                  key={type}
                  data={data}
                  value={state[type] as string}
                  label={t(type + "Label")}
                  placeholder={t(type + "Placeholder")}
                  onSelect={(value: string) => updateState(type, value)}
                  modalHeight={HP(40)}
                />
              );
            })}
          </View>
          <DateFieldBtn
            placeholder={t("fromDatePlaceholder")}
            date={state.fromDate as Date}
            label={t("fromDateLabel")}
            onSelect={(date) => updateState("fromDate", date)}
          />
          <DateFieldBtn
            placeholder={t("toDatePlaceholder")}
            date={state.toDate as Date}
            label={t("toDateLabel")}
            onSelect={(date) => updateState("toDate", date)}
          />
          <View style={styles.bottomBtnContainer}>
            <AppText
              onPress={onPressClose}
              style={GST.MR5}
              size={"SM"}
              font={"MEDIUM"}
            >
              {t("close")}
            </AppText>
            <AppText color={"GREEN_500"} size={"SM"} font={"MEDIUM"}>
              {t("applyFilter")}
            </AppText>
          </View>
        </View>
      </Modalize>
    );
  }
);

export default FilterModal;

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: COLORS.WHITE,
    borderRadius: RF(28),
    width: "95%",
    alignSelf: "center",
    ...GST.SHADOW_LIGHT,
  },
  mainContainer: {
    ...GST.MX3,
  },
  bottomBtnContainer: {
    alignSelf: "flex-end",
    ...GST.FLEX_ROW_SPACED,
    ...GST.MB5,
  },
});
