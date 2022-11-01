import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenNib,faTrashCan } from "@fortawesome/free-solid-svg-icons";




    const UserList = () => {

        const [users , setUsers]= useState([]);
        const [loading , setLoading]= useState(false);

              const fetchData= async ()=>{
              try{
                await axios.get('http://127.0.0.1:8000/ws/users').then((res)=>{
                // console.log(res.data['hydra:member'])
                    setUsers(res.data ['hydra:member'])
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
            <h1>Liste Users</h1>
            <hr />
          </div>
          <main class="d-flex flex-column">
 
  <div class="flex-grow-1 d-md-flex align-items-stretch">
    {/* <?php include 'views/admin_menu.phtml'; ?> */}
    <section class="col-md-8 p-5 mx-auto">
      
      <table class="table table-striped">
        <caption>Liste des useers</caption>
        <thead class="thead-dark">
          <tr>
            <th>ID</th>
            <th>email user</th>
            <th>username</th>
            {/* <th>Name user</th> */}
            <th>roles</th>
            
            <th>adresse</th>
            <th>CIN</th>

            <th>Modifier</th>
            <th>Supprimer</th>
          </tr>
        </thead>
        <tbody>
        
            {users.map((user,index)=>(

          <tr>

            <td>{user.id} </td>
            <td>{user.email}</td>
            <td>{user.username} </td>
            <td>{user.roles}</td>
            
            <td>{user.adresse}</td>
            <td>{user.cin}</td>

            
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

export default UserList