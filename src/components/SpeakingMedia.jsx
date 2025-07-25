import section2img from '../assets/section2img.png';
import '../components/SpeakingMedia.css'


const SpeakingMedia = () => {
    return (
        <section
            className="position-relative py-2 py-lg-5"
            style={{ backgroundColor: "#FAFAFA", overflow: 'hidden' }}
        >
            {/* Background text */}
            <h1
                className="position-absolute top-25 w-100 fw-bold d-lg-block text-center text-lg-start"
                style={{
                    right: 'clamp(0px, -8px + 2.5vw, 40px)',
                    fontSize: 'clamp(28px, 5.6px + 7vw, 140px)',
                    opacity: 0.07,
                    zIndex: 0,
                    whiteSpace: 'nowrap',
                    paddingTop: 'clamp(25px, 18px + 2.1875vw, 60px)',
                    pointerEvents: 'none',
                    fontFamily: 'Andada Pro',
                }}
            >
                SPEAKING AND MEDIA
            </h1>

            <div className="container-fluid position-relative g-0" style={{ zIndex: 2, marginTop: 'clamp(40px, 27px + 4.0625vw, 105px)', marginBottom: 'clamp(50px, 40px + 3.125vw, 100px)' }}>
                <div className="row align-items-center gx-0 gy-0">
                    {/* Text Section */}
                    <div className="col-12 col-md-6 order-1 order-lg-1 py-md-4 py-0 py-lg-0 d-flex justify-content-center align-items-center">
                        <div
                            className="text-center text-md-start"
                            style={{ maxWidth: '100%', margin: '0px auto', marginTop: 'clamp(65px, 48px + 5.3125vw, 150px)' }}
                        >
                            <p
                                className="mb-2 mt-3 mt-md-5"
                                style={{
                                    fontFamily: 'AnoRegular-Regular',
                                    color: '#1E1E1E',
                                    fontSize: 'clamp(10px, 7.2px + 0.875vw, 24px)',
                                }}
                            >
                                Top Motivational Speaker
                            </p>

                            <h2
                                className="fw-bold mb-4 mb-lg-5"
                                style={{
                                    fontSize: 'clamp(30px, 22px + 2.5vw, 70px)',
                                    color: '#2F1744',
                                    lineHeight: '1.3',

                                }}
                            >
                                “Jill Captivates <br className="d-none d-md-block" /> Audiences!”
                            </h2>

                            {/* Button */}
                            <div className="d-flex justify-content-center justify-content-md-start align-items-center pt-2 pb-5 me-3">
                                <div style={{
                                    width: "clamp(20px, 20px + 0vw, 20px)",
                                    height: "clamp(1.5px, 1.5px + 0vw, 1.5px)",
                                    backgroundColor: "#2EB6B0"
                                }}
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
                                        fontWeight: "500",
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
                                        BOOK JILL<br />RIGHT NOW
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image/Video Section */}
                    <div className="col-12 col-md-6 order-2 order-lg-2 mb-lg-0 d-flex justify-content-center justify-content-lg-start align-items-start">
                        <div className="position-relative">
                            <img
                                className='video-part'
                                src={section2img}
                                alt="Speaker Thumbnail"
                            />

                            <button
                                className="video-play-button position-absolute top-50 start-50 translate-middle btn btn-light rounded-circle shadow d-flex align-items-center justify-content-center"
                                style={{
                                    width: 'clamp(28px, 20.8px + 2.25vw, 64px)',
                                    height: 'clamp(28px, 20.8px + 2.25vw, 64px)',
                                    border: 'none',
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="clamp(12px, 9.6px + 0.75vw, 24px)"
                                    height="clamp(12px, 9.6px + 0.75vw, 24px)"
                                    fill="#2F1744"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M11.596 8.697l-6.363 3.692A.5.5 0 0 1 4 12.036V3.964a.5.5 0 0 1 .777-.424l6.363 3.692a.5.5 0 0 1 0 .848z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SpeakingMedia;