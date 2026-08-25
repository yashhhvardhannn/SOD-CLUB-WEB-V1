import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Cpu, Award, BookOpen, Globe, ArrowRight, User, X } from 'lucide-react';

import chinmayeePhoto from '../assets/team-photos/Chinmayee Notakar Satish.jpeg';
import charishmaphoto from '../assets/team-photos/Charishma Bellad.jpeg';
import jolyphoto from '../assets/team-photos/Abhinav Joly.JPG';
import bhumikaphoto from '../assets/team-photos/Bhumika B.jpg';

// Custom SVG Linkedin component since Lucide v1.0.0 removed brand icons
const Linkedin = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// Custom SVG Instagram component since Lucide v1.0.0 removed brand icons
const Instagram = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

// Specialized Card Component enabling mathematical 3D tilt and hover pop-up
function TeamCard({ member, idx, onSelect }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    const rotateX = (-mouseY / (height / 2)) * 12;
    const rotateY = (mouseX / (width / 2)) * 12;
    
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.04, y: -8 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.08, duration: 0.4 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelect(member)}
      style={{
        transformStyle: 'preserve-3d',
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: isHovered ? 'none' : 'transform 0.5s ease-out, scale 0.3s ease-out',
      }}
      className={`p-6 rounded-xl bg-space-black/60 border backdrop-blur-md relative overflow-hidden transition-all duration-300 cursor-pointer ${
        member.primary 
          ? 'border-cyan-glow/30 hover:shadow-[0_15px_35px_rgba(0,240,255,0.25)]' 
          : 'border-slate-800 hover:border-purple-glow/40 hover:shadow-[0_15px_35px_rgba(168,85,247,0.2)]'
      } group`}
    >
      {/* Decorative wafer circular patterns floating in back */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,240,255,0.03),transparent_70%)] pointer-events-none" />

      {/* Avatar Container - shows real photo if available, falls back to icon */}
      <div className="relative w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden border-2 border-slate-800 group-hover:border-cyan-glow transition-colors duration-300 z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)] bg-deep-navy/90 flex items-center justify-center">
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover relative z-10"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-glow/20 to-cyan-glow/20 z-10 opacity-60 group-hover:opacity-0 transition-opacity pointer-events-none" />
            <User className="w-12 h-12 text-slate-400 group-hover:text-cyan-glow transition-colors duration-300 relative z-20" />
          </>
        )}
      </div>

      {/* Badge Indicator */}
      <div className="flex justify-center mb-3">
        <span className={`inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded font-orbitron font-bold text-[8px] tracking-wider uppercase border ${
          member.primary 
            ? 'border-cyan-glow/20 bg-cyan-glow/5 text-cyan-glow' 
            : 'border-purple-glow/20 bg-purple-glow/5 text-purple-glow'
        }`}>
          {member.tagIcon}
          <span>{member.role}</span>
        </span>
      </div>

      {/* Member Details */}
      <div style={{ transform: 'translateZ(30px)' }} className="text-center">
        <h3 className="font-outfit font-extrabold text-lg text-slate-200 mb-1 group-hover:text-slate-100 transition-colors">
          {member.name}
        </h3>
        <p className="font-inter text-xs text-slate-400 mb-5">
          {member.department}
        </p>

        {/* Social coordinates */}
        <div className="flex items-center justify-center space-x-2.5" onClick={(e) => e.stopPropagation()}>
          <a 
            href={member.linkedin || 'https://linkedin.com'}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg border border-slate-850 bg-deep-navy text-slate-500 hover:text-[#0A66C2] hover:border-[#0A66C2]/60 hover:bg-[#0A66C2]/10 hover:shadow-[0_0_15px_rgba(10,102,194,0.6)] transition-all duration-300 shadow-md"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-3.5 h-3.5" />
          </a>
          <a 
            href={member.instagram || 'https://instagram.com'}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg border border-slate-850 bg-deep-navy text-slate-500 hover:text-[#E4405F] hover:border-[#E4405F]/60 hover:bg-[#E4405F]/10 hover:shadow-[0_0_15px_rgba(228,64,95,0.6)] transition-all duration-300 shadow-md"
            title="Instagram Profile"
          >
            <Instagram className="w-3.5 h-3.5" />
          </a>
          <a 
            href={`mailto:${member.email}`}
            className="p-2 rounded-lg border border-slate-850 bg-deep-navy text-slate-500 hover:text-cyan-glow hover:border-cyan-glow/60 hover:bg-cyan-glow/10 hover:shadow-[0_0_15px_rgba(0,240,255,0.6)] transition-all duration-300 shadow-md"
            title="Send Email"
          >
            <Mail className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
      
      {/* Decorative linear edge tracer */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-glow to-transparent group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
}


export default function MeetTheTeam({ onOpenCrew }) {
  const [selectedMember, setSelectedMember] = useState(null);

  const members = [
    {
      name: 'Abhinav Joly A',
      role: 'Secretatry',
      department: 'ECE',
      photo: jolyphoto,
      linkedin: 'https://linkedin.com',
      email: '25ug1byec020@bmsit.in',
      primary: false,
      tagIcon: <Award className="w-3 h-3 text-cyan-glow" />
    },
    {
      name: 'Chinmayee Notakar Satish',
      role: 'CLUB CHAIR',
      department: 'ECE',
      photo: chinmayeePhoto,
      linkedin: 'https://linkedin.com',
      email: '25ug1byec005@bmsit.in',
      primary: true,
      tagIcon: <Cpu className="w-3 h-3 text-purple-glow" />
    },
    {
      name: 'Charishma Bellad',
      role: 'VICE CHAIR',
      department: 'ECE',
      photo: charishmaphoto,
      linkedin: 'https://linkedin.com',
      email: '25ug1byec016@bmsit.in',
      primary: false,
      tagIcon: <BookOpen className="w-3 h-3 text-purple-glow" />
    },
    {
      name: 'Bhumika B',
      role: 'Joint Secretary',
      department: 'ECE',
      photo: bhumikaphoto,
      linkedin: 'https://linkedin.com',
      email: '25ug1byec141@bmsit.in',
      primary: false,
      tagIcon: <Globe className="w-3 h-3 text-purple-glow" />
    }
  ];

  const handleCrewClick = () => {
    window.location.hash = 'crew';
    if (onOpenCrew) onOpenCrew();
  };

  return (
    <section id="team" className="py-24 px-6 relative bg-deep-navy/30">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-orbitron font-semibold text-xs tracking-[0.3em] text-cyan-glow uppercase mb-3 block">
            INTELLECTUAL ROSTER
          </span>
          <h2 className="font-orbitron font-extrabold text-3xl md:text-5xl text-slate-100 tracking-wide mb-4">
            MEET THE{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-glow to-purple-glow">
              TEAM
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-glow to-purple-glow mx-auto mb-6 rounded" />
          <p className="font-inter text-slate-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Faculty mentorship paired with sophomore and senior student innovators driving optoelectronic exploration.
          </p>
        </div>

        {/* 3D Tilt & Pop-Up Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member, idx) => (
            <TeamCard key={member.name} member={member} idx={idx} onSelect={setSelectedMember} />
          ))}
        </div>

        {/* Whole Crew Button */}
        <div className="mt-14 text-center">
          <button 
            onClick={handleCrewClick}
            className="inline-flex items-center space-x-3 px-8 py-3.5 rounded-xl border border-cyan-glow/30 bg-cyan-glow/5 font-orbitron font-bold text-xs tracking-widest text-cyan-glow hover:bg-cyan-glow hover:text-space-black hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all duration-300 group cursor-pointer"
          >
            <span>WHOLE CREW</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
          </button>
        </div>

      </div>

      {/* Detail Pop-Up Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-space-black/85 backdrop-blur-md"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 25 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 25 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md rounded-2xl border border-cyan-glow/30 bg-space-black p-8 shadow-[0_0_50px_rgba(0,240,255,0.25)] text-center relative overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 p-2 rounded-lg border border-slate-800 text-slate-400 hover:text-cyan-glow hover:border-cyan-glow/30 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Avatar - shows real photo if available, falls back to icon */}
              <div className="w-24 h-24 mx-auto mb-4 rounded-full border-2 border-cyan-glow/40 bg-deep-navy/90 flex items-center justify-center shadow-[0_0_25px_rgba(0,240,255,0.3)] overflow-hidden">
                {selectedMember.photo ? (
                  <img
                    src={selectedMember.photo}
                    alt={selectedMember.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User className="w-10 h-10 text-cyan-glow" />
                )}
              </div>

              {/* Member Title */}
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded font-orbitron font-bold text-[9px] tracking-wider uppercase border border-cyan-glow/30 bg-cyan-glow/10 text-cyan-glow mb-3">
                {selectedMember.tagIcon}
                <span>{selectedMember.role}</span>
              </span>

              <h2 className="font-outfit font-extrabold text-2xl text-slate-100 mb-1">
                {selectedMember.name}
              </h2>
              <p className="font-inter text-xs text-slate-400 mb-5">
                {selectedMember.department}
              </p>

              {/* Bio Statement */}
              <div className="p-4 rounded-xl border border-slate-800/80 bg-deep-navy/50 mb-6 text-left">
                <span className="block font-orbitron text-[9px] uppercase tracking-wider text-slate-400 mb-1">
                  CONTRIBUTION & FOCUS
                </span>
                <p className="font-inter text-xs text-slate-300 leading-relaxed">
                  Pioneering semiconductor research, hardware innovation, and optoelectronic device design at the SOD Club of BMSIT&M.
                </p>
              </div>

              {/* Social Buttons */}
              <div className="flex items-center justify-center space-x-3 mb-6">
                <a
                  href={selectedMember.linkedin || 'https://linkedin.com'}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-lg border border-slate-800 bg-deep-navy text-slate-300 hover:text-[#0A66C2] hover:border-[#0A66C2]/60 hover:bg-[#0A66C2]/10 hover:shadow-[0_0_15px_rgba(10,102,194,0.6)] font-orbitron text-xs font-bold transition-all flex items-center space-x-2"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LINKEDIN</span>
                </a>
                <a
                  href={selectedMember.instagram || 'https://instagram.com'}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-lg border border-slate-800 bg-deep-navy text-slate-300 hover:text-[#E4405F] hover:border-[#E4405F]/60 hover:bg-[#E4405F]/10 hover:shadow-[0_0_15px_rgba(228,64,95,0.6)] font-orbitron text-xs font-bold transition-all flex items-center space-x-2"
                >
                  <Instagram className="w-4 h-4" />
                  <span>INSTAGRAM</span>
                </a>
              </div>

              <a
                href={`mailto:${selectedMember.email}`}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-glow to-blue-glow font-orbitron font-bold text-xs text-space-black tracking-wider shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] transition-all flex items-center justify-center space-x-2"
              >
                <Mail className="w-4 h-4" />
                <span>DISPATCH EMAIL</span>
              </a>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}