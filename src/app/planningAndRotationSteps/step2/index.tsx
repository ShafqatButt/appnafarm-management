import { View } from "react-native";
import React, { useState } from "react";
import SafeAreaWrapper from "@/src/components/safeAreaWrapper";
import MainHeader from "@/src/components/mainHeader";
import { useTranslation } from "react-i18next";
import { GST } from "@/src/theme/globalStyles";
import PrimaryBtn from "@/src/components/primaryBtn";
import SubHeader from "../components/subHeader";
import FarmTypeCard from "../../addFarm/components/farmTypeCard";
import { menu } from "@/src/assets/icons";

const cropTypes: CropType[] = [
  "corn",
  "cotton",
  "potato",
  "rice",
  "sugarcane",
  "wheat",
];

const PlanningStep2 = () => {
  const [selectedTypes, setSelectedTypes] = useState<CropType[]>([]);

  const { t } = useTranslation("translation", {
    keyPrefix: "planningStep2Screen",
  });

  const submitHandler = () => {
    navigate("PLANNING_STEP_3");
  };

  const selectionHandler = (type: CropType, isSelected: boolean) => {
    if (isSelected) {
      setSelectedTypes(selectedTypes.filter((item) => item !== type));
    } else {
      if (selectedTypes.length < 3) {
        setSelectedTypes([...selectedTypes, type]);
      }
    }
  };

  return (
    <SafeAreaWrapper>
      <MainHeader icon={menu} />
      {/* <SubHeader
        isDescription
        title={t("title")}
        showProgress={0.5}
        description={t("selectCrop")}
      /> */}
      <View style={[GST.FLEX_WRAP, GST.MX3, GST.MT3]}>
        {cropTypes.map((type) => {
          const isSelected = selectedTypes.includes(type);
          return (
            <FarmTypeCard
              key={type}
              title={t(type)}
              cropType={type}
              isSelected={isSelected}
              onPress={() => selectionHandler(type, isSelected)}
            />
          );
        })}
      </View>
      <View style={[GST.SUBMIT_BTN_CONTAINER, GST.MX3]}>
        <PrimaryBtn
          disabled={selectedTypes.length !== 3}
          title={"Continue"}
          onPress={submitHandler}
        />
      </View>
    </SafeAreaWrapper>
  );
};

export default PlanningStep2;
