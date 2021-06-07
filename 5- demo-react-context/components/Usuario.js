import React, { useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import UsuarioContext from "../contexts/usuario-context";
import ContadorContext from "../contexts/contador-context";

const Usuario = (props) => {
  const usuarioContext = useContext(UsuarioContext);
  const contadorContext = useContext(ContadorContext);
  console.log(usuarioContext);
  console.log(contadorContext);

  return (
    <View style={styles.box}>
      <Text>Componente "Usuario"</Text>

      {usuarioContext && (
        <>
          <Text style={styles.usuario}>Nombre: {usuarioContext.nombre}</Text>
          <Text style={styles.usuario}>Edad: {usuarioContext.edad}</Text>
        </>
      )}

      <Text>Contador: {contadorContext.valor}</Text>

      <Button onPress={contadorContext.sumar} title="Sumar" color="red" />
      <Button onPress={contadorContext.restar} title="Restar" color="blue" />
      <Button onPress={contadorContext.reset} title="Reset" color="green" />
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
