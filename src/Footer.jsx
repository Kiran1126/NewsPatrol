import React from 'react';
import '../src/Footer.css';
import Image from '../src/assets/6.png';

const Footer = () => (
  <footer>
    <div className="right_text">
      <p>
        You can connect with us on these social sites and get regular updates on the facts.
      </p>
    </div>
    <div className="below">
      <div className="left">
        <h1 className="title">NewSPatroL</h1>
        <img src={Image} className="patrol_img" alt="NewSPatroL logo" />
      </div>
      <ul className="right_icons">
        <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
        <li><a href="#"><i className="fa-solid fa-globe"></i></a></li>
      </ul>
    </div>
  </footer>
);

export default Footer;
