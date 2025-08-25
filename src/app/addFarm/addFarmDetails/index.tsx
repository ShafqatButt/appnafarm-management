import AppText from "@/src/components/appText";
import DateFieldBtn from "@/src/components/dateFieldBtn";
import DropdownBtn from "@/src/components/dropdownBtn";
import LoadingIndicator from "@/src/components/loadingIndicator";
import PrimaryBtn from "@/src/components/primaryBtn";
import ProgressBar from "@/src/components/progressBar";
import SafeAreaWrapper from "@/src/components/safeAreaWrapper";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { API } from "@/src/services/api";
import { GST } from "@/src/theme/globalStyles";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ScrollView, View } from "react-native";
import moment from "moment";
import { showToast } from "@/src/utils/helpers";
import { Href, router, useLocalSearchParams } from "expo-router";

type FieldType = "date" | "method" | "variety" | "type" | "source" | "stage";

const initialState: { [key in FieldType]: string | Date } = {
  date: new Date(),
  method: "",
  variety: "",
  type: "",
  source: "",
  stage: "",
};

const AddFarmDetails = () => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [methods, setMethods] = useState<Enums[]>([]);
  const [types, setTypes] = useState<Enums[]>([]);
  const [sources, setSources] = useState<Enums[]>([]);
  const [varieties, setVarieties] = useState<Enums[]>([]);
  const [cropStage, setCropStage] = useState<Enums[]>([]);
  const params = useLocalSearchParams();
  const { crop, size, location, latitude, longitude, name, marker } = params;

  const { t } = useTranslation("translation", {
    keyPrefix: "addFarmDetailsScreen",
  });

  useFocusEffect(
    React.useCallback(() => {
      getFarmEnums();
    }, [])
  );

  const getFarmEnums = async () => {
    try {
      const res: GetEnumsReq = await API.GET_FARM_ENUMS();
      if (res?.status === 200) {
        showToast("Success", res?.statusText, "success");
        setMethods(res?.data?.sowing_method as []);
        setTypes(res?.data?.soil_type as []);
        setSources(res?.data?.irrigation_source as []);
        setVarieties(res?.data?.seed_variety as []);
        setCropStage(res?.data?.crop_stage as []);
      }
    } catch (error) {
      showToast("Error", "Something went wrong", "error");
    } finally {
    }
  };

  const fields: { type: FieldType; data: string[] }[] = [
    { type: "method", data: methods as [] },
    { type: "variety", data: varieties as [] },
    { type: "type", data: types as [] },
    { type: "source", data: sources as [] },
    { type: "stage", data: cropStage as [] },
  ];

  const submitHandler = async () => {
    setLoading(true);
    const params = new FormData();
    params.append("size", String(size));
    params.append(
      "sowing_date",
      String(moment(state?.date).format("YYYY-MM-DD"))
    );
    params.append("latitude", String(latitude));
    params.append("longitude", String(longitude));
    params.append("location", String(location));
    params.append("irrigation_source", String(state?.source));
    params.append("crop", String(crop));
    params.append("sowing_method", String(state?.method));
    params.append("seed_variety", String(state?.variety));
    params.append("soil_type", String(state?.type));
    params.append("crop_stage", String(state?.stage));
    params.append("name", String(name));
    params.append("farm_configuration", JSON.stringify(marker));
    try {
      const res: AddFarmsDetailsReq = await API.ADD_FARM_DETAILS(params);
      showToast("Success", res?.data?.message, "success");
      router.push("appnafarm" as Href);
    } catch (error: any) {
      showToast("Error", error?.response?.data?.message, "error");
    } finally {
      setLoading(false);
    }
  };

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
