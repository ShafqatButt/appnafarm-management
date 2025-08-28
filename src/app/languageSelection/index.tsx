import AuthHeader from "@/src/components/authHeader";
import PrimaryBtn from "@/src/components/primaryBtn";
import SafeAreaWrapper from "@/src/components/safeAreaWrapper";
import SelectBtn from "@/src/components/selectBtn";
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";
import {
  setAuthInitialRoute,
  setPreferredLanguage,
} from "@/src/redux/slices/mainSlice";
import { GST } from "@/src/theme/globalStyles";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { styles } from "./styles";
import { router } from "expo-router";

const languages = [
  { label: "english", code: "en" },
  { label: "arabic", code: "ar" },
  { label: "urdu", code: "ur" },
];

const LanguageSelection = () => {
  const { preferredLanguage } = useAppSelector((state) => state.main);

  const { t } = useTranslation("translation", {
    keyPrefix: "languageSelectionScreen",
  });

  const dispatch = useAppDispatch();

  const submitHandler = () => {
    dispatch(setAuthInitialRoute("/login"));
    router.replace("/login");
  };

  return (
    <SafeAreaWrapper>
      <View style={styles.container}>
        <AuthHeader
          title={t("title")}
          subTitle={t("subTitle")}
          containerStyle={styles.headerContainer}
        />
        {languages.map((item) => (
          <SelectBtn
            key={item.code}
            title={t(item.label)}
            isSelected={item.code === preferredLanguage.code}
            onPress={() => dispatch(setPreferredLanguage(item))}
          />
        ))}
        <View style={GST.SUBMIT_BTN_CONTAINER}>
          <PrimaryBtn title={t("submitBtnLabel")} onPress={submitHandler} />
        </View>
      </View>
    </SafeAreaWrapper>
  );
};

export default LanguageSelection;
