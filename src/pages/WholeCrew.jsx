  import { useState, useRef } from 'react';
  import { motion, AnimatePresence } from 'framer-motion';
  import { 
    ArrowLeft, Search, Mail, Cpu, Award, BookOpen, Globe, 
    Code, Palette, Video, Wrench, Megaphone, Calendar, Users, Zap, User
  } from 'lucide-react';

  //importing team photos
const photoModules = import.meta.glob('../assets/team-photos/*.{jpg,jpeg,JPG,JPEG,png,PNG,HEIF}', { eager: true });
  function getPhoto(filename) {
    const match = Object.keys(photoModules).find(path => path.endsWith(filename));
    return match ? photoModules[match].default : '';
  }

  // Custom SVG Linkedin component matching the main team section
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

  // Custom SVG Instagram component matching the main team section
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

  // Futuristic Person Card with 3D Mouse Tilt and Hover Pop-Up
  function PersonCard({ member, idx, onSelect }) {
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
      const rotateX = (-mouseY / (height / 2)) * 10;
      const rotateY = (mouseX / (width / 2)) * 10;
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
        whileHover={{ scale: 1.05, y: -8 }}
        viewport={{ once: true }}
        transition={{ delay: (idx % 6) * 0.06, duration: 0.4 }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onClick={() => onSelect(member)}
        style={{
          transformStyle: 'preserve-3d',
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: isHovered ? 'none' : 'transform 0.5s ease-out, scale 0.3s ease-out',
        }}User className="w-10 h-10 text-cyan-glowUser className="w-10 h-10 text-cyan-glow
        className={`p-6 rounded-xl bg-space-black/60 border backdrop-blur-md relative overflow-hidden transition-all duration-300 cursor-pointer ${
          member.primary 
            ? 'border-cyan-glow/30 hover:shadow-[0_15px_35px_rgba(0,240,255,0.25)]' 
            : 'border-slate-800/90 hover:border-cyan-glow/40 hover:shadow-[0_15px_35px_rgba(0,240,255,0.2)]'
        } group`}
      >
        {/* Circuit background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,240,255,0.03),transparent_70%)] pointer-events-none" />

        {/* Avatar Container with Dummy User Icon */}
      <div className="relative w-24 h-24 mx-auto mb-5 rounded-full overflow-hidden border-2 border-slate-800 group-hover:border-cyan-glow transition-colors duration-300 z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)] bg-deep-navy/90 flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-glow/20 to-cyan-glow/20 z-10 opacity-40 group-hover:opacity-0 transition-opacity pointer-events-none" />
      {member.photo ? (
     <img
       src={member.photo}
      alt={member.name}
      className="w-full h-full object-cover relative z-0"
     />
  ) : (
    <User className="w-10 h-10 text-slate-400 group-hover:text-cyan-glow transition-colors duration-300 relative z-20" />
  )}
</div>

        {/* Role Badge */}
        <div className="flex justify-center mb-3">
          <span className={`inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded font-orbitron font-bold text-[8px] tracking-wider uppercase border ${
            member.primary 
              ? 'border-cyan-glow/30 bg-cyan-glow/10 text-cyan-glow' 
              : 'border-purple-glow/20 bg-purple-glow/5 text-purple-glow'
          }`}>
            {member.tagIcon || <Users className="w-3 h-3 text-cyan-glow" />}
            <span>{member.role}</span>
          </span>
        </div>

        {/* Member Details */}
        <div style={{ transform: 'translateZ(20px)' }} className="text-center">
          <h3 className="font-outfit font-extrabold text-base text-slate-200 mb-1 group-hover:text-cyan-glow transition-colors">
            {member.name}
          </h3>
          <p className="font-inter text-xs text-slate-400 mb-4">
            {member.department}
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-2.5" onClick={(e) => e.stopPropagation()}>
            <a 
              href={member.linkedin || 'https://linkedin.com'}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg border border-slate-850 bg-deep-navy text-slate-400 hover:text-[#0A66C2] hover:border-[#0A66C2]/60 hover:bg-[#0A66C2]/10 hover:shadow-[0_0_15px_rgba(10,102,194,0.6)] transition-all duration-300 shadow-sm"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a 
              href={member.instagram || 'https://instagram.com'}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg border border-slate-850 bg-deep-navy text-slate-400 hover:text-[#E4405F] hover:border-[#E4405F]/60 hover:bg-[#E4405F]/10 hover:shadow-[0_0_15px_rgba(228,64,95,0.6)] transition-all duration-300 shadow-sm"
              title="Instagram Profile"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a 
              href={`mailto:${member.email || 'info@sod.bmsit.in'}`}
              className="p-2 rounded-lg border border-slate-850 bg-deep-navy text-slate-400 hover:text-cyan-glow hover:border-cyan-glow/60 hover:bg-cyan-glow/10 hover:shadow-[0_0_15px_rgba(0,240,255,0.6)] transition-all duration-300 shadow-sm"
              title="Send Direct Mail"
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



  export default function WholeCrew({ onBack }) {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedMember, setSelectedMember] = useState(null);


    // 30 Complete Team Members across 8 Categories
    const categories = [
      {
        id: 'faculty',
        title: '1. Faculty Mentor',
        count: 1,
        icon: <Award className="w-5 h-5 text-cyan-glow" />,
        members: [
          {
            name: 'Dr. Yashaswini',
            role: 'FACULTY ADVISOR',
            department: 'Dept. of Physics',
            photo: getPhoto('Dr Yashaswini.jpg'),
            linkedin: 'https://linkedin.com',
            email: 'ramesh.r@bmsit.in',
            primary: true,
            tagIcon: <Award className="w-3 h-3 text-cyan-glow" />
          }
        ]
      },
      {
        id: 'core',
        title: '2. Core Team',
        count: 5,
        icon: <Cpu className="w-5 h-5 text-purple-glow" />,
        members: [
          {
            name: 'Chinmayee Notakar Satish ',
            role: 'CLUB CHAIR',
            department: 'ECE',
            photo: getPhoto('Chinmayee Notakar Satish.jpeg'),
            linkedin: 'https://linkedin.com',
            email: '25ug1byec005@bmsit.in',
            primary: true,
            tagIcon: <Cpu className="w-3 h-3 text-cyan-glow" />
          },
          {
            name: 'Charishma Bellad',
            role: 'VICE CHAIR',
            department: 'ECE',
            photo: getPhoto('Charishma Bellad.jpeg'),
            linkedin: 'https://linkedin.com',
            email: '25ug1byec016@bmsit.in',
            primary: false,
            tagIcon: <BookOpen className="w-3 h-3 text-purple-glow" />
          },
          {
            name: 'Abhinav Joly A',
            role: 'SECRETARY',
            department: 'ECE',
            photo: getPhoto('Abhinav Joly.JPG'),
            linkedin: 'https://linkedin.com',
            email: '25ug1byec020@bmsit.in',
            primary: false,
            tagIcon: <Globe className="w-3 h-3 text-purple-glow" />
          },
          {
            name: 'Bhumika B',
            role: 'JOINT SECRETART',
            department: 'ECE',
            photo: getPhoto('Bhumika B.jpg'),
            linkedin: 'https://linkedin.com',
            email: '25ug1byec141@bmsit.in',
            primary: false,
            tagIcon: <Zap className="w-3 h-3 text-purple-glow" />
          },
          {
            name: 'Shlok Saitavya',
            role: 'TREASURER',
            department: 'ECE',
            photo: getPhoto('Shlok Saitavya.jpeg'),
            linkedin: 'https://linkedin.com',
            email: '25ug1byec108@bmsit.in',
            primary: false,
            tagIcon: <Globe className="w-3 h-3 text-purple-glow" />
          }
        ]
      },
      {
        id: 'website',
        title: '3. Website Team',
        count: 5,
        icon: <Code className="w-5 h-5 text-cyan-glow" />,
        members: [
          {
            name: 'Ayush Kelkar',
            role: 'WEBMASTER',
            department: 'ECE',
            photo: '',
            linkedin: 'https://linkedin.com',
            email: '25ug1byec117@bmsit.in',
            primary: true,
            tagIcon: <Code className="w-3 h-3 text-cyan-glow" />
          },
          {
            name: 'Ikshita Rai',
            role: 'TECH LIAISON',
            department: 'ECE',
            photo: getPhoto('Ikshita Rai.jpg'),
            linkedin: 'https://linkedin.com',
            email: '25ug1byec107@bmsit.in',
            primary: false,
            tagIcon: <Code className="w-3 h-3 text-purple-glow" />
          },
          {
            name: 'Yash Vardhan Singh',
            role: 'WEB ASSOCIATE',
            department: 'ECE',
            photo: getPhoto('Yash Vardhan Singh.jpg'),
            linkedin: 'https://linkedin.com',
            email: '25ug1byec111@bmsit.in',
            primary: false,
            tagIcon: <Code className="w-3 h-3 text-purple-glow" />
          },
          {
            name: 'Sanjana B',
            role: 'WEB ASSOCIATE',
            department: 'CSE',
            photo: getPhoto('Sanjana B.jpg'),
            linkedin: 'https://linkedin.com',
            email: '25ug1bycs0028@bmsit.in',
            primary: false,
            tagIcon: <Code className="w-3 h-3 text-purple-glow" />
          },
          {
            name: 'Shivan Shantkumar Tallalli',
            role: 'WEB ASSOCIATE',
            department: 'ECE',
            photo: getPhoto('Shivam S.jpg'),
            linkedin: 'https://linkedin.com',
            email: '',
            primary: false,
            tagIcon: <Code className="w-3 h-3 text-purple-glow" />
          }
        ]
      },
      {
        id: 'design',
        title: '4. Design Team',
        count: 3,
        icon: <Palette className="w-5 h-5 text-purple-glow" />,
        members: [
          {
            name: 'Chandas N',
            role: 'DESIGN HEAD',
            department: 'ECE',
            photo: getPhoto('Chandas N.jpg'),
            linkedin: 'https://linkedin.com',
            email: '25ug1byec014@bmsit.in',
            primary: true,
            tagIcon: <Palette className="w-3 h-3 text-cyan-glow" />
          },
          {
            name: 'Adarsh Burgina Chandru',
            role: 'DESIGN HEAD',
            department: 'ECE',
            photo: getPhoto('Adarsh BC.jpeg'),
            linkedin: 'https://linkedin.com',
            email: '25ug1byec043@bmsit.in',
            primary: false,
            tagIcon: <Palette className="w-3 h-3 text-purple-glow" />
          },
          {
            name: 'Bhavitha Nayaka DC',
            role: 'DESIGN ASSOCIATE',
            department: 'ECE',
            photo: getPhoto('Bhavitha.jpg'),
            linkedin: 'https://linkedin.com',
            email: '25ug1byec008@bmsit.in',
            primary: false,
            tagIcon: <Palette className="w-3 h-3 text-purple-glow" />
          }
        ]
      },
      {
        id: 'media',
        title: '5. Media Team',
        count: 3,
        icon: <Video className="w-5 h-5 text-cyan-glow" />,
        members: [
          {
            name: 'Aditya B S',
            role: 'MEDIA HEAD',
            department: 'ECE',
            photo: '',
            linkedin: 'https://linkedin.com',
            email: '25ug1byec083@bmsit.in',
            primary: true,
            tagIcon: <Video className="w-3 h-3 text-cyan-glow" />
          },
          {
            name: 'Darshan G',
            role: 'EDITOR',
            department: 'ECE',
            photo: getPhoto('Darshan.jpg'),
            linkedin: 'https://linkedin.com',
            email: '25ug1byec024@bmsit.in',
            primary: false,
            tagIcon: <Video className="w-3 h-3 text-purple-glow" />
          },
          {
            name: 'Vikas Sajan',
            role: 'EDITOR',
            department: 'ECE',
            photo: getPhoto('vikas sajjan.jpg'),
            linkedin: 'https://linkedin.com',
            email: '25ug1byec167@bmsit.in',
            primary: false,
            tagIcon: <Video className="w-3 h-3 text-purple-glow" />
          }
    
        ]
      },
      {
        id: 'project',
        title: '6. Project Team',
        count: 4,
        icon: <Wrench className="w-5 h-5 text-purple-glow" />,
        members: [
          {
            name: 'Mohith',
            role: 'PROJECT HEAD',
            department: 'ECE',
            photo: getPhoto('Mohith N.jpg'),
            linkedin: 'https://linkedin.com',
            email: '25ug1byec041@bmsit.in',
            primary: true,
            tagIcon: <Wrench className="w-3 h-3 text-cyan-glow" />
          },
          {
            name: 'Archit Kumar',
            role: 'PROJECT ASSOCIATE',
            department: 'ECE',
            photo: getPhoto('Archit Kumar.jpg'),
            linkedin: 'https://linkedin.com',
            email: '25ug1byec097@bmsit.in',
            primary: false,
            tagIcon: <Wrench className="w-3 h-3 text-purple-glow" />
          },
          {
            name: 'Laya M',
            role: 'PROJECT ASSOCIATE',
            department: 'ECE',
            photo: getPhoto('Laya M.jpeg'),
            linkedin: 'https://linkedin.com',
            email: '',
            primary: false,
            tagIcon: <Wrench className="w-3 h-3 text-purple-glow" />
          },
          {
            name: 'Vansh Rajput',
            role: 'PROJECT ASSOCIATE',
            department: 'ECE',
            photo: '',
            linkedin: 'https://linkedin.com',
            email: '25ug1byec010@bmsit.in',
            primary: false,
            tagIcon: <Wrench className="w-3 h-3 text-purple-glow" />
          }
        ]
      },
      {
        id: 'marketing',
        title: '7. Marketing Team',
        count: 3,
        icon: <Megaphone className="w-5 h-5 text-cyan-glow" />,
        members: [
          {
            name: 'Namratha R Bagade',
            role: 'MARKETING HEAD',
            department: 'ECE',
            photo: getPhoto('Namratha.png'),
            linkedin: 'https://linkedin.com',
            email: '25ug1byec156@bmsit.in',
            primary: true,
            tagIcon: <Megaphone className="w-3 h-3 text-cyan-glow" />
          },
          {
            name: 'Keshav Jha',
            role: 'MARKETING ASSOCIATE',
            department: 'CSBS',
            photo: getPhoto('keshav.jpg'),
            linkedin: 'https://linkedin.com',
            email: '25ug1bybs030@bmsit.in',
            primary: false,
            tagIcon: <Megaphone className="w-3 h-3 text-purple-glow" />
          },
          {
            name: 'Sai Sabarish G',
            role: 'MARKETING ASSOCIATE',
            department: 'EEE',
            photo: '',
            linkedin: 'https://linkedin.com',
            email: '25ug1byee028@bmsit.in',
            primary: false,
            tagIcon: <Megaphone className="w-3 h-3 text-purple-glow" />
          }
        ]
      },
      {
        id: 'events_ops',
        title: '8. Event and Ops',
        count: 6,
        icon: <Calendar className="w-5 h-5 text-purple-glow" />,
        members: [
          {
            name: 'Aadya Chirayu Naik',
            role: 'EVENTS & OPS',
            department: 'ECE',
            photo: getPhoto('Aadya Chirayu Naik.JPG'),
            linkedin: 'https://linkedin.com',
            email: '25ug1byec029@bmsit.in',
            primary: true,
            tagIcon: <Calendar className="w-3 h-3 text-cyan-glow" />
          },
          {
            name: 'Kumari Tanishka Bimal',
            role: 'EVENTS & OPS',
            department: 'ECE',
            photo: '',
            linkedin: 'https://linkedin.com',
            email: '25ug1byec058@bmsit.in',
            primary: false,
            tagIcon: <Calendar className="w-3 h-3 text-purple-glow" />
          },
          {
            name: 'Abhaya R Bhat',
            role: 'EVENTS & OPS',
            department: 'EEE',
            photo: getPhoto('Abhaya R Bhat.jpg'),
            linkedin: 'https://linkedin.com',
            email: '25ug1byee021@bmsit.in',
            primary: false,
            tagIcon: <Calendar className="w-3 h-3 text-purple-glow" />
          },
          {
            name: 'Abhinav Seth',
            role: 'EVENTS & OPS',
            department: 'ECE',
            photo: getPhoto('Abhinav Seth.jpg'),
            linkedin: 'https://linkedin.com',
            email: '',
            primary: false,
            tagIcon: <Calendar className="w-3 h-3 text-purple-glow" />
          },
          {
            name: 'Vimarsha V',
            role: 'EVENTS & OPS',
            department: 'CSE',
            photo: getPhoto('Vimarsha_v.jpg'),
            linkedin: 'https://linkedin.com',
            email: '25ug1bycs0104@bmsit.in',
            primary: false,
            tagIcon: <Calendar className="w-3 h-3 text-purple-glow" />
          },
          {
            name: 'D V Aishwarya Lakshmi',
            role: 'EVENTS & OPS',
            department: 'ECE',
            photo: getPhoto('D V Aishwarya Lakshmi .JPG'),
            linkedin: 'https://linkedin.com',
            email: '25ug1byec023@bmsit.in',
            primary: false,
            tagIcon: <Calendar className="w-3 h-3 text-purple-glow" />
          }
        ]
      }
    ];

    // Filter categories based on search or active pill filter
    const filterPills = ['All', 'Faculty Mentor', 'Core Team', 'Website Team', 'Design Team', 'Media Team', 'Project Team', 'Marketing Team', 'Event & Ops'];

    const matchesFilter = (cat) => {
      if (activeCategory === 'All') return true;
      if (activeCategory === 'Faculty Mentor' && cat.id === 'faculty') return true;
      if (activeCategory === 'Core Team' && cat.id === 'core') return true;
      if (activeCategory === 'Website Team' && cat.id === 'website') return true;
      if (activeCategory === 'Design Team' && cat.id === 'design') return true;
      if (activeCategory === 'Media Team' && cat.id === 'media') return true;
      if (activeCategory === 'Project Team' && cat.id === 'project') return true;
      if (activeCategory === 'Marketing Team' && cat.id === 'marketing') return true;
      if (activeCategory === 'Event & Ops' && cat.id === 'events_ops') return true;
      return false;
    };

    return (
      <div className="min-h-screen pt-28 pb-24 px-6 relative z-10 max-w-7xl mx-auto">
        
        {/* Header Bar Navigation & Title */}
        <div className="mb-12 text-center">
          <div className="flex justify-center mb-8">
            <button
              onClick={onBack}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg border border-cyan-glow/20 bg-cyan-glow/5 font-orbitron font-bold text-xs tracking-wider text-cyan-glow hover:bg-cyan-glow hover:text-space-black transition-all duration-300 group cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
              <span>BACK TO MAIN SITE</span>
            </button>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <span className="font-orbitron font-semibold text-xs tracking-[0.35em] text-cyan-glow uppercase mb-3 block">
              SOD CLUB INTELLECTUAL DIRECTORY
            </span>
            <h1 className="font-orbitron font-extrabold text-4xl md:text-6xl text-slate-100 tracking-wide mb-6">
              THE WHOLE{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-glow via-purple-glow to-blue-glow">
                CREW
              </span>
            </h1>
            <p className="font-inter text-slate-400 text-sm md:text-base leading-relaxed mb-8">
              Meet the 30 student innovators, research leads, visual artists, hardware developers, and organizers driving optoelectronic advancement at BMSIT&M.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto p-4 rounded-xl border border-slate-800 bg-space-black/60 backdrop-blur-md shadow-xl mb-10 text-center">
              <div>
                <span className="block font-outfit font-extrabold text-2xl text-cyan-glow">30</span>
                <span className="font-orbitron text-[9px] uppercase tracking-wider text-slate-400">Total Members</span>
              </div>
              <div className="border-x border-slate-800">
                <span className="block font-outfit font-extrabold text-2xl text-purple-glow">8</span>
                <span className="font-orbitron text-[9px] uppercase tracking-wider text-slate-400">Squad Divisions</span>
              </div>
              <div>
                <span className="block font-outfit font-extrabold text-2xl text-slate-200">1</span>
                <span className="font-orbitron text-[9px] uppercase tracking-wider text-slate-400">Shared Vision</span>
              </div>
            </div>
          </div>

          {/* Search & Category Filter Controls */}
          <div className="space-y-6">
            
            {/* Search Bar Input */}
            <div className="max-w-md mx-auto relative">
              <Search className="w-4 h-4 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search team member name, role, or team..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-800 bg-space-black/80 text-slate-200 placeholder-slate-500 text-xs font-inter focus:outline-none focus:border-cyan-glow/40 transition-colors shadow-inner text-center"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center justify-center flex-wrap gap-2 pt-2">
              {filterPills.map((pill) => (
                <button
                  key={pill}
                  onClick={() => setActiveCategory(pill)}
                  className={`px-4 py-2 rounded-lg font-orbitron font-bold text-[10px] tracking-wider transition-all duration-300 cursor-pointer ${
                    activeCategory === pill
                      ? 'bg-gradient-to-r from-cyan-glow to-blue-glow text-space-black shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                      : 'bg-space-black/70 border border-slate-800 text-slate-400 hover:border-cyan-glow/20 hover:text-slate-200'
                  }`}
                >
                  {pill.toUpperCase()}
                </button>
              ))}
            </div>

          </div>

        </div>

        {/* Categorized Person Cards Container */}
        <div className="space-y-16">
          {categories.filter(matchesFilter).map((category) => {
            // Filter members inside category by search query if present
            const filteredMembers = category.members.filter(m => 
              !searchQuery || 
              m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              m.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
              m.department.toLowerCase().includes(searchQuery.toLowerCase())
            );

            if (filteredMembers.length === 0) return null;

            return (
              <div key={category.id} className="relative text-center">
                
                {/* Center-Aligned Category Header */}
                <div className="flex flex-col items-center justify-center text-center mb-10 pb-4 border-b border-slate-800/80 gap-2.5">
                  <div className="flex items-center justify-center space-x-3">
                    <div className="p-2 rounded-lg bg-deep-navy border border-slate-800">
                      {category.icon}
                    </div>
                    <h2 className="font-orbitron font-extrabold text-xl md:text-2xl text-slate-100 tracking-wide">
                      {category.title}
                    </h2>
                  </div>
                  <span className="font-orbitron font-bold text-[10px] tracking-wider text-cyan-glow px-3.5 py-0.5 rounded-full border border-cyan-glow/20 bg-cyan-glow/5">
                    {filteredMembers.length} {filteredMembers.length === 1 ? 'MEMBER' : 'MEMBERS'}
                  </span>
                </div>

                {/* Center-Aligned Cards Flex Grid */}
                <div className="flex flex-wrap justify-center gap-6">
                  {filteredMembers.map((member, idx) => (
                    <div key={member.name} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] max-w-xs">
                      <PersonCard member={member} idx={idx} onSelect={setSelectedMember} />
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {/* Footer Back Button */}
        <div className="mt-20 text-center flex justify-center">
          <button
            onClick={onBack}
            className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-glow to-blue-glow font-orbitron font-bold text-xs tracking-widest text-space-black shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] transition-all duration-300 group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            <span>RETURN TO MAIN LANDING PAGE</span>
          </button>
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
                {/* Avatar Icon */}
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-cyan-glow/40 bg-deep-navy/90 flex items-center justify-center shadow-[0_0_25px_rgba(0,240,255,0.3)]">
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
                  {selectedMember.tagIcon || <Users className="w-3 h-3 text-cyan-glow" />}
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
                    className="px-4 py-2.5 rounded-lg border border-slate-850 bg-deep-navy text-slate-300 hover:text-[#E4405F] hover:border-[#E4405F]/60 hover:bg-[#E4405F]/10 hover:shadow-[0_0_15px_rgba(228,64,95,0.6)] font-orbitron text-xs font-bold transition-all flex items-center space-x-2"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>INSTAGRAM</span>
                  </a>
                </div>

                <a
                  href={`mailto:${selectedMember.email || 'info@sod.bmsit.in'}`}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-glow to-blue-glow font-orbitron font-bold text-xs text-space-black tracking-wider shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] transition-all flex items-center justify-center space-x-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>DISPATCH EMAIL</span>
                </a>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    );
  }

