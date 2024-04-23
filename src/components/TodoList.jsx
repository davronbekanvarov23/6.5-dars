import React from "react";

function TodoList({ todos }) {
  return (
    <>
      {" "}
      {todos &&
        todos.map((todo) => {
          return (
            <li key={todo.id}>
              <h3>
                <em>title</em>:{todo.title}
              </h3>
              <p>completed:{todo.completed ? "✅" : "❌"}</p>
            </li>
          );
        })}
    </>
  );
}

export default TodoList;
