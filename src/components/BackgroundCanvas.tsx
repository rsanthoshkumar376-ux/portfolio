import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

export const BackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle setup
    const particleCount = Math.min(Math.floor((width * height) / 22000), 55);
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.6 + 0.8,
        alpha: Math.random() * 0.5 + 0.2
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const isDark = theme === 'dark';
      const nodeColor = isDark ? 'rgba(0, 242, 254, ' : 'rgba(37, 99, 235, ';
      const lineColor = isDark ? 'rgba(56, 189, 248, ' : 'rgba(59, 130, 246, ';

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        else if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        else if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${nodeColor}${p.alpha})`;
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const opacity = (1 - dist / 110) * 0.16;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `${lineColor}${opacity})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic ambient glowing light blobs */}
      <div 
        className="absolute -top-[15%] left-[10%] w-[500px] h-[500px] rounded-full blur-[140px] opacity-25 dark:opacity-20 transition-all duration-700 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,242,254,0.6) 0%, rgba(37,99,235,0.2) 70%, transparent 100%)'
        }}
      />
      <div 
        className="absolute top-[45%] -right-[10%] w-[550px] h-[550px] rounded-full blur-[160px] opacity-20 dark:opacity-15 transition-all duration-700 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.6) 0%, rgba(14,165,233,0.2) 70%, transparent 100%)'
        }}
      />
      <div 
        className="absolute -bottom-[10%] left-[25%] w-[600px] h-[600px] rounded-full blur-[160px] opacity-20 dark:opacity-15 transition-all duration-700 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,242,254,0.4) 0%, rgba(30,58,138,0.3) 70%, transparent 100%)'
        }}
      />

      {/* Grid overlay for tech aesthetic */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #38BDF8 1px, transparent 1px), linear-gradient(to bottom, #38BDF8 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};
