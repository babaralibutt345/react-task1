import React from "react";
import racheal from '../assets/racheal.png';

const TestimonialCard = () => {
    return (
        <div style={{ backgroundColor: "#2EB6B0", padding: "80px 0" }}>
            <div className="container d-flex justify-content-center align-items-center flex-wrap gap-5">
                {/* Left card */}
                <div
                    style={{
                        backgroundColor: "#2F1744",
                        width: "300px",
                        padding: "20px",
                        color: "white",
                        position: "relative",
                    }}
                >
                    <img
                        src={racheal} // Replace with actual image
                        alt="Rachel Sexton"
                        style={{
                            position: "absolute",
                            top: "40px",
                            left: "70%",
                            transform: "translateX(-50%)",
                            width: "230px",
                            height: "120px",
                            objectFit: "cover",
                            borderRadius: "1px",
                        }}
                    />
                    <div style={{ paddingTop: "200px" }}>
                        <h5 style={{ fontWeight: "bold" }}>RACHEL SEXTON</h5>
                        <p style={{ fontSize: "0.9rem" }}>
                            Vice President at VPR Patient Outreach Program.
                        </p>
                    </div>
                </div>

                {/* Right text */}
                <div style={{ maxWidth: "300px", color: "white"}}>
                    <p style={{ fontSize: "1.1rem", margin:'50px' }}>
                        “Jill is a phenomenal inspirational speaker. She lives it to give it
                        which has motivated me beyond what I had imagined.”
                    </p>
                    <div className="d-flex gap-3" style={{ margin: '50px' }} >
                        <div
                            style={{
                                width: 30,
                                height: 30,
                                borderRadius: "50%",
                                border: "1px solid white",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <span>&larr;</span>
                        </div>
                        <div
                            style={{
                                width: 30,
                                height: 30,
                                borderRadius: "50%",
                                border: "1px solid white",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <span>&rarr;</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
