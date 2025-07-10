import React from "react";
import followJill from '../assets/followJill.jpg'

const FollowJill = () => {
    return (
        <div className="d-flex justify-content-center align-items-center flex-wrap">
            {/* Left Section */}
            <div
                className="p-5"
                style={{
                    flex: 1,
                    minWidth: 300,
                    backgroundColor: "#fff",
                }}
            >
                <div style={{margin: '0 150px'}}>
                <h2 style={{ color: "#2F1744", fontWeight: "bold" }}>Follow Jill!</h2>
                <p className="mb-4" style={{ maxWidth: 400 }}>
                    She sends adventurous insights that won’t overload your inbox, but might just challenge you to take inspired action!
                </p>
                <div className="d-flex flex-row gap-5 mb-3" style={{ maxWidth: 550 }}>
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
                </div>
                <div className="d-flex justify-content-end pe-5">
                    <div
                        style={{
                            width: 100,
                            height: 100,
                            borderRadius: "50%",
                            border: "1px solid #ccc",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "0.75rem",
                            textAlign: "center",
                            lineHeight: 1.2,
                            fontWeight: 600,
                            color: "#2F1744",
                        }}
                    >
                        CONTACT<br />WITH US
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div style={{ flex: 1, minWidth: 300 }}>
                <img
                    src={followJill} // Replace with actual image
                alt="Jill Tupper"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
            </div>
        </div>
    );
};

export default FollowJill;
