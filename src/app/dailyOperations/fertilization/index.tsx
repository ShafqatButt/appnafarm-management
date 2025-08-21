import { Alert, PermissionsAndroid, Platform, View } from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { styles } from "./styles";
import SafeAreaWrapper from "@/src/components/safeAreaWrapper";
import CustomHeader from "../components/customHeader";
import { useTranslation } from "react-i18next";
import AppText from "@/src/components/appText";
import { GST } from "@/src/theme/globalStyles";
import CardDetails from "./components/cardDetails";
import Pressable from "@/src/components/pressable";
import { COLORS } from "@/src/theme/colors";
import AppImage from "@/src/components/appImage";
import { mic, stop, whatsApp } from "@/src/assets/icons";
import Input from "@/src/components/input";
import PrimaryBtn from "@/src/components/primaryBtn";
import Voice, {
  SpeechErrorEvent,
  SpeechResultsEvent,
} from "@react-native-voice/voice";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Fertilization = ({ route }: any) => {
  const { title, farm } = route?.params;
  const [isRecording, setIsRecording] = useState(false);
  const [text, setText] = useState("");
  const [transcript, setTranscript] = useState("");
  const [hasStarted, setHasStarted] = useState(false);
  console.log("text :", text);
  console.log("transcript :", transcript);

  useEffect(() => {
    // Set voice recognition event handlers
    Voice.onSpeechStart = () => {
      console.log("Speech started");
      setHasStarted(true);
    };

    Voice.onSpeechPartialResults = (e: any) => {
      console.log("e in partial results:", e);
      if (e.value && e.value.length > 0) {
        setText(e.value[0]); // live update
      }
    };

    Voice.onSpeechResults = (e: SpeechResultsEvent) => {
      console.log("e in onSpeechResults:", e);
      if (e.value && e.value.length > 0) {
        setText(e.value[0]); // just set text, don’t stop listening here
      }
    };

    Voice.onSpeechError = (e: SpeechErrorEvent) => {
      console.log("Error:", e.error);
      setIsRecording(false);

      if (e.error?.code === "7") {
        Alert.alert(
          "No match",
          "Could not understand what you said. Please try again."
        );
      } else if (e.error?.code === "11") {
        Alert.alert("Didn't understand", "Please speak clearly and try again.");
      } else {
        Alert.alert("Speech error", e.error?.message || "Unknown error");
      }
    };

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const requestMicPermission = async () => {
    if (Platform.OS === "android") {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true;
  };

  const startListening = async () => {
    const permissionGranted = await requestMicPermission();
    if (!permissionGranted) {
      Alert.alert("Microphone permission required");
      return;
    }

    try {
      await Voice.cancel();

      setText("");
      setTranscript("");
      setIsRecording(true);
      setHasStarted(false);

      await Voice.start("en-US");
    } catch (err: any) {
      console.error("Voice start error:", err);
      Alert.alert("Start Error", err?.message || "Could not start recognition");
    }
  };

  const stopListening = async () => {
    try {
      const isRecognizing = await Voice.isRecognizing();

      if (isRecognizing) {
        await Voice.stop();
      } else {
        await Voice.cancel();
      }

      setIsRecording(false);
    } catch (err: any) {
      console.error("Voice stop error:", err);
      Alert.alert("Stop Error", err?.message || "Unknown error occurred");
    }
  };

  const toggleRecording = () => {
    if (isRecording) {
      stopListening();
    } else {
      startListening();
    }
  };

  const { t } = useTranslation("translation", {
    keyPrefix: "fertilizationScreen",
  });

  return (
    <SafeAreaWrapper noPaddingBottom noPaddingTop>
      <CustomHeader title={t("title")} />
      <KeyboardAwareScrollView
        contentContainerStyle={GST.FLEX_GROW}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={"always"}
      >
        <AppText size={"XL"} font={"SEMI_BOLD"} style={[GST.MT3, GST.MX3]}>
          {title}
        </AppText>
        <CardDetails title={title} farm={farm} />
        <Pressable style={styles.fertilizationBtnContainer}>
          <AppText color={"GREEN_500"} font={"MEDIUM"}>
            {t("fertilizationDetails")}
          </AppText>
        </Pressable>
        <AppImage
          path={isRecording ? stop : mic}
          size={73}
          containerStyle={styles.micStyle}
          onPress={toggleRecording}
          tintColor={isRecording ? "GREEN_500" : undefined}
        />
        <AppText size={"SM"} style={styles.recordTxtStyle}>
          {t("recordOperations")}
        </AppText>

        <Input
          containerStyle={styles.inputContainer}
          placeholder={t("recordingInputPlaceholder")}
          multiline
          placeholderTextColor={COLORS.RED_50}
          value={text || transcript}
          editable={!text && !isRecording}
          onChangeText={(txt) => {
            if (!isRecording) {
              setTranscript(txt);
              setText("");
            }
          }}
        />

        <View style={[GST.FLEX_ROW_SPACED, GST.MT5, GST.MX3, GST.MB5]}>
          <PrimaryBtn
            title={t("cancel")}
            onPress={() => navigationRef?.current.goBack()}
            bgColor={"WHITE"}
            titleColor={"GREEN_500"}
            containerStyle={{ width: "47%" }}
          />
          <PrimaryBtn
            title={t("submit")}
            onPress={() => navigate("MAIN_TABS")}
            containerStyle={{ width: "47%" }}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaWrapper>
  );
};

export default Fertilization;
