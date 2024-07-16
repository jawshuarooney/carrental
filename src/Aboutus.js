import React from 'react';
import './App.css'; // Import CSS for custom styling

function Aboutus() {
  return (
    <div className="about-container">
      <div className="banner-left"></div>
      <div className="about-content">
      <header>
        <h1 class='abot'>About Wheel Deal Rentals</h1>
    </header>
    <div class="container" id='containera'>
        <section>
            <h2>Our Story</h2>
            <p>Our journey began with a simple idea: to redefine the rental experience...</p>
        </section>
        <br></br>
        <section>
            <h2>Mission</h2>
            <p>At Wheel Deal Rentals, our mission is clear: to provide our customers with more than just transportation...</p>
        </section>
        <br></br>
        <section>
            <h2>Values</h2>
            <ul>
                <li><strong>Integrity:</strong> We operate with honesty, transparency, and integrity in all our dealings...</li>
                <li><strong>Quality:</strong> We maintain a fleet of high-quality vehicles, ensuring safety, comfort, and reliability with every rental...</li>
                <li><strong>Customer Focus:</strong> Our customers are at the heart of everything we do...</li>
                <li><strong>Innovation:</strong> We embrace innovation and technology to continually enhance our services and processes...</li>
                <li><strong>Community Engagement:</strong> We believe in giving back to the communities we serve...</li>
            </ul>
        </section>
        <br></br>
        <section>
            <h2>Why Choose Us?</h2>
            <ul>
                <li><strong>Diverse Fleet:</strong> From compact cars to luxury SUVs...</li>
                <li><strong>Exceptional Service:</strong> Our dedicated team is committed to providing personalized assistance...</li>
                <li><strong>Competitive Pricing:</strong> We offer competitive rates and flexible rental options...</li>
                <li><strong>Convenience:</strong> With multiple locations and convenient booking options...</li>
                <li><strong>Peace of Mind:</strong> With our comprehensive insurance coverage and 24/7 roadside assistance...</li>
            </ul>
        </section>
        <br></br>
        <section>
            <h2>Get Behind the Wheel with Wheel Deal Rentals</h2>
            <p>Whether you're traveling for business or pleasure, exploring new destinations, or simply need a reliable ride for your daily commute, Wheel Deal Rentals is here to make your journey a memorable one...</p>
        </section>
    </div>
      </div>
      <div className="banner-right"></div>
    </div>
  );
}

export default Aboutus;
