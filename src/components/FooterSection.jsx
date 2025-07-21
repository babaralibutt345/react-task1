import React from "react";
import footerLogo from '../assets/footerLogo.png';

const FooterSection = () => {
    return (
        <div>
            <footer
                style={{
                    backgroundColor: "#181818",
                    color: "white",
                    padding: "clamp(20px, 5vw, 30px) clamp(10px, 3vw, 20px)",
                    fontFamily: 'AnoRegular-Regular'
                }}
            >
                <div className="container-fluid" style={{ width: 'clamp(320px, 90vw, 1920px)'}}>
                    <div className="row text-center text-md-start text-sm-start align-items-start pt-lg-5">
                        {/* Logo Section */}
                        <div className="col-12 col-sm-12 col-md-12 col-lg-3 mb-lg-5 mt-lg-3 d-flex justify-content-center justify-content-md-start">
                            <img
                                src={footerLogo}
                                alt="Jill Logo"
                                className="img-fluid d-block mx-md-auto mb-md-5 mb-lg-0 mb-sm-5 mb-4" 
                                style={{
                                    width: 'clamp(100px, 20vw, 266px)',
                                    height: 'clamp(100px, 15vw, 218px)',                                    
                                }}
                            />
                        </div>

                        {/* Links Section */}
                        <div className="col-12 col-sm-4 col-md-4 col-lg-3 pt-lg-1 ps-lg-5 ps-sm-5 pb-4" style={{}}> 
                            <h6 className="fs-5" style={{
                                lineHeight: 'clamp(40px, 5vw, 50px)'}}>LINKS</h6>
                            <ul className="list-unstyled" style={{
                                fontSize: 'clamp(11px, 2vw, 16px)', lineHeight: 'clamp(24px, 4vw, 30px)' }}>
                                <li>About</li>
                                <li>Media & Speaking</li>
                                <li>Corporate Triathlete</li>
                                <li>Executive Coaching</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>

                        {/* Downloads Section */}
                        <div className="col-12 col-sm-4 col-md-4 col-lg-3 pb-4 ps-lg-5">
                            <h6 className="fs-5" style={{ lineHeight: 'clamp(40px, 4vw, 50px)' }}>DOWNLOADS</h6>
                            <ul className="list-unstyled" style={{ 
                                fontSize: 'clamp(11px, 2vw, 16px)', lineHeight: 'clamp(24px, 4vw, 30px)'
                             }}>
                                <li>Speaker Kit</li>
                                <li>Download Speaker Bio</li>
                                <li>Corporate Triathlete Program</li>
                            </ul>
                        </div>

                        {/* Reach Us Section */}
                        <div className="col-12 col-sm-4 col-md-4 col-lg-3 mb-lg-5 ps-lg-5">
                            <h6 className="fs-5" style={{ lineHeight: 'clamp(40px, 4vw, 50px)' }}>REACH US</h6>
                            <p className="mb-1" style={{ 
                                fontSize: 'clamp(11px, 2vw, 16px)', 
                                lineHeight: 'clamp(24px, 4vw, 30px)',
                                fontFamily: 'AnoRegular-Regular' }}>816.812.2807</p>
                            <p className="mb-1" style={{ 
                                fontSize: 'clamp(11px, 2vw, 16px)', 
                                lineHeight: 'clamp(24px, 4vw, 30px)',
                                fontFamily: 'AnoRegular-Regular' }}>Email: hello@jilltupper.com</p>
                            <div className="d-flex justify-content-center justify-content-md-center justify-content-lg-start gap-3 mt-3">
                                <i className="fab fa-facebook" style={{ fontSize: 'clamp(18px, 2.5vw, 26px)', lineHeight: 'clamp(24px, 4vw, 30px)' }}></i>
                                <i className="fab fa-youtube" style={{ fontSize: 'clamp(18px, 2.5vw, 26px)', lineHeight: 'clamp(24px, 4vw, 30px)' }}></i>
                                <i className="fab fa-linkedin" style={{ fontSize: 'clamp(18px, 2.5vw, 26px)', lineHeight: 'clamp(24px, 4vw, 30px)' }}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Copyright */}
            <div
                className="text-center pt-4 pb-4 border-top border-light"
                style={{
                    fontFamily: 'AnoRegular-Regular',
                    fontSize: "clamp(12px, 1.5vw, 22px)"
                }}
            >
                <small>
                    © 2022 Jill Tupper - Keynote Speaker ★ Corporate Leadership Innovator.
                </small>
            </div>
        </div>
    );
};

export default FooterSection;
