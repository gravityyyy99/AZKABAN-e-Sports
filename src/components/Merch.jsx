import React, { useState } from 'react';
import './Merch.css';

const Merch = () => {
  const [cart, setCart] = useState([]);
  const [previewProduct, setPreviewProduct] = useState(null);

  const products = [
    { id: 1, name: 'T-Shirt', price: 999, image: '/Jersy.jpg' },
    { id: 2, name: 'Hoodie', price: 1999, image: '/hoddie.jpg' },
    { id: 3, name: 'Sipper', price: 899, image: '/sipper.jpg' },
    { id: 4, name: 'HeadPhone', price: 2999, image: '/headphone.jpg' },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleMouseEnter = (product) => {
    setPreviewProduct(product);
  };

  const handleMouseLeave = () => {
    setPreviewProduct(null);
  };

  return (
    <div className="merch">
      <h1>Merchandise</h1>
      <div className="products">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onMouseEnter={() => handleMouseEnter(product)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p> {/* Updated to ₹ */}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      {previewProduct && (
        <div className="product-preview">
          <img src={previewProduct.image} alt={previewProduct.name} />
        </div>
      )}
      <div className="cart">
        <h2>Cart ({cart.length})</h2>
        {cart.map((item, index) => (
          <div key={index} className="cart-item">
            <p>{item.name} - ₹{item.price}</p> {/* Updated to ₹ */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Merch;