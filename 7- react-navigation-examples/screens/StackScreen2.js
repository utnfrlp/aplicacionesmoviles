import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";

const StackScreen2 = (props) => {
  const goBack = () => {
    // props.navigation.navigate('Stack1');

    props.navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Modificar en{" "}
        <Text style={{ fontStyle: "italic" }}>screens/StackScreen1.js</Text>
      </Text>

      <View style={styles.buttonContainer}>
        <Button
          onPress={goBack}
          color={"#242134"}
          title="Volver a Pantalla 1"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255, 0, 0, 0.4)",
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

export default StackScreen2;
