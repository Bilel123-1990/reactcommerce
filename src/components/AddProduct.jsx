import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { Alert } from "bootstrap";



const AddProduct = () => {
     const[products ,setProduct]=useState('');
     const[name1,setName1]=useState('');
     const[description,setdescription]=useState('');
     const[price,setPrice]=useState('');
     const[quantity,setQuantity]=useState('');
     const[categ,setCateg]=useState('');


   //console.log(name)

const newProduct = async (e)=>{
                e.preventDefault()
                try{
                await axios.post('http://127.0.0.1:8000/ws/products',
                  {name:name1,description:description,price:parseFloat(price),quantity:parseFloat(quantity),category: "/ws/categories/"+categ}
                  ).then((res)=>{
                   console.log(res.data)
                    // setProducts(res.data ['hydra:member'])
                  })
          
                }
                catch (err){
                    console.log(err)
                }
}


              const [category , setCategory]= useState([]);
              const [name , setName]= useState([]);
                      const fetchData= async ()=>{
                      try{
                        await axios.get('http://127.0.0.1:8000/ws/categories',).then((res)=>{
                        // console.log(res.data['hydra:member'])
                          setCategory(res.data ['hydra:member'])
                          console.log(res.data ['hydra:member']);
                        })
                         //console.log(res.data);
                      }
                      catch (err){

                      }
                      }
                      useEffect(()=>{
                        fetchData()
                        },[])



// alert('Product Adeed');
               


  return (
    <div>
      <div className="container py-5"> 
        <div className="row">
          <div className="col-12 text-center">
            <h1>Ajouter Product</h1>
            <hr />
          </div>
          cmx,m
          <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1"b><h5>Name Product : </h5></label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                     onChange={event =>setName1(event.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1 "><h5>Description : </h5></label>
                    <input type="text" className="form-control" id="exampleInputPassword1"
                    onChange={event =>setdescription(event.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1"><h5>Price : </h5></label>
                    <input type="text" className="form-control" id="exampleInputPassword1"
                     onChange={event =>setPrice(event.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1"><h5>Quantity : </h5></label>
                    <input type="text" className="form-control" id="exampleInputPassword1"
                     onChange={event =>setQuantity(event.target.value)} />
                </div>
                 <div>
                 <select class="custom-select col-12"  onChange={(event) =>setCateg(event.target.value)}>
                                <option selected>Select Category</option>
                                {
                                  category&&category.map((elem,index)=>
                                    <option value={elem.id} key={index}>{elem.name}</option>
                                  )
                                }


                                  {/* <option value="1">{category.name}</option>
                                <option value="2">{category.name}</option>
                              <option value="3">{category.name}</option> */}
                 </select>
                  </div>          

                <button type="submit" className="btn btn-primary" onClick={newProduct}>Add Product <strong> +</strong> </button>
            </form>

        </div>
      </div>
    </div>
  );
};

export default AddProduct;



















  //  const [data, setData]=useState({
  //       // name: "test",
  //       // image: "img1",
  //       // price: 63,
  //       // description: "Mon meilleur Produit",
  //       // quantity: 651,
  //       // category: "/ws/categories/7",
  //  })

 // const newdata={...data }
                // newdata[e.target.id]= e.target.value
                // setData(newdata)
                // console.log(newdata)
             
                // }
              // const[productName, setProductName]=useState("");
              // const[productDescription, setProductDescription]=useState("");
              // const[productPrice, setProductPrice]=useState("");
              // const[productQuantity, setProductQuantity]=useState("");
              
                // try{
                //   await axios.post('http://127.0.0.1:8000/ws/products',
                //   {
                //     "name": "test",
                //     "image": "img1",
                //     "price": 63,
                //     "description": "Mon meilleur Produit",
                //     "quantity": 651,
                //     "category": "/ws/categories/7",
                //   }
                //   ).then((res)=>{
                //    console.log(res.data)
                //     // setProducts(res.data ['hydra:member'])
                //   })
          
                // }
                // catch (err){

                // }
                // const newdata={...data }
                // newdata[e.target.id]= e.target.value
                // setData(newdata)
                // console.log(newdata)
             
                // }
  
