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
            <label htmlFor="size-select">Select Size:</label>
            <select id="size-select" className="size-dropdown">
              {product.sizeOptions.map((size, index) => (
                <option key={index} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
          <div className="Enter">
             <label>Enter Text:</label> 
            <input type="text"></input>
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
        <textarea placeholder="Write your feedback here"></textarea>
        <button className="New" >Submit</button>
      </div>
    </div>
  );
};
 
export default Stampdetails;


