import React from 'react'
import Product from './Product'
import grand from '../assets/images/products/grand.jpg'
import offre from '../assets/images/products/offre.jpg'
import offre1 from '../assets/images/products/offre2.jpg'
import CartBtn from './buttons/CartBtn'



const Begin = () => {
  
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
              <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/assets/images/begin/img.jpg"
              className="d-block w-100"
              alt="Phone" height="600px"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/assets/images/begin/img1.jpg"
              className="d-block w-100"
              alt="Phone"  height="600px"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/assets/images/begin/img3.jpg"
              className="d-block w-100"
              alt="Phone"  height="600px"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/assets/images/begin/img4.png"
              className="d-block w-100"
              alt="Phone " height="600px"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <img src={grand} alt="grand image" width="1000" height="300" style={{ marginTop :"10px"}}  />
       <div>
      <img src={offre} alt="grand image" width="700" height="300" style={{ marginTop :"10px" , marginRight:"10px"}}  />
      <img src={offre1} alt="grand image" width="700" height="300" style={{ marginTop :"10px"}}  />
      </div>
      <div>
      <iframe width="1000" height="300"
       src="https://www.youtube.com/embed/rLWWi8sF8lU" 
       title="YouTube video player" frameborder="0" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
       style={{ marginTop :"10px"}}
       allowfullscreen></iframe>
      </div>
     <Product/>
    </div>
    
  )
}

export default Begin
