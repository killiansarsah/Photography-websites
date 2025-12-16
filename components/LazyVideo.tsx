import React, { useState, useRef, useEffect } from 'react';

interface LazyVideoProps {
  src: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  controls?: boolean;
  poster?: string;
  onLoadedData?: () => void;
}

const LazyVideo: React.FC<LazyVideoProps> = ({ 
  src, 
  className = '', 
  autoPlay = false,
  muted = true,
  loop = false,
  playsInline = true,
  controls = false,
  poster,
  onLoadedData
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoadedData = () => {
    setIsLoaded(true);
    onLoadedData?.();
  };

  return (
    <video
      ref={videoRef}
      className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
      autoPlay={autoPlay && isInView}
      muted={muted}
      loop={loop}
      playsInline={playsInline}
      controls={controls}
      poster={poster}
      onLoadedData={handleLoadedData}
      preload={isInView ? 'auto' : 'none'}
    >
      {isInView && <source src={src} type="video/mp4" />}
    </video>
  );
};

export default LazyVideo;