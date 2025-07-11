import section2img from '../assets/section2img.jpg';

const SpeakingMedia = () => {
    return (
        <section className="position-relative py-4 py-lg-5" style={{ backgroundColor: "#F8F8F8", overflow: 'hidden' }}>
            {/* Background text */}
            <h1 className="position-absolute top-0 start-0 w-100 text-center text-secondary fw-bold d-none d-lg-block"
                style={{
                    fontSize: 'clamp(4rem, 10vw, 8rem)',
                    opacity: 0.07,
                    zIndex: 0,
                    whiteSpace: 'nowrap',
                    marginTop: '3rem',
                    pointerEvents: 'none'
                }}>
                SPEAKING AND MEDIA
            </h1>

            <div className="container position-relative" style={{ zIndex: 2 }}>
                <div className="row align-items-center gx-lg-5">
                    {/* Text Section */}
                    <div className="col-12 col-lg-6 order-2 order-lg-1 py-4 py-lg-0">
                        <div className="ps-lg-4 pe-lg-5" style={{ maxWidth: '600px', margin: '0 auto' }}>
                            <p className="text-muted mb-2 mb-lg-3">Top Motivational Speaker</p>
                            <h2 className="fw-bold mb-4 mb-lg-5" style={{
                                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                                color: '#2F1744',
                                lineHeight: '1.3'
                            }}>
                                “Jill Captivates <br className="d-none d-md-block" /> Audiences!”
                            </h2>

                            {/* Your Original Button - Preserved Exactly */}
                            <div className="mt-4 mt-md-5 position-relative">
                                <div
                                    style={{
                                        width: 'clamp(70px, 10vw, 100px)',
                                        height: 'clamp(70px, 10vw, 100px)',
                                        borderRadius: "50%",
                                        border: "1px solid rgba(209, 205, 203, 0.2)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "clamp(0.6rem, 1.5vw, 0.75rem)",
                                        textAlign: "center",
                                        lineHeight: 1.2,
                                        fontWeight: 600,
                                        color: "#2F1744",
                                        position: "relative",
                                        boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.1)',
                                        backgroundColor: 'white',
                                        marginLeft: '32px' // Added to compensate for the arrow
                                    }}
                                >
                                    <span>BOOK JILL<br />RIGHT NOW</span>
                                </div>

                                {/* Arrow Line - Preserved */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '0',
                                        transform: 'translateY(-50%)',
                                        width: '50px',
                                        height: '1.5px',
                                        backgroundColor: '#2F1744',
                                    }}
                                />

                                {/* Arrow Head - Preserved */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50px',
                                        transform: 'translateY(-50%)',
                                        width: 0,
                                        height: 0,
                                        borderTop: '6px solid transparent',
                                        borderBottom: '6px solid transparent',
                                        borderLeft: '10px solid #2F1744'
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Image/Video Section */}
                    <div className="col-12 col-lg-6 order-1 order-lg-2 mb-4 mb-lg-0">
                        <div className="position-relative mx-auto" style={{
                            maxWidth: '100%',
                            width: '100%',
                            paddingBottom: 'min(100%, 500px)'
                        }}>
                            <img
                                src={section2img}
                                alt="Speaker Thumbnail"
                                className="position-absolute w-100 h-100"
                                style={{
                                    objectFit: 'cover',
                                    borderRadius: '4px'
                                }}
                            />
                            <button
                                className="position-absolute top-50 start-50 translate-middle btn btn-light rounded-circle shadow d-flex align-items-center justify-content-center"
                                style={{
                                    width: 'clamp(48px, 8vw, 64px)',
                                    height: 'clamp(48px, 8vw, 64px)',
                                    border: 'none'
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="clamp(16px, 3vw, 24px)"
                                    height="clamp(16px, 3vw, 24px)"
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