import React, { useState } from "react";
import {
  View, // https://facebook.github.io/react-native/docs/view.html
  Text, // https://facebook.github.io/react-native/docs/text.html
  StyleSheet, // https://facebook.github.io/react-native/docs/stylesheet.html
  Image, // https://facebook.github.io/react-native/docs/image.html
} from "react-native";

const App = () => {
  const [title, setTitle] = useState("Hola");

  return (
    <View style={styles.container}>
      <View style={[styles.section, { flex: 1 }]}>
        <Image
          style={styles.logo}
          // source={{ uri: 'https://user-images.githubusercontent.com/7065401/57584792-c1c00400-74b5-11e9-923d-b67ed50acd22.png' }}
          source={require("../../assets/icon.png")}
        />

        <Text style={styles.textLarge}>{title}</Text>

        <Text style={styles.textSmall}>Mi primera aplicación, parte 2</Text>
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
  logo: {
    width: 60,
    height: 60,
    marginBottom: 20,
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
