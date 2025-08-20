import { emptyState } from "@/src/assets/lottie";
import { GST } from "@/src/theme/globalStyles";
import { RF } from "@/src/theme/responsive";
import LottieView from "lottie-react-native";
import React, { LegacyRef, forwardRef } from "react";
import { View } from "react-native";

const EmptyState = forwardRef(
  (
    { autoPlay = false, size = 70 }: { autoPlay?: boolean; size?: number },
    ref: LegacyRef<LottieView>
  ) => (
    <View style={GST.FLEX_ALIGNED}>
      <LottieView
        ref={ref}
        autoPlay={autoPlay}
        loop={false}
        source={emptyState}
        style={{ width: RF(size), height: RF(size) }}
      />
    </View>
  )
);

export default EmptyState;
