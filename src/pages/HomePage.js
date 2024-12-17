import React from 'react'
import myimg from '../assets/profile1.jpg'
import '../assets/HomePage.css'
import Img1 from '../assets/image (1).jpg'
import Img2 from '../assets/image (2).jpg'
import Img3 from '../assets/image (3).jpg'
import Img4 from '../assets/image (7).jpg'
const HomePage = () => {
  return (
    <div >
        <div id="carouselExampleSlidesOnly" className="carousel slide homeslide" data-bs-ride="carousel" >
        <div className="carousel-inner" style={{height:'250px',width:"50%"}}>
            <div className="carousel-item active" data-bs-interval="2000">
            <img src={Img1} className="d-block w-100 " alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
            <img src={Img2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
            <img src={Img3} className="d-block w-100" alt="..." />
            </div>
        </div>
        </div>
{/* <--------------------------------------------- middle NavBar ------------------------------------------------------------------ > */}
        <div className='middlenavbar'>
          <ul className="nav nav-tabs">
            <li className=" dropdowncolor  middleli">
            <a className="nav-link dropdown-toggle nabaritems  " data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Categories</a>
              <ul className="dropdown-menu drop ">
                <li><a className="dropdown-item " href="/stampmodel">Stamps</a></li>
                <li><hr className="dropdown-divider " style={{"color":" rgb(210,20,20);"}} /></li>
                <li><a className="dropdown-item " href="/acrylicPhotoFrames">Acrylic Photo Frames</a></li>
                {/* <li><hr className="dropdown-divider " /></li>
                <li><a className="dropdown-item " href="#">Something else here</a></li>

                <li><hr className="dropdown-divider " /></li>
                <li><a className="dropdown-item " href="#">Separated link</a></li> */}
              </ul>
            </li>
            <li className="nav-item middleli dropdowncolor">
              <a className="nav-link nabaritems" href="#">Rubber Stamps</a>
            </li>
            <li className="nav-item middleli dropdowncolor">
              <a className="nav-link  nabaritems" aria-current="page" href="#">Self-inking Stamps</a>
            </li>
            <li className="nav-item middleli dropdowncolor">
              <a className="nav-link nabaritems" aria-current="page" href="#">Flash Stamps</a>
            </li>
            <li className="nav-item middleli dropdowncolor">
              <a className="nav-link nabaritems" aria-disabled="true">Quick Dry Stamps</a>
            </li>
          </ul>
        </div>
{/* <---------------------------------------------------------------- Items ----------------------------------------------------------------> */}
        <div className='d-flex row mt-5 mb-5 justify-content-around'>
          <div class="card col-sm-2" style={{"width": "18rem;"}}>
            <img src={Img1} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div class="card col-sm-2" style={{"width": "18rem;"}}>
            <img src={Img2} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div class="card col-sm-2" style={{"width": "18rem;"}}>
            <img src={Img3} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div class="card col-sm-2" style={{"width": "18rem;"}}>
            <img src={Img4} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default HomePage
