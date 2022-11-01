import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";



      const UpdateProduct = () => {
        const[product ,setProduct]=useState('');
        const[name,setName1]=useState('');
        const[description,setDescription]=useState('');
        const[price,setPrice]=useState('');
        const[quantity,setQuantity]=useState('');
        const[categ,setCateg]=useState('');

        let newProduct={
          name:name,
          description:description,
          price:parseFloat(price),
          quantity:parseFloat(quantity),
          category:categ
        }
        

//console.log(name)
          const {id} = useParams()
          console.log(id);
            
           const [category , setCategory]= useState([]);
          //  const [name , setName]= useState([]);

           const fetchData= async ()=>{
            
           try{
             await axios.get('http://127.0.0.1:8000/ws/products/'+id).then((res)=>{
             console.log(res.data)
               setProduct(res.data )

               setName1(res.data.name)
               setDescription(res.data.description)
               setPrice(res.data.price)
               setQuantity(res.data.quantity)
               setCateg(res.data.category)

             })
           }
           catch (err){

           }
           }
           useEffect(()=>{
             fetchData()
             },[])

                  const updateproduct = async () => {
                    console.log(newProduct)
                      try {
                     await axios.put("http://127.0.0.1:8000/ws/products/"+id,newProduct)
                          .then((res) => {
                            console.log(res.data)
                            window.location.href="/products"
                            // setProducts(res.data )
                          });
                      } catch (err) {
                        console.log(err)
                      }
                    };

             



  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Update Product</h1>
            <hr />
          </div>
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">
                <h5>Name Product: </h5>
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                defaultValue={product.name}
                onChange={event =>setName1(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1 ">
                <h5>Description : </h5>
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                defaultValue={product.description}
                onChange={event =>setDescription(event.target.value)}

              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">
                <h5>Price : </h5>
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                defaultValue={product.price}
                onChange={event =>setPrice(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">
                <h5>Quantity : </h5>
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                defaultValue={product.quantity}
                onChange={event =>setPrice(event.target.value)}
                
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={(e)=>{
                e.preventDefault()
                updateproduct()
              }
              }
            >
              Edit Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;




  // const UpdateProducts = () => {
                  //   const [products, setProduct] = useState("");
                  //   const [name1, setName1] = useState("");
                  //   const [description, setDescription] = useState("");
                  //   const [price, setPrice] = useState("");
                  //   const [quantity, setQuantity] = useState("");
                  //   const [categ, setCateg] = useState("");

                  //   const updateproduct = async (props) => {
                  //     try {
                  //       await axios
                  //         .put("http://127.0.0.1:8000/ws/products/" + props.product.id)
                  //         .then((res) => {
                  //           //console.log(res.data)
                  //           // setProducts(res.data )
                  //         });
                  //     } catch (err) {}
                  //   };
                  //   useEffect(() => {
                  //     updateproduct();
                  //   }, []);
