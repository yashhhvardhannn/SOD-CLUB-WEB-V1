import { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
 
  const navItems = [
    { label: 'Home', target: 'hero' },
    { label: 'About', target: 'about' },
    { label: 'Pillars', target: 'explore' },
    { label: 'Events', target: 'events' },
    { label: 'Research', target: 'research' },
    { label: 'Team', target: 'team' },
    { label: 'Contact', target: 'contact' },
  ];

  // Scroll detection  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Detect current section
      const sections = navItems.map(item => document.getElementById(item.target));
      const scrollPosition = window.scrollY + 200;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(navItems[i].target);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);
    if (window.location.hash === '#crew') {
      window.location.hash = '';
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 80; // height of navbar
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 120);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
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
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-space-black/85 backdrop-blur-md border-b border-cyan- glow/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
            : 'py-5 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Brand */}
          <div 
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-cyan-glow/20 flex items-center justify-center bg-deep-navy">
              <img 
                src="/sod-logo.jpg" 
                alt="SOD Club Logo" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div>
              <span className="font-orbitron font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-glow to-purple-glow text-lg">
                SOD CLUB
              </span>
              <span className="block font-outfit text-[9px] uppercase tracking-[0.25em] text-slate-400 group-hover:text-cyan-glow transition-colors">
                BMSIT&M
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollToSection(item.target)}
                className={`relative px-4 py-2 font-outfit text-sm font-medium tracking-wide transition-colors ${
                  activeSection === item.target ? 'text-cyan-glow' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {item.label}
                {activeSection === item.target && (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan-glow"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
            
            <button
              onClick={() => scrollToSection('contact')}
              className="ml-4 px-4 py-1.5 rounded-full border border-purple-glow/30 hover:border-cyan-glow/50 bg-gradient-to-r from-purple-glow/10 to-cyan-glow/10 hover:from-purple-glow/20 hover:to-cyan-glow/20 font-orbitron font-medium tracking-wide text-xs text-purple-glow hover:text-cyan-glow transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.15)] hover:shadow-[0_0_20px_rgba(0,240,255,0.25)]"
            >
              Suggestion
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg border border-slate-800 text-slate-400 hover:text-cyan-glow hover:border-cyan-glow/30 transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[70px] left-0 w-full z-30 md:hidden bg-space-black/95 backdrop-blur-lg border-b border-cyan-glow/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          >
            <div className="px-6 py-6 flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.target}
                  onClick={() => scrollToSection(item.target)}
                  className={`w-full text-left py-2 font-outfit text-base tracking-wide border-b border-slate-900/50 transition-colors ${
                    activeSection === item.target ? 'text-cyan-glow font-semibold' : 'text-slate-400'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full py-3 rounded-lg border border-purple-glow/30 bg-gradient-to-r from-purple-glow/10 to-cyan-glow/10 font-orbitron font-medium tracking-wider text-sm text-purple-glow hover:text-cyan-glow text-center transition-all"
              >
                COLLABORATE
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}