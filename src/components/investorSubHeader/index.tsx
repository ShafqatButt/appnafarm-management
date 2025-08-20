import React from "react";
import ActionBtn from "@/src/components/actionBtn";
import { arrowBack, arrowRight } from "@/src/assets/icons";
import { GST } from "@/src/theme/globalStyles";
import { useTranslation } from "react-i18next";
import AppText from "@/src/components/appText";
import { StyleSheet } from "react-native";
import { FontSizeType } from "@/src/types";
import { router } from "expo-router";

interface Props {
  canGoBack?: boolean;
  onPress: () => void;
  title: string;
  description?: string;
  size?: FontSizeType;
}

const InvestorSubHeader = ({
  canGoBack = false,
  onPress,
  title = "2XL",
  description,
  size,
}: Props) => {
  const { t } = useTranslation("translation", {
    keyPrefix: "investorStep2Screen",
  });
  return (
    <>
      {canGoBack && (
        <ActionBtn
          title={t("back")}
          icon={arrowBack}
          top={25}
          left={10}
          bgColor={"GRAY_600"}
          containerStyle={GST.PY4}
          iconPosition={"left"}
          onPress={() => router.back()}
        />
      )}
      <ActionBtn
        title={t("skip")}
        icon={arrowRight}
        top={25}
        right={10}
        onPress={onPress}
        bgColor={"GRAY_600"}
        containerStyle={GST.PY4}
        iconPosition={"right"}
      />
      <AppText center font={"BOLD"} size={size} style={styles.investorTitle}>
        {title}
      </AppText>
      {!!description && (
        <AppText
          lineHeight={20}
          center
          style={GST.MT1}
          font={"MEDIUM"}
          size={"BASE"}
        >
          {description}
        </AppText>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  investorTitle: {
    marginTop: "28%",
  },
});

export default InvestorSubHeader;
