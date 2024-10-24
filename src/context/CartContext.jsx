// src/context/CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // Function to add items to the cart
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  // Function to clear the cart
  const clearCart = () => {
    setCartItems([]);
    setTotalItems(0);
    setTotalPrice(0);
  };

  // Update totalItems and totalPrice whenever cartItems change
  React.useEffect(() => {
    const itemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const priceTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    
    setTotalItems(itemsCount);
    setTotalPrice(priceTotal);
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, totalItems, totalPrice, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
