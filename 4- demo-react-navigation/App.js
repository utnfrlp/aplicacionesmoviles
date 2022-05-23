import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Pantalla1 from "./screens/Pantalla1";
import Pantalla2 from "./screens/Pantalla2";
import { View, Text, Button, StyleSheet } from "react-native";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="pantalla-1"
          options={{ title: "Pantalla 1" }}
          component={Pantalla1}
        />
        <Stack.Screen
          name="pantalla-2"
          options={{
            title: "Pantalla 2",
            // headerLeft: () => null
          }}
          component={Pantalla2}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
