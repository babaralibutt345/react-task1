import ukrainesection from '../assets/ukrainesection.jpg'

const UkraineWarriors = () => {
    return (
        <section className="container-fluid position-relative py-5 bg-light">
            <div className="position-absolute top-0 start-0 w-10 h-10 d-flex justify-content-center align-items-center" style={{ zIndex: 0, opacity: 0.1}}>
                <h1 className="display-1 fw-bold text-secondary" style={{ fontSize: '105px', marginLeft:'30px' }}>POWERED BY LOVE</h1>
            </div>
            <div className="container position-relative" style={{ zIndex: 1 }}>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div style={{margin:'0 100px'}}>
                        <h2 className="fw-bold" style={{fontSize:'40px'}}>Ukraine Warriors</h2>
                        <p style={{fontFamily:'Ano Bold' , marginTop:'24px'}}>Powered by Love</p>
                            <p style={{ fontFamily:'AnoRegular-Regular'}}>Practical Training in the Neuro-Science of Release from Trauma amidst Crisis</p>
                            {/* Book Jill Button */}
                            <div className="mt-5 d-flex align-items-center justify-content-start hero-book-button" style={{ }}>
                                <div style={{ width: '40px', height: '1.5px', backgroundColor: '#2EB6B0' }} />
                                <div style={{
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
                                        BOOK JILL<br />RIGHT NOW
                                    </span>
                                </div>
                            </div>
                    </div>
                    </div>
                    <div className="col-md-6 text-center">
                        <img src={ukrainesection} alt="Ukraine Warriors" className="img-fluid rounded" style={{height: '599px', width: '550px'}} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UkraineWarriors;