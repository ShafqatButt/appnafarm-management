import { ScrollView, StatusBar, View } from "react-native";
import React, { useRef, useState } from "react";
import SafeAreaWrapper from "@/src/components/safeAreaWrapper";
import { COLORS } from "@/src/theme/colors";
import LinearGradient from "react-native-linear-gradient";
import AppIcon from "@/src/components/appIcon";
import { bell, coinHand, menu, search } from "@/src/assets/icons";
import Input from "@/src/components/input";
import { styles } from "./styles";
import { useTranslation } from "react-i18next";
import { RF } from "@/src/theme/responsive";
import AppText from "@/src/components/appText";
import { GST } from "@/src/theme/globalStyles";
import Pressable from "@/src/components/pressable";
import DailyActivityRecord from "./components/dailyActivityRecord";
import FilterModal from "./components/filterModal";
import { Modalize } from "react-native-modalize";
import FarmCard from "@/src/components/farmCard";

export type FieldType =
  | "fromDate"
  | "toDate"
  | "activityType"
  | "item"
  | "status";

const initialState: { [key in FieldType]: string | Date } = {
  fromDate: "",
  toDate: "",
  activityType: "",
  item: "",
  status: "",
};

const { GREEN_250, WHITE } = COLORS;

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

const activityRecord: ActivityRecord[] = [
  {
    date: "Jan 6, 2024",
    activityType: "Fertilization",
    description: "Urea applied",
  },
  {
    date: "Dec 20, 2024",
    activityType: "Land preparation",
    description: "Levelling",
  },
  {
    date: "Jan 6, 2024",
    activityType: "Land Preparation",
    description: "Custom",
  },
  {
    date: "Jan 5, 2024",
    activityType: "Labour-sowing",
    description: "Custom",
  },
  {
    date: "Jan 5, 2024",
    activityType: "Labour",
    description: "Custom",
  },
  {
    date: "Jan 5, 2024",
    activityType: "Sale",
    description: "Custom",
  },
  {
    date: "Jan 4, 2024",
    activityType: "Sale",
    description: "Custom",
  },
];

const activityType = [
  "activity 1",
  "activity 2",
  "activity 3",
  "activity 4",
  "activity 5",
  "activity 6",
  "activity 7",
  "activity 8",
  "activity 9",
  "activity 10",
  "activity 11",
  "activity 12",
  "activity 13",
];

const item = [
  "item 1",
  "item 2",
  "item 3",
  "item 4",
  "item 5",
  "item 6",
  "item 7",
  "item 8",
  "item 9",
  "item 10",
  "item 11",
  "item 12",
];

const status = [
  "status 1",
  "status 2",
  "status 3",
  "status 4",
  "status 5",
  "status 6",
  "status 7",
  "status 8",
  "status 9",
];

const AddDailyActivity = () => {
  const [selectedCard, setSelectedCard] = useState<string[] | "">([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [state, setState] = useState(initialState);
  const { t } = useTranslation("translation", {
    keyPrefix: "addDailyActivityScreen",
  });

  const fields: { type: FieldType; data: string[] }[] = [
    { type: "activityType", data: activityType },
    { type: "item", data: item },
    { type: "status", data: status },
  ];

  const updateState = (key: FieldType, value: string | Date) =>
    setState((prev) => ({ ...prev, [key]: value }));

  const handleSelectAll = () => {
    if (farms.length === selectedCard.length) {
      setSelectedCard([]);
    } else {
      const farmsId = farms.map((item) => item?.id);
      setSelectedCard(farmsId);
    }
  };

  const toggleFilterModal = () => {
    setModalVisible(!isModalVisible);
  };

  const sheetRef = useRef<Modalize>(null);

  const openSheet = () => sheetRef.current?.open();

  const closeSheet = () => sheetRef.current?.close();

  const isFarmSelected = (id: string) => selectedCard.includes(id);

  return (
    <SafeAreaWrapper>
      <StatusBar backgroundColor={GREEN_250} />
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{ height: RF(210) }}
        colors={[GREEN_250, WHITE]}
      >
        <View style={styles.headerContainer}>
          <AppIcon
            path={menu}
            size={32}
            onPress={() => navigationRef?.current?.goBack()}
          />
          <Input
            placeholder={t("searchBarPlaceholder")}
            mainContainerStyle={styles.searchBarMainContainer}
            containerStyle={styles.searchBarContainer}
            rightIcon={search}
          />
          <AppIcon path={bell} size={32} />
        </View>
        <AppText size={"1XL"} font={"BOLD"} style={[GST.MT7, GST.MX3]}>
          {t("dailyOperations")}
        </AppText>
        <Pressable
          style={styles.activityBtnContainer}
          onPress={() => navigate("ADD_DAILY_OPERATIONS")}
        >
          <AppIcon path={coinHand} size={24} />
          <AppText size={"BASE"} font={"MEDIUM"} style={GST.MT1}>
            {t("addDailyBtnHeading")}
          </AppText>
        </Pressable>
      </LinearGradient>
      <View style={styles.farmSelectionContainer}>
        <AppText size={"BASE"}>{t("selectFarm")}</AppText>
        <Pressable style={styles.selectBtn} onPress={handleSelectAll}>
          <AppText size={"SM"} color={"GREEN_500"}>
            {farms?.length === selectedCard?.length
              ? t("unSelectAll")
              : t("selectAll")}
          </AppText>
        </Pressable>
      </View>
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
              dailyOperations
              onPressCircle={() => setSelectedCard([item?.id])}
              isSelected={isFarmSelected(item?.id)}
            />
          ))}
      </ScrollView>
      <View style={[GST.FLEX_ROW_SPACED, GST.MT3, GST.MX3]}>
        <AppText>{t("recentRecord")}</AppText>
        <Pressable style={styles.filterBtn} onPress={openSheet}>
          <AppText>{t("filter")}</AppText>
        </Pressable>
      </View>
      <DailyActivityRecord
        data={activityRecord}
        date={t("date")}
        activityType={t("activityType")}
        description={t("description")}
      />
      <FilterModal
        toggleFilterModal={toggleFilterModal}
        data={fields}
        state={state}
        updateState={updateState}
        onPressClose={closeSheet}
        ref={sheetRef}
        onClosePress={closeSheet}
      />
    </SafeAreaWrapper>
  );
};

export default AddDailyActivity;
