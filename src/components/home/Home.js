import React from 'react'
import './home.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className='home-container'>
      <div className='home-text'>
        <h1>TODO-AUTH</h1>
        <p>A simple todo uisng stack <span>React</span> and <span>Firebase</span> where you can add ,remo ve and update your task to a list.</p>
      </div>
      <div className='home-btn-container'>
        <button className='home-btn' onClick={() => navigate('/login')}>LOGIN</button>
        <button className='home-btn' onClick={() => navigate('/todo')}>TODO</button>
      </div>
    </div>
  )
}

export default Home