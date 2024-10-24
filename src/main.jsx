// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome
import { CartProvider } from './context/CartContext';

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <CartProvider>
      <App />
    </CartProvider>

);
