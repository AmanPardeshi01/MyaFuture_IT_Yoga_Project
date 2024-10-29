import React from 'react';
import './PriceCard.css'; // Assuming you will place your CSS here
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const PriceCard = () => {
  const redirectToPayment = () => {
    window.location.href = 'payment-page.html'; // Replace with actual payment page URL
  };

  const packages = [
    {
      title: 'General Yoga',
      price: '₹2000/month',
      benefits: [
        'Access to Yoga Area',
        'Group Classes',
        'Group Trainer',
        'Fitness Orientation',
        'Personal Assistance'
      ],
      background: "url('images/image17.jpg')"
    },
    {
      title: 'Advanced Yoga',
      price: '₹2500/month',
      benefits: [
        'Access to Yoga Area',
        'Group Classes',
        'Group Trainer',
        'Fitness Orientation',
        'Personal Assistance'
      ],
      background: "url('images/image17.jpg')"
    },
    {
      title: 'Yoga Therapy',
      price: '₹3000/month',
      benefits: [
        'Access to Yoga Area',
        'Group Classes',
        'Group Trainer',
        'Fitness Orientation',
        'Personal Assistance'
      ],
      background: "url('images/image17.jpg')"
    }
  ];

  return (
    <section>
      <div className="price-section">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`price-card ${index === 1 ? 'middle-card' : ''}`}
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(255, 69, 0, 0.5)), ${pkg.background}`,
              backgroundSize: '95% 95%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }}
          >
            <div className="price-card-content">
              <h2>{pkg.title}</h2>
              <h3>{pkg.price}</h3>
              <ul>
                {pkg.benefits.map((benefit, idx) => (
                  <li key={idx}>
                    <FontAwesomeIcon icon={faCheck} className="check-icon" /> {benefit}
                  </li>
                ))}
              </ul>
              <button className="enroll-btn" onClick={redirectToPayment}>
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PriceCard;
