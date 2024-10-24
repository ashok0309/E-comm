// src/pages/Checkout.jsx
import React, { useState, useContext, useEffect } from 'react';
import { CartContext } from '../context/CartContext';

const Checkout = () => {
    const { totalItems, totalPrice, cartItems, clearCart } = useContext(CartContext);
    const [formData, setFormData] = useState({ name: '', address: '', payment: '' });
    const [submitted, setSubmitted] = useState(false);
    const [orderSummary, setOrderSummary] = useState({ items: [], total: 0 });

    // Handle form input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setOrderSummary({ items: cartItems, total: totalPrice }); // Save the order summary
        setSubmitted(true); // Set submitted to true
    };

    // Clear the cart after a brief delay to allow the order summary to show
    useEffect(() => {
        if (submitted) {
            clearCart();
        }
    }, [submitted, clearCart]);

    // If there are no items in the cart, show a message
    if (totalItems === 0 && !submitted) {
        return <div className="container my-4">Your cart is empty. Nothing to checkout.</div>;
    }

    return (
        <div className="container my-4">
            {!submitted ? (
                <>
                    <h2>Checkout</h2>
                    <p>Total Items: {totalItems}</p>
                    <p>Total Price: ${totalPrice.toFixed(2)}</p>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                className="form-control"
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                placeholder="Enter your address"
                                className="form-control"
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="payment" className="form-label">Payment Method</label>
                            <select
                                name="payment"
                                value={formData.payment}
                                onChange={handleChange}
                                className="form-select"
                                required
                            >
                                <option value="">Select a payment method</option>
                                <option value="credit_card">Credit Card</option>
                                <option value="debit_card">Debit Card</option>
                                <option value="paypal">PayPal</option>
                                <option value="bank_transfer">Bank Transfer</option>
                            </select>
                        </div>


                        <button type="submit" className="btn btn-primary mt-3">
                            Submit Order
                        </button>
                    </form>
                </>
            ) : (
                <div className="alert alert-success">
                    <h4>Order Confirmed!</h4>
                    <p>Thank you for your purchase, {formData.name}!</p>
                    <p>
                        <strong>Shipping to:</strong> {formData.address}
                    </p>
                    <h5>Order Summary</h5>
                    <ul>
                        {orderSummary.items.map((item) => (
                            <li key={item.id}>
                                {item.title} (x{item.quantity}) - ${item.price.toFixed(2)} each
                            </li>
                        ))}
                    </ul>
                    <p><strong>Total Price:</strong> ${orderSummary.total.toFixed(2)}</p>
                </div>
            )}
        </div>
    );
};

export default Checkout;
