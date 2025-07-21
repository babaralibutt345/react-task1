import React from "react";
import { Card } from "react-bootstrap";
import active from '../assets/active.png';
import blur from '../assets/blur.png';

const PillarsSection = () => {
    return (
        <div className="container-fluid" style={{ backgroundColor:"#FAFAFA"}}>
            <div className="row align-items-center px-xs-5">
                {/* Left Column */}
                <div className="col-6 d-flex justify-content-md-end justify-content-start px-xs-5 p-md-5">
                    <div className="d-flex flex-column align-items-start gap-md-3 gap-xxl-4 py-5 px-xs-5 px-md-5">
                        {/* Body */}
                        <div className="d-flex align-items-center gap-3">
                            <img src={active} className="img-fluid" alt=""
                            style={{
                                width:'clamp(30px, 5vw, 70px)',
                                height:'clamp(30px, 5vw, 70px)',
                            }}
                            />
                            <h3
                                style={{
                                    color: "#2F1744",
                                    margin: 0,
                                    fontFamily: "Andada Pro",
                                    fontWeight: "bolder",
                                    fontSize: "clamp(22px, 3vw, 70px)",
                                    textDecoration: "underline",
                                    // textUnderlineOffset: "18px",
                                    textAlign: "start",
                                }}
                            >
                                Body
                            </h3>
                        </div>

                        {/* Mind */}
                        <div className="d-flex align-items-center gap-3">
                            
                            <img src={blur} className="img-fluid" alt="" 
                                style={{
                                    width: 'clamp(30px, 5vw, 70px)',
                                    height: 'clamp(30px, 5vw, 70px)',
                                }}
                            />
                            <h3
                                style={{
                                    color: "#C1BFD1",
                                    margin: 0,
                                    fontFamily: "Andada Pro",
                                    fontWeight: "bolder",
                                    fontSize: "clamp(22px, 3vw, 70px)",
                                    textAlign: "start",
                                }}
                            >
                                Mind
                            </h3>
                        </div>

                        {/* Business */}
                        <div className="d-flex align-items-center gap-3">
                            <img src={blur} className="img-fluid" alt="" 
                                style={{
                                    width: 'clamp(30px, 5vw, 70px)',
                                    height: 'clamp(30px, 5vw, 70px)',
                                }}
                            />

                            <h3
                                style={{
                                    color: "#C1BFD1",
                                    margin: 0,
                                    fontFamily: "Andada Pro",
                                    fontWeight: "bolder",
                                    fontSize: "clamp(22px, 3vw, 70px)",
                                    textAlign: "start",
                                }}
                            >
                                Business
                            </h3>
                        </div>
                    </div>
                </div>

                {/* Right Card */}
                <div className="col-6 d-flex justify-content-xs-start justify-content-md-start">
                    <Card
                        style={{
                            backgroundColor: "#2EB6B0",
                            width: "100%",
                            maxWidth: "clamp(150px, 50vw, 426px)",
                            paddingTop: "clamp(20px, 5vw, 90px)",         // ↓ less top padding on xs
                            paddingBottom: "clamp(20px, 5vw, 90px)",      // ↓ less bottom padding
                            paddingLeft: "clamp(10px, 3vw, 20px)",         // ↓ less left
                            paddingRight: "clamp(10px, 3vw, 20px)",        // ↓ less right
                            color: "white",
                            border: "none",
                            fontFamily: "AnoRegular-Regular",
                            fontSize: "clamp(8px, 2vw, 24px)",
                            textAlign: "left",
                            borderRadius: "5px",
                            margin:'0',

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
