import React from 'react';
import '../Css/Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
    <footer className="footer-container">
      <h2>Logo</h2>
      <div className='sub-footer'>

      <div className="booking">
        <h3>Booking</h3>
        <ul>
          <li>Book Flights</li>
          <li>Travel Services</li>
          <li>Transportation</li>
          <li>Planning Your Trip</li>
        </ul>
      </div>

      <div className="services">
        <h3>Services</h3>
        <ul>
          <li>Service 1</li>
          <li>Service 2</li>
          <li>Service 3</li>
        </ul>
      </div>

      <div className="newsletter">
        <h3>Newsletter</h3>
        <p>Subscribe to our newsletter for updates:</p>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      </div>
    </footer>
    <hr/>
    <p className='copy-right'>&copy; Shushil flight project 2024</p>
    </div>
  );
};

export default Footer;
