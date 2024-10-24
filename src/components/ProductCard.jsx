// src/components/ProductCard.jsx
import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="card text-center" style={{ height: '100%', minHeight: '300px' }}>
      <img
        src={product.image}
        className="card-img-top"
        style={{ objectFit: 'contain', height: '150px' }}
        alt={product.title}
      />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">${product.price.toFixed(2)}</p>
        <button className="btn btn-primary" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
