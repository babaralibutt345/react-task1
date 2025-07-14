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
                    maxWidth: 'clamp(100px, 15vw, 400px)',
                }}
            />

            <div className="container px-0">
                <div className="row align-items-center">
                    {/* Left Text Column */}
                    <div className="col-12 col-lg-6 order-2 order-lg-1 py-5 py-lg-0">
                        <div className="px-3 px-md-5 px-lg-4 px-xl-5" style={{marginLeft: '50px'}}>
                            <h2 className="fw-bold display-5" style={{ color:'#2F1744', fontSize:'50px'}}>Key Notes</h2>
                            <h5 className="text-dark mt-3 h4" style={{fontFamily:'Ano Bold' , fontSize:'20px'}}>
                                Ignite Audiences & Transform Lives
                            </h5>
                            <p className="mt-3" style={{ fontFamily:'AnoRegular-Regular'}}>
                                Jill's high-energy, humor and depth, captivates and challenges audiences to take inspired action and achieve powerful positive change.
                            </p>

                            {/* Book Jill Button */}
                            <div className="mt-3 d-flex align-items-center justify-content-end hero-book-button" style={{  }}>
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
                                    <span style={{ fontFamily: "'Ano Bold', serif", fontSize: '12px', fontStyle: 'normal', textAlign: 'right', margin: '15px 18px' }}>
                                        BOOK JILL<br />FOR OUR EVENT
                                    </span>
                                </div>
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