import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import UsuarioContext from "./contexts/usuario-context";
import { ContadorContextProvider } from "./contexts/contador-context";
import Usuario from "./components/Usuario";
import Contador from "./components/Contador";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Demo Context</Text>

      <ScrollView>
        <ContadorContextProvider>
          <UsuarioContext.Provider value={{ nombre: "Juan", edad: 20 }}>
            <Usuario />
            <Usuario />
          </UsuarioContext.Provider>

          <Usuario />
          <Usuario />

          <Contador />
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
