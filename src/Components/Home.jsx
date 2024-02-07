import React from 'react';
import Listview from './Listview';
import "../styles/Home.css";
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div id='texture'>
      <NavLink to="/form">
        <div className='row' style={{ backgroundColor: '#8BC34A' }}>
          <div style={{ width: "90%"}}>
            <button className='btn btn-md rounded-pill btn-secondary float-end my-2'>New Post</button>
          </div>
        </div>
      </NavLink>
      <div className='container mt-2'>
        <div className='row'>
          <Listview />
        </div>
      </div>
    </div>
  )
}

export default Home;
