import React, { useState, createContext } from "react";

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
