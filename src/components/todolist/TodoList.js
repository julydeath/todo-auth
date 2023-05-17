import React, { useEffect, useState } from "react";
import "./todolist.css";
import { RiDeleteBin5Line } from "react-icons/ri";

const TodoList = ({ list, getId, loading }) => {
  const [id, setId] = useState("");

  const deleteData = async () => {
    const data = await fetch(
      "https://absolute-halibut-27.hasura.app/api/rest/" + id,
      {
        method: "DELETE",
        headers: {
          "x-hasura-admin-secret": process.env.REACT_APP_HASURA_KEY
        },
      }
    );
  };

  const deleteTodo = async() => {
    await deleteData()
    getId(id)
  }

  useEffect(() => {
    deleteTodo()
  }, [id]);

  if (loading) {
    return <h1 className="todo-loading">Loading...</h1>;
  }

  return (
    <div className="todo-list-container">
      {list.map((li) => (
        <div key={li.id} className="todo-list">
          <h4 className="list">{li.task}</h4>
          <RiDeleteBin5Line onClick={() => setId(li.id)} className="list-btn" />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
