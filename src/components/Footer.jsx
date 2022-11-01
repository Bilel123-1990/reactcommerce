import React from 'react'

const Footer = () => {
  return (
    <div className='main-footer'>
      <div className="container">
        <div className="row">
          <div className='col-md-3 col-sm-6'>
            <h4>Product</h4>
            <ul className='list-unstyled '>
              <li>Pricing</li>
              <li>Features</li>
              <li>Documentation</li>
              <li>Developers</li>
            </ul>

          </div>

          <div className='col-md-3 col-sm-6'>
            <h4>Services</h4>
            <ul className='list-unstyled '>
              <li>Writing</li>
              <li>Internships</li>
              <li>Coding</li>
              <li>Teaching</li>
            </ul>

          </div>


          <div className='col-md-3 col-sm-6'>
            <h4>Company</h4>
            <ul className='list-unstyled '>
              <li>Mission</li>
              <li>History</li>
              <li>Staff</li>
              <li>Management</li>
            </ul>

          </div>

          <div className='col-md-3 col-sm-6'>
            <h4>Sociel Media</h4>
            <ul className='list-unstyled '>
              <li>Support</li>
              <li>Contact</li>
              <li>@Company</li>
              <li>Facebook <img src="/assets/images/products/fb.png" alt="" width="20px" heigth="20px"/></li> 
            </ul>
          </div>
          <div className='col-md-3 col-sm-6 imgfooter'>
           <img src="/assets/images/products/Samsung.jpg" alt="image1 footer" width="100px" heigth="100px" />
          </div>
          <div className='col-md-3 col-sm-6 imgfooter'>
           <img src="/assets/images/products/Xiaomi.jpg" alt="image footer" width="100px" heigth="100px" />
          </div>
          <div className='col-md-3 col-sm-6 imgfooter'>
           <img src="/assets/images/products/apple.jpeg" alt="image footer"  width="100px" heigth="100px"/>
          </div>
          <div className='col-md-3 col-sm-6 imgfooter'>
           <img src="/assets/images/products/Huawei.jpg" alt="image footer"  width="100px" heigth="100px"/>
          </div>

        </div>
        <div className="footer-buttom">
          <p className="text-xs-center">
            &copy;{new Date().getFullYear()} City Guide App- ALL Rigths Reserved
          </p>
        </div>
      </div>
        
    </div>
  )
}

export default Footer