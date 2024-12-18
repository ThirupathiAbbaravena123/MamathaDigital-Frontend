import React from "react";
import { useLocation } from "react-router-dom";
import "./Stampmodel.css";

const Stampdetails = () => {
  const location = useLocation();
  const { product } = location.state || {}; 

  if (!product) {
    return <h2>No Product Selected</h2>;
  }

  return (
    <div className="product-details-container">
      <div className="details-main">
        <div className="image-section">
          <img
            src={product.image}
            alt={product.title}
            className="product-details-image"
          />
        </div>
        <div className="info-section">
          <h2 className="product-title">{product.title}</h2>
          <div className="price-section">
            <span className="discounted-price">₹{product.price}</span>
            <span className="original-price">₹{product.originalPrice}</span>
          </div>

          <div className="size-dropdown-section">
            <label htmlFor="size-select">Select Size:</label><br/>
            <select id="size-select" className="size-dropdown1">
              {product.sizeOptions.map((size, index) => (
                <option key={index} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
          <div className="redbtn">
          <button className="add-to-cart-button1">Add </button>
          </div>
          {/* <div className="Enter">
            <input type="text">Enter</input>
          </div> */}
         {/* <span>Enter Text</span>
          <textarea className="custom-text" placeholder="Enter text here"></textarea> */}
          <div className="quantity-selector">
            <span>Quantity:</span>
            <input type="number" min="1" defaultValue="1" />
          </div>
          <div class="text-container">
           <label for="custom-text" class="text-label">Enter Text:</label>
          <textarea id="custom-text" class="custom-text" placeholder="Enter text here"></textarea>
         </div>


          <div className="ink-color-selection">
            <label>Select Your Ink Colour:</label>
            <div className="ink-colors">
              <button className="color-button" style={{ backgroundColor: "black" }}></button>&nbsp;&nbsp;
              <button className="color-button" style={{ backgroundColor: "red" }}></button>&nbsp;
              <button className="color-button" style={{ backgroundColor: "blue" }}></button>&nbsp;
              <button className="color-button" style={{ backgroundColor: "green" }}></button>
            </div>
          </div>

          <div className="upload-section">
            <label>Upload Your Sample Stamp Design:</label>
            <input type="file" className="upload-file" />
          </div>
        </div>
      </div>

      <div className="product-description">
        <h5>Product Details</h5>
        <h4>Product Name:</h4>
        <p>{product.title}</p>
        <h4>Advantages:</h4>
        {/* <p>{product.description}</p> */}
        {/* <ul>
          <li>High resolution printing.</li>
          <li>Long-lasting usage.</li>
          <li>Perfect for office and personal needs.</li>
        </ul> */}
        
        {/* <p>{product.features}</p> */}
        <ul>
          {product.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
          </ul>
        
      </div>

      <div className="customer-feedback">
        <h3>Customer Feedback</h3>
        {/* <p>⭐⭐⭐⭐☆ 4.5</p> */}
        <textarea className="Text" placeholder="Write your feedback here"></textarea><br/>
        <button className="New " type="submit " >Submit</button>
      </div>
    </div>
  );
};
 
export default Stampdetails;


