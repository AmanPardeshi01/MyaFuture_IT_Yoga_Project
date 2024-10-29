import React from 'react';
import './Instructor.css'; // Ensure you have the same styles applied
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faYoutube } from '@fortawesome/free-brands-svg-icons';

const InstructorProfile = () => {
  return (
    <div className="container">
      {/* Heading */}
      <div className="heading">
        <h1>Meet Your Instructor</h1>
      </div>

      {/* DIV1: Instructor Image */}
      <div className="div1">
        <img src="/images/instruct.jpg" alt="Image of the Instructor" />
      </div>

      {/* DIV2: Name and Message from Instructor */}
      <div className="div2">
        <h2>Suman R Singh</h2>
        <p><strong>Experience:</strong> 10 years of guiding people in yoga practices.</p>
        <p>Message from the instructor: "Yoga is not about touching your toes, it's about what you learn on the way down. Let it be your journey towards a healthier mind and body."</p>
        
        {/* Icons */}
        <div className="icons">
          <div className="icon"><FontAwesomeIcon icon={faInstagram} /></div>
          <div className="icon"><FontAwesomeIcon icon={faFacebookF} /></div>
          <div className="icon"><FontAwesomeIcon icon={faYoutube} /></div>
        </div>
      </div>

      {/* DIV3: Education Qualification of Instructor */}
      <div className="div3">
        <h3>Education Qualification</h3>
        <p>B.A in Yoga</p>
        <p>M.A in Yoga</p>
        <p>Diploma in Naturopathy and Yogic Science</p>
        <p>YOG Therapy</p>
      </div>
    </div>
  );
};

export default InstructorProfile;
