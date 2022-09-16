const initialState = [
  {
    id: new Date().getTime(),
    todo: "Comprar pan",
    done: false,
  },
];

const todoReducer = (state = initialState, action) => {
  if (action?.type === "add") {
    return [...state, action.payload];
  }

  return state;
};

let todos = todoReducer();

const newTodo = {
    id: new Date().getTime(),
    todo: "Comprar leche",
    done: false,
};

const addTodoAction = {
    type: "add",
    payload: newTodo,
};

console.log(todos);
