import { area, closeIcon, crop, locPin, statusIcon } from "@/src/assets/icons";
import AppIcon from "@/src/components/appIcon";
import AppText from "@/src/components/appText";
import { COLORS } from "@/src/theme/colors";
import { GST } from "@/src/theme/globalStyles";
import { RF } from "@/src/theme/responsive";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import FarmDetailsItem from "../farmDetailsItem";
import LandMapView from "../landMapView";

const { GRAY_100, WHITE, GREEN_700, ORANGE } = COLORS;

interface Props extends Farm {
  t: TrxFunc;
  onClosePress: () => void;
  farmArea: Coords[];
}

const FarmDetailsCard = ({
  title,
  t,
  address,
  cropType,
  size,
  status,
  onClosePress,
  farmArea,
}: Props) => (
  <View style={styles.container}>
    <View style={GST.FLEX_ROW_SPACED}>
      <AppText size={"LG"} font={"BOLD"}>
        {title}
      </AppText>
      <AppIcon
        path={closeIcon}
        size={18}
        tintColor={"BLACK_800"}
        onPress={onClosePress}
      />
    </View>
    <View style={styles.rowSpaced}>
      <FarmDetailsItem icon={locPin} label={t("location")} value={address} />
      <FarmDetailsItem
        icon={area}
        label={t("size")}
        value={t("acres", { size })}
      />
    </View>
    <View style={styles.rowSpaced}>
      <FarmDetailsItem icon={crop} label={t("crop")} value={cropType} />
      <FarmDetailsItem
        icon={statusIcon}
        label={t("status")}
        value={status}
        valueContainerStyle={[
          styles.statusBtn,
          {
            backgroundColor: status === "published" ? GREEN_700 : ORANGE,
          },
        ]}
      />
    </View>
    <Pressable style={[styles.actionBtnContainer, GST.MT2, GST.MB3]}>
      <AppText size={"SM"} color={"GREEN_500"} font={"SEMI_BOLD"}>
        {t("viewDetailsBtnLabel")}
      </AppText>
    </Pressable>
    <LandMapView size={t("acres", { size })} farmArea={farmArea} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: GRAY_100,
    borderRadius: RF(12),
    padding: RF(12),
    ...GST.MT4,
  },
  rowSpaced: {
    flexDirection: "row",
    justifyContent: "space-between",
    ...GST.MB1,
  },
  actionBtnContainer: {
    justifyContent: "center",
    borderRadius: RF(12),
    backgroundColor: WHITE,
    height: RF(40),
    ...GST.SHADOW,
    ...GST.FLEX_ROW,
  },
  statusBtn: {
    borderRadius: 20,
    ...GST.PX3,
    ...GST.PY1,
    alignSelf: "flex-start",
  },
});

export default FarmDetailsCard;
