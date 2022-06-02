import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [Incompletetodo, setIncompletetodo] = useState([`やること`]);
  const [Completetodo, setCompletetodo] = useState([`やったこと`]);

  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  const onClickAdd = () => {
    //alert(todoText);
    if (todoText === "") return;
    const newTodos = [...Incompletetodo, todoText];
    setIncompletetodo(newTodos);
    setTodoText("");
  };

  const onClickdelete = (index) => {
    //alert(index);
    const newTodos = [...Incompletetodo];
    newTodos.splice(index, 1);
    setIncompletetodo(newTodos);
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p>未完了のTODO</p>
        <ul>
          {Incompletetodo.map((todo, index) => {
            return (
              <div key={todo} className="list">
                <li>{todo}</li>
                <button>完了</button>
                <button onClick={() => onClickdelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p>完了のTODO</p>
        <ul>
          {Completetodo.map((todo) => {
            return (
              <div key={todo} className="list">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
