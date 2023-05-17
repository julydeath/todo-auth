import React, { useEffect } from "react";
import "./form.css";
import TodoList from "../todolist/TodoList";
import { useState } from "react";
import axios from "axios";
import { useUserAuth } from "../auth/UserAuth";

const Form = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [newTodos, setNewTodos] = useState([])
  const [id, setId] = useState('')
  const [loading, setLoading] = useState(true)
  const {user} = useUserAuth()

  const getId = (id) => {
    setId(id)
  }

  const fetchData = async () => {
    const data = await axios.get("https://absolute-halibut-27.hasura.app/api/rest/all-todos", {
      headers: {
        "x-hasura-admin-secret": process.env.REACT_APP_HASURA_KEY
      }
    });
    setTodos(data.data.TodoAuth.filter((li) => li.userid === user?.uid))
    setLoading(false)
  }

  const postData = async () => {
    const data = await axios.post("https://absolute-halibut-27.hasura.app/api/rest/add-todo",{
      "task":todo,
      "userid":user.uid
    },{
      headers: {
        "x-hasura-admin-secret": process.env.REACT_APP_HASURA_KEY
      }
    })
  }


  useEffect(() => {
    fetchData()
  },[newTodos,id,user])



  const handleSubmit = async (e) => {
    e.preventDefault();
    await postData()
    setNewTodos([...newTodos, todo])
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
        <button className="btn">ADD TODO</button>
      </form>
      <div className="todo-list-container">
        <TodoList list={todos} getId={getId} loading={loading}/>
      </div>
    </div>
  );
};

export default Form;
