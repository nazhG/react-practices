import { TodoItem } from "./TodoItem";

export const TodoList = ({ state = [], onDelete, onToggle }) => {
  return (
    <ul className="list-group list-group-flush">
      {state.map((todo, i) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          i={i}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
};
