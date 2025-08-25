import {
  arrowBack,
  arrowRight,
  check,
  crossCircle,
  marker,
  minus,
  plus2,
  undo,
} from "@/src/assets/icons";
import { farmMarkingPoster } from "@/src/assets/images";
import AppIcon from "@/src/components/appIcon";
import AppText from "@/src/components/appText";
import SafeAreaWrapper from "@/src/components/safeAreaWrapper";
import { GST } from "@/src/theme/globalStyles";
import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import FitImage from "react-native-fit-image";
import MapView, {
  Camera,
  MapType,
  Marker,
  PROVIDER_GOOGLE,
  Polygon,
} from "react-native-maps";
import Modal from "react-native-modal";
import { styles } from "./styles";
import Input from "@/src/components/input";
import { getAreaOfPolygon } from "geolib";
import { useAppDispatch } from "@/src/redux/hooks";
import AddFarmHeader from "./components/addFarmHeader";
import {
  GooglePlaceData,
  GooglePlaceDetail,
} from "react-native-google-places-autocomplete";
import { COLORS } from "@/src/theme/colors";
import ActionBtn from "@/src/components/actionBtn";
import MapTypeBtn from "@/src/components/mapTypeBtn";
import { Href, router } from "expo-router";

const REGION_DELTA = { latitudeDelta: 0.007, longitudeDelta: 0.007 };

const region = { latitude: 28.982682, longitude: 70.729352 };

const SQMT_TO_ACRE = 0.000247105;

interface MarkerType {
  latitude: number;
  longitude: number;
  id: string;
}

const { WHITE, OVERLAY_C } = COLORS;

