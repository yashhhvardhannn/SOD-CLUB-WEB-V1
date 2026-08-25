import { motion } from 'framer-motion';
import { Eye, Target, Compass, BookOpen, Layers, Award, Milestone } from 'lucide-react';

export default function About() {
  const timelineEvents = [
    {
      year: '2025 (Q3)',
      title: 'Inception',
      desc: 'Formed by passionate engineering students at BMSIT&M eager to bridge the gap in semiconductor exposure.',
      icon: <Milestone className="w-4 h-4 text-cyan-glow" />,
    },
    {
      year: '2025 (Q4)',
      title: 'First Laser Assembly Lab',
      desc: 'Set up custom light waveguide experiment kits and initiated our first paper discussion series.',
      icon: <Layers className="w-4 h-4 text-purple-glow" />,
    },
    {
      year: '2026 (Q1)',
      title: 'Industry Mentorship Sync',
      desc: 'Partnered with VLSI experts and optoelectronic researchers for monthly expert advisory panels.',
      icon: <Award className="w-4 h-4 text-cyan-glow" />,
    },
    {
      year: '2026 (Active)',
      title: 'Bleeding Edge Prototyping',
      desc: 'Currently developing student-designed photodetector boards and testing custom wafer properties.',
      icon: <BookOpen className="w-4 h-4 text-purple-glow" />,
    },
  ];

  const pillarCards = [
    {
      title: 'Vision',
      icon: <Eye className="w-6 h-6 text-cyan-glow" />,
      content: 'To foster a premier ecosystem for semiconductor and optoelectronic device exploration, cultivating the next generation of materials scientists, VLSI architects, and optical engineering pioneers.',
      color: 'border-cyan-glow/20 shadow-cyan-glow/5 hover:border-cyan-glow/40 hover:shadow-cyan-glow/10',
    },
    {
      title: 'Mission',
      icon: <Target className="w-6 h-6 text-purple-glow" />,
      content: 'Empowering engineering students with core practical exposure through literature study, circuit-level prototyping, expert roundtables, and research collaborations beyond conventional academics.',
      color: 'border-purple-glow/20 shadow-purple-glow/5 hover:border-purple-glow/40 hover:shadow-purple-glow/10',
    },
    {
      title: 'Objectives',
      icon: <Compass className="w-6 h-6 text-cyan-glow" />,
      content: 'Bridges theoretical engineering physics with hardware prototyping. Conducting hands-on workshops on laser systems, optocouplers, semiconductor physics, and circuit architecture integration.',
      color: 'border-cyan-glow/20 shadow-cyan-glow/5 hover:border-cyan-glow/40 hover:shadow-cyan-glow/10',
    },
  ];

  return (
    <section id="about" className="py-24 px-6 relative bg-deep-navy/40">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-extrabold text-3xl md:text-5xl text-slate-100 tracking-wide mb-4">
            GET TO KNOW{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-glow to-blue-glow">
              THE SOD CLUB
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-glow to-purple-glow mx-auto mb-6 rounded" />
          <p className="font-inter text-slate-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Fusing physics, chemistry, and electronics to build hardware that interacts with light. Here is our vision and journey.
          </p>
        </div>

        {/* Pillars Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {pillarCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`p-8 rounded-xl bg-space-black/60 border backdrop-blur-md shadow-2xl transition-all duration-300 ${card.color} group`}
            >
              <div className="w-12 h-12 rounded-lg bg-deep-navy border border-slate-800/80 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="font-orbitron font-bold text-xl text-slate-200 mb-4 group-hover:text-cyan-glow transition-colors">
                {card.title}
              </h3>
              <p className="font-inter text-sm text-slate-400 leading-relaxed">
                {card.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Vertical Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-5 text-left">
            <span className="font-orbitron font-semibold text-xs tracking-widest text-purple-glow uppercase mb-3 block">
              OUR CHRONOLOGY
            </span>
            <h3 className="font-outfit font-extrabold text-2xl md:text-4xl text-slate-100 mb-6 leading-tight">
              Fostering optoelectronic innovators since day one.
            </h3>
            <p className="font-inter text-slate-400 text-sm md:text-base leading-relaxed mb-6">
              The Semiconductors for Optoelectronic Devices club was formed as a passionate response to the lack of hardware exposure in physical-state devices. By compiling student passion and professional VLSI/Optics guidance, we created a self-sustaining ecosystem of discovery.
            </p>
            <div className="p-5 rounded-lg border border-purple-glow/10 bg-purple-glow/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-glow/5 rounded-full blur-xl" />
              <p className="font-orbitron font-medium text-xs text-purple-glow uppercase tracking-wider mb-2">
                Core Catalyst Statement
              </p>
              <p className="font-inter text-xs text-slate-400 italic">
                &ldquo;Optoelectronics is the bridge between materials physics and quantum computation. Our club focuses on practical micro-level execution.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Timeline Grid */}
          <div className="lg:col-span-7 relative pl-6 md:pl-10">
            {/* Timeline center line */}
            <div className="absolute left-[23px] md:left-[39px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-cyan-glow via-purple-glow to-cyan-glow/10" />

            <div className="space-y-8">
              {timelineEvents.map((ev, i) => (
                <motion.div
                  key={ev.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-start space-x-4 md:space-x-6 relative group"
                >
                  {/* Glowing Node */}
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-space-black border-2 border-purple-glow/40 flex items-center justify-center z-10 group-hover:border-cyan-glow transition-colors duration-300 shadow-[0_0_15px_rgba(168,85,247,0.15)] group-hover:shadow-[0_0_20px_rgba(0,240,255,0.25)]">
                    {ev.icon}
                  </div>

                  {/* Card Content */}
                  <div className="flex-1 p-5 rounded-xl border border-slate-800 bg-space-black/50 backdrop-blur-sm group-hover:border-cyan-glow/20 group-hover:bg-space-black/85 transition-all duration-300 text-left">
                    <span className="font-orbitron font-bold text-xs text-cyan-glow tracking-wider mb-1 block">
                      {ev.year}
                    </span>
                    <h4 className="font-outfit font-bold text-base md:text-lg text-slate-200 mb-2 group-hover:text-slate-100 transition-colors">
                      {ev.title}
                    </h4>
                    <p className="font-inter text-xs md:text-sm text-slate-400 leading-relaxed">
                      {ev.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}