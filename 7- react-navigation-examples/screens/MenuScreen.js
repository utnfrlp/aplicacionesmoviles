import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import MenuHeader from "../components/MenuHeader";
import LinkToExample from "../components/LinkToExample";

const MenuScreen = (props) => {
  const goToStackNavigationDemo = () => {
    // usamos "replace" y no "navigate" en este caso para que no se pueda volver atrás
    props.navigation.replace("StackNavigationDemo");
  };

  const goToTabNavigationDemo = () => {
    props.navigation.replace("TabNavigationDemo");
  };

  const goToDrawerNavigationDemo = () => {
    props.navigation.replace("DrawerNavigationDemo");
  };

  const goToStackNavigationParamsDemo = () => {
    // estos parámetros son válidos también con el método "navigate"
    props.navigation.replace("StackNavigationDemo", {
      screen: "Stack1",
      params: {
        name: "Juan",
        other: 1234,
      },
    });
  };

  return (
    <View style={styles.container}>
      <MenuHeader />

      <ScrollView style={styles.itemsContainer}>
        <LinkToExample
          title={"Stack navigation demo"}
          color={"#3498db"}
          onPress={goToStackNavigationDemo}
        />

        <LinkToExample
          title={"Tab navigation demo"}
          color={"#2ecc71"}
          onPress={goToTabNavigationDemo}
        />

        <LinkToExample
          title={"Drawer navigation demo"}
          color={"#e74c3c"}
          onPress={goToDrawerNavigationDemo}
        />

        <LinkToExample
          title={"Stack navigation with params demo"}
          color={"#e67e22"}
          onPress={goToStackNavigationParamsDemo}
        />
      </ScrollView>
    </View>
  );
};

MenuScreen.navigationOptions = {
  title: "Menu",
  gesturesEnabled: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemsContainer: {
    backgroundColor: "#fafafa",
    borderBottomWidth: 15,
    borderColor: "#242134",
  },
});

export default MenuScreen;
