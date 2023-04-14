import React from 'react';
import './NavBar.css';
import { Link, Outlet } from 'react-router-dom';
const NavBar = () => {
  return (
    <div>
    

    <>
      <nav>
        <Link to='/' className='nav-btn3'><button>Home</button></Link>
        <div className='btns'>
        <Link to='/todolist' className='nav-btn1'><button>Todos</button></Link>
        <br></br>
        <Link to='/form' className='nav-btn2'><button>Forms</button></Link>
        </div>
        <Link to='/profile' className='nav-btn4'><button>About</button></Link>
      </nav>
      <Outlet />
    </>
  
    </div>
  )
}

export default NavBar
