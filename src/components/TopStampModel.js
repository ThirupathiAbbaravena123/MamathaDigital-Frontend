
import React from 'react';
import { useNavigate } from "react-router-dom";
import "./TopStampModel.css";

const products = [
  {
    id: 1,
    title: 'Rubber Stamp',
    image: '/images/stamp1.png',
    sizeOptions: ['60 x 15 MM', '80 x 20 MM', '100 x 25 MM'],
    price: '150/-',
    originalPrice: 200,
    description: 'Panel photo frames are modern and stylish displays...',
    features: ['Perfect for photos and artwork', 'Durable materials', 'Available in multiple sizes']
  },
  {
    id: 2,
    title: 'Date/Number Stamp',
    image: '/images/stamp2.png',
    sizeOptions: ['60 x 15 MM', '80 x 20 MM', '100 x 25 MM'],
    price: '150/-',
    originalPrice: 200,
    description: 'Clip-on frames are modern and stylish displays...',
    features: ['Perfect for photos and artwork', 'Durable materials', 'Available in multiple sizes']
  },
  {
    id: 3,
    title: 'Round Stamp',
    image: '/images/stamp3.png',
    sizeOptions: ['60 x 15 MM', '80 x 20 MM', '100 x 25 MM'],
    price: '150/-',
    originalPrice: 200,
    description: 'Multi-Slider frames are modern and stylish displays...',
    features: ['Perfect for photos and artwork', 'Durable materials', 'Available in multiple sizes']
  },
  {
    id: 4,
    title: 'Pocket Stamp',
    image: '/images/stamp4.png',
    sizeOptions: ['60 x 15 MM', '80 x 20 MM', '100 x 25 MM'],
    price: '150/-',
    originalPrice: 200,
    description: 'Acrylic frames are modern and stylish displays...',
    features: ['Perfect for photos and artwork', 'Durable materials', 'Available in multiple sizes']
  },
  {
    id: 5,
    title: 'Pre inked round Stamp',
    image: '/images/stamp5.png',
    sizeOptions: ['60 x 15 MM', '80 x 20 MM', '100 x 25 MM'],
    price: '150/-',
    originalPrice: 200,
    description: 'Block frames are modern and stylish displays...',
    features: ['Perfect for photos and artwork', 'Durable materials', 'Available in multiple sizes']
  },
  {
    id: 6,
    title: 'Sun round stamp',
    image: '/images/stamp6.png',
    sizeOptions: ['60 x 15 MM', '80 x 20 MM', '100 x 25 MM'],
    price: '150/-',
    originalPrice: 200,
    description: 'Magnetic frames are modern and stylish displays...',
    features: ['Perfect for photos and artwork', 'Durable materials', 'Available in multiple sizes']
  },
  {
    id: 7,
    title: 'Pocket round Stamp',
    image: '/images/stamp7.png',
    sizeOptions: ['60 x 15 MM', '80 x 20 MM', '100 x 25 MM'],
    price: '150/-',
    originalPrice: 200,
    description: 'Wall-Mounted frames are modern and stylish displays...',
    features: ['Perfect for photos and artwork', 'Durable materials', 'Available in multiple sizes']
  },
  {
    id: 8,
    title: 'Shine round stamp',
    image: '/images/stamp8.png',
    sizeOptions: ['60 x 15 MM', '80 x 20 MM', '100 x 25 MM'],
    price: '150/-',
    originalPrice: 200,
    description: 'Floating frames are modern and stylish displays...',
    features: ['Perfect for photos and artwork', 'Durable materials', 'Available in multiple sizes']
  },
  
];

 const TopStampModel = () => {
  const navigate = useNavigate();

  return (
    <div className="top-frame-container">
      <h5 className="title">Top Stamp model</h5>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <h5 className="product-title1">{product.title}</h5>
            <select className="size-dropdown">
              {product.sizeOptions.map((size, index) => (
                <option key={index} value={size}>
                  Size: {size}
                </option>
              ))}
            </select>
            <div className="price-section3">
              <span className="discounted-price3">₹{product.price}</span>
              <span className="original-price3">₹{product.originalPrice}</span>
            </div>
            <div className="action-button">
              <button
                className="view-button"
                onClick={() => navigate(`/stampdetials/${product.id}`, { state: { product } })}
              >View
              </button>
              <button className="add-to-cart-button">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopStampModel;
