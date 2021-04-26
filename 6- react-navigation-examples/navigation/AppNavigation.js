import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MenuScreen from "../screens/MenuScreen";
import StackNavigationDemo from "./StackNavigationDemo";
import TabNavigationDemo from "./TabNavigationDemo";
import DrawerNavigationDemo from "./DrawerNavigationDemo";

const Stack = createStackNavigator();

const AppNavigation = function () {
  return (
    <NavigationContainer initialRouteName="Menu">
      <Stack.Navigator headerMode="none" mode="modal">
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen
          name="StackNavigationDemo"
          component={StackNavigationDemo}
        />
        <Stack.Screen name="TabNavigationDemo" component={TabNavigationDemo} />
        <Stack.Screen
          name="DrawerNavigationDemo"
          component={DrawerNavigationDemo}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
