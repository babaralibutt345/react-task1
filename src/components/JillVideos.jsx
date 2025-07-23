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
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const updateCount = () => {
            const width = window.innerWidth;
            if (width >= 992) setVisibleCount(5);     // lg and up
            else if (width >= 768) setVisibleCount(3); // md
            else if (width >= 576) setVisibleCount(2); // sm
            else setVisibleCount(1);                   // xs
        };
        updateCount();
        window.addEventListener("resize", updateCount);
        return () => window.removeEventListener("resize", updateCount);
    }, []);

    const visibleThumbnails = thumbnails.slice(0, visibleCount);
    const centerIndex = Math.floor(visibleCount / 2);

    const getCardRotation = (idx) => {
        if (visibleCount === 1) return 'rotate(0deg)';
        if (idx === centerIndex) return 'rotate(0deg)';
        const distanceFromCenter = Math.abs(idx - centerIndex);
        if (visibleCount === 2) return idx === 0 ? 'rotate(-8deg)' : 'rotate(8deg)';
        if (distanceFromCenter === 1) return idx < centerIndex ? 'rotate(12deg)' : 'rotate(-12deg)';
        return idx < centerIndex ? 'rotate(-10deg)' : 'rotate(10deg)';
    };

    const getCardDimensions = () => {
        const widthPercent = 100 / visibleCount;
        return {
            width: `${widthPercent}%`,
            height: 'auto'
        };
    };


    const getCardOverlap = (idx) => {
        if (visibleCount === 1 || visibleCount === 2) return '0px';
        if (visibleCount === 3) return idx === 0 ? '0px' : '-60px';
        if (visibleCount === 5) return idx === 0 ? '0px' : '-40px';
        return '0px';
    };

    return (
        <section className="container-fluid py-5 text-center overflow-hidden" style={{ minHeight: '400px' }}>
            <p style={{ fontFamily: 'AnoRegular-Regular', color: '#1E1E1E', fontSize: '24px' }}>#Youtube</p>
            <h2 className="fw-bold mb-5" style={{ fontSize: 'clamp(32px, 4vw, 70px)' }}>Jill's Videos</h2>

            <div
                className="d-flex justify-content-center align-items-center flex-nowrap"
                style={{
                    width: '100%',
                    padding: '30px 0',
                    marginLeft: 0,
                    gap: visibleCount === 1 ? '0px' : visibleCount === 2 ? '16px' : '0px'
                }}
            >
                {visibleThumbnails.map((item, idx) => {
                    const isCenter = idx === centerIndex;
                    const { width, height } = getCardDimensions();

                    return (
                        <div
                            key={idx}
                            style={{
                                width,
                                height,
                                flex: '0 0 auto',
                                transform: `${getCardRotation(idx)} ${isCenter ? 'scale(1.08)' : 'scale(0.95)'}`,
                                zIndex: isCenter ? 10 : visibleCount - idx,
                                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.12)',
                                transition: 'transform 0.3s, box-shadow 0.3s',
                                border: '4px solid black',
                                backgroundColor: '#fff',
                                position: 'relative',
                                cursor: 'pointer',
                                marginLeft: getCardOverlap(idx),
                                marginRight: idx === visibleThumbnails.length - 1 ? '0px' : '0px'
                            }}
                            onMouseEnter={() => isCenter && setIsHovered(true)}
                            onMouseLeave={() => isCenter && setIsHovered(false)}
                        >
                            <img
                                src={item.src}
                                alt={item.title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    filter: isCenter && isHovered ? 'brightness(0.9)' : 'none',
                                    transition: 'filter 0.3s'
                                }}
                            />
                            {isCenter && (
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        opacity: isHovered ? 1 : 0,
                                        transition: 'opacity 0.3s'
                                    }}
                                >
                                    <div
                                        style={{
                                            width: '48px',
                                            height: '48px',
                                            backgroundColor: 'rgba(255,255,255,0.85)',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            animation: isHovered ? 'pulse 1.5s infinite' : 'none'
                                        }}
                                    >
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M8 5V19L19 12L8 5Z" fill="#1E1E1E" />
                                        </svg>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            <p className="mt-5" style={{ fontFamily: 'Ano Bold', fontSize: 'clamp(16px, 2vw, 24px)' }}>
                {visibleThumbnails[centerIndex]?.title}
            </p>

            <style jsx>{`
                @keyframes pulse {
                    0% { transform: scale(1);}
                    50% { transform: scale(1.1);}
                    100% { transform: scale(1);}
                }
            `}</style>
        </section>
    );
};

export default JillVideos;
