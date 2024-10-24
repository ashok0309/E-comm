import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, totalItems, totalPrice, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  if (totalItems === 0) {
    return (
      <div className="container my-4">
        <h2>Your Cart is Empty</h2>
        <button onClick={() => navigate('/')} className="btn btn-primary">Back to Shopping</button>
      </div>
    );
  }

  return (
    <div className="container my-4">
      <h2>Your Cart</h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th>Image</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="img-fluid img-thumbnail" 
                    style={{ width: '80px', height: '80px', objectFit: 'cover' }} 
                  />
                </td>
                <td>{item.title}</td>
                <td>{item.quantity}</td>
                <td>${item.price * item.quantity}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="row mt-4">
        <div className="col-12 col-md-6">
          <h5>Total Items: {totalItems}</h5>
        </div>
        <div className="col-12 col-md-6 text-md-end">
          <h5>Total Price: ${totalPrice.toFixed(2)}</h5>
        </div>
      </div>
      <div className="d-flex justify-content-between mt-4">
        <button className="btn btn-primary" onClick={() => navigate('/')}>Continue Shopping</button>
        <button className="btn btn-success" onClick={() => navigate('/checkout')}>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
