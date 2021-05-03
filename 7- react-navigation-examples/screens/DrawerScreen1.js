import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const DrawerScreen1 = (props) => {
  const toggleDrawer = () => {
    props.navigation.openDrawer();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Modificar en{" "}
        <Text style={{ fontStyle: "italic" }}>screens/DrawerScreen1.js</Text>
      </Text>

      <View style={styles.buttonContainer}>
        <Button
          onPress={toggleDrawer}
          color={"#242134"}
          title="Abrir/cerrar drawer"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 255, 255, 0.4)",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 20,
  },

  text: {
    color: "#242134",
    textAlign: "center",
    fontSize: 16,
  },

  buttonContainer: {
    borderTopWidth: 1,
    borderTopColor: "#444",
    paddingTop: 10,
  },
});

export default DrawerScreen1;
