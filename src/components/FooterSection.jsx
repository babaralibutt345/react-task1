import React from "react";
import footerLogo from '../assets/footerLogo.png';

const FooterSection = () => {
    return (
        <div>
            <footer
                style={{
                    backgroundColor: "#181818",
                    color: "white",
                    padding: "40px 20px",
                    fontFamily: 'AnoRegular-Regular',
                    fontSize: "clamp(12px, 2vw, 16px)"
                }}
            >
                <div className="container">
                    <div className="row text-center text-md-start">
                        {/* Logo Section */}
                        <div className="col-12 col-sm-6 col-md-3 mb-4 d-flex justify-content-center justify-content-md-start">
                            <img
                                src={footerLogo}
                                alt="Jill Logo"
                                className="mt-4"
                                style={{ maxWidth: "100%", height: "auto" }}
                            />
                        </div>

                        {/* Links Section */}
                        <div className="col-12 col-sm-6 col-md-3 mb-4">
                            <h6>Links</h6>
                            <ul className="list-unstyled">
                                <li>About</li>
                                <li>Media & Speaking</li>
                                <li>Corporate Triathlete</li>
                                <li>Executive Coaching</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>

                        {/* Downloads Section */}
                        <div className="col-12 col-sm-6 col-md-3 mb-4">
                            <h6>Downloads</h6>
                            <ul className="list-unstyled">
                                <li>Speaker Kit</li>
                                <li>Download Speaker Bio</li>
                                <li>Corporate Triathlete Program</li>
                            </ul>
                        </div>

                        {/* Reach Us Section */}
                        <div className="col-12 col-sm-6 col-md-3 mb-4">
                            <h6>Reach Us</h6>
                            <p className="mb-1">816.812.2807</p>
                            <p className="mb-1">Email: hello@jilltupper.com</p>
                            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-3">
                                <i className="fab fa-facebook"></i>
                                <i className="fab fa-youtube"></i>
                                <i className="fab fa-linkedin"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Copyright */}
            <div
                className="text-center p-2 border-top border-light"
                style={{
                    fontFamily: 'AnoRegular-Regular',
                    fontSize: "clamp(10px, 1.5vw, 14px)"
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
