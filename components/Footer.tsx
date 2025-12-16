import React from 'react';
import { Link } from 'react-router-dom';
import { getAssetPath } from '../utils/paths';

const Footer: React.FC = () => {
  const recentShots = [
    getAssetPath('/photos/recent-1.jpg'),
    getAssetPath('/photos/recent-2.jpg'),
    getAssetPath('/photos/recent-3.jpg'),
    getAssetPath('/photos/recent-4.jpg'),
    getAssetPath('/photos/recent-5.jpg'),
    getAssetPath('/photos/recent-6.jpg')
  ];

  const SocialIcon = ({ path, href, label, className }: { path: string, href: string, label: string, className: string }) => (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label={label}
      className={`flex items-center justify-center w-10 h-10 rounded-full transition-transform duration-300 hover:scale-110 shadow-lg border border-white/5 ${className}`}
    >
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d={path} />
      </svg>
    </a>
  );

  return (
    <footer className="bg-background-dark border-t border-white/5 pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-4 max-w-[1280px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img 
                src={getAssetPath('/photos/Logo_darkmode-removebg-preview.png')} 
                alt="Logo" 
                className="h-44 w-auto" 
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Professional photography services based in Accra, Ghana. Capturing the beauty in every moment.
            </p>
            <div className="flex gap-3">
              {/* Instagram - Gradient Background */}
              <SocialIcon 
                label="Instagram"
                href="https://www.instagram.com/photomemoirgh/"
                className="bg-gradient-to-tr from-[#fdf497] via-[#fd5949] to-[#285AEB] text-white"
                path="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
              />
              {/* Facebook - Blue Background */}
              <SocialIcon 
                label="Facebook"
                href="https://www.facebook.com/photomemoirgh"
                className="bg-[#1877F2] text-white"
                path="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 2.848-6.463 6.388-6.463 2.38 0 2.932.167 3.003.185v3.485h-1.638c-1.334 0-2.001.975-2.001 2.373v2.001h3.883l-.554 3.667h-3.329v7.98h-5.752z"
              />
              {/* Twitter (X) - Blue Background (Twitter Blue) */}
              <SocialIcon 
                label="Twitter"
                href="https://twitter.com/luminaphoto"
                className="bg-[#1DA1F2] text-white"
                path="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
              />

            </div>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6">Explore</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link className="hover:text-primary transition-colors" to="/">Home</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/portfolio">Portfolio</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/services">Services</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/about">About Me</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6">Contact</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">mail</span>
                photomemoirgh@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">call</span>
                +233243255601
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6">Latest Shots</h3>
            <div className="grid grid-cols-3 gap-2">
              {recentShots.map((url, i) => (
                <div 
                  key={i} 
                  className="aspect-square bg-gray-800 rounded bg-cover bg-center border border-white/5 hover:opacity-80 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg" 
                  style={{ backgroundImage: `url('${url}')` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2024 Lumina Photography. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;