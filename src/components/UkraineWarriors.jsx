import ukrainesection from '../assets/ukrainesection.jpg'

const UkraineWarriors = () => {
    return (
        <section className="container-fluid position-relative py-5 bg-light">
            <div className="position-absolute top-0 start-0 w-10 h-10 d-flex justify-content-center align-items-center" style={{ zIndex: 0, opacity: 0.1}}>
                <h1 className="display-1 fw-bold text-secondary" style={{ fontSize: '130px' }}>Powered by Love</h1>
            </div>
            <div className="container position-relative" style={{ zIndex: 1 }}>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div style={{margin:'0 100px'}}>
                        <h2 className="fw-bold">Ukraine Warriors</h2>
                        <p className="text-muted">Powered by Love</p>
                        <p>Practical Training in the Neuro-Science of Release from Trauma amidst Crisis</p>
                        <div className="d-flex justify-content-start" style={{marginTop:'50px'}}>
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

                                }}
                            >
                                BOOK JILL<br />RIGHT NOW
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