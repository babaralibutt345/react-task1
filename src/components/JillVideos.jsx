import jills1 from '../assets/jills1.png';
import jills2 from '../assets/jills2.png';
import jills3 from '../assets/jills3.png';
import jills4 from '../assets/jills4.png';
import jills5 from '../assets/jills5.png';

const JillVideos = () => {
    const thumbnails = [
        { src: jills1, title: 'Make Goals Not Excuses | Jill Tupper' },
        { src: jills2, title: 'Lead with Purpose | Jill Tupper' },
        { src: jills3, title: 'Mindful Leadership' },
        { src: jills4, title: 'Powerful Storytelling' },
        { src: jills5, title: 'Inspire Action Today' }
    ];

    return (
        <section className="container-fluid py-5 text-center">
            <p>#Youtube</p>
            <h2 className="fw-bold">Jill’s Videos</h2>

            <div className="d-flex justify-content-center align-items-center mt-4 gap-4">
                {thumbnails.map((item, idx) => (
                    <div
                        key={idx}
                        style={{
                            transform:
                                idx === 2 ? 'scale(1.15)' : `rotate(${idx < 2 ? -10 : 10}deg)`,
                            zIndex: idx === 2 ? 1 : 0,
                            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                            transition: 'transform 0.3s ease',
                            width: '240px',
                            height: '320px',
                            overflow: 'hidden',
                            borderRadius: '1px',
                            border: '3px solid black'
                        }}
                    >
                        <img
                            src={item.src}
                            alt={`Jill video ${idx + 1}`}
                            className="img-fluid w-100 h-100"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                ))}
            </div>

            <p className="mt-5 fw-bold">Make Goals Not Excuses | Jill Tupper</p>
        </section>
      );
    
};

export default JillVideos;