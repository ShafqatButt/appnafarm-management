import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "./colors";
import { SIZING } from "@/src/theme/sizing";
import { SPACING } from "@/src/theme/spacing";
import { RF } from "@/src/theme/responsive";

const { BLACK_800, GREEN_500, RED_600, WHITE } = COLORS;

export const GST = StyleSheet.create({
  ...SPACING,
  ...SIZING,
  FLEX: {
    flex: 1,
  },
  FLEX_2: {
    flex: 2,
  },
  FLEX_3: {
    flex: 3,
  },
  FLEX_6: {
    flex: 6,
  },
  FLEX_GROW: {
    flexGrow: 1,
  },
  FLEX_ROW: {
    flexDirection: "row",
    alignItems: "center",
  },
  FLEX_CENTER: {
    flex: 1,
    justifyContent: "center",
  },
  FLEX_ROW_TEXT: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  FLEX_ROW_START: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  FLEX_ROW_CENTER: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  FLEX_ROW_SPACED: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  FLEX_ROW_SPACED_EVENLY: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  FLEX_WRAP: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  SHEET_HANDLE: {
    backgroundColor: GREEN_500,
    height: RF(6),
    width: RF(40),
    ...SPACING.MT2,
  },
  SHEET_MODAL_STYLE: {
    borderTopRightRadius: RF(40),
    borderTopLeftRadius: RF(40),
    backgroundColor: WHITE,
  },
  TRIANGLE: {
    alignSelf: "center",
    width: 0,
    height: 0,
    borderLeftWidth: RF(6),
    borderRightWidth: RF(6),
    borderTopWidth: RF(6),
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: WHITE,
  },
  FLEX_ALIGNED: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  FLEX_END: {
    flex: 1,
    justifyContent: "flex-end",
  },
  FLEX_ALIGN_END: {
    flex: 1,
    alignItems: "flex-end",
  },
  ALIGN_END: {
    alignItems: "flex-end",
  },
  ALIGN_CENTER: {
    alignItems: "center",
  },
  ALIGN_JUSTIFY_CENTER: {
    alignItems: "center",
    justifyContent:'center'
  },
  SHADOW: {
    shadowColor: BLACK_800,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  SHADOW_LIGHT: {
    shadowColor: BLACK_800,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  HITSLOP: {
    top: 10,
    bottom: 10,
    left: 10,
    right: 10,
  },
  ERROR_BORDER: {
    borderColor: RED_600,
    borderWidth: 0.5,
  },
  SUBMIT_BTN_CONTAINER: {
    flex: 1,
    justifyContent: "flex-end",
    ...SPACING.MB4,
  },
  WIDTH: {
    width: Dimensions.get("screen").width,
  },
});
