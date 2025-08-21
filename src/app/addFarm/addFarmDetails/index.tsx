import AppText from "@/src/components/appText";
import DateFieldBtn from "@/src/components/dateFieldBtn";
import DropdownBtn from "@/src/components/dropdownBtn";
import LoadingIndicator from "@/src/components/loadingIndicator";
import PrimaryBtn from "@/src/components/primaryBtn";
import ProgressBar from "@/src/components/progressBar";
import SafeAreaWrapper from "@/src/components/safeAreaWrapper";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { GST } from "@/src/theme/globalStyles";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ScrollView, View } from "react-native";
import moment from "moment";
import { showToast } from "@/src/utils/helpers";

type FieldType = "date" | "method" | "variety" | "type" | "source" | "stage";

const initialState: { [key in FieldType]: string | Date } = {
  date: new Date(),
  method: "",
  variety: "",
  type: "",
  source: "",
  stage: "",
};

const AddFarmDetails = ({ route }: any) => {
  const navigation: any = useNavigation();
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [methods, setMethods] = useState<Enums[]>([]);
  const [types, setTypes] = useState<Enums[]>([]);
  const [sources, setSources] = useState<Enums[]>([]);
  const [varieties, setVarieties] = useState<Enums[]>([]);
  const [cropStage, setCropStage] = useState<Enums[]>([]);
  const { crop, size, location, latitude, longitude, name, marker } =
    route.params;

  const { t } = useTranslation("translation", {
    keyPrefix: "addFarmDetailsScreen",
  });

  useFocusEffect(
    React.useCallback(() => {
      getFarmEnums();
    }, [])
  );

  const getFarmEnums = async () => {};

  const fields: { type: FieldType; data: string[] }[] = [
    { type: "method", data: methods as [] },
    { type: "variety", data: varieties as [] },
    { type: "type", data: types as [] },
    { type: "source", data: sources as [] },
    { type: "stage", data: cropStage as [] },
  ];

  const submitHandler = async () => {};

  const updateState = (key: FieldType, value: string | Date) =>
    setState((prev) => ({ ...prev, [key]: value }));

  return (
    <SafeAreaWrapper>
      <ScrollView contentContainerStyle={[GST.FLEX_GROW, GST.PX3, GST.MT4]}>
        <AppText size={"XL"} font={"BOLD"} style={GST.MB1}>
          {t("title")}
        </AppText>
        <ProgressBar progress={1} />
        <AppText size={"BASE"} style={GST.MB4}>
          {t("detailsSubTitle")}
        </AppText>
        <DateFieldBtn
          date={state.date as Date}
          label={t("dateLabel")}
          onSelect={(date) => updateState("date", date)}
        />
        {fields.map(({ type, data }) => (
          <DropdownBtn
            key={type}
            data={data}
            value={state[type] as string}
            label={t(type + "Label")}
            placeholder={t(type + "Placeholder")}
            sheetTitle={t(type + "SheetTitle")}
            onSelect={(value: string) => updateState(type, value)}
          />
        ))}
        <View style={GST.SUBMIT_BTN_CONTAINER}>
          <PrimaryBtn
            disabled={
              !state.method ||
              !state.variety ||
              !state.type ||
              !state.source ||
              !state.stage
            }
            title={"Continue"}
            onPress={submitHandler}
          />
        </View>
      </ScrollView>
      <LoadingIndicator visible={loading} />
    </SafeAreaWrapper>
  );
};

export default AddFarmDetails;
