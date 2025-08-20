import AppText from "@/src/components/appText";
import MainHeader from "@/src/components/mainHeader";
import SafeAreaWrapper from "@/src/components/safeAreaWrapper";
import { GST } from "@/src/theme/globalStyles";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ScrollView, View, StyleSheet } from "react-native";
import { useAppDispatch } from "@/src/redux/hooks";
import { menu } from "@/src/assets/icons";
import { setUserSession } from "@/src/redux/slices/mainSlice";
import FarmCard from "@/src/components/farmCard";
import PlusBtn from "@/src/components/plusBtn";
import DropdownBtn from "@/src/components/dropdownBtn";
import CropSeasonSlider from "@/src/components/cropSeasonSlider";

type FieldType = "plan" | "season";

const initialState: { [key in FieldType]: string } = {
  plan: "",
  season: "",
};

interface Farm {
  id: string;
  title: string;
  address: string;
  size: number;
  cropType: CropType;
}

const farms: Farm[] = [
  {
    id: "11",
    title: "Farm One",
    address: "Location One",
    size: 160,
    cropType: "sugarcane",
  },
  {
    id: "12",
    title: "Farm two",
    address: "Location two",
    size: 260,
    cropType: "wheat",
  },
];
const planStatus = [
  "planStatus 1",
  "planStatus 2",
  "planStatus 3",
  "planStatus 4",
  "planStatus 5",
  "planStatus 6",
  "planStatus 7",
];

const season = [
  "season 1",
  "season 2",
  "season 3",
  "season 4",
  "season 5",
  "season 6",
];

const cropsSeasonList: CropsSeasonListProps[] = [
  {
    farmLocation: "Farm1: Barka,Oman ",
    crops: "rice/sugarcane/wheat",
    season: "2022 - 2023",
    status: "unpaid",
  },
  {
    farmLocation: "Farm10: Jebel sifah,Oman ",
    crops: "strawberry",
    season: "2022 - 2023",
    status: "paid",
  },
  {
    farmLocation: "Farm15: Jebel sifah,Oman ",
    crops: "rice",
    season: "2022 - 2023",
    status: "unpaid",
  },
  {
    farmLocation: "Farm18: Barka,Oman ",
    crops: "wheat/sugarcane",
    season: "2022 - 2023",
    status: "paid",
  },
];

const PlanningAndRotation = () => {
  const [state, setState] = useState(initialState);
  const dispatch = useAppDispatch();

  const { t } = useTranslation("translation", {
    keyPrefix: "planningAndRotationScreen",
  });

  const fields: { type: FieldType; data: string[] }[] = [
    { type: "plan", data: planStatus },
    { type: "season", data: season },
  ];

  const updateState = (key: FieldType, value: string) =>
    setState((prev) => ({ ...prev, [key]: value }));

  const logoutHandler = () => {
    dispatch(setUserSession(false));
  };

  return (
    <SafeAreaWrapper noPaddingTop noPaddingBottom>
      <MainHeader icon={menu} onPress={logoutHandler} />
      <AppText size={"2XL"} font={"BOLD"} style={[GST.MT5, GST.MX3]}>
        {t("planning")}
      </AppText>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.farmCardContainer}
      >
        {farms.length > 0 &&
          farms.map((item, index) => (
            <FarmCard
              {...item}
              key={item.title + index}
              cropTitle={item.cropType}
              size={t("acres", { size: item?.size })}
              containerStyle={[GST.MX3, GST.MR1, GST.MT3]}
              onPress={() => null}
            />
          ))}
      </ScrollView>
      <PlusBtn
        title={t("requestPlan")}
        containerStyle={GST.MT1}
        onPress={() => navigate("PLANNING_STEP_1")}
      />
      <View style={[GST.MX3, GST.MT5]}>
        {fields.map(({ type, data }) => (
          <DropdownBtn
            key={type}
            data={data}
            value={state[type] as string}
            label={t(type + "Label")}
            placeholder={t(type + "Placeholder")}
            onSelect={(value: string) => updateState(type, value)}
          />
        ))}
      </View>
      <CropSeasonSlider data={cropsSeasonList} />
    </SafeAreaWrapper>
  );
};

const styles = StyleSheet.create({
  farmContainer: {
    flexGrow: 1,
  },
  farmCardContainer: {
    height: "65%",
  },
});

export default PlanningAndRotation;
