import { eye, eyeSlash } from "@/src/assets/icons";
import AuthHeader from "@/src/components/authHeader";
import BackBtn from "@/src/components/backBtn";
import Input from "@/src/components/input";
import PrimaryBtn from "@/src/components/primaryBtn";
import SafeAreaWrapper from "@/src/components/safeAreaWrapper";
import ProgressBar from "@/src/components/progressBar";
import { showToast } from "@/src/utils/helpers";
import { GST } from "@/src/theme/globalStyles";
import { PASSWORD_REGEX } from "@/src/utils/constants";
import { Formik, FormikProps } from "formik";
import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as Yup from "yup";
import { COLORS } from "@/src/theme/colors";
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";
import { setUser, setUserSession } from "@/src/redux/slices/mainSlice";
import { API } from "@/src/services/api";

const initialValues = {
  password: "",
  confirmPassword: "",
};
const { GREEN_500, GRAY_100 } = COLORS;

const SignupStep4 = ({ route }: any) => {
  const { plainNumber } = route?.params;
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState({
    fieldA: false,
    fieldB: false,
  });

  const { user } = useAppSelector((state) => state.main);

  const { t } = useTranslation("translation", {
    keyPrefix: "signupStep4Screen",
  });

  const formikRef = useRef<FormikProps<typeof initialValues>>(null);

  const dispatch = useAppDispatch();

  const toggleShowPassword = (field: "fieldA" | "fieldB") => {
    setShowPassword((prev: any) => ({ ...prev, [field]: !prev[field] }));
  };

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required(t("passwordRequired"))
      .min(8, t("minPasswordCondition"))
      .matches(PASSWORD_REGEX, t("passwordCondition")),
  });

  const submitHandler = async ({ password }: typeof initialValues) => {
    setLoading(true);
    const params: any = {
      phone_number: String(plainNumber),
      password: String(password),
    };
    try {
      const res = await API.UPDATE_PASSWORD(params);
      showToast("Success", res?.data?.message, "success");
      dispatch(setUser({ ...user, token: res?.data?.token }));
      dispatch(setUserSession(true));
    } catch (error: any) {
      showToast("Error", error?.response?.data?.error, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaWrapper>
      <View style={[GST.FLEX, GST.PX3, GST.MT4]}>
        <ProgressBar progress={1} />
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
                label={t("passwordFieldLabel")}
                maxLength={32}
                autoCapitalize={"none"}
                rightIcon={showPassword.fieldA ? eyeSlash : eye}
                value={values.password}
                onRightIconPress={() => toggleShowPassword("fieldA")}
                placeholder={t("passwordFieldPlaceholder")}
                textContentType={"password"}
                onChangeText={handleChange("password")}
                secureTextEntry={!showPassword.fieldA}
                error={
                  touched.password && errors.password ? errors.password : ""
                }
              />
              <View style={GST.SUBMIT_BTN_CONTAINER}>
                <PrimaryBtn
                  disabled={!values.password}
                  title={t("submitBtnLabel")}
                  onPress={handleSubmit}
                />
              </View>
            </KeyboardAwareScrollView>
          )}
        </Formik>
      </View>
    </SafeAreaWrapper>
  );
};

export default SignupStep4;
