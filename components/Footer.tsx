import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const recentShots = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBxCXsNfgkSb2RyDqisJmDO_iWVtcYZvWtWRmWZbAKB0VFKWdkT2wTiHJlAfKBdk_yFMGykfc5wpUjsNzMU1tRE9NgiKk15jqcFx0A68VVzxTCyzXgP7fBJZYHNgRUWAcAwmOAfbTqprdzcBaY8bQ8lyafmEmTAQ7Flm7C-5FJiQyc975oobnBAKwj1-G1vfQq51F33_9h0oaqnzGnXXhlZnu_-NUzqeMOmAv7wkE46ie82qEYFO1zJehTwc0Tljugc7h6_LEBt-7k',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuByjH9T_abLxqkouLgidedEBCpRAhDGTxiwpASfWB1ANMw6ber4Pj-DqNeA5pY_TwCfGugEjf44LDr7KtfWqoAhstJE8plpr_sA8i2bmmzgNIqtxmbc1kgvf0a0hm8mNF1boLSwsehjoXsKV5fNYdo4i_QaDRNvLPUgIS4VQfDx-x-e3gKR5_5BCBggSmkHX3AwfSd4mapPjlvybrUmYo_eWwG5TzQG-6-htjZLtMcZQnpKetHXc21id2uL8H28Uxog8XSO95cmlts',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCSa7WRY2PEuratt7vh_vCeFp4W5HeOcsrESrJjJj0CI6DKBBBF2hJHoIZzr2cUw2Fx1qPYSoUT6SL_CdybYhmFxMUDV_c3W4uwLFUCo3HmOL2KqHeW3_FPgOU6lTFP5Ouo2hHNuRhwB6PsDk9fyjmJiTO6nYWVNklqs5tU_nSGWUIFIJ0If-GixgLRIl0coeka2kR3BvbJkHQBn9K9noI9_xCt0rmMcrccTaatnLqf1EPxdPEpaEJzJ1_pTa3dAkBofisVXbXsVqs'
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
              <span className="material-symbols-outlined text-primary text-2xl">camera</span>
              <h2 className="text-xl font-bold text-white">Lumina</h2>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Professional photography services based in NYC. Capturing the beauty in every moment.
            </p>
            <div className="flex gap-3">
              {/* Instagram - Gradient Background */}
              <SocialIcon 
                label="Instagram"
                href="https://instagram.com/luminaphoto"
                className="bg-gradient-to-tr from-[#fdf497] via-[#fd5949] to-[#285AEB] text-white"
                path="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
              />
              {/* Facebook - Blue Background */}
              <SocialIcon 
                label="Facebook"
                href="https://facebook.com/luminaphoto"
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
              {/* Snapchat - Yellow Background */}
              <SocialIcon 
                label="Snapchat"
                href="https://snapchat.com/add/luminaphoto"
                className="bg-[#FFFC00] text-black"
                path="M12.185 24.18c-5.068 0-6.19-2.176-6.19-2.176-.232-.423.003-.896.38-.973.842-.162 2.016-.628 2.067-1.341.012-.222-.16-.395-.316-.549-.24-.229-.537-.534-.537-1.125 0-.256.09-.446.184-.652.128-.27.289-.618.158-1.026-.14-.383-.396-.733-.526-1.115-.221-.632-.14-1.168.026-1.616.141-.395.274-.636.332-1.32.066-.75-.078-1.579.351-2.486.537-1.146 1.637-2.112 3.86-2.112 2.377 0 3.518 1.12 3.844 2.016.326.892.368 1.832.384 2.457.01.696.11 1.05.378 1.603.201.408.286 1.056-.01 1.708-.137.319-.368.618-.49.957-.146.42-.016.748.115 1.025.132.27.243.496.243.79 0 .633-.311.954-.57 1.196-.16.155-.332.327-.316.554.053.713 1.227 1.18 2.068 1.341.378.077.613.55.38.973 0 0-1.121 2.176-6.191 2.176"
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
                hello@luminaphoto.com
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">call</span>
                (555) 123-4567
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6">Latest Shots</h3>
            <div className="grid grid-cols-3 gap-2">
              {recentShots.map((url, i) => (
                <div 
                  key={i} 
                  className="aspect-square bg-gray-800 rounded bg-cover bg-center border border-white/5 hover:opacity-80 transition-opacity cursor-pointer" 
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