import { COLORS } from "@/src/theme/colors";
import { GST } from "@/src/theme/globalStyles";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SkypeIndicator as RawSkypeIndicator } from "react-native-indicators";

const SkypeIndicator = RawSkypeIndicator as unknown as React.FC<{
  color?: string;
  size?: number;
}>;

const { OVERLAY_DIM, GREEN_500 } = COLORS;

type Props = {
  visible: boolean;
};

const LoadingIndicator = ({ visible }: Props) => {
  return (
    <>
      {visible && (
        <View style={[styles.container, { backgroundColor: OVERLAY_DIM }]}>
          <SkypeIndicator color={GREEN_500} size={30} />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    ...GST.FLEX_ALIGNED,
  },
});

export default LoadingIndicator;
