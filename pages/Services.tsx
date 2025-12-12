import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ServicesSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white">
      {/* Hero */}
      <section className="relative flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 text-center lg:py-24">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            alt="Photographer holding camera" 
            className="h-full w-full object-cover opacity-40 dark:opacity-30" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwYE3UVnmh6hr6LbQKNEuxzErcpwy8SOkwA20yjJMsvhtd8PAqXL3EoGyGyh673fYF_brgBJCb72JeXUYsD0dRwi2a0-irYD7lgYK4ZoDSDEdt0ZwMTbco3ZZrrC_qTgrVKTFhFudPZvEEYhx0sHkLeJD3WxKVrMvAiWChXQACRYEu1HLOfSCcej1gFBAiHd7pr8XNW8hE2lsuY9JOk2A8YzyWl7pWA5z-PQIMXvSjcuhjhkBgOGJdejFBLsJVVSMntGtJpUxAe5g"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-light dark:from-background-dark via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center gap-6 max-w-4xl mx-auto">
          <h1 className="text-slate-900 dark:text-white text-4xl font-black leading-tight md:text-6xl">
            Capturing Moments, <span className="text-primary">Creating Memories</span>
          </h1>
          <h2 className="text-slate-600 dark:text-slate-300 text-lg font-normal leading-relaxed max-w-2xl">
            Professional photography services tailored to your unique story. From intimate portraits to grand celebrations, explore our curated packages below.
          </h2>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary hover:bg-primary/90 text-white text-base font-bold transition-all shadow-lg shadow-primary/25">
              View Packages
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-4 pb-20 flex justify-center">
        <div className="max-w-[1200px] flex-1">
          <div className="text-center mb-10">
            <h2 className="text-primary font-bold uppercase tracking-wider text-sm mb-2">Our Offerings</h2>
            <h1 className="text-3xl md:text-4xl font-bold">Curated Packages</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Mini */}
            <div className="group flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-surface-dark p-6 hover:border-primary/50 transition-all shadow-lg">
              <div className="border-b border-slate-100 dark:border-white/10 pb-4">
                <h3 className="text-xl font-bold">The Mini Session</h3>
                <div className="mt-2 flex items-baseline gap-1"><span className="text-4xl font-black">$250</span></div>
              </div>
              <div className="flex flex-col gap-3 py-2 flex-1 text-sm text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> 1 Hour Duration</div>
                <div className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> 15 High-Res Photos</div>
              </div>
              <button onClick={() => navigate('/contact')} className="w-full h-12 rounded-lg bg-slate-100 dark:bg-[#243b47] hover:bg-primary hover:text-white text-sm font-bold transition-all">Book Mini</button>
            </div>
            {/* Essential */}
            <div className="relative group flex flex-col gap-4 rounded-xl border-2 border-primary bg-white dark:bg-surface-dark p-6 shadow-xl transform md:scale-105 z-10">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Most Popular</div>
              <div className="border-b border-slate-100 dark:border-white/10 pb-4">
                <h3 className="text-xl font-bold">The Essential</h3>
                <div className="mt-2 flex items-baseline gap-1"><span className="text-4xl font-black">$600</span></div>
              </div>
              <div className="flex flex-col gap-3 py-2 flex-1 text-sm text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> 3 Hours Duration</div>
                <div className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> 50 High-Res Photos</div>
                <div className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> 2 Locations</div>
              </div>
              <button onClick={() => navigate('/contact')} className="w-full h-12 rounded-lg bg-primary hover:bg-primary/90 text-white text-sm font-bold transition-all">Book Standard</button>
            </div>
            {/* Full */}
            <div className="group flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-surface-dark p-6 hover:border-primary/50 transition-all shadow-lg">
              <div className="border-b border-slate-100 dark:border-white/10 pb-4">
                <h3 className="text-xl font-bold">The Full Experience</h3>
                <div className="mt-2 flex items-baseline gap-1"><span className="text-4xl font-black">$1200</span></div>
              </div>
              <div className="flex flex-col gap-3 py-2 flex-1 text-sm text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> Full Day (8 Hours)</div>
                <div className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> Unlimited Photos</div>
                <div className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> Drone Photography</div>
              </div>
              <button onClick={() => navigate('/contact')} className="w-full h-12 rounded-lg bg-slate-100 dark:bg-[#243b47] hover:bg-primary hover:text-white text-sm font-bold transition-all">Book Premium</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-background-light dark:bg-background-dark">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="flex flex-col gap-4">
            <details className="group bg-white dark:bg-surface-dark rounded-lg border border-slate-200 dark:border-border-dark open:border-primary/50 transition-colors duration-300">
              <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-bold select-none">
                <span>How long does it take to get my photos?</span>
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
              </summary>
              <div className="px-5 pb-5 text-slate-600 dark:text-slate-400 text-sm">
                For standard sessions, our turnaround time is typically 2 weeks.
              </div>
            </details>
            <details className="group bg-white dark:bg-surface-dark rounded-lg border border-slate-200 dark:border-border-dark open:border-primary/50 transition-colors duration-300">
              <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-bold select-none">
                <span>Do you charge for travel?</span>
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
              </summary>
              <div className="px-5 pb-5 text-slate-600 dark:text-slate-400 text-sm">
                Travel within 20 miles of the city center is included.
              </div>
            </details>
            <details className="group bg-white dark:bg-surface-dark rounded-lg border border-slate-200 dark:border-border-dark open:border-primary/50 transition-colors duration-300">
              <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-bold select-none">
                <span>What equipment do you use?</span>
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
              </summary>
              <div className="px-5 pb-5 text-slate-600 dark:text-slate-400 text-sm">
                We use top-of-the-line Canon R5 mirrorless cameras with a variety of L-series prime lenses to ensure the highest quality images.
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <div className="pt-20">
      <ServicesSection />
    </div>
  );
};

export default Services;