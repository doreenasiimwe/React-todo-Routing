import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css'

const LandPage = () => {
  return (
    <div>
      <div className='landing-page'>
      <h3>Check out My React-App Its Fun I Promise</h3>
      <p>Browse more by clicking the buttons below or using the navigation</p>
      <div className='home'>
        <button><Link to='/todolist' className='landing-button'> Todolist</Link></button>
        <br></br>
        <button><Link to='/form' className='landing-button'>Forms</Link></button>
      </div>
    </div>

    </div>
  )
}

export default LandPage
