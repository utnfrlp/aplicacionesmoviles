import React, { useState, createContext } from "react";

const ContadorContext = createContext();

export default ContadorContext;

export const ContadorContextProvider = (props) => {
  const [contador, setContador] = useState(0);

  return (
    <ContadorContext.Provider value={{ contador, setContador }}>
      {props.children}
    </ContadorContext.Provider>
  );
};
