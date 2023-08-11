import React from 'react';
import './Footer.css';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="wave-container">
                <div className="wave"></div>
            </div>
            <div className="footer-content">
                <div className="social-icons">
                    {/* <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a> */}
                    <a href="https://linkedin.com/in/saranggaidhani" target='_blank'><img src={navIcon1} alt="" /></a>
                    <a href="https://github.com/Garry167" target='_blank'><img src={navIcon2} alt="" /></a>
                    <a href="#"><img src={navIcon3} alt="" /></a>
                </div>
                <p className="copyright">&copy; 2023 Sarang Gaidhani. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
