import { FlatList } from "react-native";
import React from "react";
import { GST } from "@/src/theme/globalStyles";
import CropSeasonCard from "./components/cropSeasonCard";

interface Props {
  data: CropsSeasonListProps[];
}

const CropSeasonSlider = ({ data }: Props) => {
  return (
    <>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        style={GST.MB3}
        renderItem={({ item }) => <CropSeasonCard {...item} />}
      />
    </>
  );
};

export default CropSeasonSlider;
