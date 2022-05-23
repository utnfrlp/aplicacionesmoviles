import * as React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Pantalla1 = (props) => {
  // const { navigation } = props;
  const navigation = props.navigation;

  return (
    <View style={styles.box}>
      <Text style={styles.text}>Contenido Pantalla 1</Text>

      <Button
        title="Ir a pantalla 2"
        onPress={() => navigation.navigate("pantalla-2")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: "mediumseagreen",
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

export default Pantalla1;
