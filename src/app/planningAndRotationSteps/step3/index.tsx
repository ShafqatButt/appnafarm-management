import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SafeAreaWrapper from "@/src/components/safeAreaWrapper";
import MainHeader from "@/src/components/mainHeader";
import { useTranslation } from "react-i18next";
import { GST } from "@/src/theme/globalStyles";
import InvestorSubHeader from "@/src/components/investorSubHeader";
import SelectBtn from "@/src/components/selectBtn";
import PrimaryBtn from "@/src/components/primaryBtn";
import SubHeader from "../components/subHeader";
import { menu } from "@/src/assets/icons";

const preferences = [
  {
    title: "Climate resilient",
    id: 0,
  },
  {
    title: "Inter-cropping compatibility",
    id: 1,
  },
  {
    title: "Fertilizer plan",
    id: 2,
  },
  {
    title: "Pest management",
    id: 3,
  },
  {
    title: "Others",
    id: 4,
  },
];

const PlanningStep3 = () => {
  const [selectPreferences, setSelectPreferences] = useState(preferences[0]);

  const { t } = useTranslation("translation", {
    keyPrefix: "planningStep3Screen",
  });

  const handleSubmit = () => {
    navigate("PLANNING_STEP_4");
  };
  return (
    <SafeAreaWrapper noPaddingTop noPaddingBottom>
      <MainHeader icon={menu} />
      {/* <SubHeader
        title={t("title")}
        showProgress={0.75}
        description={t("addpreference")}
        isDescription
      /> */}
      <View style={GST.MX1}>
        <InvestorSubHeader
          canGoBack
          onPress={() => navigate("PLANNING_STEP_4")}
          title={t("preferences")}
          size={"XL"}
        />
      </View>
      <View style={[GST.MT1, GST.MX3]}>
        {preferences.map((item) => (
          <SelectBtn
            key={item.id}
            title={item.title}
            isSelected={item.id == selectPreferences.id}
            onPress={() => setSelectPreferences(item)}
          />
        ))}
      </View>
      <View style={[GST.SUBMIT_BTN_CONTAINER, GST.PX3]}>
        <PrimaryBtn title={"Continue"} onPress={handleSubmit} />
      </View>
    </SafeAreaWrapper>
  );
};

export default PlanningStep3;

const styles = StyleSheet.create({});
