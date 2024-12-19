import React from 'react'
import '../assets/Footer.css'
import Footerlogo from '../assets/image 55.svg'


const Footer = () => {
  return (
    <div className='footer container-fluid d-flex row'>
      <div className=' d-flex row justify-content-around'>
        <div className='col-2'>
            <ul>
            <li></li>
            <li></li>
              <li><a href='#'>Company</a></li>
              <li><a href='#'>About</a></li>
              <li><a href='#'>Features</a></li>
              <li><a href='#'>Works</a></li>
              <li><a href='#'>Feedback</a></li>
            </ul>
        </div>
        <div className='col-2'>
        <ul>
              <li><a href='#'>Help</a></li>
              <li></li>
              <li><a href='#'>Customer Support</a></li>
              <li><a href='#'>Delivery Details</a></li>
              <li><a href='#'>Terms & Conditions</a></li>
              <li><a href='#'>Privacy Policy</a></li>
            </ul>
        </div>
        <div className='col-2'>
          <ul>
            <li>Address</li>
            <li></li>
            <li>Beside ICIC Bank,</li>
            <li>Pillar No :1039,</li>
            <li>S.R Nagar, </li>
            <li>Ameerpet, </li>
            <li> Telangana, 500038. </li>
            <li> <a href='https://maps.app.goo.gl/Wi7DZVsJudxiCpwu8' target='_blank'> <i className="bi bi-geo-alt-fill fa-google"></i>   Location</a> </li>
          </ul>
        </div>
        <div className='col-2'>
            <img src={Footerlogo} className='footlogo' alt="..." />
          </div>
      </div>
      <hr  style={{
            color: '#F6F6F6',
            backgroundColor: '#F6F6F6',
            height: 2,
            borderColor : '#F6F6F6',
            width:"85%",
           marginLeft:"8rem",
           marginRight:"10rem",
              }}/>

      <div className=' d-flex row justify-content-around'>
        <div className='col-sm-5'>
          <p style={{color:"#F6F6F6"}}><i class="bi bi-c-circle" style={{color:"#F6F6F6"}}></i> Copyright 2022, All Rights Reserved by MAMATHA Digitals</p>
        </div>
        <div className='col-sm-1'></div>
        <div className='col-sm-2'></div>
        <div className='col-sm-2 ' >
              <a href='#' className='me-2' style={{"textDecoration":"none","color":"black"}} ><i className="bi bi-twitter"></i></a>
              <a href='#' className='me-2' style={{"textDecoration":"none","color":"blue"}}><i className="bi bi-facebook"></i></a>
              <a href='#' className='me-2' style={{"textDecoration":"none","color":"black"}}><i className="bi bi-instagram"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
