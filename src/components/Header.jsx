import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CartBtn from './buttons/CartBtn'
import Login from './buttons/Login'
import Signup from './buttons/Signup'
import Dashbord from './dashboard/Dashbord'
import '../components/buttons/header.css'
import { Redirect } from 'react-router'
import axios from 'axios'


const Header = () => {
  

  // const [cart,setCart]=useState([]);
  // const handleClick= (item)=>{
  //   console.log(item);
  // }
  
  return (

    
    <div>
      
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
  <button className="navbar-toggler" type="button"
   data-toggle="collapse" data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
  </button>
  

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
  
    <ul className="navbar-nav mr-auto">
      <li className="nav-item ">
        <Link className="nav-link hovermenu" to="/">Home </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link hovermenu" to="/products">Product</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link hovermenu" to="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link hovermenu" to="/contact">Contact</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link hovermenu" to="/nosmagazin">Nos Magazin</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link hovermenu" to="/dashboardadmin/listproduct">Administration</Link>
      </li>
      
      
    </ul> 
    <Link className="navbar-brand mx-auto fw-bold" to="/">SMART SHOP</Link>
    

  
  </div>
 <Login/>
  <Signup/>
  <CartBtn />
  {/* key={item.id} item={item} handleClick={handleClick} */}
         </nav>


    </div>
  )
}

export default Header