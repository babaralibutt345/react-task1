import section2img from '../assets/section2img.jpg';

const SpeakingMedia = () => {
    return (
        <section
            className="position-relative py-5 py-lg-5"
            style={{ backgroundColor: "#F8F8F8", overflow: 'hidden' }}
        >
            {/* Background text */}
            <h1
                className="position-absolute top-0 start-0 w-100 text-center text-secondary fw-bold d-none d-lg-block"
                style={{
                    fontSize: 'clamp(4rem, 10vw, 8rem)',
                    opacity: 0.07,
                    zIndex: 0,
                    whiteSpace: 'nowrap',
                    marginTop: '1rem',
                    pointerEvents: 'none',
                    fontFamily: 'Andada Pro',
                }}
            >
                SPEAKING AND MEDIA
            </h1>

            <div className="container position-relative" style={{ zIndex: 2 }}>
                <div className="row align-items-center gx-lg-5">
                    {/* Text Section */}
                    <div className="col-12 col-lg-6 order-1 order-lg-1 py-4 py-lg-0">
                        <div
                            className="ps-lg-4 pe-lg-5 text-center text-lg-start"
                            style={{ maxWidth: '600px', margin: '0 auto' }}
                        >
                            <p
                                className="mb-2 mt-3 mt-md-5"
                                style={{
                                    fontFamily: 'AnoRegular-Regular',
                                    color: '#1E1E1E',
                                    fontSize: 'clamp(14px, 2vw, 16px)',
                                }}
                            >
                                Top Motivational Speaker
                            </p>

                            <h2
                                className="fw-bold mb-4 mb-lg-5"
                                style={{
                                    fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                                    color: '#2F1744',
                                    lineHeight: '1.3',
                                }}
                            >
                                “Jill Captivates <br className="d-none d-md-block" /> Audiences!”
                            </h2>

                            {/* Book Jill Button */}
                            <div className="mt-3 d-flex align-items-center justify-content-center justify-content-lg-start">
                                <div style={{ width: '40px', height: '1.5px', backgroundColor: '#2EB6B0' }} />
                                <div
                                    style={{
                                        width: 135,
                                        height: 135,
                                        borderRadius: '50%',
                                        backgroundColor: '#ffffff',
                                        boxShadow: '0 0 12px rgba(0, 0, 0, 0.05)',
                                        display: 'flex',
                                        alignItems: 'end',
                                        justifyContent: 'end',
                                        textAlign: 'center',
                                        fontSize: '12px',
                                        fontWeight: 600,
                                        color: '#363636',
                                        position: 'relative',
                                    }}
                                >
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
                                    <span
                                        style={{
                                            fontFamily: "'Ano Bold', serif",
                                            fontSize: '12px',
                                            fontStyle: 'normal',
                                            textAlign: 'right',
                                            margin: '15px 25px',
                                        }}
                                    >
                                        BOOK JILL<br />RIGHT NOW
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image/Video Section */}
                    <div className="col-12 col-lg-6 order-2 order-lg-2 mb-4 mb-lg-0">
                        <div
                            className="position-relative mx-auto"
                            style={{
                                maxWidth: '100%',
                                width: '100%',
                                paddingBottom: 'min(100%, 500px)',
                            }}
                        >
                            <img
                                src={section2img}
                                alt="Speaker Thumbnail"
                                className="position-absolute w-100 h-100"
                                style={{
                                    objectFit: 'cover',
                                    borderRadius: '4px',
                                }}
                            />
                            <button
                                className="position-absolute top-50 start-50 translate-middle btn btn-light rounded-circle shadow d-flex align-items-center justify-content-center"
                                style={{
                                    width: 'clamp(48px, 8vw, 64px)',
                                    height: 'clamp(48px, 8vw, 64px)',
                                    border: 'none',
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
