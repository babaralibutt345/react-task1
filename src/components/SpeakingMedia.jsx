import section2img from '../assets/section2img.jpg';

const SpeakingMedia = () => {
    return (
        <section className="position-relative py-3 py-md-5" style={{ backgroundColor: "#F8F8F8" }}>
            {/* Background text - responsive font size */}
            <h1 className="position-absolute top-25 start-0 end-100 right-100 translate-middle text-secondary fw-bold d-none d-md-block"
                style={{
                    fontSize: 'clamp(60px, 8vw, 100px)',
                    opacity: 0.07,
                    zIndex: 0,
                    whiteSpace: 'nowrap',
                    marginTop: '50px'
                }}>
                SPEAKING AND MEDIA
            </h1>

            <div className="container position-relative" style={{ zIndex: 2 }}>
                <div className="row align-items-center">
                    {/* Text Section - responsive padding and text alignment */}
                    <div className="col-12 col-md-6 d-flex flex-column justify-content-start align-items-start px-4 px-md-5 py-5 py-md-0"
                        style={{ paddingLeft: 'clamp(1rem, 8vw, 150px)', paddingRight: 'clamp(1rem, 8vw, 150px)' }}>
                        <p className="text-muted mb-2">Top Motivational Speaker</p>
                        <h2 className="fw-bold text-dark" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#2F1744' }}>
                            “Jill Captivates <br className="d-none d-md-block" /> Audiences!”
                        </h2>

                        {/* Circular Button - responsive sizing */}
                        <div className="mt-4 mt-md-5">
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
                                    boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.1)'
                                }}
                            >
                                <span>BOOK JILL<br />RIGHT NOW</span>
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '-32px',
                                        transform: 'translateY(-50%)',
                                        width: '50px',
                                        backgroundColor: '#2F1744',
                                        border: '1.5px solid #2EB6B0'
                                    }}
                                />

                                {/* Arrow Head */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '20px',
                                        transform: 'translate(-100%, -50%)',
                                        width: 0,
                                        height: 0,
                                        borderTop: '6px solid transparent',
                                        borderBottom: '6px solid transparent',
                                        borderLeft: '10px solid #2EB6B0'
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Video Section with overlay - responsive sizing */}
                    <div className="col-12 col-md-6 mt-4 mt-md-0">
                        <div className="position-relative mx-auto" style={{ maxWidth: '100%', width: 'clamp(300px, 90vw, 400px)' }}>
                            <img
                                src={section2img}
                                alt="Speaker Thumbnail"
                                className="img-fluid w-100"
                                style={{ height: 'clamp(350px, 60vh, 500px)', objectFit: 'cover' }}
                            />
                            <div className="position-absolute top-50 start-50 translate-middle">
                                <button className="btn btn-light rounded-circle shadow"
                                    style={{ width: 'clamp(48px, 8vw, 64px)', height: 'clamp(48px, 8vw, 64px)' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="clamp(24px, 4vw, 32px)" height="clamp(24px, 4vw, 32px)" fill="#2F1744" className="bi bi-play-fill" viewBox="0 0 16 16">
                                        <path d="M11.596 8.697l-6.363 3.692A.5.5 0 0 1 4 12.036V3.964a.5.5 0 0 1 .777-.424l6.363 3.692a.5.5 0 0 1 0 .848z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpeakingMedia;