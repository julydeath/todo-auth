import React from 'react'
import './home.css'
import { useNavigate } from 'react-router-dom'
import { useUserAuth } from '../auth/UserAuth'

const Home = () => {
  const navigate = useNavigate()
  const {user} = useUserAuth()

  return (
    <div className='home-container'>
      <div className='home-text'>
        <h1>TODO-AUTH</h1>
        <p>A simple todo uisng stack <span>React</span> and <span>Firebase</span> where you can add ,remove and update your task to a list.</p>
      </div>
      {user ? <div className='home-btn-container'><button className='home-btn' onClick={() => navigate('/todo')}>TODO</button></div> : <div className='home-btn-container'>
        <button className='home-btn' onClick={() => navigate('/login')}>LOGIN</button>
        <button className='home-btn' onClick={() => navigate('/signup')}>CreateAccount </button>
      </div> }

    </div>
  )
}

export default Home