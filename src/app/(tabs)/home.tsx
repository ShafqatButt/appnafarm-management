import {
  bell,
  checklist,
  fertilizer,
  finance,
  insights,
  iot,
  log,
  menu,
  pest,
  search,
  todo,
  weather,
} from "@/src/assets/icons";
import AppIcon from "@/src/components/appIcon";
import Input from "@/src/components/input";
import SafeAreaWrapper from "@/src/components/safeAreaWrapper";
import { COLORS } from "@/src/theme/colors";
import React from "react";
import { useTranslation } from "react-i18next";
import { ScrollView, StatusBar, View, StyleSheet } from "react-native";
import AppText from "@/src/components/appText";
import Pressable from "@/src/components/pressable";
import { GST } from "@/src/theme/globalStyles";
import LinearGradient from "react-native-linear-gradient";
import { setUser, setUserSession } from "@/src/redux/slices/mainSlice";
import { useAppDispatch } from "@/src/redux/hooks";
import { RF } from "@/src/theme/responsive";
import DailyOpsStatusCard from "@/src/components/dailyOpsStatusCard";
import FarmStatusCard from "@/src/components/farmStatusCard";
import ModuleCard from "@/src/components/moduleCard";
import ShortcutCard from "@/src/components/shortcutCard";
import MarketStatusCard from "@/src/components/marketStatusCard";
import { Href, router } from "expo-router";

const { GREEN_250, WHITE } = COLORS;

const user = {
  name: "Muhammad",
  totalPlots: 29,
  totalAcres: 120,
  totalCrops: 5,
};

const Home = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation("translation", {
    keyPrefix: "homeScreen",
  });

  const modules = [
    { title: t("marketInsight"), icon: finance },
    { title: t("todo"), icon: todo },
    { title: t("weather"), icon: weather },
  ];

  const shortcuts = [
    { title: t("cropInsight"), icon: insights },
    { title: t("fertilizerPlan"), icon: fertilizer },
    { title: t("disease"), icon: pest },
    { title: t("agribook"), icon: log },
    { title: t("tasks"), icon: checklist },
    { title: t("iotHub"), icon: iot },
  ];

  const logoutHandler = () => {
    dispatch(setUserSession(false));
  };

  return (
    <SafeAreaWrapper>
      <StatusBar backgroundColor={GREEN_250} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={{}}
          colors={[GREEN_250, WHITE]}
        >
          <View style={styles.headerContainer}>
            <AppIcon path={menu} size={32} onPress={logoutHandler} />
            <Input
              placeholder={t("searchBarPlaceholder")}
              mainContainerStyle={styles.searchBarMainContainer}
              containerStyle={styles.searchBarContainer}
              rightIcon={search}
            />
            <AppIcon path={bell} size={32} />
          </View>
          <View style={GST.PX3}>
            <View style={styles.statusCardContainer}>
              <FarmStatusCard
                plots={user.totalPlots}
                acres={user.totalAcres}
                crops={user.totalCrops}
                t={t}
              />
              <View style={styles.statusCardSubContainer}>
                <MarketStatusCard t={t} />
                <DailyOpsStatusCard
                  t={t}
                  onPressCard={() =>
                    router.push("/dailyOperations/addDailyActivity" as Href)
                  }
                />
              </View>
            </View>
          </View>
        </LinearGradient>
        <AppText font={"BOLD"} size={"XL"} style={[GST.MB1, GST.MX3]}>
          {t("welcomeUser", { userName: user.name })}
        </AppText>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.moduleContainer}
          contentContainerStyle={styles.moduleContentContainer}
        >
          {modules.map((item, index) => (
            <ModuleCard
              key={item.title + index}
              {...item}
              containerStyle={index !== modules.length - 1 ? GST.MR3 : {}}
            />
          ))}
        </ScrollView>
        <View style={GST.PX3}>
          <AppText font={"SEMI_BOLD"} size={"LG"} style={GST.MT2}>
            {t("shortcuts")}
          </AppText>
          <View style={styles.shortcutCardContainer}>
            {shortcuts.map((item, index) => (
              <ShortcutCard {...item} key={item.title + index} />
            ))}
          </View>
          <Pressable style={styles.viewMoreBtnContainer}>
            <AppText font={"MEDIUM"}>{t("viewMore")}</AppText>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaWrapper>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    ...GST.FLEX_ROW_SPACED,
    ...GST.PX3,
    ...GST.PT5,
    ...GST.PB4,
  },
  searchBarMainContainer: {
    flex: 1,
    ...GST.MB0,
    ...GST.MX3,
  },
  searchBarContainer: {
    height: RF(45),
    borderRadius: 30,
    ...GST.SHADOW,
  },
  statusCardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
    ...GST.MB4,
  },
  statusCardSubContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  shortcutCardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  viewMoreBtnContainer: {
    ...GST.PX3,
    ...GST.PY2,
    backgroundColor: COLORS.GRAY_120,
    borderRadius: RF(30),
    alignSelf: "center",
    ...GST.MB4,
  },
  moduleContainer: {
    flexGrow: 0,
  },
  moduleContentContainer: {
    paddingHorizontal: RF(12),
    height: RF(180),
    alignItems: "center",
  },
});

export default Home;
