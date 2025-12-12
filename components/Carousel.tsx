import React, { useState, useEffect, useRef, TouchEvent } from 'react';

export interface CarouselItem {
  image: string;
  title: string;
  description: string;
}

interface CarouselProps {
  items: CarouselItem[];
  autoPlayInterval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ items, autoPlayInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(new Array(items.length).fill(false));
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Navigation Logic
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto Play Logic
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(nextSlide, autoPlayInterval);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, currentIndex, autoPlayInterval]);

  // Swipe Support
  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
  };

  const handleImageLoad = (index: number) => {
    setImagesLoaded((prev) => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  return (
    <div 
      className="relative w-full h-[500px] md:h-[600px] overflow-hidden group rounded-xl shadow-2xl border border-white/5 bg-surface-dark"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Slides Container */}
      <div 
        className="flex w-full h-full transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative bg-surface-dark">
             {/* Skeleton Loader */}
             {!imagesLoaded[index] && (
               <div className="absolute inset-0 bg-slate-200 dark:bg-gray-800 animate-pulse z-10" />
             )}

             <img 
               src={item.image} 
               alt={item.title}
               className={`w-full h-full object-cover transition-opacity duration-500 ${imagesLoaded[index] ? 'opacity-100' : 'opacity-0'}`}
               onLoad={() => handleImageLoad(index)}
             />
            
            {/* Gradient Overlay - Always present but text hidden until load? Or just normal overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 pointer-events-none"></div>
            
            {/* Content Caption */}
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 text-left z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-wider text-white uppercase bg-primary/80 rounded-full backdrop-blur-sm">
                Featured
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">{item.title}</h2>
              <p className="text-gray-200 text-lg md:text-xl max-w-2xl font-light drop-shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 hidden sm:block">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button 
        onClick={(e) => { e.preventDefault(); prevSlide(); }}
        className="absolute top-1/2 left-4 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-md border border-white/10 hover:bg-primary hover:border-primary transition-all duration-300 opacity-0 group-hover:opacity-100 z-20"
        aria-label="Previous Slide"
      >
        <span className="material-symbols-outlined">arrow_back_ios_new</span>
      </button>

      {/* Right Arrow */}
      <button 
        onClick={(e) => { e.preventDefault(); nextSlide(); }}
        className="absolute top-1/2 right-4 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-md border border-white/10 hover:bg-primary hover:border-primary transition-all duration-300 opacity-0 group-hover:opacity-100 z-20"
        aria-label="Next Slide"
      >
        <span className="material-symbols-outlined">arrow_forward_ios</span>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 right-6 md:right-12 flex space-x-2 z-20">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-primary w-8' 
                : 'bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;