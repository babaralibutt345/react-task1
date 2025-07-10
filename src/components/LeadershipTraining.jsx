import section4img from '../assets/section4img.jpg';
import { FaArrowDown, FaArrowRight } from 'react-icons/fa';

const LeadershipTraining = () => {
    return (
        <section className="container text-center py-5 position-relative">
            <h2 className="h1 fw-bold">Leadership Training</h2>
            <p className="text-dark fw-bold mt-2">The Neuroscience of Leadership</p>
            <p className="mt-3 mx-auto" style={{ maxWidth: '700px', fontSize:'Ano Regular' }}>
                The Neuroscience of Calming Within The Chaos of Uncertainty & War. True stories & proven tools that work
                in the battlefield of the mind in the US, as well as, in the war zone of Ukraine!
            </p>

            <div className="mt-4 position-relative">
                <img src={section4img} alt="Leadership" className="img-fluid rounded" />

                {/* Right-side vertical bar and arrow */}
                <div
                    style={{
                        position: 'absolute',
                        top: '0',
                        right: '200px',
                        height: '90%',
                        width: '2px',
                        backgroundColor: 'black',
                        borderRadius: '2px',
                    }}
                ></div>
                <div
                    style={{
                        position: 'absolute',
                        right: '185px',
                        bottom: '10px',
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

            {/* Learn more button */}
            <div className="d-flex justify-content-center p-5" style={{ marginLeft: '120px' }}>
                <div
                    style={{
                        width: 100,
                        height: 100,
                        borderRadius: "50%",
                        border: "1px solid #ccc",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.75rem",
                        textAlign: "center",
                        lineHeight: 1.2,
                        fontWeight: 600,
                        color: "#2F1744",
                        position: 'relative',
                    }}
                >
                    LEARN MORE<br />ABOUT JILL

                </div>
            </div>
        </section>
    );
};

export default LeadershipTraining;
