import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const TabScreen1 = (props) => {
  const goToFirstTab = () => {
    props.navigation.navigate("Tab1");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Modificar en{" "}
        <Text style={{ fontStyle: "italic" }}>screens/TabScreen1.js</Text>
      </Text>

      <View style={styles.buttonContainer}>
        <Button
          onPress={goToFirstTab}
          color={"#242134"}
          title="Cambiar al primer tab"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 255, 0, 0.4)",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 20,
  },

  image: {
    width: 80,
    height: 80,
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

export default TabScreen1;
