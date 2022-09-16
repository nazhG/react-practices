import { useTodo } from "../hooks/";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

export const TodoApp = () => {
  const { state, pendingCount, todosCount, onDelete, onToggle, onNewTodo } = useTodo();

  return (
    <>
      <h1>
        TodoApp: { todosCount } <small> pendientes: { pendingCount }</small>
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
