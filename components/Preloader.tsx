import React, { useState, useEffect } from 'react';
import { getAssetPath } from '../utils/paths';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const criticalAssets = [
      '/photos/wedding.jpg',
      '/photos/wedding-2.jpg',
      '/photos/wedding-3.jpg',
      '/photos/wedding-4.jpg',
      '/photos/wedding-5.jpg',
      '/photos/Logo_darkmode-removebg-preview.png',
      '/photos/portrait-19.jpg',
      '/photos/real-vid.mp4',
      '/photos/About-me-vid.mp4',
      '/photos/gallery-1.jpg',
      '/photos/gallery-2.jpg',
      '/photos/gallery-3.jpg'
    ];

    const loadAsset = (src: string): Promise<void> => {
      return new Promise((resolve) => {
        if (src.endsWith('.mp4')) {
          const video = document.createElement('video');
          video.preload = 'metadata';
          video.onloadedmetadata = () => resolve();
          video.onerror = () => resolve();
          video.src = getAssetPath(src);
        } else {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => resolve();
          img.src = getAssetPath(src);
        }
      });
    };

    Promise.all(criticalAssets.map(loadAsset)).then(() => {
      setTimeout(() => {
        setIsComplete(true);
        setTimeout(onComplete, 800);
      }, 1500);
    });
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[9999] bg-gradient-to-br from-[#111c21] via-[#0f1419] to-[#111c21] flex items-center justify-center transition-all duration-800 ${isComplete ? 'preloader-exit' : 'preloader-enter'}`}>
      <div className="text-center relative">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl scale-150 animate-pulse"></div>
        
        {/* Logo */}
        <div className="mb-12 relative z-10">
          <img 
            src={getAssetPath('/photos/Logo_darkmode-removebg-preview.png')} 
            alt="Logo" 
            className="h-48 w-auto mx-auto transition-transform duration-1000 hover:scale-105"
            style={{ filter: 'drop-shadow(0 0 20px rgba(23, 145, 207, 0.3))' }}
          />
        </div>

        {/* Animated Dots */}
        <div className="flex justify-center items-center space-x-4 relative z-10">
          <div className="w-5 h-5 bg-primary rounded-full dot-animation shadow-lg" style={{ animationDelay: '0ms', boxShadow: '0 0 15px rgba(23, 145, 207, 0.6)' }}></div>
          <div className="w-5 h-5 bg-primary rounded-full dot-animation shadow-lg" style={{ animationDelay: '200ms', boxShadow: '0 0 15px rgba(23, 145, 207, 0.6)' }}></div>
          <div className="w-5 h-5 bg-primary rounded-full dot-animation shadow-lg" style={{ animationDelay: '400ms', boxShadow: '0 0 15px rgba(23, 145, 207, 0.6)' }}></div>
          <div className="w-5 h-5 bg-primary rounded-full dot-animation shadow-lg" style={{ animationDelay: '600ms', boxShadow: '0 0 15px rgba(23, 145, 207, 0.6)' }}></div>
        </div>
        
        {/* Subtle particles */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-primary/30 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-primary/30 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-primary/30 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;