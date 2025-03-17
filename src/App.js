import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1 className="logo">SenShaMart</h1>
        <nav className="nav">
          <a href="#search-sensors">Search Sensors</a>
          <a href="#purchase-history">Purchase History</a>
          <a href="#blog">Blog</a>
          <a href="#help">Help</a>
        </nav>
        <div className="cart-profile">
          <span className="cart-icon">🛒 2</span>
          <span className="profile-icon">👤</span>
        </div>
      </header>

      <main className="main">
        <h2>Good Afternoon</h2>
        <h3 className="username">Username</h3>

        <div className="stats">
          <div className="stat-item">
            <span>121</span>
            <p>Entries</p>
          </div>
          <div className="stat-item">
            <span>12</span>
            <p>Orders</p>
          </div>
          <div className="stat-item">
            <span>3</span>
            <p>Sample Stat</p>
          </div>
        </div>

        <div className="actions">
          <div className="action-card">
            <h4>Search Sensor Data</h4>
            <button className="action-btn orange-btn">Search with Filters</button>
            <button className="action-btn orange-btn">Search with SPARQL</button>
          </div>

          <div className="action-card">
            <h4>View Cart</h4>
            <button className="action-btn blue-btn">Update Cart</button>
            <button className="action-btn blue-btn">Checkout</button>
          </div>

          <div className="action-card">
            <h4>Purchase History</h4>
            <button className="action-btn blue-btn">View History</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
