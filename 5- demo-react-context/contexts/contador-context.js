import React, { useState, createContext } from "react";

// a diferencia de nuestro contexto de Usuario, ahora lo encapsularemos
// y definiremos aquí mismo el valor inicial.
// Luego en App.js lo invocaremos sin necesidad de inicializarlo.

// Todas las modificaciones de Contador serán definidas desde aquí: sumar, restar, reset, etc.

const ContadorContext = createContext();

export default ContadorContext;

export const ContadorContextProvider = (props) => {
  const [contador, setContador] = useState(0);

  return (
    <ContadorContext.Provider
      value={{
        valor: contador,
        sumar: () => setContador(contador + 1),
        restar: () => setContador(contador - 1),
        reset: () => setContador(0),
      }}
    >
      {props.children}
    </ContadorContext.Provider>
  );
};
