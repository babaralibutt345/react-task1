import keynoteSection from '../assets/keynoteSection.png';
import maskGroup from '../assets/maskGroup.png';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import arrowleft from '../assets/arrowleft.png';
import arrowright from '../assets/arrowright.png';
import '../components/KeyNotes.css';

const KeyNotes = () => {
    return (
        <section className="container-fluid position-relative overflow-hidden g-0"
        style={{
            backgroundColor: "#FAFAFA"
        }}
        >
            {/* Mask Group Overlay - Keep It Intact */}
            <img
                src={maskGroup}
                alt="Mask decoration"
                className="d-lg-block"
                style={{
                    position: 'absolute',
                    top: '41%',
                    left: '0%',
                    transform: 'translateY(-46%)',
                    zIndex: 0,
                    opacity: 1,
                    // width: 'clamp(150px, 15vw, 400px)',      // ✅ set width explicitly
                    width:'clamp(170px, 124.2px + 14.3125vw, 399px)',
                    height: 'clamp(200px, 106.6px + 29.1875vw, 667px)',     // ✅ set height explicitly                  // optional for scaling properly
                }}
            />

            <div className="container-fluid">
                <div className="row align-items-center justify-content-center">
                    {/* Left Column - Text */}
                    <div className="col-12 col-md-6 order-1 order-lg-1 d-flex align-items-center justify-content-lg-center">
                        <div
                            className="px-3 px-md-5 px-lg-5 py-5 responsive-margin"
                            style={{
                                // marginLeft: window.innerWidth >= 992
                                //     ? 'clamp(130px, 102px + 8.75vw, 270px)' // lg and up
                                //     : '0px', // xs, sm, md
                                marginTop: '70px',
                                zIndex: 1,
                                width: 'clamp(200px, 110px + 28.125vw, 650px)', 
                                position: 'relative'
                            }}
                        >
                            <h2
                                className="fw-bold"
                                style={{
                                    color: '#2F1744',
                                    fontSize: 'clamp(25px, 16px + 2.8125vw, 70px)'
                                }}
                            >
                                Key Notes
                            </h2>

                            <h5
                                className="text-dark mt-3 mt-lg-5"
                                style={{
                                    fontFamily: 'Ano Bold',
                                    fontSize: 'clamp(12px, 9.6px + 0.75vw, 24px)'
                                }}
                            >
                                Ignite Audiences & Transform Lives
                            </h5>

                            <p
                                className="mt-3"
                                style={{
                                    fontFamily: 'AnoRegular-Regular',
                                    fontSize: 'clamp(9px, 6.8px + 0.6875vw, 20px)'
                                }}
                            >
                                Jill's high-energy, humor and depth, captivates and challenges audiences to take inspired action and achieve powerful positive change.
                            </p>

                            {/* Button */}
                            <div className="d-flex justify-content-center justify-content-md-end align-items-center pt-2 pb-lg-5 me-3">
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
                                        justifyContent: "end",
                                        textAlign: "start",
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
                                        BOOK JILL<br />FOR OUR EVENT
                                    </span>
                                </div>
                            </div>  

                            {/* Navigation Buttons */}
                            <div className="d-flex justify-content-lg-start justify-content-center gap-2 pt-4">
                                <img src={arrowleft} className='img-fluid' style={{ width: 'clamp(30px, 18.8px + 3.5vw, 86px)', height:'clamp(30px, 18.8px + 3.5vw, 86px)'}} alt="" />
                                <img src={arrowright} className='img-fluid' style={{ width: 'clamp(30px, 18.8px + 3.5vw, 86px)', height:'clamp(30px, 18.8px + 3.5vw, 86px)'}} alt="" />
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Image */}
                    <div className="col-12 col-md-6 order-2 order-lg-2 p-0"> {/* p-0 added */}
                        <div
                            style={{ minHeight: 'clamp(200px, 120px + 25vw, 600px)' }}
                        >
                            <img
                                src={keynoteSection}
                                alt="Key Notes"
                                className="img-fluid"
                                style={{
                                    width: '100%', // full width
                                    height: 'clamp(200px, 67.2px + 41.5vw, 864px)',
                                    objectFit: 'cover',
                                    objectPosition: 'right', // optional
                                    display: 'block', // removes inline gap
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KeyNotes;