const AddFarm = () => {
  const [markers, setMarkers] = useState<MarkerType[]>([]);
  const [mapType, setMapType] = useState<MapType>("satellite");
  const [showDemoModal, setShowDemoModal] = useState(true);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [farmArea, setFarmArea] = useState("");

  const mapRef = useRef<MapView>(null);

  const { t } = useTranslation("translation", {
    keyPrefix: "addfarmScreen",
  });

  const dispatch = useAppDispatch();

  const zoomInHandler = () => {
    mapRef?.current?.getCamera().then((cam: Camera) => {
      if (cam.zoom) cam.zoom += 1;
      mapRef?.current?.animateCamera(cam);
    });
  };

  const zoomOutHandler = () => {
    mapRef?.current?.getCamera().then((cam: Camera) => {
      if (cam.zoom && cam.zoom > 0) cam.zoom -= 1;
      mapRef?.current?.animateCamera(cam);
    });
  };

  const submitHandler = () => {
    const coords = markers?.map(({ latitude, longitude }) => ({
      latitude,
      longitude,
    }));
    const sqMeters = getAreaOfPolygon(coords as any);
    const acres = sqMeters * SQMT_TO_ACRE;
    setFarmArea(String(acres.toFixed(3)));
    toggleSaveModal();
  };

  const toggleSaveModal = () => setShowSaveModal(!showSaveModal);

  const placeSelectionHandler = (
    data: GooglePlaceData,
    detail: GooglePlaceDetail | null
  ) => {
    if (detail?.geometry?.location?.lat && detail?.geometry?.location?.lng) {
      mapRef?.current?.animateToRegion({
        latitude: detail?.geometry?.location?.lat,
        longitude: detail?.geometry?.location?.lng,
        latitudeDelta: 0.007,
        longitudeDelta: 0.007,
      });
    }
  };

  return (
    <SafeAreaWrapper
      containerStyle={{
        backgroundColor: COLORS.GREEN_250,
      }}
    >
      <View
        style={[
          GST.FLEX,
          {
            position: "relative",
            marginTop: "15%",
          },
        ]}
      >
        <MapView
          showsUserLocation
          ref={mapRef}
          zoomEnabled={false}
          mapType={mapType}
          provider={PROVIDER_GOOGLE}
          style={styles.mapStyle}
          onPress={(e) =>
            setMarkers([
              ...markers,
              { ...e.nativeEvent?.coordinate, id: String(Date.now()) },
            ])
          }
          region={{
            ...region,
            ...REGION_DELTA,
          }}
        >
          {markers?.map((item, index) => (
            <Marker
              key={item.id}
              draggable
              onDrag={(e) => {
                const temp = [...markers];
                temp[index].latitude = e.nativeEvent.coordinate.latitude;
                temp[index].longitude = e.nativeEvent.coordinate.longitude;
              }}
              coordinate={{
                latitude: item.latitude,
                longitude: item.longitude,
              }}
            >
              <View style={{ alignItems: "center" }}>
                <AppIcon path={marker} width={36} height={44} />
                <View
                  style={{
                    position: "absolute",
                    top: 5,
                  }}
                >
                  <AppText font={"BOLD"} size={"LG"} color={"WHITE"}>
                    {index + 1}
                  </AppText>
                </View>
              </View>
            </Marker>
          ))}
          {markers.length > 0 && (
            <Polygon
              focusable={false}
              coordinates={markers}
              strokeColor={WHITE}
              strokeWidth={3}
              fillColor={OVERLAY_C}
            />
          )}
        </MapView>
        <View style={styles.mapTypeContainer}>
          <MapTypeBtn
            isSelected={mapType === "standard"}
            title={t("map")}
            onPress={() => setMapType("standard")}
          />
          <View style={styles.mapTypeDivider} />
          <MapTypeBtn
            isSelected={mapType === "satellite"}
            title={t("satellite")}
            onPress={() => setMapType("satellite")}
          />
        </View>
        <View style={styles.zoomBtnContainer}>
          <AppIcon
            path={plus2}
            size={16}
            tintColor={"GRAY_500"}
            containerStyle={GST.P2}
            onPress={zoomInHandler}
          />
          <View style={styles.zoomBtnDivider} />
          <AppIcon
            path={minus}
            size={16}
            tintColor={"GRAY_500"}
            containerStyle={GST.P2}
            onPress={zoomOutHandler}
          />
        </View>
        <ActionBtn
          title={t("skip")}
          icon={arrowRight}
          top={30}
          right={15}
          onPress={() => null}
          iconPosition={"right"}
        />
        {markers.length > 0 && (
          <ActionBtn
            title={t("undo")}
            icon={undo}
            bottom={15}
            left={15}
            onPress={() => setMarkers(markers.slice(0, -1))}
            iconPosition={"right"}
          />
        )}
        {markers.length > 2 && (
          <ActionBtn
            title={t("continue")}
            icon={check}
            bottom={15}
            right={15}
            onPress={submitHandler}
            iconPosition={"right"}
          />
        )}
      </View>
      <AddFarmHeader
        icon={arrowBack}
        tintColor={"WHITE"}
        onPress={() => {
          router.back();
        }}
        onPlaceSelection={placeSelectionHandler}
      />
      <Modal isVisible={showDemoModal}>
        <View style={styles.modalContainer}>
          <AppText font={"MEDIUM"} size={"2XL"} style={GST.MB3}>
            {t("demoModalTitle")}
          </AppText>
          <FitImage
            source={farmMarkingPoster}
            originalHeight={148}
            originalWidth={264}
          />
          <AppText
            font={"MEDIUM"}
            size={"BASE"}
            lineHeight={20}
            style={GST.MT3}
          >
            {t("demoModalDescription")}
          </AppText>
          <View style={styles.modalSubmitBtnContainer}>
            <AppText
              font={"SEMI_BOLD"}
              color={"GREEN_500"}
              size={"BASE"}
              onPress={() => setShowDemoModal(false)}
            >
              {t("continue")}
            </AppText>
          </View>
        </View>
      </Modal>
      <Modal isVisible={showSaveModal}>
        <View style={styles.modalContainer}>
          <View style={GST.FLEX_ROW_SPACED}>
            <AppText font={"MEDIUM"} size={"2XL"} style={GST.MB3}>
              {t("saveModalTitle")}
            </AppText>
            <AppIcon
              path={crossCircle}
              size={20}
              onPress={() => setShowSaveModal(false)}
            />
          </View>
          <AppText
            font={"MEDIUM"}
            size={"BASE"}
            lineHeight={20}
            style={[GST.MT3, GST.MB4]}
          >
            {t("saveModalDescription")}
          </AppText>
          <Input
            label={t("areaFieldLabel")}
            placeholder={t("areaFieldPlaceholder")}
            value={farmArea}
            keyboardType={"decimal-pad"}
            onChangeText={(text) => setFarmArea(text)}
          />
          <View style={styles.modalSubmitBtnContainer}>
            <AppText
              font={"SEMI_BOLD"}
              color={"GREEN_500"}
              size={"BASE"}
              onPress={() => {
                toggleSaveModal();
                router.push({
                  pathname: "/addFarm/addFarmLocation",
                  params: {
                    latitude: markers[0].latitude,
                    longitude: markers[0].longitude,
                    size: farmArea,
                    marker: JSON.stringify(markers),
                  },
                });
              }}
            >
              {t("confirmAndcontinue")}
            </AppText>
          </View>
        </View>
      </Modal>
    </SafeAreaWrapper>
  );
};

export default AddFarm;
