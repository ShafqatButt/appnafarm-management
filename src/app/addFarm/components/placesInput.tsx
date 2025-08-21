import { StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import {
  GooglePlaceData,
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
} from "react-native-google-places-autocomplete";
import { HP, RF, WP } from "@/src/theme/responsive";
import Config from "react-native-config";
import { COLORS } from "@/src/theme/colors";

interface PlacesInputProps {
  onPlaceSelection?: (
    data: GooglePlaceData,
    detail: GooglePlaceDetail | null
  ) => void;
}

const PlacesInput = ({ onPlaceSelection }: PlacesInputProps) => {
  const inputRef: any = useRef(null);
  return (
    <GooglePlacesAutocomplete
      ref={inputRef}
      placeholder={"Search location"}
      fetchDetails={true}
      onFail={(err) => console.log("error", err)}
      // onPress={onPlaceSelection}
      onPress={onPlaceSelection}
      // disableScroll={true}
      enablePoweredByContainer={false}
      onNotFound={() => console.log("no results")}
      listEmptyComponent={
        <View style={{ flex: 1 }}>
          <Text>No results were found</Text>
        </View>
      }
      query={{
        key: Config.GOOGLE_PLACES_API_KEY,
        language: "en",
      }}
      styles={{
        textInput: {
          borderRadius: RF(18),
          // flex: 1,
          position: "absolute",
          bottom: RF(-25),
          // top: 0,
          left: RF(5),
          right: RF(5),
          color: COLORS.BLACK_800,
        },
        container: {
          position: "absolute",
          left: 40,
          right: 40,
        },
        listView: {
          top: HP(2.7),
          position: "absolute",
          width: WP(100),
          alignSelf: "center",
        },
        row: {
          backgroundColor: COLORS.GREEN_250,
        },
        description: {
          color: COLORS.WHITE,
        },
      }}
    />
  );
};

export default PlacesInput;

const styles = StyleSheet.create({});
