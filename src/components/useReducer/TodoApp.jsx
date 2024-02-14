import { useReducer } from "react";

const TodoApp = () => {
  const initialState = [
    {
      id: new Date().getTime(),
      description: "Recolectar",
      done: false,
    },
    {
      id: new Date().getTime() + 100,
      description: "Recolectar piedra",
      done: false,
    },
  ];

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleDispatch = () => {
    dispatch([...initialState, {
      type: "ADD_TODO",
      payload: { id: new Date().getTime(), description: "nueva tarea" },
    }]);
  };

  return (
    <>
      <div>TodoApp</div>
      <hr />
      <ul>
        <li>{state}</li>
        <li>{handleDispatch}</li>
        <li>Item3</li>
      </ul>
    </>
  );
};

export default TodoApp;
