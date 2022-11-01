import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse,faMessage,faUser,faTag,faLayerGroup,faFileInvoice } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import UserProfil from "../UserProfil";
  // import { faChart } from '@fortawesome/free-solid-svg-icons'
   //import { faMoney } from '@fortawesome/free-solid-svg-icons'
//   import { faMessage } from '@fortawesome/free-solid-svg-icons'
const Dashbord = () => {
  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item active" aria-current="true">
        <FontAwesomeIcon icon={faHouse}/>
        <Link className="nav-link hovermenu" to="/">Dashbord </Link>     
        </li>
        <li className="list-group-item"> <FontAwesomeIcon icon={faMessage}/> Messages
        
        </li>
        <li className="list-group-item"><FontAwesomeIcon icon={faUser}/>
       
        <Link className="nav-link hovermenu" to="/userprofile"> User Profile </Link>  
        </li>
  
        <li className="list-group-item"><FontAwesomeIcon icon={faTag}/> 
        <Link className="nav-link hovermenu" to="/dashboardadmin/listproduct"> List Products </Link>  
        </li>
        <li className="list-group-item"><FontAwesomeIcon icon={faFileInvoice}/>
        <Link className="nav-link hovermenu" to="/dashboardadmin/listcategory"> List Category </Link>  
        </li>
        <li className="list-group-item"><FontAwesomeIcon icon={faUser}/>
        <Link className="nav-link hovermenu" to="/dashboardadmin/userlist"> List Users </Link>  
        </li>
        <li className="list-group-item"><FontAwesomeIcon icon={faLayerGroup}/>
        <Link className="nav-link hovermenu" to="/dashboardadmin/listorder"> List Orders </Link>  
        </li>


      </ul>
    </div>
  );
};

export default Dashbord;
