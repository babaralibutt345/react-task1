import section3img from '../assets/section3img.png';

const Partners = () => {
    return (
        <section className="bg-light py-3 py-md-4 py-lg-5">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-12">
                        {/* Responsive image with proper aspect ratio */}
                        <img
                            src={section3img}
                            alt="Our Partners"
                            className='img-fluid d-block mx-auto'
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                                objectFit: 'contain'
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;