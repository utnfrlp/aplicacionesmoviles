import React, { useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import ContadorContext from "../contexts/contador-context";

const Contador = () => {
  const valoresContext = useContext(ContadorContext);
  console.log(valoresContext);
  const { valor, sumar, reset } = valoresContext;

  return (
    <View style={styles.container}>
      <Text>Componente "Contador"</Text>
      <Text style={styles.counter}>{valor}</Text>
      <Button title="Sumar" onPress={sumar} />
      <Button title="Limpiar" onPress={reset} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "stretch",
    justifyContent: "center",
    marginTop: 60,
    marginBottom: 20,
  },
  counter: {
    backgroundColor: "black",
    color: "white",
    fontSize: 24,
    fontWeight: "900",
    padding: 30,
  },
});

export default Contador;
