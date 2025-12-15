import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Carousel, { CarouselItem } from '../components/Carousel';
import { PortfolioSection } from './Portfolio';
import { ServicesSection } from './Services';
import { AboutSection } from './About';
import { ContactSection } from './Contact';
import { getAssetPath } from '../utils/paths';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [isHeroLoaded, setIsHeroLoaded] = useState(false);

  // Preload video
  useEffect(() => {
    setIsHeroLoaded(true);
  }, []);

  const featuredItems: CarouselItem[] = [
    {
      image: getAssetPath("/photos/wedding.jpg"),
      title: "Wedding Celebration 1",
      description: "Beautiful moments captured at a wedding ceremony in Accra, Ghana."
    },
    {
      image: getAssetPath("/photos/wedding (2).jpg"),
      title: "Wedding Celebration 2",
      description: "Timeless memories from a special day in Accra, Ghana."
    },
    {
      image: getAssetPath("/photos/wedding (3).jpg"),
      title: "Wedding Celebration 3",
      description: "Love and joy captured at a Ghanaian wedding."
    },
    {
      image: getAssetPath("/photos/wedding (4).jpg"),
      title: "Wedding Celebration 4",
      description: "Elegant wedding photography in Accra, Ghana."
    },
    {
      image: getAssetPath("/photos/wedding (5).jpg"),
      title: "Wedding Celebration 5",
      description: "A day to remember, captured beautifully in Ghana."
    },
    {
      image: getAssetPath("/photos/wedding (6).jpg"),
      title: "Wedding Celebration 6",
      description: "Celebrating love and unity in Accra."
    },
    {
      image: getAssetPath("/photos/wedding (7).jpg"),
      title: "Wedding Celebration 7",
      description: "Joyful moments from a Ghanaian wedding ceremony."
    },
    {
      image: getAssetPath("/photos/wedding (8).jpg"),
      title: "Wedding Celebration 8",
      description: "Capturing the essence of a perfect wedding day."
    },
    {
      image: getAssetPath("/photos/wedding (9).jpg"),
      title: "Wedding Celebration 9",
      description: "Beautiful photography from a wedding in Ghana."
    },
    {
      image: getAssetPath("/photos/wedding (10).jpg"),
      title: "Wedding Celebration 10",
      description: "Love stories told through stunning imagery."
    },
    {
      image: getAssetPath("/photos/wedding (11).jpg"),
      title: "Wedding Celebration 11",
      description: "Memorable moments from an Accra wedding."
    },
    {
      image: getAssetPath("/photos/wedding (12).jpg"),
      title: "Wedding Celebration 12",
      description: "Celebrating life's precious moments in Ghana."
    },
    {
      image: getAssetPath("/photos/wedding (13).jpg"),
      title: "Wedding Celebration 13",
      description: "Elegant wedding photography in Accra."
    },
    {
      image: getAssetPath("/photos/wedding (14).jpg"),
      title: "Wedding Celebration 14",
      description: "Capturing the beauty of love in Ghana."
    },
    {
      image: getAssetPath("/photos/wedding (15).jpg"),
      title: "Wedding Celebration 15",
      description: "Timeless wedding memories from Accra."
    },
    {
      image: getAssetPath("/photos/wedding (16).jpg"),
      title: "Wedding Celebration 16",
      description: "Joyful celebration captured beautifully."
    },
    {
      image: getAssetPath("/photos/wedding (17).jpg"),
      title: "Wedding Celebration 17",
      description: "A perfect wedding day in Ghana."
    },
    {
      image: getAssetPath("/photos/wedding (18).jpg"),
      title: "Wedding Celebration 18",
      description: "Love and happiness in every frame."
    },
    {
      image: getAssetPath("/photos/wedding (19).jpg"),
      title: "Wedding Celebration 19",
      description: "Beautiful wedding photography from Accra."
    },
    {
      image: getAssetPath("/photos/wedding (20).jpg"),
      title: "Wedding Celebration 20",
      description: "Capturing the magic of a Ghanaian wedding."
    },
    {
      image: getAssetPath("/photos/wedding (21).jpg"),
      title: "Wedding Celebration 21",
      description: "Memorable moments from a special day."
    },
    {
      image: getAssetPath("/photos/wedding (22).jpg"),
      title: "Wedding Celebration 22",
      description: "Stunning wedding imagery from Ghana."
    },
    {
      image: getAssetPath("/photos/wedding (23).jpg"),
      title: "Wedding Celebration 23",
      description: "Celebrating love in Accra, Ghana."
    },
    {
      image: getAssetPath("/photos/wedding (24).jpg"),
      title: "Wedding Celebration 24",
      description: "Beautiful moments from a wedding ceremony."
    },
    {
      image: getAssetPath("/photos/wedding (25).jpg"),
      title: "Wedding Celebration 25",
      description: "Love stories captured through our lens."
    },
    {
      image: getAssetPath("/photos/wedding (26).jpg"),
      title: "Wedding Celebration 26",
      description: "Joyful wedding photography in Ghana."
    },
    {
      image: getAssetPath("/photos/wedding (27).jpg"),
      title: "Wedding Celebration 27",
      description: "Timeless memories from an Accra wedding."
    },
    {
      image: getAssetPath("/photos/wedding (28).jpg"),
      title: "Wedding Celebration 28",
      description: "Capturing the essence of a perfect day."
    },
    {
      image: getAssetPath("/photos/wedding (29).jpg"),
      title: "Wedding Celebration 29",
      description: "Elegant wedding moments in Ghana."
    },
    {
      image: getAssetPath("/photos/wedding (30).jpg"),
      title: "Wedding Celebration 30",
      description: "Beautiful celebration captured in Accra."
    },
    {
      image: getAssetPath("/photos/wedding (31).jpg"),
      title: "Wedding Celebration 31",
      description: "Love and joy from a Ghanaian wedding."
    },
    {
      image: getAssetPath("/photos/wedding (32).jpg"),
      title: "Wedding Celebration 32",
      description: "Stunning photography from a wedding in Ghana."
    },
    {
      image: getAssetPath("/photos/wedding (33).jpg"),
      title: "Wedding Celebration 33",
      description: "Capturing precious moments in Accra."
    },
    {
      image: getAssetPath("/photos/wedding (34).jpg"),
      title: "Wedding Celebration 34",
      description: "Beautiful wedding day captured perfectly."
    },
    {
      image: getAssetPath("/photos/wedding (35).jpg"),
      title: "Wedding Celebration 35",
      description: "Memorable moments from a Ghanaian celebration."
    },
    {
      image: getAssetPath("/photos/gallery-1.jpg"),
      title: "Portfolio Highlight 1",
      description: "Stunning photography from our collection."
    },
    {
      image: getAssetPath("/photos/gallery-2.jpg"),
      title: "Portfolio Highlight 2",
      description: "Professional photography in Ghana."
    },
    {
      image: getAssetPath("/photos/gallery-3.jpg"),
      title: "Portfolio Highlight 3",
      description: "Capturing life's beautiful moments."
    },
    {
      image: getAssetPath("/photos/gallery-4.jpg"),
      title: "Portfolio Highlight 4",
      description: "Creative photography from Accra."
    },
    {
      image: getAssetPath("/photos/gallery-5.jpg"),
      title: "Portfolio Highlight 5",
      description: "Stunning visuals from our portfolio."
    },
    {
      image: getAssetPath("/photos/gallery-6.jpg"),
      title: "Portfolio Highlight 6",
      description: "Professional photography in Ghana."
    },
    {
      image: getAssetPath("/photos/gallery-7.jpg"),
      title: "Portfolio Highlight 7",
      description: "Capturing memorable moments beautifully."
    },
    {
      image: getAssetPath("/photos/gallery-8.jpg"),
      title: "Portfolio Highlight 8",
      description: "Beautiful photography from our collection."
    },
    {
      image: getAssetPath("/photos/gallery-9.jpg"),
      title: "Portfolio Highlight 9",
      description: "Creative imagery from Accra, Ghana."
    },
    {
      image: getAssetPath("/photos/gallery-10.jpg"),
      title: "Portfolio Highlight 10",
      description: "Stunning photography capturing Ghana's beauty."
    },
    {
      image: getAssetPath("/photos/About me pic1.jpg"),
      title: "Behind the Lens",
      description: "Meet the photographer behind the camera."
    },
    {
      image: getAssetPath("/photos/About me pic 2.jpg"),
      title: "Our Story",
      description: "Passionate about capturing life's moments."
    },
    {
      image: getAssetPath("/photos/About me pic 3.jpg"),
      title: "Our Vision",
      description: "Creating timeless memories through photography."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#111c21]">
        {/* Skeleton Loading State */}
        {!isHeroLoaded && (
          <div className="absolute inset-0 z-20 bg-[#111c21] flex items-center justify-center">
             <div className="w-full h-full animate-pulse bg-gray-800"></div>
          </div>
        )}

        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
            onLoadedData={() => setIsHeroLoaded(true)}
          >
            <source src={getAssetPath("/photos/real vid.mp4")} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#111c21]/70 via-[#111c21]/50 to-[#111c21]"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-xs font-semibold tracking-wider uppercase mb-6 text-primary backdrop-blur-sm animate-fade-in-up">
            Ghana Based Photography
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight drop-shadow-xl">
            Capturing Life's <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Fleeting Moments</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Specializing in authentic portraiture, cinematic events, and commercial storytelling. We turn temporary moments into timeless art.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => navigate('/portfolio')} 
              className="w-full sm:w-auto px-8 py-3.5 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40 transform hover:scale-105 hover:-translate-y-1"
            >
              View Portfolio
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
            <button 
              onClick={() => navigate('/services')} 
              className="w-full sm:w-auto px-8 py-3.5 bg-white/5 border border-white/10 text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm transform hover:scale-105 hover:-translate-y-1 hover:border-primary/50"
            >
              Our Services
            </button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50 cursor-pointer hover:text-white transition-colors"
             onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
          <span className="material-symbols-outlined text-3xl">keyboard_arrow_down</span>
        </div>
      </header>

      {/* Featured Carousel Section */}
      <section className="py-20 bg-background-light dark:bg-background-dark overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
           <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Featured Collections</h2>
            <div className="w-20 h-1.5 bg-primary rounded-full mx-auto mb-6"></div>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              Swipe through some of our most memorable shots from recent international assignments.
            </p>
          </div>
          <Carousel items={featuredItems} autoPlayInterval={2500} />
        </div>
      </section>

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Services Section */}
      <ServicesSection />

      {/* About Section */}
      <AboutSection />
      
      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default Home;