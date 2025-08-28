import { home, machine, people, planning, store } from "@/src/assets/icons";
import AppIcon from "@/src/components/appIcon";
import AppText from "@/src/components/appText";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS } from "@/src/theme/colors";
import { GST } from "@/src/theme/globalStyles";
import { RF } from "@/src/theme/responsive";
import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Source } from "react-native-fast-image";
import { Tabs } from "expo-router";

const { GREEN_300, GREEN_100 } = COLORS;

const TabLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarStyle: styles.tabBarStyle,
          tabBarShowLabel: false,
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            tabBarIcon: (props) => (
              <TabBarIcon {...props} icon={home} label={"Home"} />
            ),
          }}
        />
        <Tabs.Screen
          name="store"
          options={{
            title: "Appna Store",
            tabBarIcon: (props) => (
              <TabBarIcon {...props} icon={store} label={"Appna Store"} />
            ),
          }}
        />
        <Tabs.Screen
          name="agriBook"
          options={{
            title: "AgriBook",
            tabBarIcon: (props) => (
              <TabBarIcon {...props} icon={machine} label={"AgriBook"} />
            ),
          }}
        />
        <Tabs.Screen
          name="planningAndRotation"
          options={{
            title: "Planning & Rotation",
            tabBarIcon: (props) => (
              <TabBarIcon
                {...props}
                icon={planning}
                label={"Planning & rotation"}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

const TabBarIcon = ({
  focused,
  icon,
  label,
  containerStyle,
}: {
  focused: boolean;
  icon: Source;
  label: string;
  containerStyle?: ViewStyle;
}) => (
  <View
    style={[
      styles.tabBarIcon,
      containerStyle,
      {
        backgroundColor: focused ? GREEN_300 : GREEN_100,
      },
    ]}
  >
    <AppIcon
      path={icon}
      size={32}
      tintColor={focused ? "WHITE" : "GRAY_400"}
      containerStyle={GST.MB0_5}
    />
    <AppText size={"XS"} color={focused ? "WHITE" : "BLACK_800"}>
      {label}
    </AppText>
  </View>
);

export default TabLayout;

const styles = StyleSheet.create({
  tabBarIcon: {
    alignItems: "center",
    ...GST.PX1,
    borderRadius: RF(12),
    minWidth: RF(70),
    minHeight: RF(70),
    justifyContent: "center",
    marginTop: RF(50),
  },
  tabBarStyle: {
    borderTopRightRadius: RF(16),
    borderTopLeftRadius: RF(16),
    height: RF(100),
    backgroundColor: COLORS.GREEN_100,
    alignItems: "center",
    justifyContent: "center",
  },
});
