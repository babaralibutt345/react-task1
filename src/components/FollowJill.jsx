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
                    <p className="mb-4" style={{ maxWidth: 400, fontFamily:'AnoRegular-Regular' }}>
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
                {/* Book Jill Button */}
                <div className="mt-5 d-flex align-items-center justify-content-end hero-book-button">
                    <div style={{ width: '40px', height: '1.5px', backgroundColor: '#2EB6B0' }} />
                    <div style={{
                        width: 135,
                        height: 135,
                        borderRadius: '50%',
                        backgroundColor: '#ffffff',
                        boxShadow: '0 0 100px rgba(0, 0, 0, 0.08)',
                        display: 'flex',
                        alignItems: 'end',
                        justifyContent: 'end',
                        textAlign: 'center',
                        fontSize: '12px',
                        fontWeight: 600,
                        color: '#363636',
                        position: 'relative',

                    }}>
                        {/* Arrow Line - Preserved */}
                        <div
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '0',
                                transform: 'translateY(-50%)',
                                width: '20px',
                                height: '1.5px',
                                backgroundColor: '#2EB6B0',
                            }}
                        />

                        {/* Arrow Head - Preserved */}
                        <div
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '20px',
                                transform: 'translateY(-50%)',
                                width: 0,
                                height: 0,
                                borderTop: '6px solid transparent',
                                borderBottom: '6px solid transparent',
                                borderLeft: '10px solid #2EB6B0',

                            }}
                        />
                        <span style={{ fontFamily: "'Ano Bold', serif", fontSize: '12px', fontStyle: 'normal', textAlign: 'right', margin: '15px 25px' }}>
                            CONTACT<br />WITH US
                        </span>
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
