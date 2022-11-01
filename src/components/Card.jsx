import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import img1 from "../assets/images/products/img1.jpg";
import img2 from "../assets/images/products/img2.jpg";
import img3 from "../assets/images/products/img3.jpg";
import img4 from "../assets/images/products/img4.jpg";
import img5 from "../assets/images/products/img5.jpg";
import img6 from "../assets/images/products/img6.jpg";
import img7 from "../assets/images/products/img7.jpg";
import img8 from "../assets/images/products/img8.jpg";
import img9 from "../assets/images/products/img9.jpg";
import img10 from "../assets/images/products/img10.jpg";
import img11 from "../assets/images/products/img11.jpg";
import img12 from "../assets/images/products/img12.jpg";
import img13 from "../assets/images/products/img13.jpg";
import img14 from "../assets/images/products/img14.png";
import img15 from "../assets/images/products/img15.jpeg";
import img16 from "../assets/images/products/img16.jpg";
import img17 from "../assets/images/products/img17.jpeg";
import img18 from "../assets/images/products/img18.jpeg";
import img19 from "../assets/images/products/img19.jpg";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useCart } from 'react-use-cart'
import CartBtn from "./buttons/CartBtn";

const Product = (props) => {
  const photos = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
  ];
  const[product ,setProduct]=useState(true);
const[quantity, setQuantity]=useState(0);


const [items, setItems]=useState([]);
const handleDecrement =()=>{
  if (quantity>0) {
    setQuantity(prevCount=>prevCount - 1); 
  }
}
const handleincrement =()=>{
  if (quantity <10) {
    
    setQuantity(prevCount=>prevCount + 1); 
  }
}


const [cartItems,setCartItem]=useState([]);
const [data,setData]=useState([]);



              const addStorage=()=>{  
                var products=JSON.parse(window.localStorage.getItem('product'))|| []
                var product={
                  "id":props.product.id,
                  "name":props.product.name,
                  "price":props.product.price,
                  "quantity":quantity,
                }
             
                products.push(product);
                window.localStorage.setItem('product',JSON.stringify(products))
              }

                    async function deleteproduct() {
                      try {
                        await axios
                          .delete("http://127.0.0.1:8000/ws/products/" + props.product.id)
                          .then((res) => {
                            //console.log(res.data)
                            // setProducts(res.data )
                          });
                      } catch (err) {
                        console.log(err);
                      }
                    }
                    
                    return (
                      <div
                        className="card mb-2"
                        key={props.product.id}
                        style={{ width: "18rem" }}>
                        <img
                          src={photos[props.index]}
                          className="card-img-top"
                          alt={"loading..."}
                        />
                        <div className="card-body">
                          {/* {Product.map((product)=> */}
                           <h5 className="card-name">{props.product.name}</h5>
                          {/* )} */}
                         
                          <p >{(props.product.description).substr(0,50)+"..."}</p>

                          <p className="lead">${props.product.price}</p>
                        
                            <div style={{display:"flex"}}>
                            <button type="button" className="input-group-text" onClick={handleDecrement} >-</button>
                                  <div className="form-control">{quantity}</div>
                                  <button type="button" className="input-group-text" onClick={handleincrement}>+</button>
                            </div>
                        
                        </div>
                                  {/* <NavLink   className="btn btn-outline-info"
                                   to={`/affichecart/${props.product.id}`}
                                    onClick={()=>addStorage()} >
                                        Add To Cart
                                  </NavLink> */}
                                       <button   className="btn btn-outline-info"
                               
                                    onClick={()=>addStorage()} >
                                        Add To Cart
                                  </button>
                        <NavLink
                          to={`/detailsproduct/${props.product.id}`}
                          className="btn btn-outline-warning ">
                          Show Details Products
                        </NavLink>
                        
                        <NavLink
                          to={`/updateproduct/${props.product.id}`}
                          className="btn btn-outline-success "
                        >
                          Update Products
                        </NavLink>

                        {/* <NavLink
                           to={`/deleteproduct/${props.product.id}`}
                          onClick={deleteproduct}
                          className="btn btn-outline-danger">
                          Delete Products             
                             </NavLink> */}
                                                
                    
                      </div>
                    );
                  };

export default Product;
