import { eye, eyeSlash, whatsApp } from "@/src/assets/icons";
import { logo } from "@/src/assets/images";
import AppImage from "@/src/components/appImage";
import AppText from "@/src/components/appText";
import AuthHeader from "@/src/components/authHeader";
import Input from "@/src/components/input";
import Pressable from "@/src/components/pressable";
import PrimaryBtn from "@/src/components/primaryBtn";
import SafeAreaWrapper from "@/src/components/safeAreaWrapper";
import { useAppDispatch } from "@/src/redux/hooks";
import { API } from "@services/api";
import { GST } from "@/src/theme/globalStyles";
import { ANDROID } from "@/src/utils/constants";
import { getPlainNumber, showToast } from "@/src/utils/helpers";
import { Formik, FormikProps } from "formik";
import { AsYouType, isValidPhoneNumber } from "libphonenumber-js";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { TextInput, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as Yup from "yup";
import { styles } from "./styles";
import LoadingIndicator from "@/src/components/loadingIndicator";
import { setUser, setUserSession } from "@/src/redux/slices/mainSlice";

const initialValues = {
  phoneNumber: "",
  password: "",
};

const asYouType = new AsYouType("PK");

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [keyPress, setKeyPress] = useState("");

  const dispatch = useAppDispatch();

  const { t } = useTranslation("translation", {
    keyPrefix: "loginScreen",
  });

  const passwordInputRef = useRef<TextInput>(null);
  const formikRef = useRef<FormikProps<typeof initialValues>>(null);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const phoneNumberHandler = (phone: string) => {
    let formattedNumber = phone;
    if (keyPress !== "Backspace") {
      asYouType.reset();
      formattedNumber = asYouType.input(phone);
    }
    formikRef.current?.setFieldValue("phoneNumber", formattedNumber);
    ANDROID && keyPress === "Backspace" && setKeyPress("");
  };

  const validationSchema = Yup.object().shape({
    phoneNumber: Yup.string()
      .required(t("phoneRequired"))
      .test("phoneTest", t("invalidPhone"), (value: any) =>
        isValidPhoneNumber(value.trim(), "PK")
      ),
    password: Yup.string().required(t("passwordRequired")),
  });

  const submitHandler = async ({
    phoneNumber,
    password,
  }: typeof initialValues) => {
    const plainNumber = getPlainNumber(phoneNumber);
    setLoading(true);
    const params: any = {
      password: String(password),
      phone_number: String(plainNumber),
    };
    try {
      const res = await API.LOGIN(params);
      showToast("Success", "You have logged in", "success");
      dispatch(setUser(res?.data));
      dispatch(setUserSession(true));
    } catch (error: any) {
      showToast("Error", error?.response?.data?.message, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaWrapper>
      <View style={[GST.FLEX, GST.PX3, GST.MT4]}>
        <AppImage
          path={logo}
          size={100}
          containerStyle={GST.MB4}
          resizeMode={"contain"}
        />
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
                returnKeyType={"next"}
                onKeyPress={(e) => setKeyPress(e.nativeEvent.key)}
                onSubmitEditing={() => passwordInputRef.current?.focus()}
              />
              <Input
                ref={passwordInputRef}
                label={t("passwordFieldLabel")}
                autoCapitalize={"none"}
                placeholder={t("passwordFieldPlaceholder")}
                returnKeyType={"done"}
                onSubmitEditing={handleSubmit as any}
                rightIcon={showPassword ? eyeSlash : eye}
                value={values.password}
                onRightIconPress={toggleShowPassword}
                textContentType={"password"}
                onChangeText={handleChange("password")}
                secureTextEntry={!showPassword}
                error={
                  touched.password && errors.password ? errors.password : ""
                }
                mainContainerStyle={GST.MB2}
              />
              <Pressable style={[GST.ALIGN_END, GST.MB20]}>
                <AppText
                  font={"BOLD"}
                  size={"BASE"}
                  color={"GREEN_500"}
                  style={GST.MB3}
                >
                  {t("forgotPassword")}
                </AppText>
              </Pressable>
              <PrimaryBtn
                title={t("signInBtnLabel")}
                onPress={handleSubmit}
                containerStyle={GST.MB2}
              />
              <View style={GST.FLEX_ROW_SPACED}>
                <AppText size={"BASE"}>{t("newToApp")}</AppText>
                <Pressable
                  onPress={() => {
                    navigate("SIGNUP_STEP_1");
                  }}
                >
                  <AppText font={"BOLD"} size={"LG"} color={"GREEN_500"}>
                    {t("createAccount")}
                  </AppText>
                </Pressable>
              </View>
              <View style={styles.chatBtnContainer}>
                <PrimaryBtn
                  title={t("chatBtnLabel")}
                  icon={whatsApp}
                  onPress={() => null}
                  bgColor={"WHITE"}
                  iconTintColor={"GREEN_500"}
                  titleColor={"GREEN_500"}
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

export default Login;
