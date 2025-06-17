import React from 'react';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate=useNavigate();
  return (
    <>
      <header className='navbar-header'>
        <nav className='navbar-nav'>
          <button className="navbar-logo" onClick={()=>navigate('/')}>Logo</button>
          <ul className="navbar-ul">
            <li className="navbar-li">About</li>
            <li className="navbar-li">Contact</li>
          </ul>
        </nav>
        <div className="navbar-button">
          <button className="navbar-btn" onClick={()=>navigate('/register')}>Register</button>
          <span className="text-white">or</span>
          <button className="navbar-btn" onClick={()=>navigate('/login')}>Login</button>
        </div>
      </header>
    </>
  );
};

export default Navbar;