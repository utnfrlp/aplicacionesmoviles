import React, { createContext } from "react";

// createContext devuelve un objecto con dos valores:
// Provider y Consumer

// en este caso dejamos sin valor al contexto, ya que lo definiremos
// al momento de usuario en App.js
const UsuarioContext = createContext();

export default UsuarioContext;
