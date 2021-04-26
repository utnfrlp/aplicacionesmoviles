import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigationDemo from "./StackNavigationDemo";
import TabScreen1 from "../screens/TabScreen1";

const Tab = createBottomTabNavigator();

const TabNavigationDemo = function () {
  return (
    <Tab.Navigator
      initialRouteName="Tab2"
      tabBarOptions={{
        activeTintColor: "#00f",
        activeBackgroundColor: "#FFF",
        inactiveBackgroundColor: "#DDD",
      }}
    >
      <Tab.Screen
        name="Tab1"
        component={StackNavigationDemo}
        options={{
          tabBarLabel: "Stack demo",
          tabBarIcon: () => (
            <Image source={require("../assets/images/icon.png")} />
          ),
        }}
      />

      <Tab.Screen
        name="Tab2"
        component={TabScreen1}
        options={{
          tabBarLabel: "Otra pantalla",
          tabBarIcon: () => (
            <Image source={require("../assets/images/icon.png")} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigationDemo;
