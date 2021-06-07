import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, Switch } from "react-native";
import UsuarioContext from "./contexts/usuario-context";
import { ContadorContextProvider } from "./contexts/contador-context";
import { ListaIngredientesContextProvider } from "./contexts/lista-ingredientes-context";
import Contador from "./components/Contador";
import Usuario from "./components/Usuario";
import ListaIngredientes from "./components/ListaIngredientes";

export default function App() {
  const [mostrarListaIngredientes, setMostrarListaIngredientes] =
    useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Demo Context</Text>

      <ScrollView>
        <ContadorContextProvider>
          <Contador />

          <UsuarioContext.Provider value={{ nombre: "Juan", edad: 20 }}>
            {/* Componente usuario dentro del alcance del Context de Usuario, verá los datos del usuario */}
            <Usuario />
          </UsuarioContext.Provider>

          {/* Componente usuario fuera del alcance del Context de Usuario, no verá los datos del usuario */}
          <Usuario />

          {/* Componente Switch para habilitar al contexto y componente ListaIngredientes */}
          <Switch
            value={mostrarListaIngredientes}
            onValueChange={() =>
              setMostrarListaIngredientes(!mostrarListaIngredientes)
            }
          />
          {mostrarListaIngredientes && (
            <ListaIngredientesContextProvider>
              <ListaIngredientes />
            </ListaIngredientesContextProvider>
          )}
        </ContadorContextProvider>
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
    paddingVertical: 80,
  },
  titulo: {
    fontSize: 32,
    fontWeight: "500",
    marginBottom: 30,
  },
});
