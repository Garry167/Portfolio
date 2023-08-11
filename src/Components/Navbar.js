import React from 'react'
import { useState, useEffect } from 'react'
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
export default function Navbar() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            }
            else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    })

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    return (
        <div>
            <nav className={`navbar navbar-expand-lg bg-dark {scrolled ? "scrolled" : ""}`}>
                <div className="container-fluid">
                    <img src="favicon-32x32.png" alt="Logo" className="navbar-logo mx-2" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon text-light"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className={`nav-link ${activeLink === 'home' ? 'active text-light mx-5 navbar-link' : 'text-light mx-5'}`} aria-current="page" onClick={() => onUpdateActiveLink('home')} href="#home"> Home </a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${activeLink === 'skills' ? 'active text-light mx-5 navbar-link' : 'text-light mx-5'}`} aria-current="page" onClick={() => onUpdateActiveLink('skills')} href="skills"> Skills </a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${activeLink === 'projects' ? 'active text-light mx-5 navbar-link' : 'text-light mx-5'}`} aria-current="page" onClick={() => onUpdateActiveLink('projects')} href="projects"> Projects </a>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="social-icon">
                        <a href="https://linkedin.com/in/saranggaidhani" target='_blank'><img src={navIcon1} alt="" /></a>
                        <a href="https://github.com/Garry167" target='_blank'><img src={navIcon2} alt="" /></a>
                        <a href="https://www.instagram.com/sarangg167/"><img src={navIcon3} alt="" /></a>
                    </div>
                    <button type="button" class="navbar-text btn btn-outline-light mx-5" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
                </div>
            </nav>
        </div>
    )
}
