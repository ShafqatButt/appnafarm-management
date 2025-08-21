import { ScrollView, View } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import SafeAreaWrapper from "@/src/components/safeAreaWrapper";
import { useTranslation } from "react-i18next";
import CustomHeader from "../components/customHeader";
import AppText from "@/src/components/appText";
import Pressable from "@/src/components/pressable";
import { GST } from "@/src/theme/globalStyles";
import {
  fertilization,
  irrigation,
  labor,
  landPreparation,
  others,
} from "@/src/assets/icons";
import AppIcon from "@/src/components/appIcon";
import FarmCard from "@/src/components/farmCard";

interface Farm {
  id: string;
  title: string;
  address: string;
  size: number;
  cropType: CropType;
}

const farms: Farm[] = [
  {
    id: "11",
    title: "Farm One",
    address: "Location One",
    size: 160,
    cropType: "sugarcane",
  },
  {
    id: "12",
    title: "Farm two",
    address: "Location two",
    size: 260,
    cropType: "wheat",
  },
];

const dailyOperations = [
  {
    title: "Irrigation",
    icon: irrigation,
  },
  {
    title: "Fertilization",
    icon: fertilization,
  },
  {
    title: "Land Preparation",
    icon: landPreparation,
  },
  {
    title: "Labor Work",
    icon: labor,
  },
  {
    title: "Others",
    icon: others,
  },
];

const AddDailyOperations = () => {
  const [selectedCard, setSelectedCard] = useState<string>("");
  const [selectedType, setSelectedType] = useState<Farm[]>([]);

  const { t } = useTranslation("translation", {
    keyPrefix: "addDailyOperationsScreen",
  });

  return (
    <SafeAreaWrapper noPaddingBottom noPaddingTop>
      <CustomHeader title={t("title")} />
      <View style={[GST.FLEX_ROW_SPACED, GST.MX3, GST.MT3]}>
        <AppText size={"1XL"} font={"SEMI_BOLD"}>
          {t("selectFarm")}
        </AppText>
        <Pressable style={styles.addFarmBtn}>
          <AppText>{t("addFarm")}</AppText>
        </Pressable>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.farmCardContainer}
      >
        {farms.length > 0 &&
          farms.map((item, index) => (
            <FarmCard
              {...item}
              key={item.title + index}
              cropTitle={item.cropType}
              size={t("acres", { size: item?.size })}
              containerStyle={[GST.MX3, GST.MR1, GST.MT3]}
              onPress={() => null}
              dailyOperations
              onPressCircle={() => {
                setSelectedCard(item?.id);
                setSelectedType([item]);
              }}
              isSelected={selectedCard === item?.id}
            />
          ))}
      </ScrollView>
      <ScrollView
        style={[GST.MX3, GST.MT5, GST.MB5]}
        showsVerticalScrollIndicator={false}
      >
        {dailyOperations.map((item) => {
          return (
            <Pressable
              style={styles.dailyOperationsContainer}
              onPress={() => {
                if (item?.title === "Fertilization") {
                  navigate("FERTILIZATION", {
                    title: item?.title,
                    farm: selectedType.filter((item) => item)[0],
                  });
                }
              }}
              disabled={!selectedCard}
            >
              <AppText size={"XL"} font={"SEMI_BOLD"}>
                {item?.title}
              </AppText>
              <AppIcon path={item?.icon} size={50} />
            </Pressable>
          );
        })}
      </ScrollView>
    </SafeAreaWrapper>
  );
};

export default AddDailyOperations;
