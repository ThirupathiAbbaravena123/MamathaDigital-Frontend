import React from 'react'
import './Dashboard.css'

function Dashboard() {
  return (
    <>
      <div className='ms-5'>
        <div className='row'>
          <div className='col-2'>
            <div className='d-flex mt-4 mb-5'>
              <img src= {'Images/image55.jpg'} className='img-fluid w-50'/>
            </div>
            <div className='d-flex mt-5'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-microsoft mt-1 me-4 text-danger" viewBox="0 0 16 16">
                <path d="M7.462 0H0v7.19h7.462zM16 0H8.538v7.19H16zM7.462 8.211H0V16h7.462zm8.538 0H8.538V16H16z"/>
              </svg>
              <a href="" class="dash"><h5 class='h5'>Dashboard</h5></a>
            </div>
            <div className='d-flex mt-4'>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-bag me-4 mt-1" viewBox="0 0 16 16">
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
            </svg>
              <a href=" " class="dash1"><h5>Products</h5></a>
            </div>
            <div className='d-flex mt-4'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-people me-4 mt-1" viewBox="0 0 16 16">
                <path d="M5.5 6a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 1a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zm5 2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 1a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zm-8 2a5.985 5.985 0 0 1 3.401-5.418 6.51 6.51 0 0 0-1.066-.084 6.484 6.484 0 0 0-3.451.96C.813 11.329 0 13.69 0 15h1c0-1.5.632-2.847 1.65-3.793A5.978 5.978 0 0 1 2.5 11zm7 0a5.978 5.978 0 0 1 1.293 3.207c1.018.946 1.65 2.293 1.65 3.793h1c0-1.31-.813-3.671-2.884-4.542a6.484 6.484 0 0 0-3.451-.96c-.34 0-.682.03-1.066.084A5.985 5.985 0 0 1 9.5 11z"/>
              </svg>
              <a href=" " class="dash1"><h5>Customers</h5></a>
            </div>
            <div className='d-flex mt-4'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart3 me-4 mt-1" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
            </svg>
              <a href="" class="dash1"><h5>Orders</h5></a>
            </div>
            <div className='d-flex mt-4'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-gear me-4 mt-1" viewBox="0 0 16 16">
              <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
              <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>
            </svg>
              <a href=" " class="dash1"><h5>Settings</h5></a>
            </div>
            <div className='d-flex mt-4'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-box-arrow-right me-4 mt-1" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
              <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
            </svg>
              <a href=" " class="dash1"><h5>Logout</h5></a>
            </div>
          </div>
        <div className='col-10'>
          <nav class="navbar navbar-expand-lg ">
            <div class="container-fluid">
              <h4 className='me-5'>Overview</h4>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
                <form class="d-flex" role="search">
                  <div className='searchbar'>
                  <i class="fa-solid fa-magnifying-glass mt-1"></i>
                    <input class="me-4 ms-4" type="search" placeholder="Search..." aria-label="Search"/>
                  </div>
                  {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
                </form>
                <ul class="navbar-nav  mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active me-3 ms-5" aria-current="page" href="#"><i class="fa-regular fa-bell "></i></a>
                  </li>
                  <li class="nav-item">
                    <div className='d-flex'>
                      <img src='https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?cs=srgb&dl=pexels-olly-3756681.jpg&fm=jpg' className='loremPerson'/>
                      <h6 className='mt-2 ms-3'>lorem Ipsun</h6>
                    </div>
                  </li>
                </ul>
                <div class="btn-group me-1 ms-3 dropdownToggle">
                  <button type="button" class=" border-none dropdownToggle dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                    <span class="visually-hidden">Toggle Dropdown</span>
                  </button>
                  <ul class="dropdown-menu">
                    ...
                  </ul>
                </div>
              </div>
            </div>
          </nav>
            <div className='row dashboardContainer container'>
              <div className='col-4 d-flex mt-2'>
                <div className='card w-100 cardContainer shadow-sm'>
                  <div className='d-flex justify-content-between mt-3'>
                    <p className='ms-4 mt-2 totalSale'>Total Sales</p>
                    <div className='me-3'>
                    <p className='graphContainer'><i class="fa-solid fa-chart-line"></i><span>+ 3.1%</span></p>
                    </div>   
                  </div>
                  <div className='d-flex justify-content-between'>
                    <h3 className='ms-4 mt-2 mb-4 fw-semibold'><i class="fa-solid fa-indian-rupee-sign"></i>15,0000</h3>
                    <div className='me-4 mt-2'>
                    <p className='today'>+ 10k today</p>
                    </div>   
                  </div>
                </div>
              </div>
              <div className='col-4 d-flex mt-2'>
                <div className='card w-100 cardContainer shadow-sm'>
                  <div className='d-flex justify-content-between mt-3'>
                    <p className='ms-4 mt-2 totalCustomer'>Total Customers</p>
                    <div className='me-3'>
                    <p className='graphContainer1'><i class="fa-solid fa-chart-line"></i><span>+ 3.1%</span></p>
                    </div>   
                  </div>
                  <div className='d-flex justify-content-between '>
                    <h3 className='ms-4 mt-2 mb-4 fw-semibold'>1500</h3>
                    <div className='me-4 mt-2'>
                    <p className='today'>+ 10k today</p>
                    </div>   
                  </div>
                </div>
              </div>
              <div className='col-4 d-flex mt-2'>
                <div className='card w-100 cardContainer shadow-sm'>
                  <div className='d-flex justify-content-between mt-3'>
                    <p className='ms-4 mt-2 totalOrders'>Total Orders</p>
                    <div className='me-3'>
                    <p className='graphContainer'><i class="fa-solid fa-chart-line"></i><span>+ 3.1%</span></p>
                    </div>   
                  </div>
                  <div className='d-flex justify-content-between'>
                    <h3 className='ms-4 mt-2 mb-4 fw-semibold'>15,000</h3>
                    <div className='me-4 mt-2'>
                    <p className='today'>+ 10k today</p>
                    </div>   
                  </div>
                </div>
              </div>
              <div className='col-6'>

              </div>
              <div className='col-6 mt-3' >
                <select className='ms-auto card' id='selectDate'>
                  <option value=''>12/05/2022 - 12/05/2024</option>
                  <option value=''>12/05/2022 - 12/05/2024</option>
                  <option value=''>12/05/2022 - 12/05/2024</option>
                  <option value=''>12/05/2022 - 12/05/2024</option>
                </select>
              </div>
              <div className='col-12 mt-3'>
                <div className='tableContainer shadow-lg'>
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col" id='tableHead' className='rounded-start-4'>Product name</th>
                      <th scope="col" id='tableHead'>Order</th>
                      <th scope="col" id='tableHead'>Amount</th>
                      <th scope="col" id='tableHead'>Date</th>
                      <th scope="col" id='tableHead'>Order Id</th>
                      <th scope="col" id='tableHead'>Payment status</th>
                      <th scope="col" id='tableHead' className='rounded-end-4'>Print</th>
                    </tr>
                  </thead>
                  <tbody>
                      <tr>
                      <td className='p-2'>Rubber stamp</td>
                      <td className='p-2'>2</td>
                      <td className='p-2'><i class="fa-solid fa-indian-rupee-sign"></i>400</td>
                      <td className='p-2'>4-12-2024</td>
                      <td className='p-2'>ER20012</td>
                      <td className='p-2'>
                          <div id='tablepayment' scope="col" className='text-success'>Done</div>
                      </td>
                      <td><a href=''><i class="fa-solid fa-receipt mt-2"></i></a></td>
                    </tr>
                    <tr>
                      <td className='p-2'>Date num/ stamp</td>
                      <td>2</td>
                      <td><i class="fa-solid fa-indian-rupee-sign"></i>500</td>
                      <td>4-12-2024</td>
                      <td>ER20013</td>
                      <td className='p-2'>
                          <div id='tablepayment' scope="col" className='text-success'>Done</div>
                      </td>
                      <td><a href=''><i class="fa-solid fa-receipt mt-2"></i></a></td>
                    </tr>
                    <tr>
                      <td className='p-2'scope="row">Panel Frame</td>
                      <td>2</td>
                      <td><i class="fa-solid fa-indian-rupee-sign"></i>200</td>
                      <td>4-12-2024</td>
                      <td>ER20014</td>
                      <td className='p-2'>
                          <div id='tablepaymentRed' scope="col" className='text-danger'>Canceled</div>
                      </td>
                      <td><a href=''><i class="fa-solid fa-receipt mt-2"></i></a></td>
                    </tr>
                    <tr>
                      <td className='p-2'scope="row">Block Frame</td>
                      <td>2</td>
                      <td><i class="fa-solid fa-indian-rupee-sign"></i>600</td>
                      <td>4-12-2024</td>
                      <td>ER20015</td>
                      <td className='p-2'>
                          <div id='tablepaymentRed' scope="col" className='text-danger'>Canceled</div>
                      </td>
                      <td><a href=''><i class="fa-solid fa-receipt mt-2"></i></a></td>
                    </tr>
                    <tr>
                      <td className='p-2'scope="row">Round stamp</td>
                      <td>2</td>
                      <td><i class="fa-solid fa-indian-rupee-sign"></i>400</td>
                      <td>4-12-2024</td>
                      <td>ER20016</td>
                      <td className='p-2'>
                          <div id='tablepaymentYellow' scope="col" className='text-warning'>Processing</div>
                      </td>
                      <td><a href=''><i class="fa-solid fa-receipt mt-2"></i></a></td>
                    </tr>
                    <tr>
                      <td className='p-2'scope="row">Pocket stamp</td>
                      <td>2</td>
                      <td><i class="fa-solid fa-indian-rupee-sign"></i>300</td>
                      <td>4-12-2024</td>
                      <td>ER20017</td>
                      <td className='p-2'>
                          <div id='tablepayment' scope="col" className='text-success'>Done</div>
                      </td>
                      <td><a href=''><i class="fa-solid fa-receipt mt-2"></i></a></td>
                    </tr>
                  </tbody>
                </table>
                </div>
              </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard