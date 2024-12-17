
import React from 'react';
import { useNavigate } from "react-router-dom";
import "./AcrylicPhotoFrames.css";
// import img from '../../public/images/'

const products = [
  {
    id: 1,
    title: 'Panel Frames',
    image: '/images/image1.jpg',
    sizeOptions: ['60 x 15 MM', '80 x 20 MM', '100 x 25 MM'],
    price: '150/-',
    originalPrice: 200,
    description: 'Panel photo frames are modern and stylish displays...',
    features: ['Perfect for photos and artwork', 'Durable materials', 'Available in multiple sizes']
  },
  {
    id: 2,
    title: 'Clip-on Frames',
    image: '/images/image2.jpg',
    sizeOptions: ['60 x 15 MM', '80 x 20 MM', '100 x 25 MM'],
    price: '150/-',
    originalPrice: 200,
    description: 'Clip-on frames are modern and stylish displays...',
    features: ['Perfect for photos and artwork', 'Durable materials', 'Available in multiple sizes']
  },
  {
    id: 3,
    title: 'Multi-Slided Frames',
    image: '/images/image 3.jpg',
    sizeOptions: ['60 x 15 MM', '80 x 20 MM', '100 x 25 MM'],
    price: '150/-',
    originalPrice: 200,
    description: 'Multi-Slider frames are modern and stylish displays...',
    features: ['Perfect for photos and artwork', 'Durable materials', 'Available in multiple sizes']
  },
  {
    id: 4,
    title: 'Acrylic Frames',
    image: '/images/image4.jpg',
    sizeOptions: ['60 x 15 MM', '80 x 20 MM', '100 x 25 MM'],
    price: '150/-',
    originalPrice: 200,
    description: 'Acrylic frames are modern and stylish displays...',
    features: ['Perfect for photos and artwork', 'Durable materials', 'Available in multiple sizes']
  },
  {
    id: 5,
    title: 'Block Frames',
    image: '/images/image5.jpg',
    sizeOptions: ['60 x 15 MM', '80 x 20 MM', '100 x 25 MM'],
    price: '150/-',
    originalPrice: 200,
    description: 'Block frames are modern and stylish displays...',
    features: ['Perfect for photos and artwork', 'Durable materials', 'Available in multiple sizes']
  },
  {
    id: 6,
    title: 'Magnetic Frames',
    image: '/images/image6.jpg',
    sizeOptions: ['60 x 15 MM', '80 x 20 MM', '100 x 25 MM'],
    price: '150/-',
    originalPrice: 200,
    description: 'Magnetic frames are modern and stylish displays...',
    features: ['Perfect for photos and artwork', 'Durable materials', 'Available in multiple sizes']
  },
  {
    id: 7,
    title: 'Wall-Mounted Frames',
    image: '/images/image7.jpg',
    sizeOptions: ['60 x 15 MM', '80 x 20 MM', '100 x 25 MM'],
    price: '150/-',
    originalPrice: 200,
    description: 'Wall-Mounted frames are modern and stylish displays...',
    features: ['Perfect for photos and artwork', 'Durable materials', 'Available in multiple sizes']
  },
  {
    id: 8,
    title: 'Floating Frames',
    image: '/images/new.jpg',
    sizeOptions: ['60 x 15 MM', '80 x 20 MM', '100 x 25 MM'],
    price: '150/-',
    originalPrice: 200,
    description: 'Floating frames are modern and stylish displays...',
    features: ['Perfect for photos and artwork', 'Durable materials', 'Available in multiple sizes']
  },
  
];

const AcrylicPhotoFrames = () => {
  const navigate = useNavigate();

  return (
    <div className="top-frame-container">
      <h5 className="title" style={{width:'100px'}}>Acrylic Photo Frames</h5>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <h4 className="product-title">{product.title}</h4>
            <select className="size-dropdown">
              {product.sizeOptions.map((size, index) => (
                <option key={index} value={size}>
                  Size: {size}
                </option>
              ))}
            </select>
            <div className="price-section">
              <span className="discounted-price">₹{product.price}</span>
              <span className="original-price">₹{product.originalPrice}</span>
            </div>
            <div className="action-buttons">
              <button
                className="view-button"
                onClick={() => navigate(`/product-details/${product.id}`, { state: { product } })}
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

export default AcrylicPhotoFrames;


