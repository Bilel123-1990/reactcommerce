import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import ProductDetails from './ProductDetails'
import panier from '../assets/images/products/panier.jpg'




const AfficheCart = () => {

    const [products, setProducts] = useState(JSON.parse(window.localStorage.getItem('product'))|| []);
    const[quantity, setQuantity]=useState(0);
    const { id } = useParams();

    console.log(products);
 // console.log(id);


  return (

    <div>
    <div className="container py-5">
    <div className="row">
      <div className="col-12 text-center">
        <h1>Votre Panier</h1>  <img  src={panier} alt="image panier" width="100px" heigth="100px" />
        <hr />
      </div>
      <main className="d-flex flex-column">

<div className="flex-grow-1 d-md-flex align-items-stretch">
{/* <?php include 'views/admin_menu.phtml'; ?> */}
<section className="col-md-8 p-5 mx-auto">
  
  <table className="table table-striped">
    <caption>Panier</caption>
    <thead className="thead-dark">
      <tr>
        <th>ID</th>
        <th>Name Product</th>
        <th>Price Product</th>
        <th>Description</th>
        <th>Quantity</th>
        {/* <th>Modifier</th>
        <th>Supprimer</th> */}
      </tr>
    </thead>
    <tbody>
    
    {products && products.map((product,index)=>(
      <tr key={index}>
        <td>{product.id} </td>
        <td>{product.name} </td>
        <td>{product.price}</td>
        <td>{product.description}</td>
        <td>{product.quantity}</td>
       
      </tr>
    ))}
    </tbody>
  </table>
</section>
</div>
</main>


    </div>
  </div>
  <NavLink to={`/products`} >
               Previous
  </NavLink>
</div>
)
}


export default AfficheCart;











//     <div> 
    
          
      
//         <h2>Ici Votre Panier</h2>
//         <hr/>
//         <div className='affichecart'>
//             <h3>Product Name </h3>
//             <h3>Price</h3>
            
//             <h3>Quantity</h3>
//         </div>
//         <div>
//         <span>{products.name}</span>
//         <span>{products.price}</span>
        
//         <span>{products.quantity}</span>
//         </div>
//         <NavLink to={`/products`} >
//            Previous
//         </NavLink>
//     </div>
    
//   )
// }

