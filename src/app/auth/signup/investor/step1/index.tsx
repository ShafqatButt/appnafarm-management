import { View } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import InvestorHeader from "@/src/components/investorHeader";
import ActionBtn from "@/src/components/actionBtn";
import { arrowRight } from "@/src/assets/icons";
import { useTranslation } from "react-i18next";
import AppText from "@/src/components/appText";
import { GST } from "@/src/theme/globalStyles";
import SelectBtn from "@/src/components/selectBtn";
import SafeAreaWrapper from "@/src/components/safeAreaWrapper";
import PrimaryBtn from "@/src/components/primaryBtn";
import InvestorSubHeader from "@/src/components/investorSubHeader";

const InvestorStep1 = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "InvestorSetp1Screen",
  });

  const employment = [
    {
      title: "Employed",
      id: 0,
    },
    {
      title: "Self-Employed",
      id: 1,
    },
    {
      title: "Student",
      id: 2,
    },
    {
      title: "Homemaker",
      id: 3,
    },
    {
      title: "Retired",
      id: 4,
    },
  ];
  const [selectedEmployment, setSelectedEmployment] = useState(employment[0]);
  return (
    <SafeAreaWrapper noPaddingTop noPaddingBottom>
      <View style={styles.containerStyle}>
        <InvestorHeader progress={0.25} />
        <View style={styles.employmentContainer}>
          <InvestorSubHeader
            onPress={() => navigate("INVESTOR_STEP_2")}
            title={t("title")}
            description={t("description")}
          />
          <View style={[GST.MT8, GST.MX3]}>
            {employment.map((item) => (
              <SelectBtn
                key={item.id}
                title={item.title}
                isSelected={item.id == selectedEmployment.id}
                onPress={() => setSelectedEmployment(item)}
              />
            ))}
          </View>
          <View style={[GST.SUBMIT_BTN_CONTAINER, GST.PX3]}>
            <PrimaryBtn
              title={"Continue"}
              onPress={() => navigate("INVESTOR_STEP_2")}
            />
          </View>
        </View>
      </View>
    </SafeAreaWrapper>
  );
};

export default InvestorStep1;
