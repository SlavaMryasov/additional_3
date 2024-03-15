import React, { RefObject, useEffect, useState, useRef } from "react";
import "./App.css";
import { Input } from "./input/Input";
import { Button } from "./button/Button";

type TodosType = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState<TodosType[]>([]);

  //  const [inputValue, setInputValue] = useState('')
  
  //  const onChangeInput = (value: string) => {
  //     setInputValue(value)
  //     console.log(inputValue)
  //  }
  const inputRef = useRef<HTMLInputElement>(null);

  const addUserHandler = () => {
    if (inputRef.current) {
      const newTask = {
        id: todos.length + 1,
        title: inputRef.current.value,
        completed: false,
        userId: 999,
      };
      setTodos([newTask, ...todos]);
      inputRef.current.value = "";
    }
  };

  const fetchFoo = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((json) => setTodos(json));
  };

  useEffect(() => {
    fetchFoo();
  }, []);

  const showTodosHandler = () => {
    fetchFoo();
  };

  const hideTodosHandler = () => {
    setTodos([]);
  };

  
  return (
    <>
      <button onClick={showTodosHandler}>show todos</button>
      <button onClick={hideTodosHandler}>hide todos</button>
      <hr />
      {/* <Input name='dsad' callBack={onChangeInput} newTitle={inputValue}/> */}
      <Input inputRef={inputRef} />
      <Button name="add" onClick={addUserHandler} />
      <ul>
        {todos.map((user) => (
          <li>
            <span>{user.id}_</span>
            <span>{user.title}</span>
            <input type="checkbox" checked={user.completed} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
