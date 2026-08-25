import { useEffect, useRef } from 'react';

export default function WaveguideBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Track mouse coordinates for interactive light reaction
    let mouse = { x: canvas.width / 2, y: canvas.height / 2, active: false };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // 1. Floating Quantum Photons/Particles
    const particleCount = Math.min(45, Math.floor(window.innerWidth / 30));
    const particles = [];

    class PhotonParticle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 2 + 1;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = -0.3 - Math.random() * 0.5; // Ascend upward like light beams
        this.alpha = Math.random() * 0.6 + 0.2;
        this.color = Math.random() > 0.45 ? '#00f0ff' : Math.random() > 0.5 ? '#a855f7' : '#3b82f6';
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Mouse repelling/attraction physics
        if (mouse.active) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            const force = (180 - dist) / 180;
            this.x -= (dx / dist) * force * 1.5;
            this.y -= (dy / dist) * force * 1.5;
          }
        }

        // Screen boundaries reset
        if (this.y < -10 || this.x < -10 || this.x > canvas.width + 10) {
          this.reset();
          this.y = canvas.height + 10;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.alpha;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new PhotonParticle());
    }

    // 2. Waveguide Circuit Traces
    const maxTraces = Math.min(22, Math.floor(window.innerWidth / 75));
    const traces = [];

    class CircuitTrace {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.points = [{ x: this.x, y: this.y }];
        this.length = 3 + Math.floor(Math.random() * 4);
        this.segmentLength = 70 + Math.random() * 90;
        this.speed = 0.6 + Math.random() * 1.2;
        this.color = Math.random() > 0.4 ? '#00f0ff' : '#a855f7';
        this.width = Math.random() * 1.2 + 0.6;

        let cx = this.x;
        let cy = this.y;
        const directions = [
          { x: 1, y: 0 },
          { x: 0, y: 1 },
          { x: -1, y: 0 },
          { x: 0, y: -1 },
          { x: 0.707, y: 0.707 },
          { x: -0.707, y: 0.707 }
        ];

        for (let i = 0; i < this.length; i++) {
          const dir = directions[Math.floor(Math.random() * directions.length)];
          cx += dir.x * this.segmentLength;
          cy += dir.y * this.segmentLength;
          this.points.push({ x: cx, y: cy });
        }

        this.particleIndex = 0;
        this.particleProgress = 0;
      }

      update() {
        this.particleProgress += this.speed * 0.012;
        if (this.particleProgress >= 1) {
          this.particleProgress = 0;
          this.particleIndex++;
          if (this.particleIndex >= this.points.length - 1) {
            this.reset();
          }
        }
      }

      draw() {
        // Draw trace line
        ctx.beginPath();
        ctx.moveTo(this.points[0].x, this.points[0].y);
        for (let i = 1; i < this.points.length; i++) {
          ctx.lineTo(this.points[i].x, this.points[i].y);
        }
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.width;
        ctx.globalAlpha = 0.15;
        ctx.stroke();

        // Draw active nodes
        this.points.forEach((pt) => {
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.globalAlpha = 0.25;
          ctx.fill();
        });

        // Draw moving electron laser pulse
        if (this.points[this.particleIndex] && this.points[this.particleIndex + 1]) {
          const start = this.points[this.particleIndex];
          const end = this.points[this.particleIndex + 1];
          const px = start.x + (end.x - start.x) * this.particleProgress;
          const py = start.y + (end.y - start.y) * this.particleProgress;

          ctx.beginPath();
          ctx.arc(px, py, 3.5, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.globalAlpha = 0.85;
          ctx.shadowBlur = 12;
          ctx.shadowColor = this.color;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }
    }

    for (let i = 0; i < maxTraces; i++) {
      traces.push(new CircuitTrace());
    }

    // Main 60fps Animation Loop
    const animate = () => {
      time += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Concentric Rotating Wafer Rings with Energy Pulsing
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(time * 0.03); // Slow ambient rotation

      ctx.lineWidth = 1;
      for (let r = 120; r < Math.max(canvas.width, canvas.height); r += 160) {
        ctx.beginPath();
        ctx.arc(0, 0, r, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(0, 240, 255, 0.035)';
        ctx.stroke();
      }
      ctx.restore();

      // 2. Interactive Mouse Energy Wave Spotlight
      if (mouse.active) {
        const radGradient = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, 220
        );
        radGradient.addColorStop(0, 'rgba(0, 240, 255, 0.06)');
        radGradient.addColorStop(0.5, 'rgba(168, 85, 247, 0.03)');
        radGradient.addColorStop(1, 'transparent');
        ctx.fillStyle = radGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      // 3. Draw & Connect Floating Quantum Photons
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        // Connect nearby floating particles with energy laser threads
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = '#00f0ff';
            ctx.globalAlpha = (1 - dist / 120) * 0.12;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // 4. Update and Draw Circuit Waveguides
      traces.forEach((trace) => {
        trace.update();
        trace.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed top-0 left-0 w-full h-full -z-20 bg-[#02040a]"
    />
  );
}