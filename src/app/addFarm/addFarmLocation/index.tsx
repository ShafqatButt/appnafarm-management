import AppText from "@/src/components/appText";
import Input from "@/src/components/input";
import PrimaryBtn from "@/src/components/primaryBtn";
import ProgressBar from "@/src/components/progressBar";
import SafeAreaWrapper from "@/src/components/safeAreaWrapper";
import { GST } from "@/src/theme/globalStyles";
import { fetchAddressFromCoords } from "@/src/utils/helpers";
import { Href, router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";

const AddFarmLocation = () => {
  const params = useLocalSearchParams();
  const { latitude, longitude, size } = params;
  const marker = params.marker ? JSON.parse(params.marker as string) : [];

  const { t } = useTranslation("translation", {
    keyPrefix: "addFarmDetailsScreen",
  });

  const [location, setLocation] = useState("");
  const [name, setName] = useState("");

  const submitHandler = () => {
    router.push({
      pathname: "/addFarm/addFarmType",
      params: {
        location: location,
        latitude: latitude,
        longitude: longitude,
        size: size,
        name: name,
        marker: JSON.stringify(marker),
      },
    });
  };

  useEffect(() => {
    fetchAddress();
  }, []);

  const fetchAddress = async () => {
    if (marker.length > 0) {
      const address = await fetchAddressFromCoords(
        marker[0].latitude,
        marker[0].longitude
      );
      setLocation(address);
    }
  };
  return (
    <SafeAreaWrapper>
      <View style={[GST.FLEX, GST.PX3, GST.MT4]}>
        <AppText size={"XL"} font={"BOLD"} style={GST.MB1}>
          {t("title")}
        </AppText>
        <ProgressBar progress={0.25} />
        <AppText size={"BASE"} style={GST.MB4}>
          {t("locationSubTitle")}
        </AppText>
        <Input
          label={t("locationFieldLabel")}
          placeholder={t("locationFieldPlaceholder")}
          value={location}
          autoCapitalize={"words"}
          editable={false}
        />
        <Input
          label={t("name")}
          placeholder={t("namePlaceholder")}
          value={name}
          autoCapitalize={"words"}
          onChangeText={(text) => setName(text)}
        />
        <View style={GST.SUBMIT_BTN_CONTAINER}>
          <PrimaryBtn
            disabled={!location && !name}
            title={"Continue"}
            onPress={submitHandler}
          />
        </View>
      </View>
    </SafeAreaWrapper>
  );
};

export default AddFarmLocation;
