import React, { useEffect, useRef } from 'react';

interface StormCanvasProps {
  intensity?: number;
  className?: string;
}

export const StormCanvas: React.FC<StormCanvasProps> = ({ intensity = 1, className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Prepare offscreen sprite
    const sprite = document.createElement('canvas');
    sprite.width = 256;
    sprite.height = 256;
    const sCtx = sprite.getContext('2d');
    if (sCtx) {
      const grad = sCtx.createRadialGradient(128, 128, 10, 128, 128, 128);
      grad.addColorStop(0, 'rgba(160, 200, 185, 0.45)');
      grad.addColorStop(0.35, 'rgba(120, 170, 150, 0.18)');
      grad.addColorStop(0.7, 'rgba(70, 110, 95, 0.06)');
      grad.addColorStop(1, 'rgba(4, 8, 7, 0)');
      sCtx.fillStyle = grad;
      sCtx.fillRect(0, 0, 256, 256);
    }

    let cw = (canvas.width = window.innerWidth);
    let ch = (canvas.height = window.innerHeight);

    const isMobile = window.innerWidth < 768;
    const N = Math.floor((isMobile ? 14 : 26) * intensity);

    interface Puff {
      x: number;
      y: number;
      r: number;
      vx: number;
      vy: number;
      a: number;
      rot: number;
      vr: number;
    }

    const newPuff = (anywhere = false): Puff => {
      const r = (160 + Math.random() * 260) * (isMobile ? 0.75 : 1);
      return {
        x: Math.random() * cw,
        y: anywhere ? Math.random() * ch : ch + r,
        r,
        vx: -(0.06 + Math.random() * 0.22),
        vy: -(0.08 + Math.random() * 0.2),
        a: (0.05 + Math.random() * 0.12) * intensity,
        rot: Math.random() * Math.PI * 2,
        vr: (Math.random() - 0.5) * 0.0018
      };
    };

    const puffs: Puff[] = [];
    for (let i = 0; i < N; i++) {
      puffs.push(newPuff(true));
    }

    const handleResize = () => {
      cw = canvas.width = window.innerWidth;
      ch = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    let animationId: number;
    let lastTime = performance.now();
    let gust = 1.0;

    const render = (time: number) => {
      if (time - lastTime > 32) {
        lastTime = time;
        ctx.clearRect(0, 0, cw, ch);

        // Wind variability
        gust = 0.9 + Math.sin(time * 0.0008) * 0.25;

        for (let i = 0; i < puffs.length; i++) {
          const p = puffs[i];
          p.x += p.vx * gust;
          p.y += p.vy;
          p.rot += p.vr;

          if (p.y < -p.r || p.x < -p.r) {
            puffs[i] = newPuff(false);
          }

          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rot);
          ctx.globalAlpha = p.a;
          ctx.drawImage(sprite, -p.r, -p.r, p.r * 2, p.r * 2);
          ctx.restore();
        }
      }
      animationId = requestAnimationFrame(render);
    };

    animationId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [intensity]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-10 opacity-70 ${className}`}
      aria-hidden="true"
    />
  );
};
