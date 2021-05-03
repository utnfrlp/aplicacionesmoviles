import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import UsuarioContext from "../contexts/usuario-context";

// ahora usando useContext
const Usuario2 = () => {
  const valoresContext = useContext(UsuarioContext);

  return (
    <View style={styles.container}>
      {valoresContext ? (
        <View style={styles.contextBox}>
          <Text>Nombre: {valoresContext.nombre}</Text>
          <Text>Edad: {valoresContext.edad}</Text>
        </View>
      ) : (
        <Text>Sin datos del usuario...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    alignItems: "stretch",
    justifyContent: "center",
    margin: 5,
  },
  contextBox: {
    backgroundColor: "skyblue",
    border: "3px dashed #333",
    padding: 20,
  },
});

export default Usuario2;
