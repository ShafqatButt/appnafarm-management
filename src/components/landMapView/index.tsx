import { focus } from "@/src/assets/icons";
import AppIcon from "@/src/components/appIcon";
import AppText from "@/src/components/appText";
import { COLORS } from "@/src/theme/colors";
import { GST } from "@/src/theme/globalStyles";
import { RF } from "@/src/theme/responsive";
import {
  acreToSquareKM,
  getAverageCoordinates,
  getCenterOffsetForAnchor,
} from "@/src/utils/helpers";
import React, { useEffect, useRef } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE, Polygon } from "react-native-maps";

const REGION_DELTA = { latitudeDelta: 0.0007, longitudeDelta: 0.0007 };
const DEFAULT_PADDING = {
  top: 10,
  right: 10,
  bottom: 10,
  left: 10,
};

const ANCHOR = { x: 0.5, y: 0.5 };
const MARKER_WIDTH = RF(60);
const MARKER_HEIGHT = RF(60);
const CENTER_OFFSET = getCenterOffsetForAnchor(
  ANCHOR,
  MARKER_WIDTH,
  MARKER_HEIGHT
);

const { WHITE, OVERLAY_C } = COLORS;

const LandMapView = ({
  size,
  farmArea,
}: {
  size: string;
  farmArea: Coords[];
}) => {
  const region = getAverageCoordinates(farmArea);
  useEffect(() => {
    focusHandler();
  }, [size, farmArea]);

  const mapRef = useRef<MapView>(null);

  const focusHandler = () => {
    mapRef.current?.fitToCoordinates(farmArea, {
      edgePadding: DEFAULT_PADDING,
      animated: true,
    });
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        zoomEnabled={false}
        mapType={"satellite"}
        provider={PROVIDER_GOOGLE}
        style={styles.mapStyle}
        region={{
          ...region,
          ...REGION_DELTA,
        }}
      >
        <Marker
          coordinate={region}
          anchor={ANCHOR}
          centerOffset={CENTER_OFFSET}
        >
          <View style={styles.markerContainer}>
            <View style={styles.markerSubContainer}>
              <AppText font={"SEMI_BOLD"}>{size}</AppText>
            </View>
          </View>
          <View style={GST.TRIANGLE} />
        </Marker>
        <Polygon
          coordinates={[...farmArea, farmArea[0]]}
          strokeColor={WHITE}
          strokeWidth={3}
          fillColor={OVERLAY_C}
          lineCap={"round"}
        />
      </MapView>
      <AppIcon
        path={focus}
        size={16}
        containerStyle={styles.focusBtnContainer}
        onPress={focusHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: RF(12),
    overflow: "hidden",
  },
  mapStyle: {
    height: RF(230),
    flex: 1,
  },
  markerContainer: {
    ...GST.SHADOW,
    backgroundColor: WHITE,
    ...GST.FLEX_ROW_CENTER,
    borderRadius: RF(25),
    ...GST.PX3,
    padding: RF(5),
  },
  markerSubContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  focusBtnContainer: {
    position: "absolute",
    bottom: RF(8),
    right: RF(8),
    borderRadius: RF(8),
    padding: RF(6),
    backgroundColor: WHITE,
  },
});

export default LandMapView;
