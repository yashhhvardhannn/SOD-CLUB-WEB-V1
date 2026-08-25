import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Clock, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', dept: '', feedbackType: 'suggestion', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: '', dept: '', feedbackType: 'suggestion', message: '' });
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative bg-deep-navy/40">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-orbitron font-semibold text-xs tracking-[0.3em] text-cyan-glow uppercase mb-3 block">
            SUGGESTIONS & COORDINATES
          </span>
          <h2 className="font-orbitron font-extrabold text-3xl md:text-5xl text-slate-100 tracking-wide mb-4">
            CONNECT{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-glow to-blue-glow">
              WITH US
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-glow to-cyan-glow mx-auto mb-6 rounded" />
          <p className="font-inter text-slate-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Send us a private suggestion log or find administrative coordinates to reach our department leads directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Direct Coordinates Info Board */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <div className="p-6 rounded-xl border border-slate-800 bg-space-black/60 backdrop-blur-md text-left">
              <span className="block font-orbitron font-bold text-[9px] tracking-widest text-cyan-glow uppercase mb-3">
                PRIMARY COORDINATES
              </span>
              <h3 className="font-outfit font-extrabold text-xl text-slate-200 mb-6">
                Administrative Terminal
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="w-4 h-4 text-cyan-glow mt-1" />
                  <div>
                    <span className="block font-orbitron text-[9px] uppercase tracking-wider text-slate-550">
                      Club Direct Email
                    </span>
                    <a href="mailto:sodclub@bmsit.in" className="font-inter text-xs md:text-sm text-slate-350 hover:text-cyan-glow transition-colors">
                      sodclub@bmsit.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-4 h-4 text-purple-glow mt-1" />
                  <div>
                    <span className="block font-orbitron text-[9px] uppercase tracking-wider text-slate-550">
                      Faculty Advisor Sync
                    </span>
                    <a href="tel:+91990000000" className="font-inter text-xs md:text-sm text-slate-355 hover:text-purple-glow transition-colors">
                      +91 99887 76655
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-4 h-4 text-cyan-glow mt-1" />
                  <div>
                    <span className="block font-orbitron text-[9px] uppercase tracking-wider text-slate-550">
                      Response Cycle
                    </span>
                    <span className="font-inter text-xs md:text-sm text-slate-350">
                      Within 24 Hours (Internal Sync)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Information Board Alert Panel */}
            <div className="p-6 rounded-xl border border-dashed border-cyan-glow/20 bg-cyan-glow/5 text-left relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-glow/5 rounded-full blur-xl" />
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 rounded bg-cyan-glow/10 border border-cyan-glow/20 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-cyan-glow animate-pulse" />
                </div>
                <h4 className="font-orbitron font-bold text-xs tracking-wider text-cyan-glow uppercase">
                  WhatsApp Info Board
                </h4>
              </div>
              <p className="font-inter text-xs text-slate-400 leading-relaxed mb-4">
                Get real-time announcements of labs, meetings, and hardware events. Use the coordinate link below to join our official information board.
              </p>
              <a 
                href="https://chat.whatsapp.com"
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center space-x-1 font-orbitron font-bold text-[9px] tracking-widest text-cyan-glow hover:text-white transition-colors"
              >
                <span>JOIN WHATSAPP TERMINAL</span>
                <span>➔</span>
              </a>
            </div>

          </div>

          {/* Right Column: Private Feedback form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-xl border border-slate-800 bg-space-black/60 backdrop-blur-md shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-glow/5 rounded-full blur-xl" />

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit} 
                    className="space-y-5 text-left"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block font-orbitron text-[9px] uppercase tracking-widest text-slate-500 mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Yashas V. S."
                          className="w-full px-4 py-3 rounded-lg border border-slate-800 bg-space-black text-slate-200 placeholder-slate-650 focus:outline-none focus:border-cyan-glow/40 transition-colors font-inter text-xs"
                        />
                      </div>
                      
                      <div>
                        <label className="block font-orbitron text-[9px] uppercase tracking-widest text-slate-500 mb-2">
                          Department
                        </label>
                        <input
                          type="text"
                          required
                          value={form.dept}
                          onChange={(e) => setForm({ ...form, dept: e.target.value })}
                          placeholder="ECE sophomore"
                          className="w-full px-4 py-3 rounded-lg border border-slate-800 bg-space-black text-slate-200 placeholder-slate-650 focus:outline-none focus:border-cyan-glow/40 transition-colors font-inter text-xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-orbitron text-[9px] uppercase tracking-widest text-slate-500 mb-2">
                        Feedback Type
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        {['suggestion', 'inquiry', 'bug-report'].map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setForm({ ...form, feedbackType: type })}
                            className={`py-2 rounded font-orbitron font-bold text-[9px] tracking-wider uppercase border transition-all ${
                              form.feedbackType === type
                                ? 'border-cyan-glow/40 bg-cyan-glow/5 text-cyan-glow shadow-[0_0_10px_rgba(0,240,255,0.15)]'
                                : 'border-slate-800 bg-space-black text-slate-400 hover:text-slate-200'
                            }`}
                          >
                            {type.replace('-', ' ')}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block font-orbitron text-[9px] uppercase tracking-widest text-slate-500 mb-2">
                        Suggestion Logs
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Detail your engineering ideas or suggestions here..."
                        className="w-full px-4 py-3 rounded-lg border border-slate-800 bg-space-black text-slate-200 placeholder-slate-650 focus:outline-none focus:border-cyan-glow/40 transition-colors font-inter text-xs resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-lg bg-gradient-to-r from-cyan-glow to-blue-glow font-orbitron font-bold text-xs text-space-black tracking-wider shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_25px_rgba(0,240,255,0.55)] transition-all duration-300 flex items-center justify-center space-x-2 mt-4"
                    >
                      <span>DISPATCH LOGS</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-8 rounded-xl border border-cyan-glow/20 bg-cyan-glow/5 text-center"
                  >
                    <CheckCircle2 className="w-12 h-12 text-cyan-glow mx-auto mb-4 animate-bounce" />
                    <h3 className="font-orbitron font-bold text-base text-slate-100 mb-2">
                      Transmission Successful
                    </h3>
                    <p className="font-inter text-xs md:text-sm text-slate-400 leading-relaxed max-w-sm mx-auto">
                      Your suggestion has been logged into our private queue. We appreciate your contribution to optoelectronic engineering at BMSIT&M.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}