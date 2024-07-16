import React from 'react';
import './App.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p className="text-center">© {new Date().getFullYear()} Wheel Deal Rentals. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
