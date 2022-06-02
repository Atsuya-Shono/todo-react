import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodo } from "./components/IncompleteTodos";
import { CompleteTodo } from "./components/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompletetodo, setIncompletetodo] = useState([`やること`]);
  const [completetodo, setCompletetodo] = useState([`やったこと`]);

  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  const onClickAdd = () => {
    //alert(todoText);
    if (todoText === "") return;
    const newTodos = [...incompletetodo, todoText];
    setIncompletetodo(newTodos);
    setTodoText("");
  };

  const onClickComplete = (index) => {
    //alert(index);
    const newIncompleteTodos = [...incompletetodo];
    const newCompleteTodos = [...completetodo, incompletetodo[index]];
    newIncompleteTodos.splice(index, 1);
    setIncompletetodo(newIncompleteTodos);
    setCompletetodo(newCompleteTodos);
  };

  const onClickDelete = (index) => {
    //alert(index);
    const newTodos = [...incompletetodo];
    newTodos.splice(index, 1);
    setIncompletetodo(newTodos);
  };

  const onClickBack = (index) => {
    //alert(index);
    const newIncompleteTodos = [...incompletetodo, completetodo[index]];
    const newCompleteTodos = [...completetodo];
    newCompleteTodos.splice(index, 1);
    setIncompletetodo(newIncompleteTodos);
    setCompletetodo(newCompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompletetodo.length >= 5}
      />
      {incompletetodo.length >= 5 && <p style={{ color: "red" }}>仕事しろ</p>}
      <IncompleteTodo
        todos={incompletetodo}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodo todos={completetodo} onClickBack={onClickBack} />
    </>
  );
};
