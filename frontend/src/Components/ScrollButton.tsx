import { useEffect, useState } from 'react';

const ScrollButton = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const translateYValue = -Math.cos(scrollPosition / 100) * 30;
  const circleStyle = {
    transform: `translateY(${translateYValue}px)`,
    transition: 'transform 0.2s ease-in',
  };

  return (
    <div className="relative">
      <button className="flex items-center bg-transparent m-10 mx-auto">
        <div className="box">
          <div className="circle" style={circleStyle}></div>
        </div>
      </button>
    </div>
  );
};

export default ScrollButton;
