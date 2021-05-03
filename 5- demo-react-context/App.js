import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Usuario from "./components/Usuario";
import Contador from "./components/Contador";
import UsuarioContext from "./contexts/usuario-context";
import { ContadorContextProvider } from "./contexts/contador-context";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Demo React Context</Text>

      <Usuario />

      <UsuarioContext.Provider value={{ nombre: "Juan", edad: 24 }}>
        <Usuario />
      </UsuarioContext.Provider>

      {/* <ContadorContextProvider>
        <Contador />
      </ContadorContextProvider> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
    textDecorationLine: "underline",
    marginBottom: 40,
  },
});
