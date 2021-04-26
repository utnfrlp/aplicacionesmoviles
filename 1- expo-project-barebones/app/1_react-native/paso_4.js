import React, { useEffect, useState } from "react";
import {
  View, // https://facebook.github.io/react-native/docs/view.html
  Text, // https://facebook.github.io/react-native/docs/text.html
  StyleSheet, // https://facebook.github.io/react-native/docs/stylesheet.html
  Image, // https://facebook.github.io/react-native/docs/image.html
  Button, // https://facebook.github.io/react-native/docs/button.html
  TouchableOpacity, // https://facebook.github.io/react-native/docs/touchableopacity.html
} from "react-native";

const App = () => {
  const [title, setTitle] = useState("Hola");
  const [counter, setCounter] = useState(0);

  const onButtonPress = () => {
    console.log("Se apretó el botón");

    setCounter(counter + 1);
  };

  useEffect(() => {
    // para que se ejecute luego de que los cambios estén hechos
    setTitle(
      `El botón fue apretado ${counter} ${counter === 1 ? "vez" : "veces"}`
    );
  }, [counter]);

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Image style={styles.logo} source={require("../../assets/icon.png")} />

        <Text style={styles.textLarge}>{title}</Text>

        <Text style={styles.textSmall}>Mi primera app</Text>
      </View>

      <View style={styles.section}>
        <Button
          onPress={onButtonPress}
          title="Haz clic"
          color={"#16a085"}
          accessibilityLabel="See an informative alert"
        />

        <TouchableOpacity style={styles.customButton} onPress={onButtonPress}>
          <Text style={styles.customButtonText}>Mi botón</Text>
        </TouchableOpacity>
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
  customButton: {
    backgroundColor: "#16a085",
    borderRadius: 3,
    margin: 5,
    padding: 5,
  },
  customButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default App;
