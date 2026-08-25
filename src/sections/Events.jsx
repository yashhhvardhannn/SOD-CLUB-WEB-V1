import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, MapPin, Users, Award, 
  ChevronRight, ExternalLink, Zap, Info, Clock, CheckCircle2 
} from 'lucide-react';

export default function Events() {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const upcomingEvents = [
    {
      id: 'up-1',
      date: 'June 15, 2026',
      title: 'Optoelectronic Waveguide Design Workshop',
      category: 'Hands-on Lab',
      desc: 'Build and simulate optical waveguides on custom circuit boards. Learn about light coupling, beam steering, and raw phototransistor detection.',
      speaker: 'Dr. Ramesh R. (Materials Physics specialist)',
      location: 'Optics Lab, BMSIT&M',
      time: '10:00 AM - 1:00 PM',
      status: 'Active Registration',
      milestone: 'Milestone 05'
    },
    {
      id: 'up-2',
      date: 'July 08, 2026',
      title: 'VLSI Chip Architecture: Photons & Transistors',
      category: 'Expert Keynote',
      desc: 'An industry briefing on how electronic chips are merging with photonic channels to bypass standard copper clock limits.',
      speaker: 'Shreya K. (Senior Silicon Architect at Intel)',
      location: 'Seminar Hall, Dept of ECE',
      time: '2:30 PM - 4:30 PM',
      status: 'Upcoming Sync',
      milestone: 'Milestone 06'
    },
    {
      id: 'up-3',
      date: 'August 12, 2026',
      title: 'SOD Annual Hack-Wafer Prototyping',
      category: 'Competition',
      desc: 'Form teams to design, assemble, and test custom optoelectronic photodetector boards in under 24 hours.',
      speaker: 'Panel of Academicians & VLSI Judges',
      location: 'Tech Labs & Incubation Center',
      time: '24 Hour Decisive Lab Sprint',
      status: 'Planned Milestone',
      milestone: 'Milestone 07'
    }
  ];

  const archivedEvents = [
    {
      id: 'arc-1',
      date: 'April 12, 2026',
      title: 'Optocoupler & LED Signal Assembly Drive',
      category: 'Lab Archives',
      summary: 'Assembled optocoupler circuits to study isolated electrical signalling via infrared light beams.',
      stats: { participants: '45+', projects: '12 assembled', hours: '4 hrs lab' },
      details: 'Our students gathered in the VLSI Lab to explore electrical signal transfer using custom optocouplers. By creating isolated transmitter-receiver pathways, we successfully achieved signal modulation without raw wire conduction. Special mention to the ECE sophomore team who optimized signal gains by over 18%.',
      speaker: 'Faculty Advisors of SOD Club',
      gallery: 'Wafer circuit prototype models successfully catalogued.'
    },
    {
      id: 'arc-2',
      date: 'April 05, 2026',
      title: 'The Semiconductor Wafer Macro Masterclass',
      category: 'Symposium',
      summary: 'A detailed literature review and macro-visual examination of custom silicon wafer slicing techniques.',
      stats: { participants: '80+', papers: '4 reviews', hours: '2 days sync' },
      details: 'This masterclass bridged the theoretical concepts of material physics with mechanical slicing precision. We analyzed silicon crystallization patterns, wafer doping densities, and macro-structural defects. Guest speaker Dr. Anand S. brought raw wafer samples for real-time microscopic visual exploration.',
      speaker: 'Dr. Anand S. (Research Scientist)',
      gallery: 'High-density micro wafer photography and display logs.'
    },
    {
      id: 'arc-3',
      date: 'April 22, 2026',
      title: 'Inaugural Optical Fiber Dispersion Lab Run',
      category: 'Inaugural Lab',
      summary: 'Launched our club and executed our first physical laser test to catalog pulse widening in optical guides.',
      stats: { participants: '50+', lasers: '3 laser types', hours: '3 hrs lab' },
      details: 'Marking the official launch of the SOD Club, this lab run verified optical pulse dispersion in multimode waveguides. By injecting high-power lasers at multiple angles, sophomore and senior students mapped out refraction indexes and calculated fiber loss margins.',
      speaker: 'Student Founders & ECE Advisors',
      gallery: 'Laser light waveguides illuminated.'
    }
  ];

  return (
    <section id="events" className="py-24 px-6 relative bg-deep-navy/35 overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-glow/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-glow/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-orbitron font-semibold text-xs tracking-[0.3em] text-cyan-glow uppercase mb-3 block">
            ROADMAP & ARCHIVES
          </span>
          <h2 className="font-orbitron font-extrabold text-3xl md:text-5xl text-slate-100 tracking-wide mb-4">
            CLUB{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-glow to-purple-glow">
              EVENTS
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-glow to-purple-glow mx-auto mb-6 rounded" />
          <p className="font-inter text-slate-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Track our future technology milestones or dive deep into the archives of previous engineering labs.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center justify-center mb-16">
          <div className="inline-flex p-1.5 rounded-xl border border-slate-800 bg-space-black/80 backdrop-blur-md relative z-10 shadow-2xl">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-6 py-2.5 rounded-lg font-orbitron font-bold text-xs tracking-wider transition-all duration-300 ${
                activeTab === 'upcoming'
                  ? 'bg-gradient-to-r from-cyan-glow to-blue-glow text-space-black shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              UPCOMING ROADMAP
            </button>
            <button
              onClick={() => setActiveTab('archived')}
              className={`px-6 py-2.5 rounded-lg font-orbitron font-bold text-xs tracking-wider transition-all duration-300 ${
                activeTab === 'archived'
                  ? 'bg-gradient-to-r from-purple-glow to-blue-glow text-slate-100 shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              EVENT ARCHIVES
            </button>
          </div>
        </div>

        {/* Content Panels */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            
            {/* UPCOMING ROADMAP PANEL */}
            {activeTab === 'upcoming' && (
              <motion.div
                key="upcoming"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="relative pl-6 md:pl-20 max-w-4xl mx-auto text-left"
              >
                {/* Connecting glowing progress line */}
                <div className="absolute left-[23px] md:left-[39px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-cyan-glow via-purple-glow to-cyan-glow/10" />

                <div className="space-y-12">
                  {upcomingEvents.map((event, idx) => (
                    <div key={event.id} className="relative flex flex-col md:flex-row md:items-start group">
                      
                      {/* Timeline Milestone Indicator Node */}
                      <div className="absolute -left-[30px] md:-left-[64px] top-1.5 z-10 w-8 h-8 rounded-full bg-space-black border border-cyan-glow/40 flex items-center justify-center shadow-[0_0_12px_rgba(0,240,255,0.2)] group-hover:border-cyan-glow transition-colors duration-300">
                        <div className="w-2.5 h-2.5 rounded-full bg-cyan-glow animate-pulse" />
                      </div>

                      {/* Content Card */}
                      <div className="flex-1 p-6 rounded-xl border border-slate-800 bg-space-black/60 backdrop-blur-md group-hover:border-cyan-glow/20 group-hover:bg-space-black/90 transition-all duration-300 flex flex-col md:flex-row gap-6">
                        
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-3">
                            <span className="font-orbitron font-bold text-[9px] tracking-wider text-cyan-glow px-2 py-0.5 rounded border border-cyan-glow/20 bg-cyan-glow/5">
                              {event.category}
                            </span>
                            <span className="font-orbitron text-[10px] text-slate-500 font-medium">
                              {event.milestone}
                            </span>
                          </div>
                          
                          <h3 className="font-outfit font-extrabold text-xl text-slate-200 mb-3 group-hover:text-slate-100 transition-colors">
                            {event.title}
                          </h3>
                          
                          <p className="font-inter text-xs md:text-sm text-slate-400 leading-relaxed mb-4">
                            {event.desc}
                          </p>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-3 border-t border-slate-800/80">
                            <div className="flex items-center space-x-2 text-[11px] text-slate-400">
                              <Users className="w-3.5 h-3.5 text-cyan-glow/70" />
                              <span className="truncate"><strong>Speaker:</strong> {event.speaker}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-[11px] text-slate-400">
                              <MapPin className="w-3.5 h-3.5 text-cyan-glow/70" />
                              <span className="truncate"><strong>Location:</strong> {event.location}</span>
                            </div>
                          </div>
                        </div>

                        {/* Date panel */}
                        <div className="md:w-44 flex flex-row md:flex-col justify-between md:justify-center items-center md:items-start p-4 rounded-lg bg-deep-navy border border-slate-800/80 gap-3">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-3.5 h-3.5 text-cyan-glow" />
                            <span className="font-orbitron text-[11px] font-bold text-slate-300 uppercase tracking-wide">
                              {event.date}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-3.5 h-3.5 text-purple-glow" />
                            <span className="font-orbitron text-[10px] text-slate-400 font-medium">
                              {event.time}
                            </span>
                          </div>
                          <span className="font-orbitron text-[9px] text-purple-glow font-bold uppercase tracking-widest mt-0 md:mt-2 animate-pulse">
                            {event.status}
                          </span>
                        </div>

                      </div>

                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* EVENT ARCHIVES PANEL */}
            {activeTab === 'archived' && (
              <motion.div
                key="archived"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-left"
              >
                {archivedEvents.map((event, idx) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.08, duration: 0.4 }}
                    className="p-6 rounded-xl bg-space-black/60 border border-slate-800 hover:border-purple-glow/20 backdrop-blur-md flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-[0_10px_25px_rgba(0,0,0,0.4)]"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-orbitron font-bold text-[9px] tracking-wider text-purple-glow px-2 py-0.5 rounded border border-purple-glow/20 bg-purple-glow/5">
                          {event.category}
                        </span>
                        <div className="flex items-center space-x-1.5">
                          <Calendar className="w-3 h-3 text-purple-glow" />
                          <span className="font-orbitron text-[10px] font-bold text-slate-400">
                            {event.date}
                          </span>
                        </div>
                      </div>

                      <h3 className="font-outfit font-bold text-lg text-slate-200 mb-3 group-hover:text-slate-100 transition-colors">
                        {event.title}
                      </h3>

                      <p className="font-inter text-xs text-slate-400 leading-relaxed mb-6">
                        {event.summary}
                      </p>
                    </div>

                    <button
                      onClick={() => setSelectedEvent(event)}
                      className="w-full py-2.5 rounded-lg border border-slate-850 bg-deep-navy font-orbitron font-bold text-[10px] tracking-widest text-slate-400 group-hover:text-purple-glow hover:bg-space-black hover:border-purple-glow/25 transition-all flex items-center justify-center space-x-1.5"
                    >
                      <span>VIEW DIARY LOG</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </motion.div>
                ))}
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>

      {/* DETAILED MODAL DIARY OVERLAYS */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-space-black/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="w-full max-w-2xl rounded-2xl border border-purple-glow/30 bg-space-black p-6 md:p-8 shadow-[0_0_50px_rgba(168,85,247,0.25)] max-h-[90vh] overflow-y-auto text-left relative"
            >
              <div className="absolute top-6 right-6">
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="p-1.5 rounded-lg border border-slate-800 text-slate-400 hover:text-purple-glow hover:border-purple-glow/30 transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="flex items-center space-x-3 mb-4">
                <span className="font-orbitron font-bold text-[10px] tracking-wider text-purple-glow px-2.5 py-0.5 rounded border border-purple-glow/25 bg-purple-glow/5">
                  {selectedEvent.category}
                </span>
                <span className="font-orbitron text-[11px] font-bold text-slate-400 flex items-center space-x-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{selectedEvent.date}</span>
                </span>
              </div>

              <h2 className="font-outfit font-extrabold text-2xl md:text-3xl text-slate-100 tracking-tight leading-snug mb-4">
                {selectedEvent.title}
              </h2>

              <p className="font-orbitron text-xs text-purple-glow/85 font-medium mb-6">
                Speaker/Host Coordinator: {selectedEvent.speaker}
              </p>

              <div className="mb-6">
                <h4 className="font-orbitron font-bold text-xs uppercase tracking-wider text-slate-400 mb-2">
                  Detailed Event Diary Log
                </h4>
                <p className="font-inter text-sm text-slate-300 leading-relaxed">
                  {selectedEvent.details}
                </p>
              </div>

              {/* Stats Block */}
              <div className="grid grid-cols-3 gap-4 p-4 rounded-xl border border-slate-800/80 bg-deep-navy mb-6">
                {Object.entries(selectedEvent.stats).map(([label, val]) => (
                  <div key={label} className="text-center md:text-left">
                    <span className="block font-orbitron text-[9px] uppercase tracking-wider text-slate-500">
                      {label}
                    </span>
                    <span className="font-outfit font-extrabold text-base md:text-lg text-slate-200">
                      {val}
                    </span>
                  </div>
                ))}
              </div>

              {/* Gallery details */}
              <div className="p-4 rounded-xl border border-dashed border-slate-800 bg-space-black">
                <h4 className="font-orbitron font-bold text-[10px] uppercase tracking-wider text-purple-glow mb-1">
                  Recorded Artifact Logs
                </h4>
                <p className="font-inter text-xs text-slate-400 italic">
                  {selectedEvent.gallery}
                </p>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-glow to-blue-glow font-orbitron font-bold text-xs text-slate-100 tracking-wider transition-all shadow-[0_0_15px_rgba(168,85,247,0.2)]"
                >
                  CLOSE LOGS
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
