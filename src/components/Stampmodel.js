
import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Stampmodel.css";

const Stampdetails = () => {
  const location = useLocation();
  const { product } = location.state || {};
  const colorsContainerRef = useRef(null);
  const [selectedColor, setSelectedColor] = useState("");

  if (!product) {
    return <h2>No Product Selected</h2>;
  }

  // Scroll handler
  const scrollColors = (direction) => {
    if (colorsContainerRef.current) {
      colorsContainerRef.current.scrollLeft += direction * 100; // Adjust scroll distance as needed
    }
  };

  // Color selection handler
  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

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
          <h5 className="product-titles">{product.title}</h5>
          <div className="price-section4">
            <span className="discounted-price4">₹{product.price}</span>
            <span className="original-price4">₹{product.originalPrice}</span>
          </div>

          <div className="size-dropdown-section">
            <label htmlFor="size-select">Select Size:</label>
            <br />
            <select id="size-select" className="size-dropdown1">
              {product.sizeOptions.map((size, index) => (
                <option key={index} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          <div className="add">
            <button className="add-to-cart-button1">Add</button>
          </div>

          <div className="quantity-selector1">
            <span>Quantity:</span>
            <input type="number" min="1" defaultValue="1" />
          </div>

          <div className="text-container">
            <label htmlFor="custom-text" className="text-label">
              Enter Text:
            </label>
            <textarea
              id="custom-text"
              className="custom-text"
              placeholder="Enter text here"
            ></textarea>
          </div>

          <div className="ink-color-selection">
            <label className="demo">Select Your Ink Colour:</label>
            <div className="scroll-container">
              <button
                onClick={() => scrollColors(-1)}
                className="scroll-arrow1"
              >
                &#8592;
              </button>
              <div
                ref={colorsContainerRef}
                className="color-scroll"
              >
                {["black", "red", "blue", "green"].map((color, index) => (
                  <button
                    key={index}
                    className={`color-button ${
                      selectedColor === color ? "selected" : ""
                    }`}
                    style={{
                      backgroundColor: color,
                      border: selectedColor === color ? "2px solid #000" : "none",
                    }}
                    onClick={() => handleColorSelect(color)}
                  />
                ))}
              </div>
              <button
                onClick={() => scrollColors(1)}
                className="scroll-arrow2"
              >
                &#8594;
              </button>
            </div>
          </div>

          <div className="upload-section1">
            <label>Upload Your Sample Stamp Design:</label><br></br>
            <input type="file" className="upload-file1" />
          </div>
        </div>
      </div>

      <div className="product-description">
        <h5>Product Details</h5>
        <h4>Product Name:</h4>
        <p>{product.title}</p>
        <h4>Advantages:</h4>
        <ul>
          {product.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="customer-feedback">
        <h5>Customer Feedback</h5>
        <textarea
          className="Text"
          placeholder="Write your feedback here"
        ></textarea>
        <br />
        <button className="New" type="submit">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Stampdetails;

