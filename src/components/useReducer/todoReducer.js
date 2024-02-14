import { useReducer } from "react";

export const todoReducer = (initialState, action) => {
  const reducer = () => {
    return <div>todoReducer</div>;
  };

  let arreglo = [1, 2, 3, 4];

  let handleSubmit = (event) => {
    let valor = event.target.value;
    return valor;
  };

  const arregloRecargado = [...arreglo, handleSubmit()];
  console.log(arregloRecargado);

/*   const [state, dispatch] = useReducer(reducer, initialState);

  const handleAction = () => {
    dispatch({ type: "ADD_ACTION" });
  }; */

  switch (action.type) {
    case "ADD_TODO":
      return action.payload;
    case "REMOVE_TODO":
      return action.payload;
  }
  return (
    <>
      <div>todoReducer</div>
      <button onClick={handleSubmit}>Boton</button>
    </>
  );
};
