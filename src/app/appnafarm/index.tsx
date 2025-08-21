import { arrowBack, details, plus } from "@/src/assets/icons";
import { lines } from "@/src/assets/images";
import AppIcon from "@/src/components/appIcon";
import AppText from "@/src/components/appText";
import Pressable from "@/src/components/pressable";
import SafeAreaWrapper from "@/src/components/safeAreaWrapper";
import { GST } from "@/src/theme/globalStyles";
import { showToast } from "@/src/utils/helpers";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ImageBackground, ScrollView, View } from "react-native";
import { styles } from "./styles";
import { API } from "@services/api";
import { useFocusEffect } from "@react-navigation/native";
import MainHeader from "@/src/components/mainHeader";
import FarmStats from "@/src/components/farmStats";
import FarmCard from "@/src/components/farmCard";
import FarmDetailsCard from "@/src/components/farmDetailsCard";

const Appnafarm = () => {
  const [myFarms, setMyFarms] = useState<Farm[]>([]);
  const [filteredFarms, setFilteredFarms] = useState<Farm[]>([]);
  const [selectedFarm, setSelectedFarm] = useState<any>(null);
  const [searchText, setSearchText] = useState<string>("");
  const [farmStats, setFarmStats] = useState<FarmStats>();

  const farms = searchText ? filteredFarms : myFarms;

  const { t } = useTranslation("translation", {
    keyPrefix: "appnafarmScreen",
  });

  useFocusEffect(
    React.useCallback(() => {
      getFarmList();
      getFarmStats();
    }, [])
  );

  const getFarmList = async () => {
    try {
      const res: GetFarmListReq = await API.GET_FARM_LIST();
      showToast("Success", res?.data?.message, "success");
      setMyFarms(res?.data?.data);
    } catch (error) {
      showToast("Error", "Something went wrong", "error");
    } finally {
    }
  };

  const getFarmStats = async () => {
    try {
      const res: GetFarmStatsReq = await API.GET_FARM_STATS();
      showToast("Success", "data retrieved successfully", "success");
      setFarmStats(res?.data);
    } catch (error) {
      showToast("Error", "Something went wrong", "error");
    } finally {
    }
  };

  const handleSearchItems = () => {
    const query = searchText.toLowerCase();
    if (query) {
      const farms = myFarms.filter((item) =>
        item?.name?.toLowerCase().includes(query)
      );
      setFilteredFarms(farms);
    }
  };
  const getParsedFarmArea = (area: Coords[]) =>
    Array.isArray(area)
      ? area?.map((item) => JSON.parse(JSON.stringify(item)))
      : [];

  return (
    <SafeAreaWrapper>
      <MainHeader
        icon={arrowBack}
        tintColor={"WHITE"}
        onPress={() => {
          navigate("MAIN_TABS");
          setSearchText("");
        }}
        value={searchText}
        onChangeText={(text) => {
          setSearchText(text);
          setFilteredFarms([]);
        }}
        onRightIconPress={handleSearchItems}
      />
      <ScrollView
        contentContainerStyle={GST.PX3}
        showsVerticalScrollIndicator={false}
      >
        <AppText size={"1XL"} font={"BOLD"} style={GST.MT3}>
          {t("appnaFarm")}
        </AppText>
        <ImageBackground source={lines} style={styles.statsMainContainer}>
          <Pressable
            style={styles.actionBtnContainer}
            onPress={() => navigate("ADD_FARM")}
          >
            <AppIcon path={plus} size={24} containerStyle={GST.MR2} />
            <AppText size={"SM"} color={"GREEN_500"} font={"SEMI_BOLD"}>
              {t("addFarm")}
            </AppText>
          </Pressable>
          <View style={styles.statsSubContainer}>
            <FarmStats
              value={farmStats?.total_farms ? farmStats?.total_farms : 0}
              label={t("totalFarms")}
              labelSize={"BASE"}
              valueSize={"3XL"}
            />
            <FarmStats
              value={
                farmStats?.total_land
                  ? Number(farmStats?.total_land.toFixed(2))
                  : 0
              }
              label={t("land")}
              labelSize={"BASE"}
              valueSize={"3XL"}
            />
          </View>
          <View style={styles.cropStatsContainer}>
            <AppText center font={"BOLD"} size={"SM"} style={GST.MB2}>
              {t("cropAcre")}
            </AppText>
            <View style={GST.FLEX_ROW_SPACED}>
              {farmStats?.crops?.map((item, index) => (
                <FarmStats
                  value={Number(item?.value.toFixed(2))}
                  label={item?.label}
                  key={index}
                />
              ))}
            </View>
          </View>
        </ImageBackground>
        <AppText size={"LG"} font={"BOLD"} style={GST.MB2}>
          {t("myFarms")}
        </AppText>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {farms?.length > 0 &&
            farms.map((item: any, index: any) => {
              return (
                <FarmCard
                  {...item}
                  isSelected={item?.id === selectedFarm?.id}
                  key={item?.name + index}
                  cropTitle={item?.crop}
                  cropType={item?.crop}
                  size={t("acres", {
                    size: Number(parseFloat(item?.size).toFixed(2)),
                  })}
                  containerStyle={index !== farms.length - 1 ? GST.MR2 : {}}
                  onPress={() => setSelectedFarm(item)}
                  address={item?.location}
                  title={item?.name}
                />
              );
            })}
        </ScrollView>
        {selectedFarm ? (
          <>
            <FarmDetailsCard
              t={t}
              onClosePress={() => setSelectedFarm(null)}
              farmArea={
                Array.isArray(selectedFarm?.farm_configuration)
                  ? (selectedFarm?.farm_configuration as Coords[])
                  : []
              }
              title={selectedFarm?.name}
              size={selectedFarm?.size}
              cropType={selectedFarm?.crop}
              address={selectedFarm?.location}
              status={selectedFarm?.status}
              id={selectedFarm?.id}
              latitude={selectedFarm?.latitude}
              longitude={selectedFarm?.longitude}
            />
          </>
        ) : (
          <Pressable style={styles.viewMoreContainer}>
            <AppIcon path={details} size={28} containerStyle={GST.MB1} />
            <AppText size={"BASE"}>{t("viewDetails")}</AppText>
          </Pressable>
        )}
      </ScrollView>
    </SafeAreaWrapper>
  );
};

export default Appnafarm;
