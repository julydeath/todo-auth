import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='container'>
      <div className='image'>
        <img className="profile-img" src="https://galleria-minsk.by/assets/images/clothes-and-shoes/todo/logo-todo.jpg" alt='name'/>
      </div>
      <div className='links-container'>
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/login">login</Link>
      </div>
    </div>
  )
}

export default Navbar