import keynoteSection from '../assets/keynoteSection.jpg';
import maskGroup from '../assets/maskGroup.png';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const KeyNotes = () => {
    return (
        <section className="container-fluid py-4 py-md-5 position-relative overflow-hidden">
            {/* Mask Group Overlay - Responsive */}
            <img
                src={maskGroup}
                alt="Mask decoration"
                className="d-none d-lg-block"
                style={{
                    position: 'absolute',
                    top: '30%',
                    left: '0',
                    transform: 'translateY(-50%)',
                    zIndex: 0,
                    opacity: 0.8,
                    maxWidth: 'clamp(100px, 15vw, 200px)'
                }}
            />

            <div className="container px-0">
                <div className="row align-items-center">
                    {/* Left Text Column */}
                    <div className="col-12 col-lg-6 order-2 order-lg-1 py-4 py-lg-0">
                        <div className="px-3 px-md-5 px-lg-4 px-xl-5">
                            <h2 className="fw-bold text-dark display-5">Key Notes</h2>
                            <h5 className="text-dark mt-3 h4">
                                Ignite Audiences & Transform Lives
                            </h5>
                            <p className="mt-3 text-muted lead">
                                Jill's high-energy, humor and depth, captivates and challenges audiences to take inspired action and achieve powerful positive change.
                            </p>

                            {/* Circular Button with Extended Arrow - Matching Previous Section */}
                            <div className="mt-4 mt-md-5 position-relative" style={{ width: 'fit-content', marginLeft: 'auto' }}>
                                <div
                                    className="d-flex align-items-center justify-content-center text-center"
                                    style={{
                                        width: 'clamp(70px, 10vw, 100px)',
                                        height: 'clamp(70px, 10vw, 100px)',
                                        borderRadius: "50%",
                                        border: "1px solid rgba(209, 205, 203, 0.2)",
                                        fontSize: "clamp(0.6rem, 1.5vw, 0.75rem)",
                                        fontWeight: 600,
                                        color: "#2F1744",
                                        boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.1)',
                                        backgroundColor: 'white',
                                        cursor: 'pointer',
                                        marginLeft: '32px' // For arrow space
                                    }}
                                >
                                    <span>BOOK JILL<br />FOR OUR EVENT</span>
                                </div>
                                {/* Arrow Line */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '0',
                                        transform: 'translateY(-50%)',
                                        width: 'clamp(30px, 5vw, 50px)',
                                        height: '1.5px',
                                        backgroundColor: '#2F1744',
                                    }}
                                />
                                {/* Arrow Head */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: 'clamp(30px, 5vw, 50px)',
                                        transform: 'translateY(-50%)',
                                        width: 0,
                                        height: 0,
                                        borderTop: '6px solid transparent',
                                        borderBottom: '6px solid transparent',
                                        borderLeft: '10px solid #2F1744'
                                    }}
                                />
                            </div>

                            {/* Centered Navigation Buttons */}
                            <div className="mt-4 d-flex justify-content-center gap-3">
                                <button className="btn btn-info text-white rounded-circle p-3">
                                    <FaChevronLeft />
                                </button>
                                <button className="btn btn-info text-white rounded-circle p-3">
                                    <FaChevronRight />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Image Column */}
                    <div className="col-12 col-lg-6 order-1 order-lg-2 mb-4 mb-lg-0">
                        <div className="position-relative" style={{ paddingBottom: '75%', overflow: 'hidden' }}>
                            <img
                                src={keynoteSection}
                                alt="Key Notes"
                                className="position-absolute w-100 h-100"
                                style={{
                                    objectFit: 'cover',
                                    objectPosition: 'center'
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