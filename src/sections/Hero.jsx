import { motion } from 'framer-motion';
import { Cpu, Zap, ArrowRight, ArrowDown } from 'lucide-react';

export default function Hero() {
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
    <section 
      id="hero" 
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-6 overflow-hidden tech-grid"
    >
      {/* Wave pattern textured ambient background overlay */}
      <div className="absolute inset-0 wafer-concentric opacity-20 -z-10" />

      {/* Floating semiconductor graphic layout in background */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-purple-glow/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-cyan-glow/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center flex flex-col items-center z-10">
        
        {/* Glowing concentric wafer orbits centering the club logo */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative w-36 h-36 md:w-44 md:h-44 mb-8 flex items-center justify-center"
        >
          {/* Faint rotating orbit rings */}
          <div className="absolute inset-0 rounded-full border border-dashed border-cyan-glow/20 animate-wafer-spin" />
          <div className="absolute -inset-4 rounded-full border border-dashed border-purple-glow/15 animate-wafer-spin [animation-direction:reverse] [animation-duration:100s]" />
          <div className="absolute -inset-8 rounded-full border border-cyan-glow/5" />
          
          {/* Centered glass panel enclosing logo */}
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border border-cyan-glow/40 bg-space-black/90 p-2 shadow-[0_0_40px_rgba(0,240,255,0.25)] flex items-center justify-center">
            <img 
              src="/sod-logo.jpg" 
              alt="SOD Club Logo" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </motion.div>

        {/* Small Tag */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-cyan-glow/20 bg-cyan-glow/5 mb-6 shadow-[inset_0_0_12px_rgba(0,240,255,0.05)]"
        >
          <Cpu className="w-3.5 h-3.5 text-cyan-glow animate-pulse" />
          <span className="font-orbitron text-[10px] md:text-xs font-semibold tracking-[0.2em] text-cyan-glow uppercase">
            Semiconductors for Optoelectronic Devices
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="font-outfit font-extrabold text-4xl md:text-6xl lg:text-7xl text-slate-100 tracking-tight leading-none mb-6"
        >
          Semiconductors for{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-glow via-blue-glow to-purple-glow drop-shadow-[0_2px_15px_rgba(0,240,255,0.15)]">
            Optoelectronic Devices
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="font-inter text-sm md:text-lg text-slate-400 max-w-2xl leading-relaxed mb-10"
        >
          Exploring semiconductors, research, innovation, and next-generation optoelectronic technology beyond the classroom. Powered by student-built engineering at BMSIT&M.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-5 w-full px-6"
        >
          <button
            onClick={() => scrollToId('about')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-gradient-to-r from-cyan-glow to-blue-glow hover:from-blue-glow hover:to-purple-glow font-orbitron font-bold text-sm text-space-black tracking-wider shadow-[0_0_25px_rgba(0,240,255,0.35)] hover:shadow-[0_0_30px_rgba(168,85,247,0.45)] transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>EXPLORE CLUB</span>
            <Zap className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => scrollToId('events')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg border border-purple-glow/30 hover:border-cyan-glow/50 bg-space-black/85 hover:bg-space-black/40 font-orbitron font-bold text-sm text-purple-glow hover:text-cyan-glow tracking-wider transition-all duration-300 flex items-center justify-center space-x-2 shadow-[0_0_15px_rgba(168,85,247,0.1)]"
          >
            <span>UPCOMING EVENTS</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>

      {/* Floating Particles or Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1, duration: 0.6 }}
        onClick={() => scrollToId('about')}
        className="absolute bottom-8 cursor-pointer flex flex-col items-center space-y-2 group"
      >
        <span className="font-orbitron text-[9px] uppercase tracking-[0.3em] text-slate-500 group-hover:text-cyan-glow transition-colors">
          SCROLL INJECTOR
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4 text-slate-500 group-hover:text-cyan-glow transition-colors" />
        </motion.div>
      </motion.div>
    </section>
  );
}