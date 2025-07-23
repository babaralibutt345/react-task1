import React from "react";
import followJill from "../assets/followJill.jpg";
import '../components/FollowJill.css';

const FollowJill = () => {
    return (
        <div className="container-fluid">
            <div className="row d-flex flex-row align-items-center justify-content-center">

                {/* Left Section - Text */}
                <div className="col-12 col-md-6 pt-5 pt-md-5 pt-lg-5 text-center text-md-start">
                    <div className="responsive-padding">
                    <h2 className="mb-md-4 mb-lg-5"
                        style={{
                            color: "#2F1744",
                            fontWeight: "bold",
                            fontSize: "clamp(32px, 5vw, 70px)",
                        }}
                    >
                        Follow Jill!
                    </h2>
                    <p
                        className="mb-3 mb-lg-5"
                        style={{
                            fontFamily: "AnoRegular-Regular",
                            fontSize: "clamp(10px, 2vw, 24px)",
                        }}
                    >
                        She sends adventurous insights that won’t overload your inbox, but might
                        just challenge you to take inspired action!
                    </p>
                    </div>

                    <div className="d-flex flex-column flex-md-row gap-3 mb-4 me-3 responsive-padding1">
                        <input
                            type="text"
                            placeholder="Name"
                            className="form-control border-0 border-bottom border-muted rounded-0 fs-lg-5"
                            style={{ fontSize: 'clamp(10px, 1.5vw, 24px)' }}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="form-control border-0 border-bottom rounded-0 fs-lg-5" 
                            style={{ fontSize: 'clamp(10px, 1.5vw, 24px)' }}

                        />
                    </div>

                    {/* Button */}
                    <div className="d-flex justify-content-center justify-content-md-end align-items-center pt-2 pb-5 me-3">
                        <div style={{
                            width: "clamp(20px, 20px + 0vw, 20px)",
                            height: "clamp(1.5px, 1.5px + 0vw, 1.5px)", 
                            backgroundColor: "#2EB6B0" }} 
                            />
                        <div
                            style={{
                                width: 'clamp(125px, 123px + 0.625vw, 135px)',
                                height: 'clamp(125px, 123px + 0.625vw, 135px)',
                                borderRadius: "50%",
                                backgroundColor: "#ffffff",
                                boxShadow: "0 0 18px rgba(0, 0, 0, 0.08)",
                                display: "flex",
                                alignItems: "end",
                                justifyContent: "center",
                                textAlign: "center",
                                fontSize: "clamp(9px, 8.4px + 0.1875vw, 12px)",
                                fontWeight: 500,
                                color: "#363636",
                                position: "relative",
                            }}
                        >
                            {/* Arrow */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "0",
                                    transform: "translateY(-50%)",
                                    width: "clamp(20px, 20px + 0vw, 20px)",
                                    height: "clamp(1.5px, 1.5px + 0vw, 1.5px)",
                                    backgroundColor: "#2EB6B0",
                                }}
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "20px",
                                    transform: "translateY(-50%)",
                                    width: 0,
                                    height: 0,
                                    borderTop: "6px solid transparent",
                                    borderBottom: "6px solid transparent",
                                    borderLeft: "10px solid #2EB6B0",
                                }}
                            />
                            <span
                                style={{
                                    fontFamily: "'Ano Bold', serif",
                                    fontSize: "clamp(10px, 1vw, 12px)",
                                    fontStyle: "normal",
                                    textAlign: "right",
                                    margin: "clamp(10px, 2vw, 15px) clamp(15px, 5vw, 25px)",
                                }}
                            >
                                CONTACT<br />WITH US
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right Section - Full-Width Image */}
                <div className="col-12 col-md-6 p-0">
                    <img
                        src={followJill}
                        alt="Jill Tupper"
                        className="img-fluid"
                        style={{
                            objectFit: "cover",
                            objectPosition: 'center left',
                            width: 'clamp(100%, 95vw, 1920px)',
                            height: 'clamp(400px, 68vw, 756px)',
                            display: "block",

                        }}
                    />
                </div>
            </div>



        </div>
    );
};

export default FollowJill;
