import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";


const initialState = JSON.parse(localStorage.getItem("todos")) || [];

export const useTodo = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state));
  }, [state]);

  const onDelete = (todoId) => {
    const action = {
      type: "[TODO] Delete",
      payload: todoId,
    };

    dispatch(action);
  };

  const onToggle = (todoId) => {
    dispatch({
      type: "[TODO] Toggle",
      payload: todoId,
    });
  };

  const onNewTodo = (newTodo) => {
    dispatch({
      type: "[TODO] Add",
      payload: newTodo,
    });
  };

  return {
    state,
    todosCount: state.length,
    pendingCount: state.filter((todo) => !todo.done).length,
    onDelete,
    onToggle,
    onNewTodo,
  };
};
