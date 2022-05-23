import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const StackScreen1 = (props) => {
  const goToScreen2 = () => {
    // No permite volver a ir a 'Stack2', ya estoy ahí
    props.navigation.navigate("Stack2");

    // Permite ir a 'Stack2' las veces que quiera
    // props.navigation.push('Stack2');
  };

  const { route } = props;
  const params = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Modificar en{" "}
        <Text style={{ fontStyle: "italic" }}>screens/StackScreen1.js</Text>
      </Text>

      {params && (
        <View>
          <Text style={styles.text}>{`Parámetro "name": ${params.name}`}</Text>

          <Text style={styles.text}>
            {`Parámetro "other": ${params.other}`}
          </Text>
        </View>
      )}

      <View style={styles.buttonContainer}>
        <Button
          onPress={goToScreen2}
          color={"#242134"}
          title="Ir a Pantalla 2"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 255, 0.4)",
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

export default StackScreen1;
