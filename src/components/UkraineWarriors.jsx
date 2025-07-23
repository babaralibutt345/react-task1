import ukrainesection from '../assets/ukrainesection.png';

const UkraineWarriors = () => {
    return (
        <section className="container-fluid position-relative bg-light">
            {/* Background Watermark Heading */}
            <div
                className="position-absolute top-25  w-100 fw-bold d-lg-block text-center text-lg-start"
                style={{
                    top: '6%',
                    // left: '0',
                    // right: '34%',
                    zIndex: 0,
                    opacity: 0.07,
                    whiteSpace: 'nowrap',
                    pointerEvents: 'none',
                }}
            >
                <h1
                    className="fw-bold"
                    style={{
                        fontSize: 'clamp(28px, 5.6px + 7vw, 140px)',
                        whiteSpace: 'nowrap',
                    }}
                >
                    POWERED BY LOVE
                </h1>
            </div>

            {/* Foreground Content */}
            <div className="container-fluid position-relative" style={{ zIndex: 1, padding: 'clamp(50px, 38px + 3.75vw, 110px) 0' }}>

                <div className="row d-flex align-items-center justify-content-center">

                    {/* Text Content */}
                    <div className="col-12 col-sm-6 d-flex justify-content-md-start justify-content-center justify-content-md-end align-items-lg-center gx-0">
                        <div style={{ maxWidth: 'clamp(200px, 102px + 30.625vw, 690px)', width: '100%', paddingLeft: 'clamp(25px, 18px + 2.1875vw, 40px)', paddingTop: 'clamp(65px, 48px + 5.3125vw, 150px)' }}>
                            <h2
                                className="fw-bold"
                                style={{
                                    fontSize: 'clamp(25px, 16px + 2.8125vw, 70px)',
                                    fontFamily: 'Andada Pro',
                                    letterSpacing: '-3px'
                                }}
                            >
                                Ukraine Warriors
                            </h2>

                            <p
                                className="mt-5"
                                style={{
                                    fontFamily: 'Ano Bold',
                                    fontSize: 'clamp(15px, 13.2px + 0.5625vw, 24px)',
                                }}
                            >
                                Powered by Love
                            </p>

                            <p
                                style={{
                                    fontFamily: 'AnoRegular-Regular',
                                    fontSize: 'clamp(12px, 10.4px + 0.5vw, 20px)',
                                    marginBottom: '2rem',
                                    paddingRight: 'clamp(2.5rem, 2rem + 2.5vw, 5rem)'
                                }}
                            >
                                Practical Training in the Neuro-Science of Release from Trauma amidst Crisis
                            </p>

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
                                        fontWeight: 500,
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
                                            width: "clamp(20px, 20px + 0vw, 20px)   ",
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

                    {/* Image */}
                    <div className="col-12 col-sm-6 d-flex justify-content-md-start justify-content-end justify-content-center gx-0">

                        <img
                            src={ukrainesection}
                            className='img-fluid'
                            alt="Ukraine Warriors"
                            style={{
                                width: 'clamp(14.5rem, 7.425rem + 25.375vw, 37.875rem)',
                                height: 'clamp(12.5rem, 6.2625rem + 31.1875vw, 43.6875rem)',
                                objectFit: 'cover',
                            
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UkraineWarriors;
