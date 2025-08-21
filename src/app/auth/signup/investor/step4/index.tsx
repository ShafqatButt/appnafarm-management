import AppText from "@/src/components/appText";
import InvestorHeader from "@/src/components/investorHeader";
import InvestorSubHeader from "@/src/components/investorSubHeader";
import PrimaryBtn from "@/src/components/primaryBtn";
import SafeAreaWrapper from "@/src/components/safeAreaWrapper";
import { Slider } from "@miblanchard/react-native-slider";
import { useAppDispatch } from "@/src/redux/hooks";
import { setUser, setUserSession } from "@/src/redux/slices/mainSlice";
import { COLORS } from "@/src/theme/colors";
import { GST } from "@/src/theme/globalStyles";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ScrollView, View } from "react-native";
import { styles } from "./styles";

const { WHITE, GREEN_500 } = COLORS;

const InvestorStep4 = () => {
  const [investment, setInvestment] = useState(5000000);
  const [totalReturn, setTotalReturn] = useState(80000);
  const { t } = useTranslation("translation", {
    keyPrefix: "investorStep4Screen",
  });

  const dispatch = useAppDispatch();

  const submittHandler = () => {
    dispatch(
      setUser({
        type: "agriInvestor",
        name: "shafqat",
        phone: "0301 3333333",
        token: "fthbthgthbgtr",
      })
    );
    dispatch(setUserSession(true));
  };

  return (
    <SafeAreaWrapper
      noPaddingTop
      noPaddingBottom
      containerStyle={styles.wrapper}
    >
      <InvestorHeader progress={1} />
      <View style={styles.bottomContainer}>
        <ScrollView showsVerticalScrollIndicator={false} scrollEnabled>
          <InvestorSubHeader
            canGoBack
            onPress={() => null}
            title={t("title")}
            description={t("subTitle")}
          />
          <AppText center font={"BOLD"} size={"LG"} style={GST.MT3}>
            {t("total")}
          </AppText>
          <AppText
            center
            font={"BOLD"}
            size={"4XL"}
            style={GST.MT1}
            color={"GREEN_500"}
          >
            {`USD ${totalReturn.toLocaleString()}`}
          </AppText>
          <AppText center font={"MEDIUM"} size={"SM"} style={GST.MT1}>
            {t("period")}
          </AppText>
          <View style={styles.investmentContainer}>
            <AppText center font={"SEMI_BOLD"} size={"LG"} style={GST.MT4}>
              {t("investment")}
            </AppText>
            <AppText center font={"BOLD"} size={"5XL"} style={GST.MT5}>
              {investment.toLocaleString()}
            </AppText>
            <View style={styles.sliderContainer}>
              <Slider
                minimumValue={1000000}
                maximumValue={10000000}
                minimumTrackTintColor={GREEN_500}
                maximumTrackTintColor={WHITE}
                thumbTintColor={GREEN_500}
                trackStyle={styles.sliderTrack}
                thumbStyle={styles.sliderThumb}
                step={100000}
                value={investment}
                onValueChange={(value) => setInvestment(value[0])}
              />
            </View>
          </View>
          <View style={styles.btnContainer}>
            <PrimaryBtn title={"Continue"} onPress={submittHandler} />
          </View>
        </ScrollView>
      </View>
    </SafeAreaWrapper>
  );
};

export default InvestorStep4;
