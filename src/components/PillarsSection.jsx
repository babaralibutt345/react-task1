import React from "react";
import { Card } from "react-bootstrap";

const PillarsSection = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center flex-wrap py-5">
            {/* Left Column */}
            <div className="d-flex flex-column gap-4">
                <div className="d-flex align-items-center gap-3">
                    <span
                        style={{
                            width: 20,
                            height: 20,
                            backgroundColor: "#22C7B8",
                            borderRadius: "50%",
                        }}
                    ></span>
                    <h3 style={{ color: "#2F1744", margin: 0, textDecoration:'underline' }}>Body</h3>
                </div>
                <div className="d-flex align-items-center gap-3">
                    <span
                        style={{
                            width: 20,
                            height: 20,
                            backgroundColor: "#AAD4D2",
                            borderRadius: "50%",
                        }}
                    ></span>
                    <h3 style={{ color: "#C1BFD1", margin: 0 }}>Mind</h3>
                </div>
                <div className="d-flex align-items-center gap-3">
                    <span
                        style={{
                            width: 20,
                            height: 20,
                            backgroundColor: "#B5E8E2",
                            borderRadius: "50%",
                        }}
                    ></span>
                    <h3 style={{ color: "#C1DCD9", margin: 0 }}>Business</h3>
                </div>
            </div>

            {/* Right Card */}
            <Card
                style={{
                    backgroundColor: "#22C7B8",
                    width: "250px",
                    padding: "10px",
                    color: "white",
                    border: "none",
                    marginLeft:'200px'
                }}
            >
                <Card.Body>
                    Keeping the body vibrant and healthy is the cornerstone to leading at
                    peak performance.
                </Card.Body>
            </Card>
        </div>
    );
};

export default PillarsSection;
