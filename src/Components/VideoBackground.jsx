import React, { useEffect, useRef, useState } from 'react';
import backgroundImage from '../assets/redWingPic.JPG';

const ImageZoomOutOnScroll = () => {
  const imageRef = useRef(null);
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    // Set the scroll height for the zoom effect
    setScrollHeight(document.documentElement.scrollHeight - window.innerHeight);

    const handleInitialZoom = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.min(scrollPosition / maxScroll, 1); // Clamp between 0 and 1
      const scale = 1.5 - scrollPercentage * 0.5;

      if (imageRef.current) {
        imageRef.current.style.transform = `scale(${scale})`;
      }
    };

    // Apply the initial zoom level
    handleInitialZoom();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = scrollHeight;

      // Calculate the scale based on scroll progress
      const scrollPercentage = Math.min(scrollPosition / maxScroll, 1); // Clamp between 0 and 1
      const scale = 1.5 - scrollPercentage * 0.5; // Start at 1.5x zoom and reduce to 1x

      if (imageRef.current) {
        imageRef.current.style.transform = `scale(${scale})`;
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollHeight]);
  
    return (
      <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden">
        <div
        className="fixed top-0 left-0 w-full h-full z-0 transition-transform duration-0"
        ref={imageRef}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      </div>
    );
  };
  
  export default ImageZoomOutOnScroll;