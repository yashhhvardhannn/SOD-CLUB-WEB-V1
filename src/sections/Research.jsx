import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, Search, BookOpen, User, 
  Tag, Download, Globe, ChevronDown, CheckCircle2 
} from 'lucide-react';

export default function Research() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedPaper, setExpandedPaper] = useState(null);
  const [signupForm, setSignupForm] = useState({ name: '', email: '', area: 'waveguides' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const preprints = [
    {
      id: 'p-1',
      title: 'Optoelectronic Dispersion Modulation in Graded Refraction Guides',
      authors: 'Yashas V. S., Dr. Ramesh R., Amit Sen',
      abstract: 'This paper presents a novel model to calculate laser pulse broadening in graded-index optical waveguides. By introducing customized spatial refractivity indexes, we demonstrate a significant reduction of intermodal dispersion. Numerical models indicate a 24% improvements in signal transition integrity at frequencies exceeding 12 GHz.',
      stats: 'Published: March 2026 | Citations: Academic Preprint | Focus: Optics',
      tags: ['Waveguides', 'Dispersion', 'Refractive Index', 'Laser Physics'],
      pdf: 'SOD-PRE-2026-001.pdf'
    },
    {
      id: 'p-2',
      title: 'Quantum Confinement & Lasing in Semi-Conductive Colloidal Nano-Crystals',
      authors: 'Meghana Bhat, Prof. Suresh Kumar',
      abstract: 'We report the synthesis and photoluminescence analysis of zinc-alloyed colloidal quantum dots. Under high-frequency excitation, the quantum confinement properties produce pure monochromatic laser emissions with high radiative recombination ratios. Ideal for next-generation organic LED microdisplays.',
      stats: 'Published: Jan 2026 | Citations: Internal Review | Focus: Materials Science',
      tags: ['Quantum Dots', 'Photoluminescence', 'Nanocrystals', 'LEDs'],
      pdf: 'SOD-PRE-2026-002.pdf'
    },
    {
      id: 'p-3',
      title: 'Efficiency Synthesis of Cadmium-Free Heterojunction Thin-Film Solar Layers',
      authors: 'Rohan Deshpande, Dr. Ramesh R.',
      abstract: 'Cadmium-free thin-film heterojunctions present a safer, highly scalable photovoltaic solution. This study catalogs the mechanical and electrical properties of copper-indium-gallium-selenide (CIGS) layers. Prototyping outcomes show a consistent 14.8% photo-conversion efficiency under standard daylight sync tests.',
      stats: 'Published: Nov 2025 | Citations: Internal Review | Focus: Solar Energy',
      tags: ['Photovoltaics', 'CIGS Layers', 'Thin-Film Junctions', 'Efficiency'],
      pdf: 'SOD-PRE-2025-004.pdf'
    }
  ];

  const filteredPreprints = preprints.filter(
    (p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleSignup = (e) => {
    e.preventDefault();
    if (signupForm.name && signupForm.email) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setSignupForm({ name: '', email: '', area: 'waveguides' });
      }, 4000);
    }
  };

  return (
    <section id="research" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-orbitron font-semibold text-xs tracking-[0.3em] text-cyan-glow uppercase mb-3 block">
            ELITE ACADEMIC PREPRINTS
          </span>
          <h2 className="font-orbitron font-extrabold text-3xl md:text-5xl text-slate-100 tracking-wide mb-4">
            RESEARCH{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-glow to-blue-glow">
              LEDGER
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-glow to-cyan-glow mx-auto mb-6 rounded" />
          <p className="font-inter text-slate-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Access our student preprint index, literature reviews, and collaboration pathways.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Preprint Ledger */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Search Bar */}
            <div className="relative">
              <Search className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by paper title or tag parameters..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-800 bg-space-black/50 text-slate-200 placeholder-slate-550 focus:outline-none focus:border-cyan-glow/40 transition-colors font-inter text-sm"
              />
            </div>

            {/* List of Preprints */}
            <div className="space-y-4">
              <AnimatePresence mode="popLayout">
                {filteredPreprints.length > 0 ? (
                  filteredPreprints.map((paper) => (
                    <motion.div
                      key={paper.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="rounded-xl border border-slate-800 bg-space-black/60 backdrop-blur-md hover:border-cyan-glow/20 transition-colors overflow-hidden text-left"
                    >
                      {/* Paper Summary Header Row */}
                      <div 
                        onClick={() => setExpandedPaper(expandedPaper === paper.id ? null : paper.id)}
                        className="p-6 cursor-pointer flex items-start justify-between gap-4"
                      >
                        <div className="flex-1">
                          <span className="block font-orbitron text-[9px] uppercase tracking-widest text-slate-500 mb-1.5">
                            {paper.stats}
                          </span>
                          <h3 className="font-outfit font-bold text-base md:text-lg text-slate-200 tracking-wide mb-3 leading-snug">
                            {paper.title}
                          </h3>
                          <div className="flex items-center space-x-2 text-xs text-slate-400 mb-4">
                            <User className="w-3.5 h-3.5 text-cyan-glow/70" />
                            <span><strong>Authors:</strong> {paper.authors}</span>
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2">
                            {paper.tags.map((tag) => (
                              <span 
                                key={tag} 
                                className="font-orbitron text-[9px] text-slate-400 bg-slate-850 px-2 py-0.5 rounded border border-slate-800"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Chevron Expand Indicator */}
                        <div className="pt-2">
                          <motion.div
                            animate={{ rotate: expandedPaper === paper.id ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="p-1 rounded-lg border border-slate-800 text-slate-400 hover:text-cyan-glow transition-colors"
                          >
                            <ChevronDown className="w-4 h-4" />
                          </motion.div>
                        </div>
                      </div>

                      {/* Expandable Abstract Panel */}
                      <AnimatePresence>
                        {expandedPaper === paper.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="border-t border-slate-850 bg-space-black/90"
                          >
                            <div className="p-6">
                              <h4 className="font-orbitron font-bold text-[10px] text-cyan-glow uppercase tracking-wider mb-2">
                                Abstract Summary
                              </h4>
                              <p className="font-inter text-xs md:text-sm text-slate-400 leading-relaxed mb-6">
                                {paper.abstract}
                              </p>

                              {/* Document actions */}
                              <div className="flex items-center justify-between p-4 rounded-lg bg-deep-navy border border-slate-800/80">
                                <span className="font-orbitron text-[10px] text-slate-500 font-medium">
                                  Document: {paper.pdf}
                                </span>
                                <div className="flex items-center space-x-3">
                                  <button className="flex items-center space-x-1 px-3 py-1.5 rounded bg-cyan-glow/5 border border-cyan-glow/20 text-cyan-glow font-orbitron font-bold text-[9px] tracking-widest hover:bg-cyan-glow hover:text-space-black transition-all">
                                    <Download className="w-3 h-3" />
                                    <span>DOWNLOAD PDF</span>
                                  </button>
                                  <button className="flex items-center space-x-1 px-3 py-1.5 rounded border border-slate-850 bg-space-black text-slate-400 font-orbitron font-bold text-[9px] tracking-widest hover:text-slate-200 hover:border-slate-700 transition-all">
                                    <Globe className="w-3 h-3" />
                                    <span>ARXIV RECORD</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))
                ) : (
                  <div className="text-center py-12 border border-dashed border-slate-800 rounded-xl">
                    <p className="font-inter text-slate-550 text-sm">
                      No preprint papers match your search parameters.
                    </p>
                  </div>
                )}
              </AnimatePresence>
            </div>

          </div>

          {/* Right Column: Collaborate & Signup */}
          <div className="lg:col-span-4 text-left">
            <div className="p-8 rounded-xl border border-purple-glow/20 bg-space-black/60 backdrop-blur-md shadow-2xl relative overflow-hidden h-full flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-glow/5 rounded-full blur-xl" />
              
              <div>
                <span className="font-orbitron font-bold text-[10px] tracking-widest text-purple-glow uppercase mb-3 block">
                  JOIN COHORTS
                </span>
                <h3 className="font-outfit font-extrabold text-2xl text-slate-100 mb-4 tracking-wide leading-tight">
                  Academic Research Circle
                </h3>
                <p className="font-inter text-xs md:text-sm text-slate-400 leading-relaxed mb-8">
                  Are you a researcher or a student passionate about Solid State Device Physics? Register your credentials to sync up with active student circles and collaborative literature reviews.
                </p>

                <AnimatePresence mode="wait">
                  {!formSubmitted ? (
                    <motion.form 
                      key="form"
                      onSubmit={handleSignup} 
                      className="space-y-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div>
                        <label className="block font-orbitron text-[9px] uppercase tracking-widest text-slate-500 mb-1.5">
                          Student/Researcher Name
                        </label>
                        <input
                          type="text"
                          required
                          value={signupForm.name}
                          onChange={(e) => setSignupForm({ ...signupForm, name: e.target.value })}
                          placeholder="Yashas V. S."
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-800 bg-space-black text-slate-200 placeholder-slate-600 focus:outline-none focus:border-purple-glow/40 transition-colors font-inter text-xs"
                        />
                      </div>

                      <div>
                        <label className="block font-orbitron text-[9px] uppercase tracking-widest text-slate-500 mb-1.5">
                          Academic Email Coordinates
                        </label>
                        <input
                          type="email"
                          required
                          value={signupForm.email}
                          onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })}
                          placeholder="yashas@bmsit.edu.in"
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-800 bg-space-black text-slate-200 placeholder-slate-600 focus:outline-none focus:border-purple-glow/40 transition-colors font-inter text-xs"
                        />
                      </div>

                      <div>
                        <label className="block font-orbitron text-[9px] uppercase tracking-widest text-slate-500 mb-1.5">
                          Primary Research Interest
                        </label>
                        <select
                          value={signupForm.area}
                          onChange={(e) => setSignupForm({ ...signupForm, area: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-800 bg-space-black text-slate-300 focus:outline-none focus:border-purple-glow/40 transition-colors font-inter text-xs"
                        >
                          <option value="waveguides">Optoelectronic Waveguides</option>
                          <option value="quantum-dots">Quantum Confinement Crystals</option>
                          <option value="photovoltaics">Thin-Film Heterojunctions</option>
                          <option value="vlsi">VLSI Photonic Integration</option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-glow to-blue-glow font-orbitron font-bold text-xs text-slate-100 tracking-wider transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.2)] hover:shadow-[0_0_20px_rgba(168,85,247,0.35)] mt-6"
                      >
                        SUBMIT APPLICATION
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-6 rounded-xl border border-cyan-glow/20 bg-cyan-glow/5 text-center"
                    >
                      <CheckCircle2 className="w-10 h-10 text-cyan-glow mx-auto mb-4 animate-bounce" />
                      <h4 className="font-orbitron font-bold text-sm text-slate-100 mb-2">
                        Application Dispatched
                      </h4>
                      <p className="font-inter text-xs text-slate-400 leading-relaxed">
                        Our research coordinator will sync up with you shortly at your registered academic email.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}