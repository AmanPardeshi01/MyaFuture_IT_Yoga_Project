import React, { useEffect, useRef } from 'react';
import './Landing.css';
import 'animate.css';

const Landing = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.onloadeddata = () => {
                videoRef.current.play().catch(error => {
                    console.log("Video autoplay failed:", error);
                });
            };
        }
    }, []);

    return (
        <section className="landing">
            <video 
                ref={videoRef}
                autoPlay 
                muted 
                loop 
                playsInline
                className="background-video"
            >
                <source src="https://res.cloudinary.com/dhumf3nn2/video/upload/v1730112308/video1_hdhnwn.mp4" type="video/mp4" />
                <img src="/images/logo2.png" alt="Mann Moksha Logo" className="logo" />
                Your browser does not support the video tag.
            </video>

            <div className="content">
                <h1 className="animate__animated animate__fadeInDown">
                    Discover Inner Peace Through Yoga
                </h1>
                <p className="animate__animated animate__fadeInUp">
                    Transform your mind and body with our expert-led yoga classes...
                </p>

                <button className="cta-button">
                    Start Your Journey
                </button>
            </div>
            
            <img 
                src="/images/logo2.png" 
                alt="Yoga Image" 
                className="right-image"
            />
        </section>
    );
};

export default Landing;
