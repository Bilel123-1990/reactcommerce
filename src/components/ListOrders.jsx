import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenNib,faTrashCan } from "@fortawesome/free-solid-svg-icons";





    const ListOrders = () => {

        const [order , setOrder]= useState([]);
        const [loading , setLoading]= useState(false);

              const fetchData= async ()=>{
              try{
                await axios.get('http://127.0.0.1:8000/ws/orders').then((res)=>{
                // console.log(res.data['hydra:member'])
                  setOrder(res.data ['hydra:member'])
                  setLoading(true)
                })
          
              }
              catch (err){

              }
              }
              useEffect(()=>{
                fetchData()
                },[])
     





  return (
    <div>
        <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Liste orders</h1>
            <hr />
          </div>
          <main class="d-flex flex-column">
 
  <div class="flex-grow-1 d-md-flex align-items-stretch">
    {/* <?php include 'views/admin_menu.phtml'; ?> */}
    <section class="col-md-8 p-5 mx-auto">
      
      <table class="table table-striped">
        <caption>Liste orders</caption>
        <thead class="thead-dark">
          <tr>
            <th>ID</th>
            <th>date order</th>            
            <th>total order</th> 
            <th>Modifier</th>
            <th>Supprimer</th>
          </tr>
        </thead>
        <tbody>
        
        {order.map((order,index)=>(

          <tr>

            <td>{order.id} </td>
            <td>{order.date} </td>
            <td>{order.total} </td>
            
            <td>
              <a
                class="btn btn-warning"
                title="Modifier"
                href="#">
             <FontAwesomeIcon icon={faPenNib}/>
                
              </a>
            </td>
            <td>
              
              <a
                href="#"
                class="btn btn-danger"
                title="Supprimer">
                <i class="fa fa-trash" aria-hidden="true"></i>
              </a>
              
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

export default ListOrders