import React from "react";
import './Orders.css';


function Orders() {
    return (
        <div className="orders-container">
            {/* <h2>My Orders</h2> */}
            
            <div className="order">
                <div className="div">
                    <p>Order placed</p>
                    <p>21 November 2024</p>
                <div className="total">  
                    <p>Total</p>
                    <p>₹250</p>
                 </div>
                 <div className="mamatha">
                    <p>Ship to</p>
                    <p>Mamatha</p>
                </div> 
                <div className="Orderid" >
                    <p>Order id:1344680486</p>
            
                 </div>
                </div>
               
              
                  <div className="stamp">
                    <img src="/images/stamp1.png" alt='Rubber'/>
                </div>  
                <div className=" delivered">
                    <button className="button">Delivered</button>
                </div>
                <div className="Rubber">
                    <p>Rubber Stamp</p>
                </div>
                <div className="view-details">
                <a href="">View Order Details</a>

                </div>
            </div>
        
                 <div className="order">
                <div className="div">
                    <p>Order placed</p>
                    <p>21 November 2024</p>
                <div className="total">  
                    <p>Total</p>
                    <p>₹250</p>
                 </div>
                 <div className="mamatha">
                    <p>Ship to</p>
                    <p>Mamatha</p>
                </div> 
                <div className="Orderid" >
                    <p>Order id:1344680486</p>
            
                 </div>
                </div>
               
              
                  <div className="stamp">
                    <img src="/images/frame.png" alt='Rubber'/>
                </div>  
                <div className=" delivered">
                    <button className="button">Dispatched</button>
                </div>
                <div className="Rubber">
                    <p>Rubber Stamp</p>
                </div>
                <div className="view-details">
                    <a href="">View Order Details</a>
                </div>
            </div>
        </div>
    );
}

export default Orders;
