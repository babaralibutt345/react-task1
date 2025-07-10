import keynoteSection from '../assets/keynoteSection.jpg';
import maskGroup from '../assets/maskGroup.png'; // Import the mask group image
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const KeyNotes = () => {
    return (
        <section className="container-fluid py-2 position-relative">
            {/* Mask Group Overlay */}
            <img
                src={maskGroup}
                alt="Mask decoration"
                style={{
                    position: 'absolute',
                    top: '30%',
                    // right: '50',
                    left:'1px',
                    transform: 'translateY(-50%)',
                    zIndex: -1,
                    opacity: 0.8,
                    maxWidth: '200px'
                }}
            />

            <div className="row align-items-end">
                {/* Left Text Column */}
                <div className="col-md-6 d-flex flex-column " style={{padding:'0px 150px'}}>
                    <div style={{margin:'0 100px'}}>
                    <h2 className="fw-bold text-dark">Key Notes</h2>
                    <h5 className="text-dark mt-3">
                        Ignite Audiences & Transform Lives
                    </h5>
                    <p className="mt-3 text-muted">
                        Jill's high-energy, humor and depth, captivates and challenges audiences to take inspired action and achieve powerful positive change.
                    </p>

                    {/* Circular Button with Extended Arrow */}
                    <div className="mt-4 d-flex justify-content-end">
                        <div style={{ position: 'relative' }}>
                            <div
                                style={{
                                    width: "100px",
                                    height: "100px",
                                    borderRadius: "50%",
                                    border: "1px solid rgba(209, 205, 203, 0.2)",
                                    boxShadow: "0 0 8px rgba(0, 0, 0, 0.1)",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "10px",
                                    fontWeight: "bold",
                                    color: "#2F1744",
                                    position: "relative",
                                    marginRight: "-70px" // Space for arrow
                                }}
                            >
                                BOOK JILL <br /> FOR OUR EVENT
                            </div>
                        </div>
                    </div>

                    {/* Centered Navigation Buttons */}
                    <div className="mt-4 d-flex justify-content-center gap-3">
                        <button className="btn btn-info text-white rounded-circle">
                            <FaChevronLeft />
                        </button>
                        <button className="btn btn-info text-white rounded-circle">
                            <FaChevronRight />
                        </button>
                    </div>
                </div>
                </div>

                {/* Right Image Column */}
                <div className="col-md-6 text-center">
                    <img
                        src={keynoteSection}
                        alt="Key Notes"
                        className="img-fluid"
                        style={{ height: '464px', objectFit: 'cover', width: '1374px' }}
                    />
                </div>
            </div>
        </section>
    );
};

export default KeyNotes;