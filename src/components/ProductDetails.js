

import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import "./ProductDetails.css";
import rectangle from '../assets/icons/rectangle.png';
import circle from '../assets/icons/circle.png';
import love from '../assets/icons/love.png';
import square from '../assets/icons/square.png';


const ProductDetails = () => {
  const location = useLocation();
  const { product } = location.state;

  const [selectedShape, setSelectedShape] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const shapes = [
    { name: 'Rectangle', image: rectangle },
    { name: 'Square', image: square},
    { name: 'Circle', image: circle },
    { name: 'Heart', image: love },
    
  ];

  const handleShapeClick = (index) => {
    setSelectedShape(shapes[index].name);
  };

  const handleArrowClick = (direction) => {
    const newIndex = (currentIndex + direction + shapes.length) % shapes.length;
    setCurrentIndex(newIndex);
    setSelectedShape(shapes[newIndex].name);
  };

  return (
    <div className="product-details-container">
      <div className="details-main">
      <div className="image-section">
           <img src={product.image} alt={product.title} className="product-details-image" />
          {/* <img src={product.image} alt={product.title} className="product-details-image" /> */}
        </div>  
         <div className="info-section">
          <h2 className="product-title">{product.title}</h2>
          <div className="price-section">
            <span className="discounted-price">₹{product.price}</span>
            <span className="original-price">₹{product.originalPrice}</span>
          </div>
          <p>size:
            <select className="size-dropdown" style={{ width: "140px", height: '35px', margin: '0px' }}>
              {product.sizeOptions.map((size, index) => (
                <option key={index} value={size}>
                  {size}
                </option>
              ))}
            </select>
            {/* <button className="add-to-cart-button">Add to Cart</button> */}
            <a href="/cartitems"  className='add-to-cart-button' >Add to Cart</a>
          </p>
          <div className="quantity-selector">
            <span>Quantity:</span>
            <input type="number" min="1" defaultValue="1" />
          </div>
          
          <div class="text-container">
           <label for="custom-text" class="text-label">Enter Text:</label>
          <textarea id="custom-text" class="custom-text" placeholder="Enter text here"></textarea>
          </div>

          <div className="shape-section">
            <label>Select your Frame Shape:</label>

            <div className="arrow-container">
              <button className="arrow-button left" onClick={() => handleArrowClick(-1)}>&lt;</button>
              <div className="image-container">
                {shapes.map((shape, index) => (
                  <div key={index} className="shape-item">
                    {selectedShape === shape.name && (
                      <div className="shape-name">{shape.name}</div>
                    )}
                    <img
                      src={shape.image}
                      alt={shape.name}
                      className={`styled-image ${selectedShape === shape.name ? 'selected' : ''}`}
                      onClick={() => handleShapeClick(index)}
                    />
                  </div>
                ))}
              </div>
              <button className="arrow-button right" onClick={() => handleArrowClick(1)}>&gt;</button>
            </div>

            <div className="upload-section">
              <h6>Upload Your Photo file</h6>
              <input type="file" className="upload-file" />
            </div>
          </div>
        </div>
     </div>
      <div className="product-description">
        <h3><b>Product Details</b></h3>
        <h4>Product Name:</h4>
        <p>{product.title}</p>
        <h4>Description</h4>
        <p>{product.description}</p>
        <h4>Key Features</h4>
        <ul>
          {product.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <div className="card-body"><b>Customer Feedback </b><hr></hr></div>
        {/* <div className="star-rating" style={{ color: 'yellow', fontSize: '40px', width: '10px', height: '100px' }}>
          ★★★★☆
        </div> */}
        <form action="{{post}}" method="POST">
        <textarea class="custom-text1" name="text" placeholder="Enter comment here"></textarea>
        <button class="submit" type="submit">Submit</button>
       </form>

      </div>
     </div>
  );
};

export default ProductDetails;


