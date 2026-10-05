import React, { useEffect, useState } from 'react';
import { ASSETS_BASE } from '../../data/siteData';

interface GateHeroProps {
  onJoinWaitlist: () => void;
  onExploreSkills: () => void;
}

export const GateHero: React.FC<GateHeroProps> = ({ onJoinWaitlist, onExploreSkills }) => {
  // Live countdown
  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 8,
    minutes: 42,
    seconds: 19,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 14);
    targetDate.setHours(targetDate.getHours() + 8);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="top" className="relative min-h-[92vh] flex flex-col items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          className="w-full h-full object-cover opacity-35 filter brightness-75 contrast-125"
          autoPlay
          muted
          loop
          playsInline
          poster={`${ASSETS_BASE}img/storm-loop-poster.jpg`}
        >
          <source src={`${ASSETS_BASE}video/storm-loop.mp4`} type="video/mp4" />
        </video>
        {/* Radial vignette fade */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#040807]/70 to-[#040807]" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#040807] to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center mt-12">
        {/* Kicker */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-red-500/25 bg-red-950/20 text-[#b7c5be] text-xs font-['Special_Elite',monospace] uppercase tracking-widest mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <span>Skills to Bills · Coming This October</span>
        </div>

        {/* Main Title */}
        <h1 className="font-['New_Rocker',Impact,sans-serif] text-5xl sm:text-7xl md:text-8xl tracking-tight text-[#e9f0ec] leading-[0.95] mb-6 drop-shadow-[0_4px_30px_rgba(224,58,46,0.3)] select-none">
          We are <em className="text-[#e03a2e] not-italic underline decoration-red-600/30">coming.</em>
        </h1>

        {/* Subtitle / Whisper */}
        <p className="font-['Cormorant_Garamond',serif] text-xl sm:text-2xl md:text-3xl text-[#b7c5be] max-w-2xl font-light italic leading-snug mb-10">
          The storm does not ask for permission. It takes back what belongs to the restless.
        </p>

        {/* Live Countdown Grid */}
        <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md w-full mb-10 p-3 sm:p-4 rounded-xl border border-white/10 bg-black/60 backdrop-blur-md shadow-2xl">
          {[
            { label: 'Days', val: timeLeft.days },
            { label: 'Hours', val: timeLeft.hours },
            { label: 'Minutes', val: timeLeft.minutes },
            { label: 'Seconds', val: timeLeft.seconds },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="font-['Special_Elite',monospace] text-2xl sm:text-4xl text-[#e9f0ec] font-bold">
                {String(item.val).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs font-['Inter',sans-serif] uppercase tracking-wider text-[#7f918a] mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            type="button"
            onClick={onJoinWaitlist}
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-red-500/80 bg-radial from-[#e0473a] via-[#9e1c13] to-[#4a0d0a] text-white font-['Special_Elite',monospace] text-sm uppercase tracking-widest shadow-[0_0_40px_rgba(224,58,46,0.5)] hover:shadow-[0_0_60px_rgba(224,58,46,0.85)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            Put Me On The List
          </button>

          <button
            type="button"
            onClick={onExploreSkills}
            className="w-full sm:w-auto px-6 py-4 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-[#e9f0ec] font-['Special_Elite',monospace] text-sm uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Explore The 5 Pillars</span>
            <span>↓</span>
          </button>
        </div>

        {/* Micro Guarantee Note */}
        <p className="mt-4 text-xs font-['Cormorant_Garamond',serif] italic text-[#7f918a]">
          One dispatch when the registration gate opens. No marketing noise.
        </p>
      </div>
    </section>
  );
};
