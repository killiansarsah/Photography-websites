import React, { useState, useEffect, useRef } from 'react';
import { getAssetPath } from '../utils/paths';

export const AboutSection: React.FC = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [nextVideoIndex, setNextVideoIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const videos = [
    getAssetPath('/photos/About me vid.mp4'),
    getAssetPath('/photos/About me vid1.mp4'),
    getAssetPath('/photos/About me vid 2.mp4'),
    getAssetPath('/photos/About me vid 3.mp4'),
    getAssetPath('/photos/About me vid4.mp4')
  ];

  useEffect(() => {
    const currentVideo = videoRefs.current[currentVideoIndex];
    
    const handleVideoEnd = () => {
      const next = (currentVideoIndex + 1) % videos.length;
      setCurrentVideoIndex(next);
      
      const nextVideo = videoRefs.current[next];
      if (nextVideo) {
        nextVideo.currentTime = 0;
        nextVideo.play();
      }
    };

    if (currentVideo) {
      currentVideo.addEventListener('ended', handleVideoEnd);
      return () => currentVideo.removeEventListener('ended', handleVideoEnd);
    }
  }, [currentVideoIndex, videos.length]);

  // Ensure the first video starts playing
  useEffect(() => {
    const firstVideo = videoRefs.current[0];
    if (firstVideo) {
      firstVideo.play();
    }
  }, []);

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white">
      {/* Hero */}
      <div className="flex flex-col items-center justify-center w-full py-12 lg:py-24 px-4 lg:px-10">
        <div className="max-w-[1280px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1 w-full max-w-md mx-auto lg:mx-0 aspect-[4/5]">
            {videos.map((videoSrc, index) => (
              <video 
                key={index}
                ref={(el) => (videoRefs.current[index] = el)}
                className={`absolute inset-0 w-full h-full object-cover rounded-xl shadow-2xl transition-opacity duration-[5000ms] ease-in-out ${
                  index === currentVideoIndex 
                    ? 'opacity-100 z-20' 
                    : index === nextVideoIndex && isTransitioning 
                    ? 'opacity-100 z-10' 
                    : 'opacity-0 z-0'
                }`}
                autoPlay={index === 0}
                muted 
                playsInline
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ))}
          </div>
          <div className="flex flex-col gap-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 w-fit">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span className="text-primary text-xs font-bold uppercase tracking-wide">Behind the Lens</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
              Capturing life's <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-sky-300">fleeting moments</span> before they fade.
            </h1>
            <p className="text-lg lg:text-xl font-light leading-relaxed text-slate-600 dark:text-slate-300">
              I'm Nacee, a photographer who believes every picture has a soul. Welcome to my visual diary.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="w-full bg-surface-light dark:bg-[#16222a] border-y border-slate-200 dark:border-[#243b47]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-10 py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center md:text-left"><p className="text-4xl lg:text-5xl font-bold text-primary">10+</p><p className="font-medium">Years Experience</p></div>
            <div className="text-center md:text-left"><p className="text-4xl lg:text-5xl font-bold">500+</p><p className="font-medium">Weddings Shot</p></div>
            <div className="text-center md:text-left"><p className="text-4xl lg:text-5xl font-bold">50k+</p><p className="font-medium">Shutter Actuations</p></div>
          </div>
        </div>
      </div>

      {/* Vision */}
      <div className="w-full py-20 px-4 lg:px-10 flex justify-center">
        <div className="max-w-[960px] flex flex-col gap-10">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">The Art of Seeing</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="bg-white dark:bg-surface-dark p-8 lg:p-12 rounded-2xl border border-slate-100 dark:border-[#2a4250] relative overflow-hidden shadow-lg">
            <div className="absolute top-0 left-0 p-4 opacity-10">
              <span className="material-symbols-outlined text-9xl">format_quote</span>
            </div>
            <p className="text-xl lg:text-2xl font-light italic leading-relaxed text-slate- 700 dark:text-slate-200 relative z-10 text-center">
              "I don't just take pictures; I capture the silence between the chaos. My approach is rooted in photojournalism and fine art."
            </p>
            <div className="absolute bottom-0 right-0 p-4 opacity-10 rotate-180">
              <span className="material-symbols-outlined text-9xl">format_quote</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <div className="pt-20">
      <AboutSection />
    </div>
  );
};

export default About;