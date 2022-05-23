import React, { useState, useContext } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import ListaIngredientesContext from "../contexts/lista-ingredientes-context";

const ListaIngredientes = (props) => {
  const listaIngredientesContext = useContext(ListaIngredientesContext);
  const [nombreNuevoIngrediente, setNombreNuevoIngrediente] = useState("");

  const mostrarIngredientes = () => {
    // para cada ingrediente de la lista mostramos:
    // un Text con posicion y nombre de ingrediente
    // un Boton que llama a la función "eliminar" que eliminará al ingrediente de esa posicion
    return listaIngredientesContext.valor.map((ingrediente, posicion) => {
      return (
        <View style={styles.ingredienteBox} key={posicion}>
          <Text>
            {posicion}: {ingrediente}
          </Text>

          <Button
            onPress={() => eliminar(posicion)}
            title="Eliminar ingrediente"
            color="pink"
          />
        </View>
      );
    });
  };

  const agregar = () => {
    // creo el nuevo ingrediente usando el valor ingresado en el input
    listaIngredientesContext.agregarIngrediente(nombreNuevoIngrediente);

    // limpio el input cuando ya esté creado
    setNombreNuevoIngrediente("");
  };

  const eliminar = (posicion) => {
    // elimino el ingrediente de la posición pasada como parámetro
    listaIngredientesContext.eliminarIngrediente(posicion);
  };

  return (
    <View style={styles.box}>
      <Text>Componente "ListaIngredientes"</Text>

      <Text style={styles.title}>Lista de ingredientes</Text>
      <Text>Total ingredientes: {listaIngredientesContext.valor.length}</Text>
      {mostrarIngredientes()}

      <Text style={styles.title}>Agregar nuevo ingrediente</Text>
      <TextInput
        style={styles.input}
        onChangeText={setNombreNuevoIngrediente}
        value={nombreNuevoIngrediente}
        placeholder={"Ingrese nombre"}
      />
      <Button onPress={agregar} title="Agregar ingrediente" color="orange" />

      <Text style={styles.title}>Limpiar todos los ingredientes</Text>
      <Button
        onPress={listaIngredientesContext.limpiarListaIngredientes}
        title="Limpiar"
        color="silver"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#eee",
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginBottom: 10,
  },
  ingredienteBox: {
    border: "1px solid #999",
    padding: 5,
    margin: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    marginTop: 30,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
  },
});

export default ListaIngredientes;
