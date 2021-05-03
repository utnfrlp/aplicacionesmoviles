import React from "react";
import { StyleSheet, Text, View } from "react-native";
import UsuarioContext from "../contexts/usuario-context";

const Usuario = () => {
  return (
    <UsuarioContext.Consumer>
      {(valoresContext) => (
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
      )}
    </UsuarioContext.Consumer>
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
    backgroundColor: "limegreen",
    border: "3px dashed #333",
    padding: 20,
  },
});

export default Usuario;
