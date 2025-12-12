import React, { useState, useEffect } from 'react';

interface PortfolioItem {
  src: string;
  title: string;
  category: string;
  location: string;
}

// Expanded dataset with more items for each category
const portfolioItems: PortfolioItem[] = [
  // Existing Items
  { 
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBezLZYig7sxhqQPQXm0sWA5OGq9wLjEpC-CKP4oVOYXfFBMIwOFF0edDDCL_RhsNu8msYwHpT3VHh4c4dUBbYZZP9cXNu_5Q8UxNeSUcXgtOHwt-ARaVdxFiGKU_fBtj47JtUe8_6h4O5G73T6k530cWyGrMyOZNqQisobJmSjrGyF4df_p6LV-jYdnNN7VKMAXaBHiMK-gy7tAPoZD7ZYgfQsXTRrjr692-3RJSW0W94KrjpjKUKayXFtfBT7DAji_QYd0LkwOKw", 
    title: "Sunset Vows", 
    category: "Weddings", 
    location: "Maui, HI" 
  },
  { 
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuATp-YUp2kXM0A_uCopT37-VGl_7X5cZm6kwJaC-hJNCzAex4tV1MGwrILC2H8zFYrG0DuS7vjr4DX_Rk6m6-qYcHsIxG3Lx8-mondWgAJCxwgliOKmyONCTbz7rf2mEsNEAcb7hpGNehjPzmUubr0zpSKMRkvurWQAvzhMTqRi__T3bbeElu0A1FfDqmCJ6CBsPSCFdQZJfUG_uFapaasm9q_ciWYRjas3uNloPW1gG_cwSqEOnpf75DO_byU4quGS67LI-AyEuLQ", 
    title: "Mountain Solitude", 
    category: "Landscapes", 
    location: "Swiss Alps" 
  },
  { 
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2QrvG0SDxb8n-aJKJDifpjRVxHmcZFD03CpK5aMG0gSMjYBzSOQKrg0ESl0Q4S-uA3bSyXgg7l0e3-vqgole7JpYNPOyXob4a5HA4pBGzno-lsER8FC-DWsVQxI3-A2UAn8IyEUGlVmVyZvWLvX8xmBENKz0k5jXzl0yY8Jn48ga-fgwWKnWLr1eGcQ8B9yPfsPx5wmg7kv6c4KGwdrBQQ6xOhMMA8wYxiZjysIpsA-ARtzVsOU_wDqsVT4yyC00HAb9qa7CZsdo", 
    title: "Urban Gaze", 
    category: "Portraits", 
    location: "New York, NY" 
  },
  { 
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8IOJexSrpAJyTDmyqEINXOcGBhD5_YYWrs16Ux7fP3cD_FIyYOjoZiR9kDdyR9sq1UpfMeY-9KjcsU5mP9_wnZthbODdg4Eh7kI5cy6qDh6dnXirwJ5esdMA-h6Irp-iQGB4EKVO0EqRhQN8-TlEufgAWqX6MuE-ExKZPCbwUQQlMj87Ic4sXjsPNk0wS40zsgG18q24f0FOBUtkt-VzjuhChtp4tCKRqSMa3e5pZ7DQF04wSndelZser6gzjHQlS1rAFxp-tJ78", 
    title: "First Dance", 
    category: "Weddings", 
    location: "Paris, France" 
  },
  { 
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAomrU6isqPEAFvhXLokHMKrEX0s0L2vG0wplIG-VVEJRu1ql5Hz7Yv_LzWIwV6E-zCUx1XJjS0Aco_ZR17NrSDudhjm8PJo_uwY69wag8N706oMuFJpjtA1P1_BIqDpS8G2wL_hMUpQDGh4y1NW-dZWV3AH_Ts6AO554BLS9Q8jSUwAGbp2bksF1IRZZWtCe_funbHWG3DJNRyZ4TF-pZpghXvTZaUaRLus2Lh00YWSdRcWZ7Vy0HNLPzkrQmuYJo8640Lq3KwCSw", 
    title: "Valley Dawn", 
    category: "Landscapes", 
    location: "Tuscany, Italy" 
  },
  { 
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPMkUKh7AB_7f20zlGNDztRfwzJd0KgwBMQU8F2meVkLwf-lxTfwSHkUdy69aDad8uOwsnkeZN6QNLqvgOKdqg4LIBDprLjqIfEYph6jpIdMyO3ErOkpS7PFggF7q2_a2_LpScZVisMeAj_0TOHXo5o-fQi0--VtKtOTkMD5xeIIC3A3pHlynmtIxhbFt47zUByRQGbSy1xoHe7p4rEkfd32H0P3rzclDvUVKhsSSWLTNrEMLStpVe4PK_wTJQj62dphQZxLrxZrk", 
    title: "Summer Haze", 
    category: "Editorial", 
    location: "Los Angeles, CA" 
  },
  
  // New Weddings
  { 
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800", 
    title: "Celebration", 
    category: "Weddings", 
    location: "Napa Valley, CA" 
  },
  { 
    src: "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?auto=format&fit=crop&q=80&w=800", 
    title: "Together Forever", 
    category: "Weddings", 
    location: "Charleston, SC" 
  },
  { 
    src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070&auto=format&fit=crop", 
    title: "Greek Romance", 
    category: "Weddings", 
    location: "Santorini, Greece" 
  },

  // New Portraits
  { 
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800", 
    title: "Raw Emotion", 
    category: "Portraits", 
    location: "Berlin, Germany" 
  },
  { 
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=800", 
    title: "Soft Light", 
    category: "Portraits", 
    location: "Kyoto, Japan" 
  },
  {
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800",
    title: "Studio Gaze",
    category: "Portraits",
    location: "London, UK"
  },

  // New Editorial/Landscapes
  { 
    src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800", 
    title: "Wanderlust", 
    category: "Editorial", 
    location: "Marrakech, Morocco" 
  },
  { 
    src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=800", 
    title: "Morning Mist", 
    category: "Landscapes", 
    location: "Yosemite, CA" 
  }
];

