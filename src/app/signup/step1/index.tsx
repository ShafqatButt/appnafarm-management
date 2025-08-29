import AuthHeader from "@/src/components/authHeader";
import BackBtn from "@/src/components/backBtn";
import PrimaryBtn from "@/src/components/primaryBtn";
import SafeAreaWrapper from "@/src/components/safeAreaWrapper";
import SelectBtn from "@/src/components/selectBtn";
import ProgressBar from "@/src/components/progressBar";
import { GST } from "@/src/theme/globalStyles";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { styles } from "./styles";
import { useAppDispatch } from "@/src/redux/hooks";
import { setUser } from "@/src/redux/slices/mainSlice";
import { router } from "expo-router";
import { UserType } from "@/src/types/mainSlice";

const SignupStep1 = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "signupStep1Screen",
  });
  const roles = [
    {
      title: "roleFarmerTitle",
      subTitle: "roleFarmerSubTitle",
      id: "farmer",
    },
    {
      title: "ownerTitle",
      subTitle: "ownerSubTitle",
      id: "businessOwner",
    },
  ];
  const dispatch = useAppDispatch();
  const [selectedRoles, setSelectedRole] = useState(roles[0]);

  const submitHandler = () => {
    router.push({
      pathname: "/signup/step2",
      params: {
        userType: selectedRoles.id as UserType,
      },
    });
    dispatch(
      setUser({
        type: selectedRoles.id as UserType,
        name: "John",
        phone: "0301 3333333",
        token: "fthbthgthbgtr",
      })
    );
  };
  return (
    <SafeAreaWrapper>
      <View style={[GST.FLEX, GST.PX3, GST.MT4]}>
        <ProgressBar progress={0.25} />
        <BackBtn />
        <AuthHeader
          title={t("title")}
          subTitle={t("subTitle")}
          containerStyle={GST.MB10}
        />
        {roles.map((item) => (
          <SelectBtn
            key={item.id}
            title={t(item.title)}
            subTitle={t(item.subTitle)}
            isSelected={item.id === selectedRoles.id}
            onPress={() => setSelectedRole(item)}
            subTitleNumberOfLines={4}
          />
        ))}
        <View style={GST.SUBMIT_BTN_CONTAINER}>
          <PrimaryBtn title={"Continue"} onPress={submitHandler} />
        </View>
      </View>
    </SafeAreaWrapper>
  );
};

export default SignupStep1;
