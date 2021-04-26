import React from "react";
import {
  View, // https://facebook.github.io/react-native/docs/view.html
  Text, // https://facebook.github.io/react-native/docs/text.html
  StyleSheet, // https://facebook.github.io/react-native/docs/stylesheet.html
} from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.section, { flex: 1 }]}>
        <Text style={styles.textLarge}>Hola!</Text>

        <Text style={styles.textSmall}>Mi primera aplicación</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderColor: "#eee",
    padding: 10,
  },
  textLarge: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2c3e50",
  },
  textSmall: {
    color: "#34495e",
    fontStyle: "italic",
    paddingBottom: 5,
  },
});

export default App;
