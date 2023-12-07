import React from 'react'
import "../assets/css/auth.css";

const Dashboard = () => {
  return (
    <div className="account-wrapper">
      <div className="breadcrumb-holder">
          <div className="breadcrumb-caption">
              <h2>Dashboard</h2>
              <ul>
                  <li className="breadcrumb-item">
                      <a href="/" className="breadcrumb-link">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                      <span>Dashboard</span>
                  </li>
              </ul>
              
          </div>
      </div>
      <div className="account-content">
          <div className="container">
            <h3>Welcome to our application</h3>
          </div>
      </div>
    </div>
  )
}

export default Dashboard