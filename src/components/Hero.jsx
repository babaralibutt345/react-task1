import logo from '../assets/logo.png';
import section1img from '../assets/section1img.jpg';
import { FaArrowDown } from 'react-icons/fa';
import '../components/HeroSection.css';

const Hero = () => {
    return (
        <section>

            <div className="container-fluid-md">
                <div className="row">

                    {/* LEFT SIDE: Logo, Vertical Line, Jill Image */}
                    <div className="col-md-4 col-sm-4 col-lg-4 col-xs-4 xxs-4  position-relative" style={{ backgroundColor: '#2EB6B0', height: '90vh' }}>

                        {/* Logo */}
                        <img src={logo} alt="Logo"
                            className="img-fluid mt-3 logo-img"
                            style={{ maxHeight: '82px', marginLeft: '190px', height: 'auto' }}
                        />

                        {/* Jill Image */}
                        <img
                            src={section1img}
                            className='img-fluid'
                            alt="Jill"
                            style={{
                                position: "absolute",
                                top: "18%",
                                left: "65%",
                                maxWidth: "58%",
                                height: "65%",
                                objectFit: "cover",
                                zIndex: '2',
                            }}
                        />

                        {/* Vertical Line Slider */}
                        <div
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

                    <div className="col-md-8 col-lg-8 col-sm-8 col-xs-8 col-xxs-8 d-flex flex-column" style={{ minHeight: '95vh' }}>
                        {/* ---------------------Navbar-------------- */}
                        <nav className="py-2 d-flex flex-column justify-content-center align-items-center" style={{ marginLeft: '100px' }}>
                            <ul className="nav">
                                <li className="nav-item"><a className="nav-link" style={{ color: '#111111' }} href="#">Speaking+Leadership Training</a></li>
                                <li className="nav-item"><a className="nav-link" style={{ color: '#111111' }} href="#">Ukraine Warriors</a></li>
                                <li className="nav-item"><a className="nav-link" style={{ color: '#111111' }} href="#">Mission</a></li>
                                <li className="nav-item"><a className="nav-link" style={{ color: '#111111' }} href="#">Media</a></li>
                                <li className="nav-item"><a className="nav-link" style={{ color: '#111111' }} href="#">Resources</a></li>
                                <li className="nav-item"><a className="nav-link text-decoration-underline" style={{ color: '#111111' }} href="#">Contact<i className="fas fa-arrow-up-right ms-1"></i></a></li>
                            </ul>
                        </nav>


                        {/* Hero Text */}
                        <div className='d-flex flex-column justify-content-center align-items-center flex-grow-1 px-3'>
                            <h1 className="display-3 fw-medium">
                                “Motivational, <br />
                                <span style={{ marginLeft: '270px' }}> Inspirational</span> <br />
                                <span>& Hilarious!”</span>
                            </h1>
                            <ul className='fst-italic mt-2 d-flex align-items-center justify-content-center flex-wrap list-unstyled gap-4' style={{ marginLeft: '50px' }}>
                                <li className="d-flex align-items-center"    style={{ fontFamily: "'Andada Pro', serif" }}>
                                    <div className="me-3" style={{ width: '12px', height: '12px', backgroundColor: '#2EB6B0' }}></div>
                                    Live ON Purpose!
                                </li>
                                <li className="d-flex align-items-center" style={{ fontFamily: "'Andada Pro', serif" }}>
                                    <div className="me-3" style={{ width: '12px', height: '12px', backgroundColor: '#2EB6B0' }}></div>
                                    Take Inspired Action
                                </li>
                            </ul>

                            {/* Book Jill Button */}
                            <div className="mt-3 d-flex align-items-center justify-content-start" style={{marginLeft:'-500px'}}>
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

        </section>
    );
};

export default Hero;
