import React from "react";
import followJill from "../assets/followJill.jpg";

const FollowJill = () => {
    return (
        <div className="container-fluid px-0">
            <div className="d-flex flex-column-reverse flex-md-row align-items-stretch">

                {/* Left Section - Text */}
                <div className="col-12 col-md-6 d-flex align-items-center justify-content-center p-4">
                    <div style={{ width: "100%", maxWidth: "600px" }}>
                        <h2
                            style={{
                                color: "#2F1744",
                                fontWeight: "bold",
                                textAlign: "left",
                                fontSize: "clamp(32px, 5vw, 50px)",
                            }}
                        >
                            Follow Jill!
                        </h2>
                        <p
                            className="mb-4"
                            style={{
                                fontFamily: "AnoRegular-Regular",
                                fontSize: "clamp(14px, 2vw, 18px)",
                            }}
                        >
                            She sends adventurous insights that won’t overload your inbox, but might
                            just challenge you to take inspired action!
                        </p>

                        <div className="d-flex flex-column flex-sm-row gap-4 mb-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="form-control border-0 border-bottom rounded-0"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="form-control border-0 border-bottom rounded-0"
                            />
                        </div>

                        {/* Button */}
                        <div className="d-flex justify-content-center justify-content-md-end align-items-center mt-4">
                            <div style={{ width: "40px", height: "1.5px", backgroundColor: "#2EB6B0" }} />
                            <div
                                style={{
                                    width: 135,
                                    height: 135,
                                    borderRadius: "50%",
                                    backgroundColor: "#ffffff",
                                    boxShadow: "0 0 100px rgba(0, 0, 0, 0.08)",
                                    display: "flex",
                                    alignItems: "end",
                                    justifyContent: "end",
                                    textAlign: "center",
                                    fontSize: "12px",
                                    fontWeight: 600,
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
                                        width: "20px",
                                        height: "1.5px",
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
                                        fontSize: "12px",
                                        fontStyle: "normal",
                                        textAlign: "right",
                                        margin: "15px 25px",
                                    }}
                                >
                                    CONTACT<br />WITH US
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section - Full-Width Image */}
                <div className="col-12 col-md-6 p-0">
                    <img
                        src={followJill}
                        alt="Jill Tupper"
                        className="img-fluid w-100"
                        style={{
                            objectFit: "cover",
                            height: "100%",
                            maxHeight: "756px",
                            display: "block",
                            marginLeft:'10px'
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default FollowJill;
