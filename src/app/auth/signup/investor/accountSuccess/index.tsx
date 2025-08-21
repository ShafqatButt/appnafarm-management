import { View } from "react-native";
import React from "react";
import { styles } from "./styles";
import SafeAreaWrapper from "@/src/components/safeAreaWrapper";
import AppImage from "@/src/components/appImage";
import { accountSuccessPoster } from "@/src/assets/images";
import { GST } from "@/src/theme/globalStyles";
import AppText from "@/src/components/appText";
import { useTranslation } from "react-i18next";
import PrimaryBtn from "@/src/components/primaryBtn";

const AccountSuccess = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "accountSuccessScreen",
  });
  return (
    <SafeAreaWrapper>
      <View style={styles.imageContainer}>
        <AppImage path={accountSuccessPoster} size={300} />
        <AppText font={"SEMI_BOLD"} size={"2XL"} style={styles.titleText}>
          {t("title")}
        </AppText>
        <AppText
          lineHeight={20}
          center
          style={styles.subTitleText}
          font={"MEDIUM"}
          size={"SM"}
        >
          {t("subTitle")}
        </AppText>
      </View>
      <View style={[GST.SUBMIT_BTN_CONTAINER, GST.PX3]}>
        <PrimaryBtn
          title={"Continue"}
          onPress={() => navigate("INVESTOR_STEP_1")}
        />
      </View>
    </SafeAreaWrapper>
  );
};

export default AccountSuccess;
