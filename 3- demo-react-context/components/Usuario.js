import React, { useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import UsuarioContext from "../contexts/usuario-context";
import ContadorContext from "../contexts/contador-context";

const Usuario = (props) => {
  const usuarioContext = useContext(UsuarioContext);
  const valoresContext = useContext(ContadorContext);

  if (valoresContext) {
    console.log(valoresContext.valor);
  }

  if (!usuarioContext && !valoresContext) {
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
      <Text style={styles.usuario}>Contador: {valoresContext?.valor}</Text>
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
