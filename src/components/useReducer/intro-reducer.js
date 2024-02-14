console.log("Este es el reducer");

const initialState = [
  {
    id: 1,
    todo: "Recolectar piedra",
    done: false,
  },
];
const newTodo = {
  id: 2,
  todo: "Vender productos",
  done: false,
};
const addTodoAction = {
  type: "ADD_TODO",
  payload: newTodo,
};
const todoReducer = (state = initialState, action = {}) => {
  if (action.type === "ADD_TODO") {
    return [...state, action.payload];
  } else if (action.type === "REMOVE_TODO") {
    return state;
  }
};
let todos; 

todos = todoReducer(todos, addTodoAction);

console.log({ state: todos });
