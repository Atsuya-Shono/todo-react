import React from "react";

export const CompleteTodo = (props) => {
  const { todos, onClickBack } = props;

  return (
    <div className="complete-area">
      <p>完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};