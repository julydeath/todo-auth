import React from 'react'
import "./form.css"
import TodoList from './TodoList'
import { useState } from 'react'

const Form = () => {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    setTodos([...todos, todo])
    setTodo('')
  }

  return (
    <div className='form-container'>
      <form className='form-input' onSubmit={handleSubmit}>
        <input className='input' placeholder='Enter Todo ...' type='text' value={todo} onChange={(e) => setTodo(e.target.value)}/>
      </form>
      <div className='form-btn'>
        <button className='btn'>ADD</button>
      </div>
      <div>
        <TodoList/>
      </div>
    </div>
  )
}

export default Form