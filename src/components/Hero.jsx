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
                    <div className="col-12 col-lg-4 hero-left position-relative" style={{ backgroundColor: '#2EB6B0', height: 'clamp(300px, 168.8px + 41vw, 956px)', width:'clamp(250px, 181.2px + 21.5vw, 594px)' }}>
                        
                        {/* Logo - Responsive positioning */}
                        <img src={logo} alt="Logo"
                            className="img-fluid mt-3 hero-logo d-none d-md-block"
                            style={{ 
                                maxHeight: 'clamp(35px, 25.6px + 2.9375vw, 82px)', 
                                marginLeft: 'clamp(100px, 76px + 7.5vw, 220px)', 
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
                                
                                transform: "translate(78% , 14%)",
                                width: "75%",
                                // maxWidth: { xs: "80%", md: "58%", lg:'58%' },
                                height: "70%",
                                objectFit: "cover",
                                zIndex: '2',
                            }}
                        />

                        {/* Vertical Line Slider */}
                        <div
                            className="hero-vertical-line"
                            style={{
                                position: "absolute",
                                top: "20%",
                                left: "44%",
                                width: "3px",
                                height: "64%",
                                backgroundColor: "rgba(255,255,255,0.5)",
                                borderRadius: "5px"
                            }}
                        ></div>

                        {/* Down Arrow Circle at Bottom of Line */}
                        <div
                            className="hero-arrow-circle"
                            style={{
                                position: "absolute",
                                top: "85%",
                                left: "40%",
                                width: "45px",
                                height: "45px",
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
                    <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 d-flex flex-column p-3" style={{ maxHeight: '100vh'}}>
                        
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
                        <nav className="py-2 d-none d-lg-flex flex-column justify-content-center align-items-center" style={{ marginLeft: '110px', fontFamily:'AnoRegular-Regular' }}>
                            <ul className="nav">
                                <li className="nav-item"><a className="nav-link" style={{ color: '#111111' }} href="#">Speaking+Leadership Training</a></li>
                                <li className="nav-item"><a className="nav-link" style={{ color: '#111111' }} href="#">Ukraine Warriors</a></li>
                                <li className="nav-item"><a className="nav-link" style={{ color: '#111111' }} href="#">Mission</a></li>
                                <li className="nav-item"><a className="nav-link" style={{ color: '#111111' }} href="#">Media</a></li>
                                <li className="nav-item"><a className="nav-link" style={{ color: '#111111' }} href="#">Resources</a></li>
                                <li className="nav-item"><a className="nav-link text-decoration-underline" style={{ color: '#2F1744', fontFamily:'Ano Bold !important' }} href="#">Contact<i className="fas fa-arrow-up-right ms-1"></i></a></li>
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
                        <div className='d-md-flex flex-column justify-content-end align-items-center flex-grow-1' style={{ marginTop: 'clamp(100px, 80px + 6.25vw, 200px)', marginLeft:'clamp(10px, 6px + 1.25vw, 30px)'}}>
                            <h1 className="display-3 fw-bold hero-heading" style={{ fontFamily: 'Andada Pro', color: '#2F1744', fontSize: 'clamp(30px, 20px + 3.125vw, 80px)' }}>
                            “Motivational, <br />
                                <span className="hero-heading-indent" style={{ marginLeft: 'clamp(100px, 72px + 8.75vw, 240px)' }}> Inspirational</span> <br />
                                <span>& Hilarious!”</span>
                            </h1>
                            <ul className='fst-italic mt-2 d-flex align-items-center justify-content-center flex-wrap list-unstyled gap-5 hero-list' style={{ marginLeft: 'clamp(130px, 96px + 10.625vw, 300px)', fontFamily: 'Andada Pro', marginBottom:'clamp(30px, 24px + 1.875vw, 60px)' }}>
                                <li className="d-flex align-items-center" style={{ fontSize: 'clamp(11px, 8.8px + 0.6875vw, 22px)' }}>
                                    <div className="me-3" style={{ width: 'clamp(6px, 4.8px + 0.375vw, 12px)', height: 'clamp(6px, 4.8px + 0.375vw, 12px)', backgroundColor: '#2EB6B0'}}></div>
                                    Live ON Purpose!
                                </li>
                                <li className="d-flex align-items-center" style={{ fontSize:'clamp(11px, 8.8px + 0.6875vw, 22px)'}}>
                                    <div className="me-3 ms-5" style={{ width: 'clamp(6px, 4.8px + 0.375vw, 12px)', height: 'clamp(6px, 4.8px + 0.375vw, 12px)', backgroundColor: '#2EB6B0' }}></div>
                                    Take Inspired Action
                                </li>
                            </ul>

                            {/* Book Jill Button */}
                            <div className="mt-3 d-flex align-items-center justify-content-start hero-book-button text-muted" style={{ marginRight: '560px' }}>
                                <div style={{ width: '40px', height: '1.5px', backgroundColor: '#2EB6B0' }} />
                                <div style={{
                                    width: 139,
                                    height: 139,
                                    borderRadius: '50%',
                                    backgroundColor: '#ffffff',
                                    boxShadow: '0 0 18px rgba(0, 0, 0, 0.08)',
                                    display: 'flex',
                                    alignItems: 'end',
                                    justifyContent: 'end',
                                    textAlign: 'center',
                                    fontSize: '18px',
                                    fontWeight: 600,
                                    color: '#363636',
                                    position: 'relative',
                        
                                }}>
                                    {/* Arrow Line - Preserved */}
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '0',
                                            transform: 'translateY(-50%)',
                                            width: '20px',
                                            height: '1.5px',
                                            backgroundColor: '#2EB6B0',
                                        }}
                                    />

                                    {/* Arrow Head - Preserved */}
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '20px',
                                            transform: 'translateY(-50%)',
                                            width: 0,
                                            height: 0,
                                            borderTop: '6px solid transparent',
                                            borderBottom: '6px solid transparent',
                                            borderLeft: '10px solid #2EB6B0',
            
                                        }}
                                    />
                                    <span style={{ fontFamily: "'Ano Bold', serif", fontSize: '12px', fontStyle: 'normal', textAlign: 'right', margin:'15px 25px' }}>
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