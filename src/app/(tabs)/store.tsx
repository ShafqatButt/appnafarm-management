import {
  contract,
  farm,
  machinery,
  menu,
  other,
  produce,
  response,
} from "@/src/assets/icons";
import AppText from "@/src/components/appText";
import MainHeader from "@/src/components/mainHeader";
import SafeAreaWrapper from "@/src/components/safeAreaWrapper";
import ProfileSubHeader from "@screens/profile/profileSubHeader";
import { GST } from "@/src/theme/globalStyles";
import React from "react";
import { useTranslation } from "react-i18next";
import { View, StyleSheet } from "react-native";
import { useAppDispatch } from "@/src/redux/hooks";
import { setUserSession } from "@/src/redux/slices/mainSlice";
import ShortcutCard from "@/src/components/shortcutCard";
import { COLORS } from "@/src/theme/colors";
import { RF } from "@/src/theme/responsive";

const Store = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation("translation", {
    keyPrefix: "appnaStoreScreen",
  });
  const items = [
    { title: t("produce"), icon: produce },
    { title: t("farm"), icon: farm },
    { title: t("other"), icon: other },
    { title: t("machinery"), icon: machinery },
    { title: t("contract"), icon: contract },
    { title: t("response"), icon: response },
  ];

  const logoutHandler = () => {
    dispatch(setUserSession(false));
  };
  return (
    <SafeAreaWrapper noPaddingTop noPaddingBottom>
      <MainHeader icon={menu} onPress={logoutHandler} />
      <AppText size={"XL"} font={"BOLD"} style={GST.MT5}>
        {t("title")}
      </AppText>
      <View style={[GST.MX3, GST.MT1]}>
        <ProfileSubHeader
          title={t("label")}
          subTitle={t("description")}
          btnTitle={t("btnTitle")}
        />
      </View>
      <View style={styles.itemsContainer}>
        {items.map((item, index) => (
          <ShortcutCard
            {...item}
            key={item.title + index}
            containerStyle={styles.cardContainer}
            titleStyle={GST.MT3}
          />
        ))}
      </View>
    </SafeAreaWrapper>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  itemsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    ...GST.MT5,
    ...GST.MX3,
  },
  cardContainer: {
    backgroundColor: COLORS.BROWN_100,
    borderRadius: RF(12),
    height: RF(130),
  },
});

export default Store;
