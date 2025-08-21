import { ScrollView, View } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import SafeAreaWrapper from "@/src/components/safeAreaWrapper";
import MainHeader from "@/src/components/mainHeader";
import AppText from "@/src/components/appText";
import { useTranslation } from "react-i18next";
import { GST } from "@/src/theme/globalStyles";
import DropdownBtn from "@/src/components/dropdownBtn";
import PrimaryBtn from "@/src/components/primaryBtn";
import SubHeader from "../components/subHeader";
import FarmCard from "@/src/components/farmCard";
import { menu } from "@/src/assets/icons";

type FieldType = "season" | "tenure";

const initialState: { [key in FieldType]: string } = {
  season: "",
  tenure: "",
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

const season = [
  "season 1",
  "season 2",
  "season 3",
  "season 4",
  "season 5",
  "season 6",
];

const tenure = [
  "tenure 1",
  "tenure 2",
  "tenure 3",
  "tenure 4",
  "tenure 5",
  "tenure 6",
];

const PlannignSetp1 = () => {
  const [state, setState] = useState(initialState);

  const { t } = useTranslation("translation", {
    keyPrefix: "planningStep1Screen",
  });

  const fields: { type: FieldType; data: string[] }[] = [
    { type: "season", data: season },
    { type: "tenure", data: tenure },
  ];

  const updateState = (key: FieldType, value: string) =>
    setState((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = () => {
    navigate("PLANNING_STEP_2");
  };

  return (
    <SafeAreaWrapper noPaddingTop noPaddingBottom>
      <MainHeader icon={menu} />
      {/* <SubHeader title={t("title")} showProgress={0.25} /> */}
      <AppText size={"BASE"} style={[GST.MT5, GST.MX3]}>
        {t("select")}
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
      <View style={[GST.SUBMIT_BTN_CONTAINER, GST.PX3]}>
        <PrimaryBtn title={"Continue"} onPress={handleSubmit} />
      </View>
    </SafeAreaWrapper>
  );
};

export default PlannignSetp1;
