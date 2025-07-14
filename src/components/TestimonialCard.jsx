import React from "react";
import racheal from '../assets/racheal.png';

const TestimonialCard = () => {
    return (
        <div style={{ backgroundColor: "#2EB6B0", padding: "90px 0" }}>
            <div className="container">
                <div className="row align-items-center gx-md-5 gy-5">

                    {/* Left Card */}
                    <div className="col-12 col-md-6 d-flex justify-content-md-end justify-content-center">
                        <div
                            style={{
                                backgroundColor: "#2F1744",
                                width: "330px",
                                padding: "20px",
                                color: "white",
                                position: "relative",
                            }}
                        >
                            <img
                                src={racheal}
                                alt="Rachel Sexton"
                                style={{
                                    position: "absolute",
                                    top: "40px",
                                    left: "72%",
                                    transform: "translateX(-50%)",
                                    width: "250px",
                                    height: "130px",
                                    objectFit: "cover",
                                    borderRadius: "1px",
                                }}
                            />
                            <div
                                style={{
                                    paddingTop: "190px",
                                    paddingRight: "10px",
                                    paddingLeft: "10px",
                                }}
                            >
                                <h5
                                    style={{
                                        fontWeight: "bold",
                                        fontFamily: "Andada Pro",
                                        fontSize: "clamp(18px, 2vw, 22px)",
                                    }}
                                >
                                    RACHEL SEXTON
                                </h5>
                                <p
                                    style={{
                                        fontSize: "clamp(12px, 1.5vw, 14px)",
                                        fontFamily: "AnoRegular-Regular",
                                    }}
                                >
                                    Vice President at VPR Patient Outreach Program.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Text */}
                    <div className="col-12 col-md-6 d-flex flex-column align-items-center align-items-md-start text-center text-md-start px-5">
                        <p
                            style={{
                                fontSize: "clamp(16px, 2vw, 20px)",
                                fontFamily: "AnoRegular-Regular",
                                color: "white",
                                marginBottom: "1rem",
                                maxWidth: "320px",
                            }}
                        >
                            “Jill is a phenomenal inspirational speaker. She lives it to give it
                            which has motivated me beyond what I had imagined.”
                        </p>

                        <div className="d-flex gap-3 mt-3">
                            <div
                                style={{
                                    width: 30,
                                    height: 30,
                                    borderRadius: "50%",
                                    border: "1px solid white",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "white",
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
                                    color: "white",
                                }}
                            >
                                <span>&rarr;</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
