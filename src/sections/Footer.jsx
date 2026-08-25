import { ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToId = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset; 

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="relative py-12 px-6 border-t border-slate-900 bg-space-black/90 overflow-hidden text-slate-500">
      
      {/* Wave texture pattern floating background */}
      <div className="absolute inset-0 wafer-concentric opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        
        {/* Brand details */}
        <div className="flex items-center space-x-3 text-left">
          <div className="w-9 h-9 rounded-lg overflow-hidden border border-slate-800 flex items-center justify-center bg-deep-navy">
            <img 
              src="/sod-logo.jpg" 
              alt="SOD Club Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="font-orbitron font-bold tracking-wider text-slate-300 text-sm block">
              SOD CLUB
            </span>
            <span className="block font-outfit text-[9px] uppercase tracking-[0.25em] text-slate-500">
              BMSIT&M
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {['hero', 'about', 'explore', 'events', 'research', 'team', 'contact'].map((target) => (
            <button
              key={target}
              onClick={() => scrollToId(target)}
              className="font-outfit text-xs font-semibold tracking-wider text-slate-500 hover:text-cyan-glow uppercase transition-colors"
            >
              {target === 'explore' ? 'pillars' : target}
            </button>
          ))}
        </div>

        {/* Action button */}
        <div className="flex items-center space-x-4">
          <span className="font-orbitron text-[9px] uppercase tracking-[0.2em] text-slate-600 hidden md:block">
            &ldquo;Built by students, driven by innovation.&rdquo;
          </span>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg border border-slate-850 bg-deep-navy text-slate-500 hover:text-cyan-glow hover:border-cyan-glow/20 transition-all shadow-md group"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-900/60 flex flex-col md:flex-row items-center justify-between text-[10px] font-orbitron tracking-wider text-slate-600 gap-4">
        <span>
          © {new Date().getFullYear()} SEMICONDUCTORS FOR OPTOELECTRONIC DEVICES CLUB.
        </span>
        <span>
          BMS INSTITUTE OF TECHNOLOGY AND MANAGEMENT, BENGALURU. ALL RIGHTS RESERVED.
        </span>
      </div>
    </footer>
  );
}