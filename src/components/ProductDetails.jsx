import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
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

const ProductDetails = (props) => {
  const photos = {
    img1: img1,
    img2: img2,
    img3: img3,
    img3: img3,
    img4: img4,
    img5: img5,
    img6: img6,
    img7: img7,
    img8: img8,
    img9: img9,
    img10: img10,
    img11: img11,
    img12: img12,
    img13: img13,
    img14: img14,
    img15: img15,
    img16: img16,
    img17: img17,
    img18: img18,
    img19: img19,
  };
  const { id } = useParams();
  console.log(id);
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    try {
      await axios.get("http://127.0.0.1:8000/ws/products/" + id).then((res) => {
        //console.log(res.data)
        setProducts(res.data);
      });
    } catch (err) {}
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Details Product</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-around">
          <div className="details">
            <div className="imgdetails">
              <img src={photos[products.image]} alt="imagedetails" />
            </div>
            <div>
              <div className="row">
                <h2>Name: {products.name}</h2>
                <p>Description: {products.description}</p>
                <span>Price: ${products.price}</span>
                <span>Quantity: {products.quantity}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
