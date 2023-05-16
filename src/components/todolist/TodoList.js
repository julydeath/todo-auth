import React, { useEffect, useState } from 'react'
import "./todolist.css"
import {RiDeleteBin5Line} from "react-icons/ri"

const TodoList = ({list,getId}) => {
  const [id, setId] = useState('')

  const deleteData = async () => {
    const data = await fetch("https://absolute-halibut-27.hasura.app/api/rest/"+id,{
      method: 'DELETE'
    })
  }
  
  useEffect(() => {
    deleteData()
    getId(id)
  },[id])
  
  return (
    <div className='todo-list-container'>
      {list.map((li) => <div key={li.id} className='todo-list'><h4 className='list'>{li.task}</h4><RiDeleteBin5Line onClick={() => setId(li.id)} className='list-btn'/></div> )}
    </div>
  )
}

export default TodoList