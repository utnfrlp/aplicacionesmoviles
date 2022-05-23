import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, Switch } from "react-native";
import UsuarioContext from "./contexts/usuario-context";
import { ContadorContextProvider } from "./contexts/contador-context";
import { ListaIngredientesContextProvider } from "./contexts/lista-ingredientes-context";
import Contador from "./components/Contador";
import Usuario from "./components/Usuario";
import ListaIngredientes from "./components/ListaIngredientes";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Demo Context</Text>

      <ScrollView>
        <Usuario />

        {/* <UsuarioContext.Provider value={{ nombre: "Juan", edad: 20 }}>
          <Usuario />
        </UsuarioContext.Provider> */}

        {/* <ContadorContextProvider>
          <Contador />
        </ContadorContextProvider> */}

        {/* <ListaIngredientesContextProvider>
          <ListaIngredientes />
        </ListaIngredientesContextProvider> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 30,
  },
});
