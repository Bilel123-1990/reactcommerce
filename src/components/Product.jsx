import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios'
import Begin from './Begin'
import Card from './Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import CartBtn from './buttons/CartBtn';


                const Product = () => {
                  
                const [products , setProducts]= useState([]);
                const [loading , setLoading]= useState(false);
  
              
                const [query,setQuery]=useState("");

                      const fetchData= async ()=>{
                      try{
                        await axios.get(`http://127.0.0.1:8000/ws/products?name=${query}`).then((res)=>{
                        // console.log(res.data['hydra:member'])
                          setProducts(res.data ['hydra:member'])
                          setLoading(true)
                        })
                  
                      }
                      catch (err){

                      }
                      }
                      useEffect(()=>{
                        fetchData()
                        },[query])
        

  return(
  
    <div>
                <div className="container py-5">
                    <div className='row'>
                    <div className='col-12 text-center'>
                        <h1>Products</h1>
                        <hr/>
                  <form className="form-inline my-2 my-lg-0">
                  <input className="form-control mr-sm-2" type="search"
                  placeholder="Search" aria-label="Search" onChange={(e)=>setQuery(e.target.value)}/>
                    {/* <Redirect to="//else" /> */}
                      </form>

                       <NavLink to={`/addproduct`} className="btn btn-outline-primary mt-3 mr-5 mx-auto">
                          Add Products
                        </NavLink>

                    </div>
                    </div>
                 </div>
                    <div className="container">   
                    <div className='row justify-content-around'>
                        {loading?products.map((product,index,item)=>
                         <Card   key={index}
                                 index={index}
                                 product={product}
                                 item={item}/>
                              
                        ):        <div className="spinner-border" role="status">
                                      <span className="sr-only">Loading...</span>
                                  </div>  
                        }
                 
                         
                    </div>
                    </div>
           
       </div>
  
)

}

export default Product