import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Radio, Cpu, Sun, Layers, 
  Lightbulb, Zap, Focus, Disc 
} from 'lucide-react';

export default function WhatWeExplore() {
  const pillars = [
    {
      title: 'Phototransistors',
      desc: 'Exploring light-sensitive electronic switches that control currents based on incident optical photons.',
      icon: <Cpu className="w-6 h-6 text-cyan-glow" />,
      tag: 'OPTICAL LOGIC',
      color: 'rgba(0, 240, 255, 0.05)',
      borderColor: 'hover:border-cyan-glow/30'
    },
    {
      title: 'Optical Fibers',
      desc: 'Studying photon dispersion, wave mechanics, and high-frequency communication guides.',
      icon: <Radio className="w-6 h-6 text-purple-glow" />,
      tag: 'WAVE MECHANICS',
      color: 'rgba(168, 85, 247, 0.05)',
      borderColor: 'hover:border-purple-glow/30'
    },
    {
      title: 'Quantum Dots',
      desc: 'Researching nano-sized crystals that emit color-controlled light under quantum confinement principles.',
      icon: <Layers className="w-6 h-6 text-blue-glow" />,
      tag: 'QUANTUM PHYSICS',
      color: 'rgba(59, 130, 246, 0.05)',
      borderColor: 'hover:border-blue-glow/30'
    },
    {
      title: 'Solar Cells',
      desc: 'Analyzing semiconductor junctions that capture photons and generate electron-hole pairs.',
      icon: <Sun className="w-6 h-6 text-cyan-glow" />,
      tag: 'PHOTOVOLTAICS',
      color: 'rgba(0, 240, 255, 0.05)',
      borderColor: 'hover:border-cyan-glow/30'
    },
    {
      title: 'Laser Diodes',
      desc: 'Building coherent monochromatic beams through electrical population inversion structures.',
      icon: <Zap className="w-6 h-6 text-purple-glow" />,
      tag: 'COHERENT OPTICS',
      color: 'rgba(168, 85, 247, 0.05)',
      borderColor: 'hover:border-purple-glow/30'
    },
    {
      title: 'LEDs & Displays',
      desc: 'Perfecting radiative recombination efficiencies to construct ultra-crisp display panels.',
      icon: <Lightbulb className="w-6 h-6 text-blue-glow" />,
      tag: 'SOLID STATE LIGHTING',
      color: 'rgba(59, 130, 246, 0.05)',
      borderColor: 'hover:border-blue-glow/30'
    },
    {
      title: 'Photodetectors',
      desc: 'Testing raw responsiveness speeds and quantum efficiencies of custom silicon sensing arrays.',
      icon: <Focus className="w-6 h-6 text-cyan-glow" />,
      tag: 'SIGNAL RECEPTION',
      color: 'rgba(0, 240, 255, 0.05)',
      borderColor: 'hover:border-cyan-glow/30'
    },
    {
      title: 'Nanotechnology',
      desc: 'Manipulating molecular materials at the sub-micron scale to engineering next-gen devices.',
      icon: <Disc className="w-6 h-6 text-purple-glow" />,
      tag: 'MATERIAL SYNTHESIS',
      color: 'rgba(168, 85, 247, 0.05)',
      borderColor: 'hover:border-purple-glow/30'
    }
  ];

  return (
    <section id="explore" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-glow/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-orbitron font-semibold text-xs tracking-[0.3em] text-cyan-glow uppercase mb-3 block">
            CORE DISCIPLINARY DOMAINS
          </span>
          <h2 className="font-orbitron font-extrabold text-3xl md:text-5xl text-slate-100 tracking-wide mb-4">
            WHAT WE{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-glow to-blue-glow">
              EXPLORE
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-glow to-cyan-glow mx-auto mb-6 rounded" />
          <p className="font-inter text-slate-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Unravelling the physics and mechanical engineering pathways behind eight foundational pillars of solid state optoelectronic hardware.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className={`p-6 rounded-xl bg-space-black/60 border border-slate-800 backdrop-blur-md transition-all duration-300 ${pillar.borderColor} group relative overflow-hidden`}
              whileHover={{ y: -6 }}
            >
              {/* Subtle hover background color overlay */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: `radial-gradient(circle at 100% 0%, ${pillar.color} 0%, transparent 70%)` }}
              />

              <div className="w-12 h-12 rounded-lg bg-deep-navy border border-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {pillar.icon}
              </div>

              <span className="font-orbitron font-bold text-[9px] text-slate-500 tracking-[0.25em] mb-2 block group-hover:text-cyan-glow transition-colors">
                {pillar.tag}
              </span>

              <h3 className="font-outfit font-extrabold text-lg md:text-xl text-slate-200 mb-3 group-hover:text-slate-100 transition-colors">
                {pillar.title}
              </h3>

              <p className="font-inter text-xs md:text-sm text-slate-400 leading-relaxed relative z-10">
                {pillar.desc}
              </p>

              {/* Glowing decorative corner trail */}
              <div className="absolute top-0 right-0 w-[1px] h-0 bg-gradient-to-b from-cyan-glow to-transparent group-hover:h-full transition-all duration-700" />
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-purple-glow to-transparent group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}