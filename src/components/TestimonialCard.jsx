import React from "react";
import racheal from '../assets/racheal.png';

const TestimonialCard = () => {
    return (
        <div className="container-fluid" style={{ backgroundColor: "#2EB6B0", padding: "clamp(70px, 56px + 4.375vw, 140px) 0" }}>
            <div className="row align-items-center justify-content-md-start justify-content-center">
                {/* Left Card */}
                <div className="col-12 col-md-6 d-flex justify-content-md-end justify-content-center mb-4">
                    <div
                        style={{
                            backgroundColor: "#2F1744",
                            width: "clamp(200px, 118.8px + 25.375vw, 606px)",
                            padding: "clamp(40px, 32px + 2.5vw, 80px) clamp(50px, 40px + 3.125vw, 120px) clamp(30px, 26px + 1.25vw, 50px) clamp(35px, 26px + 2.8125vw, 60px)",
                            color: "white",
                            position: "relative",
                        }}
                    >
                        <img
                            src={racheal}
                            className="img-fluid"
                            alt="Rachel Sexton"
                            style={{
                                position: "absolute",
                                top: "clamp(30px, 5vw, 50px)",
                                left: "67%",
                                transform: "translateX(-50%)",
                                width: "clamp(200px, 130.4px + 21.75vw, 548px)",
                                // height:'259px',
                                maxWidth: "548px",
                                height: "auto",
                                aspectRatio: "548/259",
                                objectFit: "cover",
                                objectPosition: 'center',
                                zIndex: 2
                            }}
                        />
                        <div
                            style={{
                                paddingTop: "clamp(120px, 88px + 10vw, 280px)",
                            }}
                        >
                            <h5
                                style={{
                                    fontWeight: "bold",
                                    fontFamily: "Andada Pro",
                                    fontSize: "clamp(12px, 6.4px + 1.75vw, 40px)",
                                }}
                            >
                                RACHEL SEXTON
                            </h5>
                            <p
                                style={{
                                    fontSize: "clamp(12px, 1.5vw, 20px)",
                                    fontFamily: "AnoRegular-Regular",
                                }}
                            >
                                Vice President at VPR Patient Outreach Program.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Text */}
                <div className="col-12 col-md-6 d-flex flex-column align-items-center align-items-lg-start text-center text-sm-center text-md-start text-xs-center pb-md-5"
                    style={{
                        // paddingLeft: "clamp(50px, 36px + 4.375vw, 120px)",
                        width:'clamp(200px, 144px + 17.5vw, 480px)',
                        marginLeft:'clamp(10px, -22px + 6.875vw, 110px)'

                    }}
                >
                    <p
                        style={{
                            fontSize: "clamp(16px, 2vw, 36px)",
                            fontFamily: "AnoRegular-Regular",
                            color: "white",
                            marginBottom: "clamp(1rem, 2vw, 2rem)",
                            position: "relative",
                            zIndex: 3
                        }}
                    >
                        “Jill is a phenomenal inspirational speaker. She lives it to give it
                        which has motivated me beyond what I had imagined.”
                    </p>

                    <div className="d-flex gap-3">
                        <div
                            style={{
                                width: "clamp(40px, 5vw, 50px)",
                                height: "clamp(40px, 5vw, 50px)",
                                borderRadius: "50%",
                                border: "1px solid white",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "white",
                            }}
                        >
                            <span style={{ fontSize: 'clamp(20px, 3vw, 25px)' }}>&larr;</span>
                        </div>
                        <div
                            style={{
                                width: "clamp(40px, 5vw, 50px)",
                                height: "clamp(40px, 5vw, 50px)",
                                borderRadius: "50%",
                                border: "1px solid white",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "white",
                            }}
                        >
                            <span style={{ fontSize: 'clamp(20px, 3vw, 25px)' }}>&rarr;</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;