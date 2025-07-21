import React, { useEffect, useRef } from "react";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";
import logo7 from "../assets/logo7.png";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

const Partners = () => {
    const trackRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            const track = trackRef.current;
            if (!track || track.children.length === 0) return;

            const logoWidth = track.children[0].offsetWidth + 80; // image width + gap
            track.style.transition = "transform 0.6s ease";
            track.style.transform = `translateX(-${logoWidth}px)`;

            const onTransitionEnd = () => {
                track.style.transition = "none";
                track.appendChild(track.children[0]); // move first logo to the end
                track.style.transform = "translateX(0)";
                track.removeEventListener("transitionend", onTransitionEnd);
            };

            track.addEventListener("transitionend", onTransitionEnd);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-5" style={{ backgroundColor: "#fff", overflow: "hidden" }}>
            <div className="container-fluid overflow-hidden">
                <div
                    ref={trackRef}
                    className="d-flex align-items-center"
                    style={{
                        gap: "150px",
                        width: "max-content",
                        padding: "0 20px",
                    }}
                >
                    {logos.map((logo, idx) => (
                        <div
                            key={idx}
                            style={{
                                flex: "0 0 auto",
                                width: "clamp(100px, 12vw, 160px)",
                                height: "auto",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <img
                                src={logo}
                                alt={`Logo ${idx + 1}`}
                                className="img-lg-fluid"
                                style={{
                                    maxHeight: "100px",
                                    objectFit: "cover",
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
