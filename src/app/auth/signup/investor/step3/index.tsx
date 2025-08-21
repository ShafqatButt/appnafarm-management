import { View } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import SafeAreaWrapper from "@/src/components/safeAreaWrapper";
import InvestorHeader from "@/src/components/investorHeader";
import { useTranslation } from "react-i18next";
import { GST } from "@/src/theme/globalStyles";
import SelectBtn from "@/src/components/selectBtn";
import PrimaryBtn from "@/src/components/primaryBtn";
import InvestorSubHeader from "@/src/components/investorSubHeader";

const InvestorStep3 = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "investorStep3Screen",
  });
  const income = [
    {
      title: "Savings",
      id: 0,
    },
    {
      title: "Investments",
      id: 1,
    },
    {
      title: "Winnings",
      id: 2,
    },
    {
      title: "Inheritance",
      id: 3,
    },
    {
      title: "Others",
      id: 4,
    },
  ];
  const [selectedIncome, setSelectedIncome] = useState(income[0]);
  return (
    <SafeAreaWrapper
      noPaddingTop
      noPaddingBottom
      containerStyle={styles.wrapper}
    >
      <InvestorHeader progress={0.75} />
      <View style={styles.bottomContainer}>
        <InvestorSubHeader
          canGoBack
          onPress={() => navigate("INVESTOR_STEP_4")}
          title={t("title")}
          description={t("subTitle")}
        />
        <View style={[GST.MT8, GST.MX3]}>
          {income.map((item) => (
            <SelectBtn
              key={item.id}
              title={item.title}
              isSelected={item.id == selectedIncome.id}
              onPress={() => setSelectedIncome(item)}
            />
          ))}
        </View>
        <View style={[GST.SUBMIT_BTN_CONTAINER, GST.PX3]}>
          <PrimaryBtn
            title={"Continue"}
            onPress={() => navigate("INVESTOR_STEP_4")}
          />
        </View>
      </View>
    </SafeAreaWrapper>
  );
};

export default InvestorStep3;
