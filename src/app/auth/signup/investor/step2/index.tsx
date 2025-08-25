import { StyleSheet, Text, View } from "react-native";
import React, { useRef, useState } from "react";
import SafeAreaWrapper from "@/src/components/safeAreaWrapper";
import { styles } from "./styles";
import InvestorHeader from "@/src/components/investorHeader";
import ActionBtn from "@/src/components/actionBtn";
import { useTranslation } from "react-i18next";
import { arrowBack, arrowRight } from "@/src/assets/icons";
import { GST } from "@/src/theme/globalStyles";
import AppText from "@/src/components/appText";
import Input from "@/src/components/input";
import PrimaryBtn from "@/src/components/primaryBtn";
import { Formik, FormikProps } from "formik";
import * as Yup from "yup";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import InvestorSubHeader from "@/src/components/investorSubHeader";
import { Href, router } from "expo-router";

const initialValues = {
  name: "",
  country: "",
  address: "",
};

const InvestorStep2 = () => {
  const formikRef = useRef<FormikProps<typeof initialValues>>(null);

  const { t } = useTranslation("translation", {
    keyPrefix: "investorStep2Screen",
  });

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("nameRequired"),
    country: Yup.string().required("countryRequired"),
    address: Yup.string().required("addressRequired"),
  });

  const submitHandler = ({ name, country, address }: typeof initialValues) => {
    router.push("auth/signUp/investor/step3" as Href);
  };
  return (
    <SafeAreaWrapper
      noPaddingTop
      noPaddingBottom
      containerStyle={styles.wrapper}
    >
      <InvestorHeader progress={0.5} />
      <View style={styles.bottomContainer}>
        <InvestorSubHeader
          onPress={() => router.push("auth/signUp/investor/step3" as Href)}
          canGoBack
          title={t("employed")}
          description={t("detail")}
        />
        <Formik
          innerRef={formikRef}
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={submitHandler}
        >
          {({ values, errors, touched, handleChange, handleSubmit }) => (
            <KeyboardAwareScrollView
              contentContainerStyle={GST.FLEX_GROW}
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps={"always"}
            >
              <Input
                label={t("name")}
                value={values.name}
                onChangeText={handleChange("name")}
                mainContainerStyle={[GST.MX3, GST.MT7]}
                error={touched.name && errors.name ? errors.name : ""}
                autoCapitalize={"words"}
              />
              <Input
                label={t("country")}
                value={values.country}
                onChangeText={handleChange("country")}
                mainContainerStyle={[GST.MX3, GST.MT1]}
                error={touched.country && errors.country ? errors.country : ""}
                autoCapitalize={"words"}
              />
              <Input
                label={t("address")}
                value={values.address}
                onChangeText={handleChange("address")}
                mainContainerStyle={[GST.MX3, GST.MT1]}
                error={touched.address && errors.address ? errors.address : ""}
                autoCapitalize={"words"}
              />
              <View style={[GST.SUBMIT_BTN_CONTAINER, GST.PX3]}>
                <PrimaryBtn
                  title={"Continue"}
                  onPress={handleSubmit}
                  disabled={!values.name || !values.country || !values.address}
                />
              </View>
            </KeyboardAwareScrollView>
          )}
        </Formik>
      </View>
    </SafeAreaWrapper>
  );
};

export default InvestorStep2;
