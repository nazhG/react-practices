import { useReducer, useEffect } from "react";
import { todoReducer } from "./todoReducer";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {


  const [state, dispatch] = useReducer(todoReducer, initialState, init);

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

  return (
    <>
      <h1>
        TodoApp: 10 <small> pendientes: 2</small>
      </h1>
      <hr />
      <div className="row">
        <TodoList
          state={state}
          className="col-7"
          onDelete={onDelete}
          onToggle={onToggle}
        />
        <TodoAdd className="col-5" onNewTodo={onNewTodo} />
      </div>
    </>
  );
};
