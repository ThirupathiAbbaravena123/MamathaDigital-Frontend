import React, {useState} from 'react'
import Img11 from "../assets/image (1).jpg"
import { useNavigate } from 'react-router-dom';
import AddingAddress from '../components/AddingAddress'
import axios from 'axios';
const CartItems = () => {
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate(); 
    const [cartItems,setCartItems] = useState(
        [
            {id:1,name:"Rubber Stamp",price:200,quantity:2},
            {id:2,name:"Stamp Ink",price:100,quantity:1},
            {id:3,name:"Stamp Ink",price:100,quantity:1},
            {id:4,name:"Stamp Ink",price:100,quantity:1},
            {id:5,name:"Stamp Ink",price:100,quantity:1},

        ]
    );

    const checkOutOrder=(addressDetails)=>{
        const orderDeatiles={
            items : cartItems,
            totalAmount: 2332,
            deliverycharges:52,
            gst:12,
            savings:200,
            address:addressDetails,
        };

        navigate("/payment",{state:{orderDeatiles}});
    };

    const deleteCartItem =(id)=>{
        const updatedCart= cartItems.filter(item=>item.id !== id);
        setCartItems(updatedCart);
        console.log(updatedCart)
    }

    

    const calculatePaymentDetails=()=>{
        const totalPrice =cartItems.reduce((sum,item)=>sum+item.price * item.quantity,0);
        const deliveryCharges=52;
        const gst=Math.round(totalPrice *0.05 );
        const savings =200;
        const totalAmountPayable=totalPrice + deliveryCharges+ gst -savings;

        return {totalAmountPayable,totalPrice,gst,deliveryCharges,savings};
    }
    const { totalPrice, deliveryCharges, gst, savings, totalAmountPayable } = calculatePaymentDetails();

  return (
    <div className='d-flex row justify-content-around'>
        <div className='d-flex row col-8'>
            <div className="card mt-3">
                <div className="card-body mt-2 row">
                    <div className='col-8 d-flex justify-content-start'>
                        <h4> Your Cart Items</h4>
                    </div>
                    <div className='col-4'>
                        <p> {cartItems.length} items in cart </p>
                    </div>
                </div>
            </div>

            {cartItems.map((item)=>(

            <div className="card">
                <div key={item.id} className="card-body row">
                    <div className='col-4'>
                    <img src={Img11} class="card-img" alt={item.name} />
                    </div>
                    <div className='col-3'>
                        <p> {item.name} </p>
                        <select className="form-select form-select-sm ms-5" aria-label="Small select example" style={{width:"150px"}}>
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className='col-1'>
                    <select class="form-select form-select-sm mt-5 mb-5" aria-label=".form-select-sm example" style={{width:"80px"}}>
                        <option value="1">{item.quantity}</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    </div>
                    <div className='col-4 row d-flex  justify-content-around mt-5'>
                        <p className='col-6'> &#8377; {item.price} MRP <strike>400</strike>  </p>
                        <a href='#' className='col-4' onClick={()=>deleteCartItem(item.id)}> <i className="bi bi-trash3-fill h3"  style={{color:"red",}}></i> </a>
                    </div>
                </div>
            </div>
            ))}
        </div>
        <div className='d-flex row col-3'>
            <div className='col border mt-5' style={{backgroundColor:"#f8f3f2",textAlign:"center"}}>
                <h3 className='mt-2'>Order Details</h3>
                <hr />
                <div className='row mt-3 mb-2'>
                    <p className='col-6 ms-3 text-start'>Items : </p>
                    <p className='col-4'>{cartItems.length}</p>
                </div>
                <div className='row mt-3 mb-2'>
                    <p className='col-6 ms-3 text-start'>Delivery Charges :</p>
                    <p className='col-4'>&#8377; {deliveryCharges}</p>
                </div>
                <div className='row mt-3 mb-2'>
                    <p className='col-6 ms-3 text-start'>GST : </p>
                    <p className='col-4'>&#8377; {gst}</p>
                </div>
                <div className='row mt-3 mb-2'>
                    <p className='col-6 ms-3 text-start'>Total :</p>
                    <p className='col-4'>&#8377;{totalPrice}</p>
                </div>
                <hr />
                <div className='row mt-3 mb-2'>
                    <p className='col-6 ms-3 text-start' style={{fontWeight:"bolder",color:'green'}}>Your Savings :</p>
                    <p className='col-4 ' style={{fontWeight:"bolder",color:'green'}}>&#8377; {savings}</p>
                </div>
                <hr />
                <div className='row mt-3 mb-2'>
                    <p className='col-6 ms-3 text-start'>Total Amount Payable :</p>
                    <p className='col-4'>&#8377; {totalAmountPayable}</p>
                </div>
            </div>
            <div>
                <button  className='btn btn-danger col-8 mt-3 mb-5 ms-5' onClick={() => setShowPopup(true)}>Proceed & Pay</button>
                {showPopup && <AddingAddress onProceed={checkOutOrder}  onClose={() => setShowPopup(false)} />} 
            </div>
        </div>
    </div>
  )
}

export default CartItems
