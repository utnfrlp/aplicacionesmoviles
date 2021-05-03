import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

const Pantalla2 = () => {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>Pantalla 2</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: "salmon",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 30,
  },
});

export default Pantalla2;
