import React, { useState, useEffect } from 'react';
import { getAssetPath } from '../utils/paths';

interface PortfolioItem {
  src: string;
  title: string;
  category: string;
  location: string;
}

// Expanded dataset with more items for each category
const portfolioItems: PortfolioItem[] = [
  // Weddings
  { 
    src: getAssetPath("/photos/wedding.jpg"), 
    title: "Wedding Day 1", 
    category: "Weddings", 
    location: "Accra, Ghana" 
  },
  { 
    src: getAssetPath("/photos/wedding (2).jpg"), 
    title: "Wedding Day 2", 
    category: "Weddings", 
    location: "Accra, Ghana" 
  },
  { 
    src: getAssetPath("/photos/wedding (3).jpg"), 
    title: "Wedding Day 3", 
    category: "Weddings", 
    location: "Accra, Ghana" 
  },
  { 
    src: getAssetPath("/photos/wedding (4).jpg"), 
    title: "Wedding Day 4", 
    category: "Weddings", 
    location: "Accra, Ghana" 
  },
  { 
    src: getAssetPath("/photos/wedding (5).jpg"), 
    title: "Wedding Day 5", 
    category: "Weddings", 
    location: "Accra, Ghana" 
  },
  { 
    src: getAssetPath("/photos/wedding (6).jpg"), 
    title: "Wedding Day 6", 
    category: "Weddings", 
    location: "Accra, Ghana" 
  },
  { 
    src: getAssetPath("/photos/wedding (7).jpg"), 
    title: "Wedding Day 7", 
    category: "Weddings", 
    location: "Accra, Ghana" 
  },
  { 
    src: getAssetPath("/photos/wedding (8).jpg"), 
    title: "Wedding Day 8", 
    category: "Weddings", 
    location: "Accra, Ghana" 
  },
  { 
    src: getAssetPath("/photos/wedding (9).jpg"), 
    title: "Wedding Day 9", 
    category: "Weddings", 
    location: "Accra, Ghana" 
  },
  { 
    src: getAssetPath("/photos/wedding (10).jpg"), 
    title: "Wedding Day 10", 
    category: "Weddings", 
    location: "Accra, Ghana" 
  },
  { 
    src: getAssetPath("/photos/wedding (11).jpg"), 
    title: "Wedding Day 11", 
    category: "Weddings", 
    location: "Accra, Ghana" 
  },
  { 
    src: getAssetPath("/photos/wedding (12).jpg"), 
    title: "Wedding Day 12", 
    category: "Weddings", 
    location: "Accra, Ghana" 
  },
  { 
    src: getAssetPath("/photos/wedding (13).jpg"), 
    title: "Wedding Day 13", 
    category: "Weddings", 
    location: "Accra, Ghana" 
  },
  { 
    src: getAssetPath("/photos/wedding (14).jpg"), 
    title: "Wedding Day 14", 
    category: "Weddings", 
    location: "Accra, Ghana" 
  },
  { 
    src: getAssetPath("/photos/wedding (15).jpg"), 
    title: "Wedding Day 15", 
    category: "Weddings", 
    location: "Accra, Ghana" 
  },
  { 
    src: getAssetPath("/photos/wedding (16).jpg"), 
    title: "Wedding Day 16", 
    category: "Weddings", 
    location: "Accra, Ghana" 
  },
  { 
    src: getAssetPath("/photos/wedding (17).jpg"), 
    title: "Wedding Day 17", 
    category: "Weddings", 
    location: "Accra, Ghana" 
  },
  { 
    src: getAssetPath("/photos/wedding (18).jpg"), 
    title: "Wedding Day 18", 
    category: "Weddings", 
    location: "Accra, Ghana" 
  },
  { 
    src: getAssetPath("/photos/wedding (19).jpg"), 
    title: "Wedding Day 19", 
    category: "Weddings", 
    location: "Accra, Ghana" 
  },
  { 
    src: getAssetPath("/photos/wedding (20).jpg"), 
    title: "Wedding Day 20", 
    category: "Weddings", 
    location: "Accra, Ghana" 
  },
  { 
    src: getAssetPath("/photos/wedding (21).jpg"), 
    title: "Wedding Day 21", 
    category: "Weddings", 
    location: "Accra, Ghana" 
  },
  { 
    src: getAssetPath("/photos/wedding (22).jpg"), 
    title: "Wedding Day 22", 
    category: "Weddings", 
    location: "Accra, Ghana" 
  },
  { 
    src: getAssetPath("/photos/wedding (23).jpg"), 
    title: "Wedding Day 23", 
    category: "Weddings", 
    location: "Accra, Ghana" 
  },
  { 
    src: getAssetPath("/photos/wedding (24).jpg"), 
    title: "Wedding Day 24", 
    category: "Weddings", 
    location: "Accra, Ghana" 
  },
  { 
    src: getAssetPath("/photos/wedding (25).jpg"), 
    title: "Wedding Day 25", 
    category: "Weddings", 
    location: "Accra, Ghana" 
  },
  { 
    src: getAssetPath("/photos/wedding (26).jpg"), 
    title: "Wedding Day 26", 
    category: "Weddings", 
    location: "Accra, Ghana" 
  },
  { 
    src: getAssetPath("/photos/wedding (27).jpg"), 
    title: "Wedding Day 27", 
    category: "Weddings", 
    location: "Accra, Ghana" 
  },
  { 
    src: getAssetPath("/photos/wedding (28).jpg"), 
    title: "Wedding Day 28", 
    category: "Weddings", 
    location: "Accra, Ghana" 
  },
  { 
    src: getAssetPath("/photos/wedding (29).jpg"), 
    title: "Wedding Day 29", 
    category: "Weddings", 
    location: "Accra, Ghana" 
  },
  { 
    src: getAssetPath("/photos/wedding (30).jpg"), 
    title: "Wedding Day 30", 
    category: "Weddings", 
    location: "Accra, Ghana" 
  },
  { 
    src: getAssetPath("/photos/wedding (31).jpg"), 
    title: "Wedding Day 31", 
    category: "Weddings", 
    location: "Accra, Ghana" 
  },
  { 
    src: getAssetPath("/photos/wedding (32).jpg"), 
    title: "Wedding Day 32", 
    category: "Weddings", 
    location: "Accra, Ghana" 
  },
  { 
    src: getAssetPath("/photos/wedding (33).jpg"), 
    title: "Wedding Day 33", 
    category: "Weddings", 
    location: "Accra, Ghana" 
  },
  { 
    src: getAssetPath("/photos/wedding (34).jpg"), 
    title: "Wedding Day 34", 
    category: "Weddings", 
    location: "Accra, Ghana" 
  },
  { 
    src: getAssetPath("/photos/wedding (35).jpg"), 
    title: "Wedding Day 35", 
    category: "Weddings", 
    location: "Accra, Ghana" 
  },

  // Portraits
  { 
    src: getAssetPath("/photos/portrait-7.jpg"), 
    title: "Urban Gaze", 
    category: "Portraits", 
    location: "New York, NY" 
  },
  { 
    src: getAssetPath("/photos/portrait-8.jpg"), 
    title: "Raw Emotion", 
    category: "Portraits", 
    location: "Berlin, Germany" 
  },
  { 
    src: getAssetPath("/photos/portrait-9.jpg"), 
    title: "Soft Light", 
    category: "Portraits", 
    location: "Kyoto, Japan" 
  },
  {
    src: getAssetPath("/photos/portrait-10.jpg"),
    title: "Studio Gaze",
    category: "Portraits",
    location: "London, UK"
  },
  {
    src: getAssetPath("/photos/portrait-11.jpg"),
    title: "Natural Beauty",
    category: "Portraits",
    location: "Los Angeles, CA"
  },
  {
    src: getAssetPath("/photos/portrait-12.jpg"),
    title: "Candid Moment",
    category: "Portraits",
    location: "Miami, FL"
  },

  // Landscapes
  { 
    src: getAssetPath("/photos/christian-diaz-Tg_Du1s-WU0-unsplash.jpg"), 
    title: "Mountain Solitude", 
    category: "Landscapes", 
    location: "Swiss Alps" 
  },
  { 
    src: getAssetPath("/photos/alekon-pictures-yj4kwA4h_Ms-unsplash.jpg"), 
    title: "Valley Dawn", 
    category: "Landscapes", 
    location: "Tuscany, Italy" 
  },
  { 
    src: getAssetPath("/photos/antoine-demare-qstSVTp6OrM-unsplash.jpg"), 
    title: "Morning Mist", 
    category: "Landscapes", 
    location: "Yosemite, CA" 
  },

  // Editorial
  { 
    src: getAssetPath("/photos/portrait-13.jpg"), 
    title: "Summer Haze", 
    category: "Editorial", 
    location: "Los Angeles, CA" 
  },
  { 
    src: getAssetPath("/photos/portrait-14.jpg"), 
    title: "Wanderlust", 
    category: "Editorial", 
    location: "Marrakech, Morocco" 
  },
  { 
    src: getAssetPath("/photos/portrait-15.jpg"), 
    title: "City Lights", 
    category: "Editorial", 
    location: "Tokyo, Japan" 
  },
  { 
    src: getAssetPath("/photos/portrait-16.jpg"), 
    title: "Fashion Forward", 
    category: "Editorial", 
    location: "Milan, Italy" 
  },
  { 
    src: getAssetPath("/photos/portrait-17.jpg"), 
    title: "Street Style", 
    category: "Editorial", 
    location: "Paris, France" 
  },
  { 
    src: getAssetPath("/photos/editorial-1.jpg"), 
    title: "Modern Edge", 
    category: "Editorial", 
    location: "New York, NY" 
  },
  { 
    src: getAssetPath("/photos/editorial-2.jpg"), 
    title: "Timeless Elegance", 
    category: "Editorial", 
    location: "London, UK" 
  },
  { 
    src: getAssetPath("/photos/editorial-3.jpg"), 
    title: "Bold Vision", 
    category: "Editorial", 
    location: "Barcelona, Spain" 
  },

  // Videos
  { 
    src: getAssetPath("/photos/vidme.mp4"), 
    title: "With Me - Video 1", 
    category: "Videos", 
    location: "Accra, Ghana" 
  },
  { 
    src: getAssetPath("/photos/vidme (2).mp4"), 
    title: "With Me - Video 2", 
    category: "Videos", 
    location: "Accra, Ghana" 
  },
  { 
    src: getAssetPath("/photos/vidme (3).mp4"), 
    title: "With Me - Video 3", 
    category: "Videos", 
    location: "Accra, Ghana" 
  },
  { 
    src: getAssetPath("/photos/vidme (4).mp4"), 
    title: "With Me - Video 4", 
    category: "Videos", 
    location: "Accra, Ghana" 
  },
  { 
    src: getAssetPath("/photos/vidme (5).mp4"), 
    title: "With Me - Video 5", 
    category: "Videos", 
    location: "Accra, Ghana" 
  },
  { 
    src: getAssetPath("/photos/vidme (6).mp4"), 
    title: "With Me - Video 6", 
    category: "Videos", 
    location: "Accra, Ghana" 
  },
  { 
    src: getAssetPath("/photos/vidme (7).mp4"), 
    title: "With Me - Video 7", 
    category: "Videos", 
    location: "Accra, Ghana" 
  },
  { 
    src: getAssetPath("/photos/vidme (8).mp4"), 
    title: "With Me - Video 8", 
    category: "Videos", 
    location: "Accra, Ghana" 
  },
  { 
    src: getAssetPath("/photos/vid me.mp4"), 
    title: "With Me - Video 9", 
    category: "Videos", 
    location: "Accra, Ghana" 
  },
  { 
    src: getAssetPath("/photos/H.mp4"), 
    title: "Highlights", 
    category: "Videos", 
    location: "Accra, Ghana" 
  },
  { 
    src: getAssetPath("/photos/behind-camera.mp4"), 
    title: "Behind the Camera", 
    category: "Videos", 
    location: "Accra, Ghana" 
  },
  { 
    src: getAssetPath("/photos/svetlana-birthday.mp4"), 
    title: "Svetlana's Birthday", 
    category: "Videos", 
    location: "Accra, Ghana" 
  }
];


