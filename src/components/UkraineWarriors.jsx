import ukrainesection from '../assets/ukrainesection.jpg';

const UkraineWarriors = () => {
    return (
        <section className="container-fluid position-relative py-5 bg-light overflow-hidden">
            {/* Background Watermark Heading */}
            <div
                className="position-absolute"
                style={{
                    top: '0',
                    left: '0',
                    zIndex: 0,
                    opacity: 0.05,
                    padding: '0 clamp(1rem, 5vw, 4rem)',
                }}
            >
                <h1
                    className="fw-bold text-secondary"
                    style={{
                        fontSize: 'clamp(40px, 9vw, 105px)',
                        whiteSpace: 'nowrap',
                    }}
                >
                    POWERED BY LOVE
                </h1>
            </div>

            {/* Foreground Content */}
            <div className="container position-relative" style={{ zIndex: 1 }}>
                <div className="row align-items-center gx-5 gy-5">
                    {/* Text Content */}
                    <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-start justify-content-center">
                        <div style={{ maxWidth: '600px', width: '100%' }}>
                            <h2
                                className="fw-bold"
                                style={{
                                    fontSize: 'clamp(28px, 4vw, 40px)',
                                    fontFamily: 'Andada Pro',
                                }}
                            >
                                Ukraine Warriors
                            </h2>

                            <p
                                className="mt-3"
                                style={{
                                    fontFamily: 'Ano Bold',
                                    fontSize: 'clamp(14px, 2vw, 18px)',
                                }}
                            >
                                Powered by Love
                            </p>

                            <p
                                style={{
                                    fontFamily: 'AnoRegular-Regular',
                                    fontSize: 'clamp(13px, 2vw, 16px)',
                                    marginBottom: '2rem',
                                }}
                            >
                                Practical Training in the Neuro-Science of Release from Trauma amidst Crisis
                            </p>

                            {/* Book Jill Button */}
                            <div className="d-flex align-items-center justify-content-start mt-4">
                                <div
                                    style={{
                                        width: '40px',
                                        height: '1.5px',
                                        backgroundColor: '#2EB6B0',
                                    }}
                                />
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
                                    {/* Arrow Line */}
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
                                    {/* Arrow Head */}
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

                    {/* Image */}
                    <div className="col-12 col-md-6 d-flex justify-content-center">
                        <div
                            style={{
                                width: '100%',
                                maxWidth: '500px',
                                aspectRatio: '3 / 4',
                                overflow: 'hidden',
                                borderRadius: '12px',
                                boxShadow: '0 0 40px rgba(0, 0, 0, 0.08)',
                            }}
                        >
                            <img
                                src={ukrainesection}
                                alt="Ukraine Warriors"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UkraineWarriors;
