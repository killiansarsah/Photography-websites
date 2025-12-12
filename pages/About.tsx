import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white">
      {/* Hero */}
      <div className="flex flex-col items-center justify-center w-full py-12 lg:py-24 px-4 lg:px-10">
        <div className="max-w-[1280px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div 
              className="relative w-full aspect-[4/5] bg-cover bg-center rounded-xl shadow-2xl overflow-hidden" 
              style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAjLrCqc6hCUYGwRLdkgpySQAK_kTs46ZVf2vKzcVb17-9F6ynJLqvF2OVhk_CKJIk9WD-pzWrQvenIKJQI6P_foy-a6SRtt7NntvIdFS1YFcDjGSUDL2X2hM6pLdYQxxLg4L2Mm2HP6dOspM4nbe9AVgF3PRvv1lXixHmGf1NC7cV7D_70NqKcHhUXx_CX8RuLJdd-v8DmdT4g31J2c0l9XacxigP2KoNsI7Sd8L-JQ35PHoWWLVD3HHgF_Q6_rhWtOm1kvSnxEIE')"}}
            ></div>
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
              I'm Alex, a photographer who believes every picture has a soul. Welcome to my visual diary.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="w-full bg-surface-light dark:bg-[#16222a] border-y border-slate-200 dark:border-[#243b47]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-10 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center md:text-left"><p className="text-4xl lg:text-5xl font-bold text-primary">10+</p><p className="font-medium">Years Experience</p></div>
            <div className="text-center md:text-left"><p className="text-4xl lg:text-5xl font-bold">500+</p><p className="font-medium">Weddings Shot</p></div>
            <div className="text-center md:text-left"><p className="text-4xl lg:text-5xl font-bold">15</p><p className="font-medium">Awards</p></div>
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
            <p className="text-xl lg:text-2xl font-light italic leading-relaxed text-slate-700 dark:text-slate-200 relative z-10 text-center">
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