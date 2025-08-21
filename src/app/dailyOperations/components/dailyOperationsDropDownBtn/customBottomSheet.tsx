import { StyleSheet, View } from "react-native";
import React, { forwardRef } from "react";
import BottomSheet, {
  BottomSheetFlatList,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import Pressable from "@/src/components/pressable";
import AppText from "@/src/components/appText";
import { GST } from "@/src/theme/globalStyles";
import AppIcon from "@/src/components/appIcon";
import { check } from "@/src/assets/icons";
import { RF } from "@/src/theme/responsive";
import { COLORS } from "@/src/theme/colors";
import { Portal } from "react-native-portalize";

interface Props {
  snapPoints: string[];
  data: string[];
  selectedItem: string;
  onSelect: (item: string) => void;
  title: string;
}

const CustomBottomSheet = forwardRef<BottomSheetMethods, Props>(
  ({ snapPoints, data, selectedItem, onSelect, title }, ref) => {
    return (
      <BottomSheet
        ref={ref}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose
        backgroundStyle={styles.sheetBackgroundStyle}
        style={{
          ...GST.PX3,
          borderRadius: RF(10),
          backgroundColor: COLORS.WHITE,
        }}
      >
        <View style={{ flex: 1 }}>
          <BottomSheetFlatList
            style={GST.PB2}
            data={data}
            keyExtractor={(_, i) => String(i)}
            ListHeaderComponent={
              <AppText
                style={[GST.MT1, GST.MB4]}
                center
                font={"BOLD"}
                size={"BASE"}
              >
                {title}
              </AppText>
            }
            renderItem={({ item }) => {
              const isSelected = item === selectedItem;
              return (
                <Pressable
                  onPress={() => onSelect(item)}
                  style={[GST.FLEX_ROW_SPACED, GST.PY2, GST.MB1]}
                >
                  <View style={GST.FLEX_ROW}>
                    <AppText size={"BASE"}>{item}</AppText>
                  </View>
                  {isSelected && <AppIcon path={check} size={20} />}
                </Pressable>
              );
            }}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </BottomSheet>
    );
  }
);

export default CustomBottomSheet;

const styles = StyleSheet.create({
  sheetBackgroundStyle: {
    borderRadius: RF(10),
    backgroundColor: COLORS.WHITE,
    borderWidth: RF(1),
  },
});
