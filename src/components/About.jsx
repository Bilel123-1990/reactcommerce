import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className='text-primary fw-bold mb-4 '>About US</h1>
            <p className='lead mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eligendi laboriosam dolorem. Nemo neque quidem, alias quod commodi rem ipsum quia obcaecati a consequuntur dicta, asperiores necessitatibus aperiam quasi doloremque architecto at dolore eligendi voluptatem magnam amet deleniti. Cum facilis eveniet nemo ab enim nostrum in architecto eaque quidem iusto?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur 

            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">
              Contact Us
            </NavLink>
          </div>
          <div className='col-md-6 d-flex justify-content-center'>
            <img src="/assets/images/products/about-us.jpg" alt="about us" height="400px" width="400px"/>

          </div>
        </div>
      </div>
    </div>
  )
}

export default About