import AuthHeader from "@/src/components/authHeader";
import BackBtn from "@/src/components/backBtn";
import Input from "@/src/components/input";
import PrimaryBtn from "@/src/components/primaryBtn";
import SafeAreaWrapper from "@/src/components/safeAreaWrapper";
import ProgressBar from "@/src/components/progressBar";
import { getPlainNumber, showToast } from "@/src/utils/helpers";
import { GST } from "@/src/theme/globalStyles";
import { ANDROID } from "@/src/utils/constants";
import { Formik, FormikProps } from "formik";
import { AsYouType, isValidPhoneNumber } from "libphonenumber-js";
import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as Yup from "yup";
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";
import { setUser } from "@/src/redux/slices/mainSlice";
import LoadingIndicator from "@/src/components/loadingIndicator";
import { API } from "@/src/services/api";
import { router, useLocalSearchParams } from "expo-router";

const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
};

const asYouType = new AsYouType("PK");

const SignupStep2 = () => {
  const [keyPress, setKeyPress] = useState("");
  const [loading, setLoading] = useState(false);

  const params = useLocalSearchParams();

  const { userType } = params;
  const formikRef = useRef<FormikProps<typeof initialValues>>(null);

  const { user } = useAppSelector((state) => state.main);

  const dispatch = useAppDispatch();

  const { t } = useTranslation("translation", {
    keyPrefix: "signupStep2Screen",
  });

  const validationSchema = Yup.object().shape({
    phoneNumber: Yup.string()
      .required(t("phoneRequired"))
      .test("phoneTest", t("invalidPhone"), (value: any) =>
        isValidPhoneNumber(value.trim(), "PK")
      ),
    email: Yup.string().email("invalidEmail"),
    name: Yup.string().required(t("nameRequired")),
  });

  const submitHandler = async ({
    phoneNumber,
    email,
    name,
  }: typeof initialValues) => {
    const plainNumber = getPlainNumber(phoneNumber);
    setLoading(true);
    const params: any = {
      name: String(name),
      phone_number: String(plainNumber),
      email: String(email),
      user_type: String(user?.type),
    };
    try {
      const res = await API.SINGUP(params);
      if (res?.status === 200) {
        showToast("Success", res?.data?.message, "success");
        dispatch(setUser({ ...user, name, phone: plainNumber, email }));
        router.push({
          pathname: "/signup/step3",
          params: {
            plainNumber,
          },
        });
      }
    } catch (error: any) {
      showToast("Error", error?.response?.data?.error, "error");
    } finally {
      setLoading(false);
    }
  };

  const phoneNumberHandler = (phoneNumber: string) => {
    let formattedNumber = phoneNumber;
    if (keyPress !== "Backspace") {
      asYouType.reset();
      formattedNumber = asYouType.input(phoneNumber);
    }
    formikRef.current?.setFieldValue("phoneNumber", formattedNumber);
    ANDROID && keyPress === "Backspace" && setKeyPress("");
  };

  return (
    <SafeAreaWrapper>
      <View style={[GST.FLEX, GST.PX3, GST.MT4]}>
        <ProgressBar progress={0.5} />
        <BackBtn />
        <AuthHeader
          title={t("title")}
          subTitle={t("subTitle")}
          containerStyle={GST.MB10}
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
                label={t("nameFieldLabel")}
                placeholder={t("nameFieldPlaceholder")}
                value={values.name}
                autoCapitalize={"words"}
                onChangeText={handleChange("name")}
                error={touched.name && errors.name ? errors.name : ""}
              />
              <Input
                label={t("emailFieldLabel")}
                placeholder={t("emailFieldPlaceholder")}
                value={values.email}
                autoCapitalize={"none"}
                keyboardType={"email-address"}
                onChangeText={handleChange("email")}
                error={touched.email && errors.email ? errors.email : ""}
              />
              <Input
                label={t("phoneFieldLabel")}
                placeholder={t("phoneFieldPlaceholder")}
                value={values.phoneNumber}
                keyboardType={"phone-pad"}
                onChangeText={phoneNumberHandler}
                error={
                  touched.phoneNumber && errors.phoneNumber
                    ? errors.phoneNumber
                    : ""
                }
                onKeyPress={(e) => setKeyPress(e.nativeEvent.key)}
              />
              <View style={GST.SUBMIT_BTN_CONTAINER}>
                <PrimaryBtn
                  disabled={!values.name || !values.phoneNumber}
                  title={t("submitBtnLabel")}
                  onPress={handleSubmit}
                />
              </View>
            </KeyboardAwareScrollView>
          )}
        </Formik>
      </View>
      <LoadingIndicator visible={loading} />
    </SafeAreaWrapper>
  );
};

export default SignupStep2;
