import React from 'react'
import { NavLink, Link  } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenNib,faBasketShopping } from "@fortawesome/free-solid-svg-icons";



const CartBtn = () => {

  
  return (
    
      
      <div>
         <Link
         to="/affichecart"
        type="button"
        className="btn btn-outline-primary ms-auto"
        data-toggle="modal"
        data-target="#loginModal"
      >
        <FontAwesomeIcon icon={faBasketShopping}/>Cart
      </Link>

      </div>
      

  )
}


export default CartBtn