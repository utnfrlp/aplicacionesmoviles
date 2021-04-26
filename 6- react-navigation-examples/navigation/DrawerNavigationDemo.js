import React from "react";
import { Image } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigationDemo from "./StackNavigationDemo";
import DrawerScreen1 from "../screens/DrawerScreen1";

const Drawer = createDrawerNavigator();

const DrawerNavigationDemo = function () {
  return (
    <Drawer.Navigator initialRouteName="Drawer2">
      <Drawer.Screen
        name="Drawer1"
        component={StackNavigationDemo}
        options={{
          drawerLabel: "Stack demo",
          drawerIcon: () => (
            <Image source={require("../assets/images/icon.png")} />
          ),
        }}
      />

      <Drawer.Screen
        name="Drawer2"
        component={DrawerScreen1}
        options={{
          drawerLabel: "Otra pantalla",
          drawerIcon: () => (
            <Image source={require("../assets/images/icon.png")} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigationDemo;
