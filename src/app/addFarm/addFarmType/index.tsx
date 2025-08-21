import AppText from "@/src/components/appText";
import PrimaryBtn from "@/src/components/primaryBtn";
import ProgressBar from "@/src/components/progressBar";
import SafeAreaWrapper from "@/src/components/safeAreaWrapper";
import { GST } from "@/src/theme/globalStyles";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import FarmTypeCard from "../components/farmTypeCard";
import { styles } from "./styles";
import { showToast } from "@/src/utils/helpers";
import { useFocusEffect } from "@react-navigation/native";

const AddFarmType = ({ route }: any) => {
  const [selectedType, setSelectedType] = useState<CropType | "">("");
  const [cropTypes, setCropTypes] = useState<CropType[]>([]);

  const { size, location, latitude, longitude, name, marker } = route.params;
  const { t } = useTranslation("translation", {
    keyPrefix: "addFarmDetailsScreen",
  });

  useFocusEffect(
    React.useCallback(() => {
      getFarmEnums();
    }, [])
  );

  const getFarmEnums = async () => {};

  const submitHandler = () => {
    navigate("ADD_FARM_DETAILS", {
      crop: selectedType,
      size,
      location,
      latitude,
      longitude,
      name,
      marker,
    });
  };

  return (
    <SafeAreaWrapper>
      <View style={[GST.FLEX, GST.PX3, GST.MT4]}>
        <AppText size={"XL"} font={"BOLD"} style={GST.MB1}>
          {t("title")}
        </AppText>
        <ProgressBar progress={0.5} />
        <AppText size={"BASE"} style={GST.MB4}>
          {t("typeSubTitle")}
        </AppText>
        <View style={styles.typeContainer}>
          {cropTypes.map((type, index) => (
            <FarmTypeCard
              key={type + index}
              title={type}
              cropType={type}
              isSelected={selectedType === type}
              onPress={() => setSelectedType(type)}
            />
          ))}
        </View>
        <View style={GST.SUBMIT_BTN_CONTAINER}>
          <PrimaryBtn
            disabled={!selectedType}
            title={"Continue"}
            onPress={submitHandler}
          />
        </View>
      </View>
    </SafeAreaWrapper>
  );
};

export default AddFarmType;
