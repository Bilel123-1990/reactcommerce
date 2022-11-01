import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Begin from './components/Begin';
import About from './components/About';
import Contact from './components/Contact';
import Product from './components/Product';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import AddProduct from './components/AddProduct';
import UpdateProducts from './components/UpdateProducts';
import DeleteProduct from './components/DeleteProduct';
// import { Routes ,Route } from 'react-router-dom';
import UserProfil from './components/UserProfil';
import ListProduct from './components/dashboard/ListProduct';
import ListCategory from './components/ListCategory';
import UserList from './components/UserList';
import ListOrders from './components/ListOrders';
import NosMagazin from './components/NosMagazin';
import DashboardAdmin from './components/dashboard/dashboardAdmin';
import AfficheCart from './components/AfficheCart';



function App() {
  return (
    <div className="App">
      <Header/>
     <Routes>
        
        <Route exact path="/" element={<Begin/>} />
        <Route path="/products" element={<Product/>} />
        <Route path="/userprofile" element={<UserProfil/>} />
        {/* <Route path="/listcategory" element={<ListCategory/>} /> */}
        
        

        {/* <Route exact path="/products/:id" element={<Product/>} /> */}
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/affichecart" element={<AfficheCart/>} />
        <Route exact path="/detailsproduct/:id" element={<ProductDetails/>} />
        <Route exact path="/addproduct/" element={<AddProduct/>} />
        <Route exact path="/updateproduct/:id" element={<UpdateProducts/>} />
        <Route exact path="/deleteproduct/:id" element={<DeleteProduct/>} />
        <Route  path="/contact" element={<Contact/>} />   
        <Route  path="/nosmagazin" element={<NosMagazin/>} />   
        <Route  path="/dashboardadmin" element={<DashboardAdmin/>} >  
          <Route path="/dashboardadmin/listproduct" element={<ListProduct/>} />
          <Route path="/dashboardadmin/listcategory" element={<ListCategory/>} />
          <Route path="/dashboardadmin/userlist" element={<UserList/>} />
          <Route path="/dashboardadmin/listorder" element={<ListOrders/>} />
        </Route>

     </Routes>
     <Footer/>
    </div>
  );      
}

export default App;
                                                                                                                                                                                                                                                                                                                              