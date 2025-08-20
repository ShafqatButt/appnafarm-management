import AppText from "@/src/components/appText";
import MainHeader from "@/src/components/mainHeader";
import PlusBtn from "@/src/components/plusBtn";
import SafeAreaWrapper from "@/src/components/safeAreaWrapper";
import { GST } from "@/src/theme/globalStyles";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ScrollView, View, StyleSheet } from "react-native";
import DropdownBtn from "@/src/components/dropdownBtn";
import DateFieldBtn from "@/src/components/dateFieldBtn";
import { menu } from "@/src/assets/icons";
import { useAppDispatch } from "@/src/redux/hooks";
import { setUserSession } from "@/src/redux/slices/mainSlice";
import FarmCard from "@/src/components/farmCard";
import { COLORS } from "@/src/theme/colors";
import { WP } from "@/src/theme/responsive";

type FieldType = "startDate" | "endDate" | "account" | "item" | "payment";

const initialState: { [key in FieldType]: string | Date } = {
  startDate: new Date(),
  endDate: new Date(),
  account: "",
  item: "",
  payment: "",
};

const account = [
  "status 1",
  "status 2",
  "status 3",
  "status 4",
  "status 5",
  "status 6",
];

const item = ["season 1", "season 2", "season 3", "season 4", "season 5"];

const payment = ["season 1", "season 2", "season 3", "season 4"];

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

const AgriBook = () => {
  const [state, setState] = useState(initialState);
  const dispatch = useAppDispatch();
  const { t } = useTranslation("translation", {
    keyPrefix: "agriBookScreen",
  });

  const fields: { type: FieldType; data: string[] }[] = [
    { type: "account", data: account },
    { type: "item", data: item },
    { type: "payment", data: payment },
  ];

  const updateState = (key: FieldType, value: string | Date) =>
    setState((prev) => ({ ...prev, [key]: value }));

  const logoutHandler = () => {
    dispatch(setUserSession(false));
  };

  return (
    <SafeAreaWrapper noPaddingTop noPaddingBottom>
      <MainHeader icon={menu} onPress={logoutHandler} />
      <ScrollView>
        <AppText size={"2XL"} font={"BOLD"} style={[GST.MT5, GST.MX3]}>
          {t("title")}
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
          containerStyle={GST.MT3}
          onPress={() => null}
        />
        <View style={[GST.MT5, GST.MX3]}>
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
        <View style={styles.dateFieldContainer}>
          <DateFieldBtn
            date={state.startDate as Date}
            label={t("startDateLabel")}
            onSelect={(date) => updateState("startDate", date)}
            containerStyle={styles.containerStyle}
          />
          <DateFieldBtn
            placeholder={t("Select Date")}
            date={state.endDate as Date}
            label={t("endDateLabel")}
            onSelect={(date) => updateState("endDate", date)}
            containerStyle={styles.containerStyle}
          />
        </View>
      </ScrollView>
    </SafeAreaWrapper>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  farmCardContainer: {
    flexGrow: 0,
  },
  containerStyle: {
    width: WP(45),
  },
  dateFieldContainer: {
    ...GST.MX3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default AgriBook;
