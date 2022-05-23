import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import StackScreen1 from "../screens/StackScreen1";
import StackScreen2 from "../screens/StackScreen2";
import BackToMenu from "../components/BackToMenu";

const Stack = createStackNavigator();

const StackNavigationDemo = () => {
  return (
    <Stack.Navigator initialRouteName="StackScreen2">
      <Stack.Screen
        name="Stack1"
        component={StackScreen1}
        options={{
          title: "Pantalla 1",
          headerRight: () => (
            // <Button
            //   onPress={() => alert('Hola! Esto es un mensaje de alerta.')}
            //   title="Mensaje"
            // />
            <BackToMenu />
          ),
        }}
      />

      <Stack.Screen
        name="Stack2"
        component={StackScreen2}
        options={{
          title: "Pantalla 2",
          headerRight: () => <BackToMenu />,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigationDemo;
