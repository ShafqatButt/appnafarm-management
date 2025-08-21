import { View } from "react-native";
import React, { useState } from "react";
import SafeAreaWrapper from "@/src/components/safeAreaWrapper";
import MainHeader from "@/src/components/mainHeader";
import SubHeader from "../components/subHeader";
import { useTranslation } from "react-i18next";
import BillCard from "./components/billCard";
import { GST } from "@/src/theme/globalStyles";
import DropdownBtn from "@/src/components/dropdownBtn";
import Input from "@/src/components/input";
import PrimaryBtn from "@/src/components/primaryBtn";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { menu } from "@/src/assets/icons";

type FieldType = "method";

const initialState: { [key in FieldType]: string } = {
  method: "",
};

const method = [
  "Method 1",
  "Method 2",
  "Method 3",
  "Method 4",
  "Method 5",
  "Method 6",
];

const PlanningStep4 = () => {
  const [state, setState] = useState(initialState);
  const [bill, setBill] = useState(50);
  const [value, setValue] = useState("");

  const field: { type: FieldType; data: string[] }[] = [
    { type: "method", data: method },
  ];

  const { t } = useTranslation("translation", {
    keyPrefix: "planningStep4Screen",
  });

  const updateState = (key: FieldType, value: string) =>
    setState((prev) => ({ ...prev, [key]: value }));

  const submitHandler = () => {};

  const saveHandler = () => {};

  return (
    <SafeAreaWrapper noPaddingTop noPaddingBottom>
      <MainHeader icon={menu} />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={true}
        scrollEnabled
        showsVerticalScrollIndicator={false}
      >
        <SubHeader
          title={t("title")}
          showProgress={1}
          isDescription
          description={t("description")}
        />
        <BillCard bill={bill} />
        <View style={[GST.MX3, GST.MT5]}>
          {field.map(({ type, data }) => (
            <DropdownBtn
              key={type}
              data={data}
              value={state[type] as string}
              label={t("label")}
              placeholder={t("placeholder")}
              onSelect={(value: string) => updateState(type, value)}
            />
          ))}
        </View>

        <Input
          label={t("coupan")}
          value={value}
          onChangeText={(item) => setValue(item)}
          mainContainerStyle={[GST.MT1, GST.MX3]}
        />

        <View style={[GST.MX3, GST.MT10]}>
          <PrimaryBtn title={"Continue"} onPress={submitHandler} />
        </View>
        <View style={[GST.MX3, GST.MT2]}>
          <PrimaryBtn title={"Save"} onPress={saveHandler} />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaWrapper>
  );
};

export default PlanningStep4;
