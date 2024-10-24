import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './pages/Checkout';
import { CartContext } from './context/CartContext';
import './index.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {
  const { totalItems } = useContext(CartContext);

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">E-Commerce Store</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {/* Cart Icon - Always visible */}
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  <i className="fas fa-shopping-cart"></i> Cart
                  {totalItems > 0 && (
                    <span className="badge bg-success ms-2">{totalItems}</span>
                  )}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container my-4">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
