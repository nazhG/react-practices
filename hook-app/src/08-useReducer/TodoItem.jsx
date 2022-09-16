import React from "react";

export const TodoItem = ({ todo, i, onDelete, onToggle }) => {
  const { id, todo: desc } = todo;
  return (
    <li key={id} className="list-group-item">
      <span 
      onClick={() => onToggle(id)} 
      className={`${todo.done && "text-decoration-line-through"}`}    
      >
        {i}. {desc}
      </span>
      <button className="btn" onClick={() => onDelete(id)}>🗑️​</button>
    </li>
  );
};
