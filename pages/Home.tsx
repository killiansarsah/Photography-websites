import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Carousel, { CarouselItem } from '../components/Carousel';
import { PortfolioSection } from './Portfolio';
import { ServicesSection } from './Services';
import { AboutSection } from './About';
import { ContactSection } from './Contact';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [isHeroLoaded, setIsHeroLoaded] = useState(false);

  const heroImages = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDMqMKp9y_DdNgG1g0RXbGpxMLMo5KYyBySRSXwCEz0DIvtSpIDMJWYiFR3OG6xnR4gIRp5j3IYxMxydxszrx78zVP0XWM3TtLWfghH061rwRxmdQi76jFTJdm2c5_bzahLLrJGaAQBhg4_Y2JKdy3NGcZVW86GUayFXOPMALU34tG5OH2FRj6KAouDiiBZw9FEgDCVuxTQsvMRd5RRJp2FonBxb2vrWm5_SeF_Q-EJiU4D0SARozPmPZhV2cwKX4kTZWmJhoyeVVU",
    "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1552168324-d612d77725e3?auto=format&fit=crop&q=80&w=2000"
  ];

  // Preload first hero image
  useEffect(() => {
    const img = new Image();
    img.src = heroImages[0];
    img.onload = () => {
      setIsHeroLoaded(true);
    };
    
    // Fallback if load fails or takes too long (optional safety)
    const timeout = setTimeout(() => setIsHeroLoaded(true), 3000);

    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  const featuredItems: CarouselItem[] = [
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBezLZYig7sxhqQPQXm0sWA5OGq9wLjEpC-CKP4oVOYXfFBMIwOFF0edDDCL_RhsNu8msYwHpT3VHh4c4dUBbYZZP9cXNu_5Q8UxNeSUcXgtOHwt-ARaVdxFiGKU_fBtj47JtUe8_6h4O5G73T6k530cWyGrMyOZNqQisobJmSjrGyF4df_p6LV-jYdnNN7VKMAXaBHiMK-gy7tAPoZD7ZYgfQsXTRrjr692-3RJSW0W94KrjpjKUKayXFtfBT7DAji_QYd0LkwOKw",
      title: "Sunset Vows",
      description: "A breathtaking golden hour moment captured in Maui, highlighting the raw emotion of love against nature's backdrop."
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuATp-YUp2kXM0A_uCopT37-VGl_7X5cZm6kwJaC-hJNCzAex4tV1MGwrILC2H8zFYrG0DuS7vjr4DX_Rk6m6-qYcHsIxG3Lx8-mondWgAJCxwgliOKmyONCTbz7rf2mEsNEAcb7hpGNehjPzmUubr0zpSKMRkvurWQAvzhMTqRi__T3bbeElu0A1FfDqmCJ6CBsPSCFdQZJfUG_uFapaasm9q_ciWYRjas3uNloPW1gG_cwSqEOnpf75DO_byU4quGS67LI-AyEuLQ",
      title: "Mountain Solitude",
      description: "Exploring the serene silence of the Swiss Alps. High contrast black and white photography."
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8IOJexSrpAJyTDmyqEINXOcGBhD5_YYWrs16Ux7fP3cD_FIyYOjoZiR9kDdyR9sq1UpfMeY-9KjcsU5mP9_wnZthbODdg4Eh7kI5cy6qDh6dnXirwJ5esdMA-h6Irp-iQGB4EKVO0EqRhQN8-TlEufgAWqX6MuE-ExKZPCbwUQQlMj87Ic4sXjsPNk0wS40zsgG18q24f0FOBUtkt-VzjuhChtp4tCKRqSMa3e5pZ7DQF04wSndelZser6gzjHQlS1rAFxp-tJ78",
      title: "Parisian Romance",
      description: "The city of lights serves as the perfect stage for this elegant first dance."
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPMkUKh7AB_7f20zlGNDztRfwzJd0KgwBMQU8F2meVkLwf-lxTfwSHkUdy69aDad8uOwsnkeZN6QNLqvgOKdqg4LIBDprLjqIfEYph6jpIdMyO3ErOkpS7PFggF7q2_a2_LpScZVisMeAj_0TOHXo5o-fQi0--VtKtOTkMD5xeIIC3A3pHlynmtIxhbFt47zUByRQGbSy1xoHe7p4rEkfd32H0P3rzclDvUVKhsSSWLTNrEMLStpVe4PK_wTJQj62dphQZxLrxZrk",
      title: "Urban Editorial",
      description: "Fashion meets street style in the heart of downtown Los Angeles."
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
          {heroImages.map((img, index) => (
            <div 
              key={index}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed transition-opacity duration-1000 ease-in-out ${index === currentHeroIndex && isHeroLoaded ? 'opacity-100' : 'opacity-0'}`}
              style={{backgroundImage: `url('${img}')`}}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-[#111c21]/70 via-[#111c21]/50 to-[#111c21]"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-xs font-semibold tracking-wider uppercase mb-6 text-primary backdrop-blur-sm animate-fade-in-up">
            NYC Based Photography
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
              className="w-full sm:w-auto px-8 py-3.5 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/25"
            >
              View Portfolio
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
            <button 
              onClick={() => navigate('/services')} 
              className="w-full sm:w-auto px-8 py-3.5 bg-white/5 border border-white/10 text-white font-bold rounded-lg hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Our Services
            </button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
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
          <Carousel items={featuredItems} autoPlayInterval={6000} />
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