import { check } from "@/src/assets/icons";
import AppIcon from "@/src/components/appIcon";
import AppText from "@/src/components/appText";
import Pressable from "@/src/components/pressable";
import { GST } from "@/src/theme/globalStyles";
import React, { forwardRef } from "react";
import { View } from "react-native";
import { Modalize } from "react-native-modalize";

type Props = {
  onClosePress: () => void;
  data: string[];
  selectedItem: string;
  onSelect: (item: string) => void;
  title: string;
};

const DailOperationsDropDownSheet = forwardRef(
  ({ onClosePress, data, selectedItem, onSelect, title }: Props, ref) => {
    return (
      <Modalize
        ref={ref}
        adjustToContentHeight
        handlePosition={"inside"}
        handleStyle={GST.SHEET_HANDLE}
        modalStyle={[GST.SHEET_MODAL_STYLE]}
        onOverlayPress={onClosePress}
        flatListProps={{
          showsVerticalScrollIndicator: false,
          data,
          keyExtractor: (_, i) => String(i),
          contentContainerStyle: GST.PB2,
          ListHeaderComponent: (
            <AppText
              style={[GST.MT6, GST.MB4]}
              center
              font={"BOLD"}
              size={"BASE"}
            >
              {title}
            </AppText>
          ),
          renderItem: ({ item }) => {
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
          },
        }}
      />
    );
  }
);

export default DailOperationsDropDownSheet;
