import logo from '../assets/logo.png';
import section1img from '../assets/section1img.jpg';
import { FaArrowDown, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import '../components/HeroSection.css';

const Hero = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <section>
            <div className="container-fluid" style={{overflowX:'hidden'}}>
                <div className="row">
                    {/* LEFT SIDE: Logo, Vertical Line, Jill Image */}
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 hero-left position-relative" style={{ backgroundColor: '#2EB6B0', height: '90vh' }}>
                        
                        {/* Logo - Responsive positioning */}
                        <img src={logo} alt="Logo"
                            className="img-fluid mt-3 hero-logo d-none d-md-block"
                            style={{ 
                                maxHeight: '82px', 
                                marginLeft: '190px', 
                                height: 'auto'
                            }}
                        />

                        {/* Jill Image */}
                        <img
                            src={section1img}
                            className='img-fluid hero-image'
                            alt="Jill"
                            style={{
                                position: "absolute",
                                top: { xs: "10%", md: "18%" },
                                // top: "18%",
                                // left: "65%",
                                left: { xs: "50%", md: "65%" },
                                transform: "translateX(120%)",
                                maxWidth: "58%",
                                // maxWidth: { xs: "80%", md: "58%", lg:'58%' },
                                height: "65%",
                                objectFit: "cover",
                                zIndex: '2',
                            }}
                        />

                        {/* Vertical Line Slider */}
                        <div
                            className="hero-vertical-line"
                            style={{
                                position: "absolute",
                                top: "18%",
                                left: "54%",
                                width: "3px",
                                height: "58%",
                                backgroundColor: "rgba(255,255,255,0.5)",
                                borderRadius: "5px"
                            }}
                        ></div>

                        {/* Down Arrow Circle at Bottom of Line */}
                        <div
                            className="hero-arrow-circle"
                            style={{
                                position: "absolute",
                                top: "78%",
                                left: "51%",
                                width: "30px",
                                height: "30px",
                                borderRadius: "50%",
                                border: "1px solid white",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "transparent",
                            }}
                        >
                            <FaArrowDown style={{ color: "white", fontSize: "20px" }} />
                        </div>
                    </div>

                    {/* RIGHT SIDE: Navbar + Text */}
                    <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 d-flex flex-column" style={{ maxHeight: '95vh'}}>
                        
                        {/* Mobile Logo (hidden on desktop) */}
                        <div className="mobile-logo d-md-none position-absolute" style={{ top: '15px', left: '15px', zIndex: '1000' }}>
                            <img src={logo} alt="Logo" style={{ height: '50px' }} />
                        </div>

                        {/* Hamburger Menu Button (visible on mobile) */}
                        <button 
                            className="hamburger-btn d-lg-none position-absolute"
                            onClick={toggleMenu}
                            style={{
                                top: '15px',
                                right: '15px',
                                background: 'none',
                                border: 'none',
                                fontSize: '24px',
                                color: '#111111',
                                zIndex: '1001'
                            }}
                        >
                            {isMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>

                        {/* Desktop Navbar */}
                        <nav className="py-2 d-none d-lg-flex flex-column justify-content-center align-items-center" style={{ marginLeft: '100px' }}>
                            <ul className="nav">
                                <li className="nav-item"><a className="nav-link" style={{ color: '#111111' }} href="#">Speaking+Leadership Training</a></li>
                                <li className="nav-item"><a className="nav-link" style={{ color: '#111111' }} href="#">Ukraine Warriors</a></li>
                                <li className="nav-item"><a className="nav-link" style={{ color: '#111111' }} href="#">Mission</a></li>
                                <li className="nav-item"><a className="nav-link" style={{ color: '#111111' }} href="#">Media</a></li>
                                <li className="nav-item"><a className="nav-link" style={{ color: '#111111' }} href="#">Resources</a></li>
                                <li className="nav-item"><a className="nav-link text-decoration-underline" style={{ color: '#111111' }} href="#">Contact<i className="fas fa-arrow-up-right ms-1"></i></a></li>
                            </ul>
                        </nav>

                        {/* Mobile Navigation Menu */}
                        <div className={`mobile-nav d-lg-none ${isMenuOpen ? 'mobile-nav-open' : ''}`} style={{
                            position: 'fixed',
                            top: '0',
                            right: isMenuOpen ? '0' : '-100%',
                            width: '60%',
                            height: '80vh',
                            backgroundColor: '#ffffff',
                            zIndex: '999',
                            transition: 'right 0.3s ease',
                            padding: '80px 20px 20px 20px',
                            boxShadow: '-2px 0 10px rgba(0,0,0,0.1)'
                        }}>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-3"><a className="nav-link" style={{ color: '#111111', fontSize: '18px' }} href="#" onClick={toggleMenu}>Speaking+Leadership Training</a></li>
                                <li className="nav-item mb-3"><a className="nav-link" style={{ color: '#111111', fontSize: '18px' }} href="#" onClick={toggleMenu}>Ukraine Warriors</a></li>
                                <li className="nav-item mb-3"><a className="nav-link" style={{ color: '#111111', fontSize: '18px' }} href="#" onClick={toggleMenu}>Mission</a></li>
                                <li className="nav-item mb-3"><a className="nav-link" style={{ color: '#111111', fontSize: '18px' }} href="#" onClick={toggleMenu}>Media</a></li>
                                <li className="nav-item mb-3"><a className="nav-link" style={{ color: '#111111', fontSize: '18px' }} href="#" onClick={toggleMenu}>Resources</a></li>
                                <li className="nav-item mb-3"><a className="nav-link text-decoration-underline" style={{ color: '#111111', fontSize: '18px' }} href="#" onClick={toggleMenu}>Contact<i className="fas fa-arrow-up-right ms-1"></i></a></li>
                            </ul>
                        </div>

                        {/* Mobile Overlay */}
                        {isMenuOpen && (
                            <div 
                                className="mobile-overlay d-lg-none"
                                onClick={toggleMenu}
                                style={{
                                    position: 'fixed',
                                    top: '0',
                                    left: '0',
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: 'rgba(0,0,0,0.5)',
                                    zIndex: '998'
                                }}
                            ></div>
                        )}

                        {/* Hero Text */}
                        <div className='d-md-flex flex-column justify-content-center align-items-center flex-grow-1 px-3 hero-text-container'>
                            <h1 className="display-3 fw-medium hero-heading">
                                "Motivational, <br />
                                <span className="hero-heading-indent" style={{ marginLeft: '270px' }}> Inspirational</span> <br />
                                <span>& Hilarious!"</span>
                            </h1>
                            <ul className='fst-italic mt-2 d-flex align-items-center justify-content-center flex-wrap list-unstyled gap-5 hero-list' style={{ marginLeft: '50px' }}>
                                <li className="d-flex align-items-center" style={{ fontFamily: "'Andada Pro', serif" }}>
                                    <div className="me-3" style={{ width: '12px', height: '12px', backgroundColor: '#2EB6B0' }}></div>
                                    Live ON Purpose!
                                </li>
                                <li className="d-flex align-items-center" style={{ fontFamily: "'Andada Pro', serif" }}>
                                    <div className="me-3" style={{ width: '12px', height: '12px', backgroundColor: '#2EB6B0' }}></div>
                                    Take Inspired Action
                                </li>
                            </ul>

                            {/* Book Jill Button */}
                            <div className="mt-3 d-flex align-items-center justify-content-start hero-book-button" style={{ marginRight: '500px' }}>
                                <div style={{ width: '40px', height: '1.5px', backgroundColor: '#2EB6B0' }} />
                                <div style={{
                                    width: 120,
                                    height: 120,
                                    borderRadius: '50%',
                                    backgroundColor: '#ffffff',
                                    boxShadow: '0 0 12px rgba(0, 0, 0, 0.05)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    fontSize: '0.8rem',
                                    fontWeight: 600,
                                    color: '#333',
                                    position: 'relative'
                                }}>
                                    <div
                                        style={{
                                            position: 'absolute',
                                            left: '5px',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            width: 0,
                                            height: 0,
                                            borderTop: '4px solid transparent',
                                            borderBottom: '4px solid transparent',
                                            borderLeft: '6px solid #2EB6B0'
                                        }}
                                    />
                                    <span style={{ fontFamily: "'Andada Pro', serif", fontSize: '12px', fontStyle: 'normal', textAlign: 'right' }}>
                                        BOOK JILL<br />RIGHT NOW
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Responsive CSS */}
            <style jsx>{`
                /* Mobile Styles */

                @media (max-width: 768px) {
                    .hero-left {
                        height: 50vh !important;
                        width: 100% !important;
                    }
                    
                    .hero-logo {
                        margin-left: 700px !important;
                        max-height: 60px !important;
                    }
                    
                    .hero-image {
                        top: 25% !important;
                        left: 50% !important;
                        transform: translateX(-50%) !important;
                        max-width: 80% !important;
                        height: 65% !important;
                    }
                    
                    .hero-vertical-line {
                        left: 15% !important;
                        top: 80%; !important
                        height: 35% !important;
                    }
                    
                    .hero-arrow-circle {
                        left: 13% !important;
                        top: 80% !important;
                    }
                    
                    .hero-heading {
                        font-size: 2.5rem !important;
                        text-align: center !important;
                        margin-top: 50px !important;
                    }
                    
                    .hero-heading-indent {
                        margin-left: 80px !important;
                    }
                    
                    .hero-list {
                        margin-left: 0 !important;
                        flex-direction: row !important;
                        gap: 15px !important;
                    }
                    
                    .hero-book-button {
                        margin-left: 200px !important;
                        margin-top: 20px !important;
                    }
                    
                    .hero-book-button > div:first-child {
                        width: 70px !important;
                    }
                    
                    .hero-book-button > div:last-child {
                        width: 100px !important;
                        height: 100px !important;
                    }
                }
                
                /* Tablet Styles */
                @media (min-width: 769px) and (max-width: 1024px) {
                    .hero-logo {
                        margin-left: 100px !important;
                        max-height: 70px !important;
                    }
                    
                    .hero-heading {
                        font-size: 3rem !important;
                    }
                    
                    .hero-heading-indent {
                        margin-left: 150px !important;
                    }
                    
                    .hero-book-button {
                        margin-left: -250px !important;
                    }
                }
                
                /* Small Mobile Styles */
                @media (max-width: 480px) {
                    .hero-left {
                        height: 45vh !important;
                        width: 100% !important;
                    }
                    
                    .hero-heading {
                        font-size: 2rem !important;
                    }
                    
                    .hero-heading-indent {
                        margin-left: 40px !important;
                    }
                    
                    .hero-book-button > div:last-child {
                        width: 80px !important;
                        height: 80px !important;
                    }
                    
                    .hero-book-button > div:last-child span {
                        font-size: 10px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;