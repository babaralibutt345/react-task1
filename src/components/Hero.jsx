import logo from '../assets/logo.png';
import section1img from '../assets/section1img.jpg';
import { FaArrowDown, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import '../components/HeroSection.css'; // External CSS

const Hero = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <section className="hero-section">
            <div className="container-fluid overflow-hidden">
                <div className="row">
                    {/* LEFT SIDE */}
                    <div className="col-12 col-lg-4 hero-left position-relative">
                        <img src={logo} alt="Logo" className="img-fluid mt-3 hero-logo d-none d-md-block" />

                        <img src={section1img} alt="Jill" className="img-fluid hero-image" />

                        <div className="hero-vertical-line"></div>

                        <div className="hero-arrow-circle">
                            <FaArrowDown className="text-white fs-5" />
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="col-12 col-lg-8 d-flex flex-column hero-right">
                        {/* Mobile Logo */}
                        <div className="mobile-logo d-md-none position-absolute">
                            <img src={logo} alt="Logo" />
                        </div>

                        {/* Hamburger */}
                        <button className="hamburger-btn d-lg-none position-absolute" onClick={toggleMenu}>
                            {isMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>

                        {/* Desktop Navbar */}
                        <nav className="hero-navbar d-none d-lg-flex p-lg-4">
                            <ul className="nav">
                                <li className="nav-item"><a href="#" className="nav-link">Speaking+Leadership Training</a></li>
                                <li className="nav-item"><a href="#" className="nav-link">Ukraine Warriors</a></li>
                                <li className="nav-item"><a href="#" className="nav-link">Mission</a></li>
                                <li className="nav-item"><a href="#" className="nav-link">Media</a></li>
                                <li className="nav-item"><a href="#" className="nav-link">Resources</a></li>
                                <li className="nav-item"><a href="#" className="nav-link">Donate</a></li>
                                <li className="nav-item"><a href="#" className="nav-link contact-link">Contact<i className="fas fa-arrow-up-right ms-1"></i></a></li>
                            </ul>
                        </nav>

                        {/* Mobile Menu */}
                        <div className={`mobile-nav d-lg-none ${isMenuOpen ? 'mobile-nav-open' : ''}`}>
                            <ul className="nav flex-column">
                                {["Speaking+Leadership Training", "Ukraine Warriors", "Mission", "Media", "Resources", "Contact"].map((item, index) => (
                                    <li className="nav-item mb-2" key={index}>
                                        <a href="#" className="nav-link" onClick={toggleMenu}>{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Overlay */}
                        {isMenuOpen && <div className="mobile-overlay d-lg-none" onClick={toggleMenu}></div>}

                        {/* HERO TEXT */}
                        <div className="d-flex flex-column justify-content-lg-center align-items-center align-items-lg-center ps-lg-5 mt-5 mt-lg-2 ms-lg-5 flex-grow-1 pb-5 pb-lg-0 hero-text">
                            <h1 className="hero-heading">
                                “Motivational,<br />
                                <span className="hero-heading-indent"> Inspirational</span><br />
                                <span style={{marginLeft:'40px'}}>& Hilarious!”</span>
                            </h1>

                            <ul className="hero-list pb-3 pb-lg-0">
                                <li><div></div>Live ON Purpose!</li>
                                <li><div></div>Take Inspired Action</li>
                            </ul>

                            <div className="hero-book-button">
                                <div></div>
                                <div>
                                    <div className="line"></div>
                                    <div className="arrow"></div>
                                    <span>BOOK JILL<br />RIGHT NOW</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
