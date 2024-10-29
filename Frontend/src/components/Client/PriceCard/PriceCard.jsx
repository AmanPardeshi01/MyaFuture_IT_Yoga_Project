import React from 'react';
import './PriceCard.css';


const PriceCardSection = () => {
  const redirectToPayment = () => {
    window.location.href = 'payment-page.html'; // Placeholder URL
  };

  return (
    <section className="price-section-container">
      <h1 className="price-section-heading">Our Services</h1>
      <div className="price-section">
        {/* General Yoga Package */}
        <div className="price-card" id="first-card" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(255, 69, 0, 0.5)), url('images/image19.jpg')` }}>
          <div className="price-card-content">
            <h2>General Yoga</h2>
            <h3>₹2000/month</h3>
            <ul>
              <li><i className="fas fa-check check-icon"></i>Access to Yoga Area</li>
              <li><i className="fas fa-check check-icon"></i>Group Classes</li>
              <li><i className="fas fa-check check-icon"></i>Group Trainer</li>
              <li><i className="fas fa-check check-icon"></i>Fitness Orientation</li>
              <li><i className="fas fa-check check-icon"></i>Personal Assistance</li>
            </ul>
            <button className="enroll-btn" onClick={redirectToPayment}>Enroll Now</button>
          </div>
        </div>

        {/* Advanced Yoga Package */}
        <div className="price-card middle-card" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(255, 69, 0, 0.5)), url('images/image19.jpg')` }}>
          <div className="price-card-content">
            <h2>Advanced Yoga</h2>
            <h3>₹2500/month</h3>
            <ul>
              <li><i className="fas fa-check check-icon"></i>Access to Yoga Area</li>
              <li><i className="fas fa-check check-icon"></i>Group Classes</li>
              <li><i className="fas fa-check check-icon"></i>Group Trainer</li>
              <li><i className="fas fa-check check-icon"></i>Fitness Orientation</li>
              <li><i className="fas fa-check check-icon"></i>Personal Assistance</li>
            </ul>
            <button className="enroll-btn" onClick={redirectToPayment}>Enroll Now</button>
          </div>
        </div>

        {/* Yoga Therapy Package */}
        <div className="price-card" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(255, 69, 0, 0.5)), url('images/image19.jpg')` }}>
          <div className="price-card-content">
            <h2>Yoga Therapy</h2>
            <h3>₹3000/month</h3>
            <ul>
              <li><i className="fas fa-check check-icon"></i>Access to Yoga Area</li>
              <li><i className="fas fa-check check-icon"></i>Group Classes</li>
              <li><i className="fas fa-check check-icon"></i>Group Trainer</li>
              <li><i className="fas fa-check check-icon"></i>Fitness Orientation</li>
              <li><i className="fas fa-check check-icon"></i>Personal Assistance</li>
            </ul>
            <button className="enroll-btn" onClick={redirectToPayment}>Enroll Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceCardSection;
