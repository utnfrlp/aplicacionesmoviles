import React, { useState } from "react";
import {
  View, // https://facebook.github.io/react-native/docs/view.html
  Text, // https://facebook.github.io/react-native/docs/text.html
  StyleSheet, // https://facebook.github.io/react-native/docs/stylesheet.html
  Image, // https://facebook.github.io/react-native/docs/image.html
  Platform, // https://facebook.github.io/react-native/docs/platform-specific-code.html
} from "react-native";

const App = () => {
  const [title, setTitle] = useState("Hola");
  const _ITEMS = [
    { name: "Item1", id: 1 },
    { name: "Item2", id: 2 },
    { name: "Item3", id: 3 },
    { name: "Item4", id: 4 },
    { name: "Item5", id: 5 },
    { name: "Item6", id: 6 },
    { name: "Item7", id: 7 },
    { name: "Item8", id: 8 },
    { name: "Item9", id: 9 },
    { name: "Item10", id: 10 },
    { name: "Item11", id: 11 },
    { name: "Item12", id: 12 },
  ];
  const [items, setItems] = useState(_ITEMS);

  const renderItems = () => {
    return items.map((item) => (
      <Text key={item.id} style={styles.scrollItem}>
        {item.name}
      </Text>
    ));
  };

  const PLATFORM = Platform.OS;
  console.log(PLATFORM);

  let BG_COLOR;
  switch (PLATFORM) {
    case "ios":
      BG_COLOR = "#3498db";
      break;
    case "android":
      BG_COLOR = "#2ecc71";
      break;
    default:
      BG_COLOR = "#CCC";
      break;
  }

  return (
    <View style={[styles.container, { backgroundColor: BG_COLOR }]}>
      <View style={styles.section}>
        <Image style={styles.logo} source={require("../../assets/icon.png")} />

        <Text style={styles.textLarge}>{title}</Text>
      </View>

      <Text style={styles.textSmall}>Estamos en: {PLATFORM}</Text>

      <Text style={styles.textSmall}>
        {PLATFORM === "ios" ? "Esto es iOS" : "Esto no es iOS"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
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
    fontSize: 18,
    color: "#222",
    fontStyle: "italic",
    fontWeight: "600",
    textAlign: "center",
    paddingBottom: 5,
  },
});

export default App;
