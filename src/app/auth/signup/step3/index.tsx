import AppText from "@/src/components/appText";
import AuthHeader from "@/src/components/authHeader";
import BackBtn from "@/src/components/backBtn";
import PrimaryBtn from "@/src/components/primaryBtn";
import SafeAreaWrapper from "@/src/components/safeAreaWrapper";
import ProgressBar from "@/src/components/progressBar";
import { GST } from "@/src/theme/globalStyles";
import React, { useState } from "react";
import { Text, View } from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { styles } from "./styles";
import { useTimer } from "react-timer-hook";
import { addSeconds } from "date-fns";
import Pressable from "@/src/components/pressable";
import { useTranslation } from "react-i18next";
import { showToast } from "@/src/utils/helpers";
import LoadingIndicator from "@/src/components/loadingIndicator";
import { useAppSelector } from "@/src/redux/hooks";
import { API } from "@/src/services/api";
import { router } from "expo-router";

const CELL_COUNT = 6;

const SignupStep3 = ({ route }: any) => {
  const { plainNumber } = route?.params;
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  const { user } = useAppSelector((state) => state.main);
  const password = 123456;

  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [enableResend, setEnableResend] = useState(false);

  const { t } = useTranslation("translation", {
    keyPrefix: "signupStep3Screen",
  });

  const { seconds, restart } = useTimer({
    expiryTimestamp: addSeconds(new Date(), 60),
    onExpire: () => setEnableResend(true),
  });

  const submitHandler = async () => {
    setLoading(true);
    const params: any = {
      phone_number: String(plainNumber),
      otp: "111111",
      password: String(password),
    };
    try {
      const res = await API.VERIFY_OTP(params);
      if (res?.status === 200) {
        showToast("Success", res?.data?.message, "success");
        router.push({
          pathname: "/auth/signup/step4",
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

  const resendOTPHandler = () => {
    restart(addSeconds(new Date(), 60));
    setEnableResend(false);
    showToast(t("otpToastTitle"), t("otpToastSubTitle"), "success");
  };

  return (
    <SafeAreaWrapper>
      <View style={[GST.FLEX, GST.PX3, GST.MT4]}>
        <ProgressBar progress={0.75} />
        <BackBtn />
        <AuthHeader
          title={t("title")}
          subTitle={t("subTitle", { plainNumber })}
          containerStyle={GST.MB6}
        />
        <AppText size={"SM"} font={"SEMI_BOLD"}>
          {t("enterOtp")}
        </AppText>
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType={"number-pad"}
          textContentType={"oneTimeCode"}
          renderCell={({ index, symbol, isFocused }) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}
            >
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
        <View style={GST.FLEX_ROW_SPACED}>
          <AppText font={"MEDIUM"}>{t("codeNotReceived")}</AppText>
          {enableResend ? (
            <Pressable onPress={resendOTPHandler}>
              <AppText size={"SM"} color={"CAMEL_BROWN"} font={"MEDIUM"}>
                {t("resendOtp")}
              </AppText>
            </Pressable>
          ) : (
            <>
              {seconds > 0 && (
                <View style={GST.FLEX_ROW}>
                  <AppText size={"SM"} font={"MEDIUM"}>
                    {t("retry")}
                  </AppText>
                  <AppText size={"SM"} color={"CAMEL_BROWN"} font={"MEDIUM"}>
                    {seconds}s
                  </AppText>
                </View>
              )}
            </>
          )}
        </View>
        <View style={GST.SUBMIT_BTN_CONTAINER}>
          <PrimaryBtn
            disabled={value.length < 6}
            title={t("submitBtnLabel")}
            onPress={submitHandler}
          />
        </View>
      </View>
      <LoadingIndicator visible={loading} />
    </SafeAreaWrapper>
  );
};

export default SignupStep3;
