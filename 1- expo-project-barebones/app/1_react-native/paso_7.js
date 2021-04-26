import React, { useState } from "react";
import {
  View, // https://facebook.github.io/react-native/docs/view.html
  Text, // https://facebook.github.io/react-native/docs/text.html
  StyleSheet, // https://facebook.github.io/react-native/docs/stylesheet.html
  Image, // https://facebook.github.io/react-native/docs/image.html
  Dimensions, // https://facebook.github.io/react-native/docs/dimensions.html
  ScrollView, // https://facebook.github.io/react-native/docs/scrollview.html
} from "react-native";

const fullWidth = Dimensions.get("window").width;

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

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Image style={styles.logo} source={require("../../assets/icon.png")} />

        <Text style={styles.textLarge}>{title}</Text>
      </View>

      <View style={styles.scrollContainer}>
        <ScrollView>{renderItems()}</ScrollView>
      </View>
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
    color: "#34495e",
    fontStyle: "italic",
    paddingBottom: 5,
  },
  textInput: {
    height: 30,
    color: "#333",
    fontSize: 14,
    fontWeight: "500",
    width: fullWidth - 20,
    borderColor: "#ddd",
    borderWidth: 1,
    padding: 5,
  },
  scrollContainer: {
    backgroundColor: "#ecf0f1",
    height: 150,
  },
  scrollItem: {
    fontSize: 13,
    fontWeight: "100",
    padding: 5,
  },
});

export default App;
