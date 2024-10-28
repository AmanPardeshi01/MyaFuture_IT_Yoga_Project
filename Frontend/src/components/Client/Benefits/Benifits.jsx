import React from 'react';
import './Benifits.css'; // Make sure to add the correct path to your CSS file

const Benefits = () => {
  return (
    <section className="benefits">
      <h2>Why Choose Our Yoga Classes?</h2>
      <div className="benefits-container">
        <div className="benefit-card">
          <div className="icon-container">
            <i className="far fa-clock clock-hand"></i>
          </div>
          <h3>Flexibility</h3>
          <p>Practice at your own pace</p>
        </div>
        <div className="benefit-card">
          <div className="icon-container age-icon">
            <i className="fas fa-child" id="ageIcon"></i>
          </div>
          <h3>All Ages Welcome</h3>
          <p>Classes for everyone</p>
        </div>
        <div className="benefit-card">
          <div className="icon-container">
            <i className="fas fa-heart heart-icon"></i>
          </div>
          <h3>Mind & Body</h3>
          <p>Holistic wellness approach</p>
        </div>
      </div>
      <section className="cta-section">
        <button className="blinking-button">Book Your Free Session Now</button>
      </section>
    </section>
  );
};

export default Benefits;
