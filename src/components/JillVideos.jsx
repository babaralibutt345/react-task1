import jills1 from '../assets/jills1.png';
import jills2 from '../assets/jills2.png';
import jills3 from '../assets/jills3.png';
import jills4 from '../assets/jills4.png';
import jills5 from '../assets/jills5.png';
import { useEffect, useState } from 'react';

const JillVideos = () => {
    const thumbnails = [
        { src: jills1, title: 'Make Goals Not Excuses | Jill Tupper' },
        { src: jills2, title: 'Lead with Purpose | Jill Tupper' },
        { src: jills3, title: 'Mindful Leadership' },
        { src: jills4, title: 'Powerful Storytelling' },
        { src: jills5, title: 'Inspire Action Today' }
    ];

    const [visibleCount, setVisibleCount] = useState(5);

    useEffect(() => {
        const updateCount = () => {
            const width = window.innerWidth;
            if (width < 576) setVisibleCount(2);            // XS
            else if (width >= 576 && width < 768) setVisibleCount(2);  // SM
            else if (width >= 768 && width < 992) setVisibleCount(3);  // MD
            else if (width >= 992 && width < 1200) setVisibleCount(3); // LG
            else setVisibleCount(5);                         // XL, XXL
        };

        updateCount();
        window.addEventListener("resize", updateCount);
        return () => window.removeEventListener("resize", updateCount);
    }, []);

    const visibleThumbnails = thumbnails.slice(0, visibleCount);

    return (
        <section className="container-fluid py-5 text-center overflow-hidden">
            <p style={{ fontFamily: 'AnoRegular-Regular', color: '#1E1E1E' }}>#Youtube</p>
            <h2 className="fw-bold mb-5">Jill’s Videos</h2>

            <div
                className="d-flex justify-content-center align-items-center gap-4 flex-nowrap"
                style={{
                    overflow: 'hidden',
                    margin: '0 auto',
                    maxWidth: '100%',
                    padding: '30px 30px',
                }}
            >
                {visibleThumbnails.map((item, idx) => (
                    <div
                        key={idx}
                        style={{
                            width: 'clamp(150px, 20vw, 240px)',
                            height: 'clamp(200px, 26vw, 320px)',
                            flex: '0 0 auto',
                            transform:
                                idx === Math.floor(visibleCount / 2)
                                    ? 'scale(1.15)'
                                    : idx < Math.floor(visibleCount / 2)
                                        ? 'rotate(-8deg)'
                                        : 'rotate(8deg)',
                            zIndex: idx === Math.floor(visibleCount / 2) ? 1 : 0,
                            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                            transition: 'transform 0.3s ease',
                            border: '3px solid black',
                            borderRadius: '6px',
                            backgroundColor: '#fff',
                        }}
                    >
                        <img
                            src={item.src}
                            alt={item.title}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                    </div>
                ))}
            </div>

            <p className="mt-5" style={{ fontFamily: 'Ano Bold', fontSize: '13px' }}>
                {visibleThumbnails[Math.floor(visibleCount / 2)]?.title}
            </p>
        </section>
    );
};

export default JillVideos;
