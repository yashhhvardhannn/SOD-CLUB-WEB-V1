import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorGlow() {
  const [isVisible, setIsVisible] = useState(false);
  
  // High-performance pointer tracking using framer motion motionValues
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs to avoid lagging or jagged motion 
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - 150); // Offset by half the width (300px / 2 = 150px)
      mouseY.set(e.clientY - 150); // Offset by half the height
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => { 
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 w-[300px] h-[300px] rounded-full z-30 blur-[80px] opacity-40 mix-blend-screen"
      style={{
        x: glowX,
        y: glowY,
        background: 'radial-gradient(circle, rgba(0, 240, 255, 0.4) 0%, rgba(168, 85, 247, 0.2) 50%, transparent 100%)',
      }}
    />
  );
}