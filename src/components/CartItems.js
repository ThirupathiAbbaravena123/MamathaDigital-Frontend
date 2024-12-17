import React, {useState} from 'react'
import Img11 from "../assets/image (1).jpg"
import AddingAddress from './AddingAddress';
const CartItems = () => {
    const [showPopup, setShowPopup] = useState(false);
  return (
    <div className='d-flex row justify-content-around'>
        <div className='col-8'>
            <div className="card mt-3">
                <div className="card-body mt-2 row">
                    <div className='col-8 d-flex justify-content-start'>
                        <h4> Your Cart Items</h4>
                    </div>
                    <div className='col-4'>
                        <p> 2 items in cart </p>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body row">
                    <div className='col-4'>
                    <img src={Img11} class="card-img" alt="..." />
                    </div>
                    <div className='col-3'>
                        <p> Rubber Stamp </p>
                        <select className="form-select form-select-sm ms-5" aria-label="Small select example" style={{width:"150px"}}>
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className='col-1'>
                    <select class="form-select form-select-sm mt-5 mb-5" aria-label=".form-select-sm example" style={{width:"80px"}}>
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    </div>
                    <div className='col-4 row d-flex  justify-content-around mt-5'>
                        <p className='col-6'> &#8377; 200 MRP <strike>400</strike>  </p>
                        <a href='#' className='col-4'> <i className="bi bi-trash3-fill h3"  style={{color:"red",}}></i> </a>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body row">
                    <div className='col-4'>
                    <img src={Img11} class="card-img" alt="..." />
                    </div>
                    <div className='col-3'>
                        <p> Rubber Stamp </p>
                        <select className="form-select form-select-sm ms-5" aria-label="Small select example" style={{width:"150px"}}>
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className='col-1'>
                    <select class="form-select form-select-sm mt-5 mb-5" aria-label=".form-select-sm example" style={{width:"80px"}}>
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    </div>
                    <div className='col-4 row d-flex  justify-content-around mt-5'>
                        <p className='col-6'> &#8377; 200 MRP <strike>400</strike>  </p>
                        <a href='#' className='col-4'> <i className="bi bi-trash3-fill h3"  style={{color:"red",}}></i> </a>
                    </div>
                </div>
            </div> 
            <div className="card">
                <div className="card-body row">
                    <div className='col-4'>
                    <img src={Img11} class="card-img" alt="..." />
                    </div>
                    <div className='col-3'>
                        <p> Rubber Stamp </p>
                        <select className="form-select form-select-sm ms-5" aria-label="Small select example" style={{width:"150px"}}>
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className='col-1'>
                    <select class="form-select form-select-sm mt-5 mb-5" aria-label=".form-select-sm example" style={{width:"80px"}}>
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    </div>
                    <div className='col-4 row d-flex  justify-content-around mt-5'>
                        <p className='col-6'> &#8377; 200 MRP <strike>400</strike>  </p>
                        <a href='#' className='col-4'> <i className="bi bi-trash3-fill h3"  style={{color:"red",}}></i> </a>
                    </div>
                </div>
            </div>
            
        </div>
        <div className='col-3'>
            <div className='col border mt-5' style={{backgroundColor:"#f8f3f2"}}>
                <h3 className='mt-2'>Order Details</h3>
                <hr />
                <div className='row mt-3 mb-2'>
                    <p className='col-7 ms-3 text-start'>Items :</p>
                    <p className='col-4'>2</p>
                </div>
                <div className='row mt-3 mb-2'>
                    <p className='col-7 ms-3 text-start'>Delivery Charges :</p>
                    <p className='col-4'>&#8377; 52</p>
                </div>
                <div className='row mt-3 mb-2'>
                    <p className='col-7 ms-3 text-start'>GST :</p>
                    <p className='col-4'>&#8377; 12</p>
                </div>
                <div className='row mt-3 mb-2'>
                    <p className='col-7 ms-3 text-start'>Total :</p>
                    <p className='col-4'>&#8377; 102</p>
                </div>
                <hr />
                <div className='row mt-3 mb-2'>
                    <p className='col-7 ms-3 text-start'>Total Amount Payable :</p>
                    <p className='col-4'>&#8377; 2333</p>
                </div>
                <hr />
                <div className='row mt-3 mb-2'>
                    <p className='col-7 ms-3 text-start text-success' style={{fontWeight:"bolder"}}>Your Savings :</p>
                    <p className='col-4 text-success ' style={{fontWeight:"bolder"}}>&#8377; 200</p>
                </div>
            </div>
            <div>
                <button  className='btn btn-danger col-10 mt-5' onClick={() => setShowPopup(true)}>Proceed & Pay</button>
                {showPopup && <AddingAddress onClose={() => setShowPopup(false)} />} 
            </div>
        </div>
    </div>
  )
}

export default CartItems
