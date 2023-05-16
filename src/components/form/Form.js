import React, { useEffect } from "react";
import "./form.css";
import TodoList from "../todolist/TodoList";
import { useState } from "react";
import axios from "axios";
import { useUserAuth } from "../auth/UserAuth";

const Form = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [id, setId] = useState('')
  const {user} = useUserAuth()

  const getId = (id) => {
    setId(id)
  }

  const fetchData = async () => {
    const data = await axios.get("https://absolute-halibut-27.hasura.app/api/rest/all-todos")
    setTodos(data.data.TodoAuth.filter((li) => li.userid === user?.uid))
  }

  const postData = async () => {
    const data = await axios.post("https://absolute-halibut-27.hasura.app/api/rest/add-todo",{
      "task":todo,
      "userid":user.uid
    })
  }


  useEffect(() => {
    fetchData()
  },[todos,id])



  const handleSubmit = (e) => {
    e.preventDefault();
    postData()
    setTodo("");
  };

  return (
    <div className="form-container">
      <form className="form-input" onSubmit={handleSubmit}>
        <input
          className="input"
          placeholder="Enter Todo ..."
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="btn">ADD</button>
      </form>
      <div className="todo-list-container">
        <TodoList list={todos} getId={getId}/>
      </div>
    </div>
  );
};

export default Form;
