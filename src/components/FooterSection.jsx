import React from "react";
import footerLogo from '../assets/footerLogo.png'

const FooterSection = () => {
    return (
        <div >
        <footer style={{
            backgroundColor: "#1A1A1A", color: "white", padding: "40px 20px" }}>
                <div className ="container d-flex flex-wrap justify-content-between">
        {/* Logo Section */ }
                < div className="mb-4" style={{ flex: 1, minWidth: 200 }}>
                <img
                src={footerLogo} // Replace with actual logo
            alt ="Jill Logo"
            className ="mb-3"
          />
        </div >

    {/* Links Section */ }
    < div className ="mb-4" style={{ flex: 1, minWidth: 200 }}>
        < h6 > Links</h6 >
            <ul className="list-unstyled">
                < li > About</li >
            <li>Media & Speaking</li>
            <li>Corporate Triathlete</li>
            <li>Executive Coaching</li>
            <li>Contact Us</li>
          </ul >
        </div >

    {/* Downloads Section */ }
    < div className ="mb-4" style={{ flex: 1, minWidth: 200 }}>
        < h6 > DOWNLOADS</h6 >
            <ul className="list-unstyled">
                < li > Speaker Kit</li >
            <li>Download Speaker Bio</li>
            <li>Corporate Triathlete Program</li>
          </ul >
        </div >

    {/* Reach Us Section */ }
    < div className ="mb-4" style={{ flex: 1, minWidth: 200 }}>
        < h6 > REACH US</h6 >
            <p className="mb-1">816.812.2807</p>
                < p className ="mb-1">Email: hello@jilltupper.com</p>
                    < div className ="d-flex gap-3 mt-3">
                        < i className ="fab fa-facebook"></i>
                            < i className ="fab fa-youtube "></i>
                                < i className ="fab fa-linkedin"></i>
          </div >
        </div >
      </div >

   
    </footer >

    < div className="text-center p-2 border-top border-light">
        < small>
            © 2022 Jill Tupper - Keynote Speaker ★ Corporate Leadership Innovator.
        </small >
    </div >
    </div>
  );
};

export default FooterSection;
