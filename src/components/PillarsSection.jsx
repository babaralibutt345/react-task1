import React from "react";
import { Card } from "react-bootstrap";

const PillarsSection = () => {
    return (
        <div className="container-fluid p-5" style={{ backgroundColor:"#FAFAFA"}}>
            <div className="row align-items-center gy-4">
                {/* Left Column */}
                <div className="col-12 col-md-6 d-flex justify-content-md-end justify-content-center p-5">
                    <div className="d-flex flex-column align-items-start gap-4">
                        {/* Body */}
                        <div className="d-flex align-items-center gap-3">
                            <span
                                style={{
                                    width: 27,
                                    height: 27,
                                    backgroundColor: "#22C7B8",
                                    borderRadius: "50%",
                                }}
                            ></span>
                            <h3
                                style={{
                                    color: "#2F1744",
                                    margin: 0,
                                    fontFamily: "Andada Pro",
                                    fontWeight: "bolder",
                                    fontSize: "clamp(22px, 3vw, 32px)",
                                    textDecoration: "underline",
                                    textUnderlineOffset: "8px",
                                    textAlign: "start",
                                }}
                            >
                                Body
                            </h3>
                        </div>

                        {/* Mind */}
                        <div className="d-flex align-items-center gap-3">
                            <span
                                style={{
                                    width: 27,
                                    height: 27,
                                    backgroundColor: "#AAD4D2",
                                    borderRadius: "50%",
                                }}
                            ></span>
                            <h3
                                style={{
                                    color: "#C1BFD1",
                                    margin: 0,
                                    fontFamily: "Andada Pro",
                                    fontWeight: "bolder",
                                    fontSize: "clamp(22px, 3vw, 32px)",
                                    textAlign: "start",
                                }}
                            >
                                Mind
                            </h3>
                        </div>

                        {/* Business */}
                        <div className="d-flex align-items-center gap-3">
                            <span
                                style={{
                                    width: 27,
                                    height: 27,
                                    backgroundColor: "#B5E8E2",
                                    borderRadius: "50%",
                                }}
                            ></span>
                            <h3
                                style={{
                                    color: "#C1DCD9",
                                    margin: 0,
                                    fontFamily: "Andada Pro",
                                    fontWeight: "bolder",
                                    fontSize: "clamp(22px, 3vw, 32px)",
                                    textAlign: "start",
                                }}
                            >
                                Business
                            </h3>
                        </div>
                    </div>
                </div>

                {/* Right Card */}
                <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-start">
                    <Card
                        style={{
                            backgroundColor: "#2EB6B0",
                            width: "100%",
                            maxWidth: "320px",
                            padding: "40px 20px",
                            color: "white",
                            border: "none",
                            fontFamily: "AnoRegular-Regular",
                            fontSize: "clamp(12px, 2vw, 16px)",
                            textAlign: "left",
                            borderRadius: "0",
                            margin:'0'
                        }}
                    >
                        <Card.Body>
                            Keeping the body vibrant and healthy is the cornerstone to leading at
                            peak performance.
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default PillarsSection;
