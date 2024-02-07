import React from 'react';

import "../styles/Navbar.css";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='Header'>
        <div className="custnavbar container">
             <NavLink to="/"> <h2 className="custlogo">Blog Application</h2></NavLink> 
        </div>
    </div>
  )
}

export default Navbar