const PortfolioItemCard: React.FC<{ item: PortfolioItem; cardIndex: number; onClick: (src: string, index: number) => void; allImages?: string[] }> = ({ item, cardIndex, onClick, allImages }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isVideo = item.src.endsWith('.mp4');
  
  let categoryImages: string[] = [];
  if (item.category === 'All' && allImages) {
    // For 'All' section, use all available images
    categoryImages = allImages;
  } else if (item.category && item.category !== 'All') {
    // For specific categories, use images from that category
    categoryImages = portfolioItems.filter(p => p.category === item.category).map(p => p.src);
  }
  
  // If no category images, just use the item itself
  if (categoryImages.length === 0) {
    categoryImages = [item.src];
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % categoryImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [categoryImages.length]);
  const currentImage = categoryImages[(currentImageIndex + cardIndex) % categoryImages.length];
  const isCurrentVideo = currentImage && currentImage.endsWith('.mp4');
  return (
    <div className="masonry-item relative group overflow-hidden rounded-lg cursor-pointer mb-4 break-inside-avoid transition-all duration-300 hover:shadow-2xl hover:shadow-black/50"
      onClick={() => onClick(currentImage, cardIndex)}>
      {/* Skeleton Loading State */}
      {!isLoaded && (
        <div className="w-full h-[300px] bg-slate-200 dark:bg-surface-dark animate-pulse rounded-lg" />
      )}
      {isCurrentVideo ? (
        <video 
          className={`w-full h-auto object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75 ${
            isLoaded ? 'opacity-100' : 'opacity-0 absolute top-0 left-0 h-0'
          }`}
          src={currentImage}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setIsLoaded(true)}
        />
      ) : (
        <img 
          alt={item.title} 
          className={`w-full h-auto object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75 ${
            isLoaded ? 'opacity-100' : 'opacity-0 absolute top-0 left-0 h-0'
          }`}
          src={currentImage}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
        />
      )}
      {/* Overlay Content (Only show when loaded) */}
      <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 ${!isLoaded ? 'hidden' : ''}`}>
        <p className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.title}</p>
        <p className="text-slate-300 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
          {item.category} • {item.location}
        </p>
      </div>
    </div>
  );
};

export const PortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const categories = ['All', 'Weddings', 'Portraits', 'Landscapes', 'Editorial', 'Videos'];

  const heroImages = [
    getAssetPath("/photos/wedding.jpg"),
    getAssetPath("/photos/wedding (2).jpg"),
    getAssetPath("/photos/wedding (3).jpg"),
    getAssetPath("/photos/wedding (4).jpg"),
    getAssetPath("/photos/wedding (5).jpg"),
    getAssetPath("/photos/wedding (6).jpg"),
    getAssetPath("/photos/wedding (7).jpg"),
    getAssetPath("/photos/wedding (8).jpg"),
    getAssetPath("/photos/wedding (9).jpg"),
    getAssetPath("/photos/wedding (10).jpg"),
    getAssetPath("/photos/wedding (11).jpg"),
    getAssetPath("/photos/wedding (12).jpg"),
    getAssetPath("/photos/wedding (13).jpg"),
    getAssetPath("/photos/wedding (14).jpg"),
    getAssetPath("/photos/wedding (15).jpg"),
    getAssetPath("/photos/wedding (16).jpg"),
    getAssetPath("/photos/wedding (17).jpg"),
    getAssetPath("/photos/wedding (18).jpg"),
    getAssetPath("/photos/wedding (19).jpg"),
    getAssetPath("/photos/wedding (20).jpg"),
    getAssetPath("/photos/wedding (21).jpg"),
    getAssetPath("/photos/wedding (22).jpg"),
    getAssetPath("/photos/wedding (23).jpg"),
    getAssetPath("/photos/wedding (24).jpg"),
    getAssetPath("/photos/wedding (25).jpg"),
    getAssetPath("/photos/wedding (26).jpg"),
    getAssetPath("/photos/wedding (27).jpg"),
    getAssetPath("/photos/wedding (28).jpg"),
    getAssetPath("/photos/wedding (29).jpg"),
    getAssetPath("/photos/wedding (30).jpg"),
    getAssetPath("/photos/wedding (31).jpg"),
    getAssetPath("/photos/wedding (32).jpg"),
    getAssetPath("/photos/wedding (33).jpg"),
    getAssetPath("/photos/wedding (34).jpg"),
    getAssetPath("/photos/wedding (35).jpg"),
    getAssetPath("/photos/gallery-1.jpg"),
    getAssetPath("/photos/gallery-2.jpg"),
    getAssetPath("/photos/gallery-3.jpg"),
    getAssetPath("/photos/gallery-4.jpg"),
    getAssetPath("/photos/gallery-5.jpg"),
    getAssetPath("/photos/gallery-6.jpg"),
    getAssetPath("/photos/gallery-7.jpg"),
    getAssetPath("/photos/gallery-8.jpg"),
    getAssetPath("/photos/gallery-9.jpg"),
    getAssetPath("/photos/gallery-10.jpg"),
    getAssetPath("/photos/About me pic1.jpg"),
    getAssetPath("/photos/About me pic 2.jpg"),
    getAssetPath("/photos/About me pic 3.jpg")
  ];

  // Rotate hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 2500); // Change every 2.5 seconds
    return () => clearInterval(interval);
  }, []);

  // Reset visible count when category changes
  useEffect(() => {
    setVisibleCount(6);
  }, [activeCategory]);


  // For 'All', show all images from the consolidated /photos folder
  function getAllImageItems() {
    const allImages = [
      // Wedding photos (all 36 wedding images)
      "wedding.jpg", "wedding (2).jpg", "wedding (3).jpg", "wedding (4).jpg", "wedding (5).jpg",
      "wedding (6).jpg", "wedding (7).jpg", "wedding (8).jpg", "wedding (9).jpg", "wedding (10).jpg",
      "wedding (11).jpg", "wedding (12).jpg", "wedding (13).jpg", "wedding (14).jpg", "wedding (15).jpg",
      "wedding (16).jpg", "wedding (17).jpg", "wedding (18).jpg", "wedding (19).jpg", "wedding (20).jpg",
      "wedding (21).jpg", "wedding (22).jpg", "wedding (23).jpg", "wedding (24).jpg", "wedding (25).jpg",
      "wedding (26).jpg", "wedding (27).jpg", "wedding (28).jpg", "wedding (29).jpg", "wedding (30).jpg",
      "wedding (31).jpg", "wedding (32).jpg", "wedding (33).jpg", "wedding (34).jpg", "wedding (35).jpg",
      // About me photos
      "About me pic1.jpg", "About me pic 2.jpg", "About me pic 3.jpg",
      // Portrait photos (renamed from numbered files)
      "portrait-1.jpg", "portrait-2.jpg", "portrait-3.jpg", "portrait-4.jpg", "portrait-5.jpg",
      "portrait-6.jpg", "portrait-7.jpg", "portrait-8.jpg", "portrait-9.jpg", "portrait-10.jpg",
      "portrait-11.jpg", "portrait-12.jpg", "portrait-13.jpg", "portrait-14.jpg", "portrait-15.jpg",
      "portrait-16.jpg", "portrait-17.jpg", "portrait-18.jpg", "portrait-19.jpg", "portrait-20.jpg",
      "portrait-21.jpg", "portrait-22.jpg", "portrait-23.jpg", "portrait-24.jpg", "portrait-25.jpg",
      // Editorial photos
      "editorial-1.jpg", "editorial-2.jpg", "editorial-3.jpg", "editorial-4.jpg",
      // Recent photos
      "recent-1.jpg", "recent-2.jpg", "recent-3.jpg", "recent-4.jpg", "recent-5.jpg", "recent-6.jpg",
      // Unsplash photos
      "alekon-pictures-yj4kwA4h_Ms-unsplash.jpg",
      "antoine-demare-qstSVTp6OrM-unsplash.jpg",
      "christian-diaz-Tg_Du1s-WU0-unsplash.jpg",
      // Logo files
      "Logo darkmode.jpg",
      "logo lightmode.jpg",
      "Logo_darkmode-removebg-preview.png",
      "Logo.jpg",
      // Gallery photos (renamed from photomemoirgh files)
      "gallery-1.jpg", "gallery-2.jpg", "gallery-3.jpg", "gallery-4.jpg", "gallery-5.jpg",
      "gallery-6.jpg", "gallery-7.jpg", "gallery-8.jpg", "gallery-9.jpg", "gallery-10.jpg",
      "gallery-11.jpg", "gallery-12.jpg", "gallery-13.jpg", "gallery-14.jpg", "gallery-15.jpg",
      "gallery-16.jpg", "gallery-17.jpg", "gallery-18.jpg", "gallery-19.jpg", "gallery-20.jpg",
      "gallery-21.jpg", "gallery-22.jpg", "gallery-23.jpg", "gallery-24.jpg", "gallery-25.jpg",
      "gallery-26.jpg", "gallery-27.jpg", "gallery-28.jpg", "gallery-29.jpg", "gallery-30.jpg",
      "gallery-31.jpg", "gallery-32.jpg", "gallery-33.jpg", "gallery-34.jpg", "gallery-35.jpg",
      "gallery-36.jpg", "gallery-37.jpg", "gallery-38.jpg", "gallery-39.jpg", "gallery-40.jpg",
      "gallery-41.jpg", "gallery-42.jpg"
    ];
    return allImages.map(f => ({ src: getAssetPath(`/photos/${f}`), title: f, category: 'All', location: 'Ghana' }));
  }

  const filteredItems = activeCategory === 'All'
    ? getAllImageItems()
    : portfolioItems.filter(item => item.category === activeCategory);

  const displayedItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  // Lightbox handlers
  const handleImageClick = (src: string, cardIndex: number) => {
    // Find all images in the current filteredItems
    const images = displayedItems.map(item => item.src);
    const index = images.indexOf(src);
    setLightboxImages(images);
    setLightboxIndex(index >= 0 ? index : 0);
    setLightboxOpen(true);
  };
  const handleLightboxClose = () => setLightboxOpen(false);
  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length);
  };
  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % lightboxImages.length);
  };

  return (
    <div className="relative flex flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-white">
      {/* Hero Section with Rotating Images */}
      <div className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-slate-900">
        {heroImages.map((image, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentHeroIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-no-repeat"
              style={{backgroundImage: `url("${image}")`, backgroundPosition: 'center 30%'}}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background-dark/60 via-background-dark/40 to-background-dark/90"></div>
          </div>
        ))}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center gap-6 mt-12">
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight drop-shadow-lg">
            Capturing Life's Moments
          </h1>
          <p className="text-slate-200 text-lg md:text-xl font-light max-w-2xl drop-shadow-md">
            Natural light photography specializing in candid emotion, timeless portraits, and breathtaking landscapes.
          </p>
        </div>
      </div>

      <div className="layout-container px-4 md:px-8 lg:px-40 py-12 flex justify-center">
        <div className="layout-content-container flex flex-col max-w-[1200px] w-full">
          <div className="flex flex-col gap-8 mb-10">
            <div className="flex flex-col gap-2">
              <h2 className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight">Selected Works</h2>
              <p className="text-slate-500 dark:text-slate-400 text-base">Browse our curated collections by category.</p>
            </div>
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`flex h-10 items-center justify-center px-6 rounded-full text-sm font-bold transition-all duration-300 transform hover:-translate-y-1 ${
                    activeCategory === category
                      ? 'bg-primary text-white shadow-lg shadow-primary/25 scale-105'
                      : 'bg-slate-200 dark:bg-[#243b47] text-slate- 700 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-[#2f4a59] hover:scale-105 hover:shadow-md'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="masonry-grid w-full animate-fade-in">
            {displayedItems.map((item, index) => (
              <PortfolioItemCard 
                key={`${item.title}-${index}`} 
                item={item} 
                cardIndex={index} 
                onClick={handleImageClick}
                allImages={activeCategory === 'All' ? getAllImageItems().map(i => i.src) : undefined}
              />
            ))}
          </div>

          {/* Lightbox Modal */}
          {lightboxOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm" onClick={handleLightboxClose}>
              <button className="absolute top-6 right-8 text-white text-4xl font-bold z-50" onClick={handleLightboxClose} aria-label="Close">&times;</button>
              <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-5xl z-50 px-2" onClick={handlePrev} aria-label="Previous">&#8592;</button>
              <img src={lightboxImages[lightboxIndex]} alt="Enlarged" className="max-h-[80vh] max-w-[90vw] rounded-xl shadow-2xl border-4 border-white/10 object-contain" onClick={e => e.stopPropagation()} />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-5xl z-50 px-2" onClick={handleNext} aria-label="Next">&#8594;</button>
            </div>
          )}

          {hasMore && (
            <div className="flex justify-center mt-12 mb-20">
              <button 
                onClick={handleLoadMore}
                className="group flex items-center gap-2 px-8 py-3 rounded-full border border-slate-300 dark:border-slate- 700 hover:border-primary text-slate- 700 dark:text-slate-300 hover:text-primary transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="font-bold">Load More</span>
                <span className="material-symbols-outlined transition-transform group-hover:translate-y-1">expand_more</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  return (
    <div className="pt-20">
      <PortfolioSection />
    </div>
  );
};

export default Portfolio;