const PortfolioItemCard: React.FC<{ item: PortfolioItem }> = ({ item }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="masonry-item relative group overflow-hidden rounded-lg cursor-pointer mb-4 break-inside-avoid">
      {/* Skeleton Loading State */}
      {!isLoaded && (
        <div className="w-full h-[300px] bg-slate-200 dark:bg-surface-dark animate-pulse rounded-lg" />
      )}
      
      <img 
        alt={item.title} 
        className={`w-full h-auto object-cover transition-all duration-500 group-hover:scale-105 ${
          isLoaded ? 'opacity-100' : 'opacity-0 absolute top-0 left-0 h-0'
        }`}
        src={item.src}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
      />
      
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
  const categories = ['All', 'Weddings', 'Portraits', 'Landscapes', 'Editorial'];

  // Reset visible count when category changes
  useEffect(() => {
    setVisibleCount(6);
  }, [activeCategory]);

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const displayedItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <div className="relative flex flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-white">
      {/* Hero Section with Simple Loading State */}
      <div className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-slate-900">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 animate-[fadeIn_1s_ease-in_forwards]" 
          style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBngOSjiHDeYCO2NFvW4nuEc_UyMxTPjzV20iWHZ12RTN4krcq54wVEGxsWKq0-SKgtpj_KZY6SmUKWIaRTgVG3NDakBc30J69lQEP-dDfkqbMSeammZqb6eWEA4Cipn5AJBw9qSdnoFdnAyd3geV3Z6Ro_GOlbsWFJtXMahGcA-MLjr2Mu7ixJqC2lbnIu4KMrGsWv80y9RhRQP_GvGx8eanNuE1qDyWDP5WqQCPIqqeBZOXGe1FmPudxwkEsRuLtNb7r3i640o7s")'}}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background-dark/60 via-background-dark/40 to-background-dark/90"></div>
        </div>
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
                  className={`flex h-10 items-center justify-center px-6 rounded-full text-sm font-bold transition-all ${
                    activeCategory === category
                      ? 'bg-primary text-white shadow-lg shadow-primary/25 scale-105'
                      : 'bg-slate-200 dark:bg-[#243b47] text-slate-700 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-[#2f4a59] hover:scale-105'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="masonry-grid w-full animate-fade-in">
            {displayedItems.map((item, index) => (
              <PortfolioItemCard key={`${item.title}-${index}`} item={item} />
            ))}
          </div>

          {hasMore && (
            <div className="flex justify-center mt-12 mb-20">
              <button 
                onClick={handleLoadMore}
                className="group flex items-center gap-2 px-8 py-3 rounded-full border border-slate-300 dark:border-slate-700 hover:border-primary text-slate-700 dark:text-slate-300 hover:text-primary transition-all"
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