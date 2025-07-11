import section4img from '../assets/section4img.jpg';
import { FaArrowDown } from 'react-icons/fa';

const LeadershipTraining = () => {
    return (
        <section className="container-fluid text-center py-4 py-md-5 position-relative">
            <div className="container px-0">
                <h2 className="h1 fw-bold">Leadership Training</h2>
                <p className="text-dark fw-bold mt-2">The Neuroscience of Leadership</p>
                <p className="mt-3 mx-auto px-3" style={{ maxWidth: '700px', fontFamily: 'Ano Regular' }}>
                    The Neuroscience of Calming Within The Chaos of Uncertainty & War. True stories & proven tools that work
                    in the battlefield of the mind in the US, as well as, in the war zone of Ukraine!
                </p>

                <div className="mt-4 mt-md-5 position-relative mx-auto" style={{ maxWidth: '1000px' }}>
                    {/* Image with original size */}
                    <div style={{ position: 'relative', display: 'inline-block' }}>
                        <img
                            src={section4img}
                            alt="Leadership"
                            className="rounded"
                            style={{
                                width: '100%',
                                maxWidth: '1000px',
                                height: 'auto'
                            }}
                        />

                        {/* Right-side vertical bar - fixed position relative to image */}
                        <div
                            style={{
                                position: 'absolute',
                                top: '10px',
                                left: '900px',
                                height: '90%',
                                width: '2px',
                                backgroundColor: 'black',
                                borderRadius: '2px',
                            }}
                        ></div>

                        {/* Arrow button - fixed position relative to image */}
                        <div
                            style={{
                                position: 'absolute',
                                // top:'10px',
                                left: '885px',
                                bottom: '0px',
                                background: 'white',
                                borderRadius: '50%',
                                width: '30px',
                                height: '30px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 0 5px rgba(0,0,0,0.2)',
                                cursor: 'pointer',
                            }}
                        >
                            <FaArrowDown size={14} color="#4A306D" />
                        </div>
                    </div>
                </div>

                {/* Learn more button - Matching Speaking Media section */}
                <div className="d-flex justify-content-center mt-4 mt-md-5 position-relative"
                    style={{ width: 'fit-content', margin: '0 auto', paddingLeft: '120px' }}>

                    <div
                        style={{
                            width: '100px',
                            height: '100px',
                            borderRadius: "50%",
                            border: "1px solid rgba(209, 205, 203, 0.2)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "0.75rem",
                            textAlign: "center",
                            lineHeight: 1.2,
                            fontWeight: 600,
                            color: "#2F1744",
                            position: 'relative',
                            boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.1)',
                            backgroundColor: 'white'
                        }}
                    >
                        LEARN MORE<br />ABOUT JILL
                    </div>

                    {/* Arrow Line */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '20px',
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
                            left: '70px',
                            transform: 'translateY(-50%)',
                            width: 0,
                            height: 0,
                            borderTop: '6px solid transparent',
                            borderBottom: '6px solid transparent',
                            borderLeft: '10px solid #2EB6B0'
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default LeadershipTraining;