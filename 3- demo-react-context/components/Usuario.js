import React, { useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import UsuarioContext from "../contexts/usuario-context";

const Usuario = (props) => {
  const usuarioContext = useContext(UsuarioContext);
  console.log(usuarioContext);

  if (!usuarioContext) {
    return (
      <View style={styles.box}>
        <Text>No hay contexto de usuario</Text>
      </View>
    );
  }

  return (
    <View style={styles.box}>
      <Text>Componente "Usuario"</Text>

      {usuarioContext && (
        <>
          <Text style={styles.usuario}>Nombre: {usuarioContext.nombre}</Text>
          <Text style={styles.usuario}>Edad: {usuarioContext.edad}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#ddd",
    padding: 20,
    marginBottom: 10,
  },
  usuario: {
    fontWeight: "700",
  },
});

export default Usuario;
