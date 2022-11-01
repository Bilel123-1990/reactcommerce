import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenNib,faTrashCan } from "@fortawesome/free-solid-svg-icons";




    const ListProduct = (props) => {

        const [products , setProducts]= useState([]);

        const[product ,setProduct]=useState(true);

        const [loading , setLoading]= useState(false);

              const fetchData= async ()=>{
              try{
                await axios.get('http://127.0.0.1:8000/ws/products').then((res)=>{
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
                },[])



                async function deleteproduct(id) {
                  try {
                    await axios
                      .delete("http://127.0.0.1:8000/ws/products/" + id)
                      .then((res) => {
                        window.location.href="/dashboardadmin/listproduct"
                        
                        //console.log(res.data)
                        // setProducts(res.data )
                      });
                  } catch (err) {
                    console.log(err);
                  }
                }



  return (
    <div>
        <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Liste Product</h1>
            <hr />
          </div>
          <main className="d-flex flex-column">
 
  <div className="flex-grow-1 d-md-flex align-items-stretch">
    {/* <?php include 'views/admin_menu.phtml'; ?> */}
    <section className="col-md-8 p-5 mx-auto">
      
      <table className="table table-striped">
        <caption>Liste des Product</caption>
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Name Product</th>
            <th>Price Product</th>
            <th>Description</th>
            <th>Modifier</th>
            <th>Supprimer</th>
          </tr>
        </thead>
        <tbody>
        
        {products.map((product,index)=>(

          <tr>

            <td>{product.id} </td>
            <td>{product.name} </td>
            <td>{product.price}</td>
            <td>{product.description}</td>
            <td>
              <NavLink
            
                className="btn btn-warning"
                title="Modifier"
                href="#">
                  <FontAwesomeIcon icon={faPenNib}/>
                
              </NavLink>
            </td>
            <td>
              
              {/* <NavLink
                          onClick={deleteproduct}                             
                            className="btn btn-danger"
                            title="Supprimer">
                            <i className="fa fa-trash" aria-hidden="true"></i>
              </NavLink> */}

              <button
                          // to={`/deleteproduct/${props.product.id}`}
                          onClick={()=>deleteproduct(product.id)}
                          className="btn btn-outline-danger"
                          title="Delete Products" >
                          <FontAwesomeIcon icon={faTrashCan}/>
                          
                                                      
             </button>

              
            </td>
        
          </tr>
        ))}
        </tbody>
      </table>
    </section>
  </div>
</main>





        </div>
      </div>
    </div>
  )
}

export default ListProduct