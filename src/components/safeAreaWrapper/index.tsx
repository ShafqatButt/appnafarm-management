import { COLORS } from "@/src/theme/colors";
import { GST } from "@/src/theme/globalStyles";
import React, { ReactNode } from "react";
import { View, ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Props = {
  children: ReactNode;
  noPaddingTop: boolean;
  noPaddingBottom: boolean;
  containerStyle: ViewStyle;
};

const SafeAreaWrapper = ({
  children,
  noPaddingTop,
  noPaddingBottom,
  containerStyle,
}: Partial<Props>) => {
  const insets = useSafeAreaInsets();
  const paddingTop = noPaddingTop ? 0 : insets.top;
  const paddingBottom = noPaddingBottom ? 0 : insets.bottom;
  return (
    <View
      style={[
        {
          paddingTop,
          paddingBottom,
          ...GST.FLEX,
          backgroundColor: COLORS.WHITE,
        },
        containerStyle,
      ]}
    >
      {children}
    </View>
  );
};

export default SafeAreaWrapper;
