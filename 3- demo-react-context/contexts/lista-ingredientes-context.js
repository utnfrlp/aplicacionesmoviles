import React, { useState, createContext } from "react";

// este contexto contendrá una lista de ingredientes (sólo nombres), y funciones
// para modificarlos (agregar, eliminar, limpiar lista)
const ListaIngredientesContext = createContext();

export default ListaIngredientesContext;

export const ListaIngredientesContextProvider = (props) => {
  const [listaIngredientes, setListaIngredientes] = useState([
    "azucar",
    "harina",
  ]);

  const agregarIngrediente = (ingrediente) => {
    // es necesaria una lista temporal ya que no podemos modificar
    // la lista de ingredientes directamente
    const listaTemporal = [...listaIngredientes];

    // agrego el nuevo ingrediente a la lista temporal
    listaTemporal.push(ingrediente);

    setListaIngredientes(listaTemporal);
  };

  const eliminarIngrediente = (posicion) => {
    // es necesaria una lista temporal ya que no podemos modificar
    // la lista de ingredientes directamente
    const listaTemporal = [...listaIngredientes];

    // eliminamos el elemento de la posicion pasada como argumento
    listaTemporal.splice(posicion, 1);

    setListaIngredientes(listaTemporal);
  };

  const limpiarListaIngredientes = () => {
    setListaIngredientes([]);
  };

  return (
    <ListaIngredientesContext.Provider
      value={{
        valor: listaIngredientes,
        agregarIngrediente: agregarIngrediente,
        eliminarIngrediente: eliminarIngrediente,
        limpiarListaIngredientes: limpiarListaIngredientes,
      }}
    >
      {props.children}
    </ListaIngredientesContext.Provider>
  );
};
