import React, { useEffect, useRef } from 'react';
import backgroundVideo from '../assets/droneVid2.MP4';

const VideoBackground = () => {
    const videoRef = useRef(null);
    const ticking = useRef(false);

    const startTime = 8
  
    useEffect(() => {
      const video = videoRef.current;
  
      const updateVideoTime = () => {
        const scrollPosition = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        
        // Calculate the scroll percentage
        const scrollPercentage = scrollPosition / maxScroll;
        
        if (video) {
          video.currentTime = startTime + scrollPercentage * (video.duration - startTime);
        }
      };
  
      const handleScroll = () => {
        if (!ticking.current) {
          window.requestAnimationFrame(() => {
            updateVideoTime();
            ticking.current = false;
          });
          ticking.current = true;
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    useEffect(() => {
      const video = videoRef.current;
  
      const setStartTime = () => {
        if (video) {
          video.currentTime = startTime;
        }
      };
  
      video.addEventListener('loadedmetadata', setStartTime);
  
      return () => {
        video.removeEventListener('loadedmetadata', setStartTime);
      };
    }, []);
  
    return (
      <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden">
        <video 
          ref={videoRef} 
          className="w-full h-full object-cover"
          src={backgroundVideo} 
          type="video/mp4" 
          muted 
          playsInline
        />
      </div>
    );
  };
  
  export default VideoBackground;