import section4img from '../assets/section4img.jpg';
import { FaArrowDown } from 'react-icons/fa';
import '../components/LeadershipTraining.css';

const LeadershipTraining = () => {
    return (
        <section className="container-fluid text-center py-4 py-md-5 position-relative">
            <div className="container-fluid">
                <h2 className="h1 fw-bold" style={{ color: '#2F1744', fontSize: 'clamp(27px, 18.4px + 2.6875vw, 70px)'}}>Leadership Training</h2>
                <p className="fw-bold mt-2" style={{ fontFamily: 'Ano Bold', fontSize:'clamp(12px, 9.6px + 0.75vw, 24px)'}}>The Neuroscience of Leadership</p>
                <p className="mt-3 mx-auto px-3" style={{ maxWidth: '60%', fontFamily: 'AnoRegular-Regular', fontSize: 'clamp(6px, 3.6px + 0.75vw, 18px)', color:'#1E1E1E'}}>
                    The Neuroscience of Calming Within The Chaos of Uncertainty & War. True stories & proven tools that work
                    in the battlefield of the mind in the US, as well as, in the war zone of Ukraine!
                </p>

                <div className="mt-4 mt-md-5 position-relative" style={{ maxWidth: '100%' }}>
                    {/* Image with original size */}
                    <div style={{ position: 'relative', display: 'inline-block' }}>
                        <img
                            src={section4img}
                            alt="Leadership"
                            className="img-fluid rounded"
                            style={{
                                width: 'clamp(200px, -44px + 76.25vw, 1420px)',
                                height: 'clamp(200px, 86.8px + 35.375vw, 766px)',
                                objectFit:'cover'
                            }}
                        />

                        {/* Right-side vertical bar - fixed position relative to image */}
                        <div className='right-vertical-bar'
                            style={{
                                position: 'absolute',
                                top: '0',
                                left: 'clamp(220px, -30px + 78.125vw, 1470px)',
                                height: '90%',
                                width: '2px',
                                backgroundColor: 'black',
                                borderRadius: '2px',
                            }}
                        ></div>

                        {/* Arrow button - fixed position relative to image */}
                        <div className=''
                            style={{
                                position: 'absolute',
                                // top:'0px',
                                left: 'clamp(200px, -50px + 78.125vw, 1450px)',
                                bottom: '0px',
                                background: 'white',
                                borderRadius: '50%',
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 0 5px rgba(0,0,0,0.2)',
                                cursor: 'pointer',
                            }}
                        >
                            <FaArrowDown size={16} color="black" />
                        </div>
                    </div>
                </div>

                {/* Button */}
                <div className="d-flex justify-content-center justify-content-md-center align-items-center pt-3 pt-lg-5 me-3">
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
                            LEARN MORE<br />ABOUT JILL
                        </span>
                    </div>
                </div>
            </div>
           
        </section>
    );
};

export default LeadershipTraining;