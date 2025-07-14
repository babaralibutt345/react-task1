import section4img from '../assets/section4img.jpg';
import { FaArrowDown } from 'react-icons/fa';

const LeadershipTraining = () => {
    return (
        <section className="container-fluid text-center py-4 py-md-5 position-relative">
            <div className="container px-0">
                <h2 className="h1 fw-bold">Leadership Training</h2>
                <p className="fw-bold mt-2" style={{fontFamily:'Ano Bold'}}>The Neuroscience of Leadership</p>
                <p className="mt-3 mx-auto px-3" style={{ maxWidth: '850px', fontFamily: 'AnoRegular-Regular', fontSize:'14px' }}>
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

                {/* Book Jill Button */}
                <div className="mt-5 d-flex align-items-center justify-content-start hero-book-button" style={{ marginLeft: '500px' }}>
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
                        <span style={{ fontFamily: "'Ano Bold', serif", fontSize: '12px', fontStyle: 'normal', textAlign: 'right', margin: '15px 25px' }}>
                            LEARN MORE<br />ABOUT JILL
                        </span>
                    </div>
                </div>
            </div>
           
        </section>
    );
};

export default LeadershipTraining;