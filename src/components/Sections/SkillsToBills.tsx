import React, { useState } from 'react';
import { SPIRITS } from '../../data/siteData';

export const SkillsToBills: React.FC = () => {
  const [activeSpirit, setActiveSpirit] = useState<number | null>(1);

  return (
    <section id="skills" className="relative py-28 px-4 overflow-hidden bg-[#040807]">
      {/* Background Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-950/20 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Head */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-['Special_Elite',monospace] tracking-widest text-[#e03a2e] mb-3 inline-block">
            The Curriculum
          </span>
          <h2 className="font-['New_Rocker',Impact,sans-serif] text-5xl sm:text-7xl text-[#e9f0ec] leading-tight mb-4">
            Skills <em className="text-[#e03a2e] not-italic">to</em> Bills.
          </h2>
          <p className="font-['Cormorant_Garamond',serif] text-xl sm:text-2xl text-[#b7c5be] italic font-light">
            One course. Every skill. For everyone who is done being sold to.
          </p>
        </div>

        {/* Spirits Interactive Grid / Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SPIRITS.map((spirit, idx) => {
            const isSelected = activeSpirit === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveSpirit(idx)}
                className={`relative group rounded-xl p-6 transition-all duration-300 cursor-pointer border ${
                  spirit.prime
                    ? 'border-red-500/60 bg-gradient-to-b from-[#260907]/90 to-[#0e0404]/90 shadow-[0_0_25px_rgba(224,58,46,0.3)]'
                    : isSelected
                    ? 'border-emerald-500/50 bg-[#07130f]/80 shadow-[0_0_20px_rgba(53,195,159,0.2)]'
                    : 'border-white/10 bg-black/40 hover:border-white/20 hover:bg-black/70'
                }`}
              >
                {/* Prime Badge */}
                {spirit.prime && (
                  <span className="absolute top-4 right-4 text-[10px] font-['Special_Elite',monospace] uppercase tracking-wider text-red-400 bg-red-950/60 px-2 py-0.5 rounded border border-red-500/30">
                    Core Engine
                  </span>
                )}

                <div className="flex items-start gap-3.5">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center font-['Special_Elite',monospace] text-xs font-bold shrink-0 ${
                      spirit.prime
                        ? 'bg-red-500 text-white shadow-[0_0_10px_rgba(224,58,46,0.8)]'
                        : isSelected
                        ? 'bg-emerald-400 text-black'
                        : 'bg-white/10 text-[#7f918a] group-hover:text-white'
                    }`}
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </div>

                  <div>
                    <h3 className="font-['New_Rocker',Impact,sans-serif] text-2xl text-[#e9f0ec] group-hover:text-white transition-colors">
                      {spirit.title}
                    </h3>
                    <p className="font-['Cormorant_Garamond',serif] text-base sm:text-lg text-[#b7c5be] italic mt-1 leading-snug">
                      {spirit.subtitle}
                    </p>
                  </div>
                </div>

                {/* Bottom Accent line */}
                <div
                  className={`mt-4 h-[1px] w-full transition-all duration-300 ${
                    spirit.prime
                      ? 'bg-gradient-to-r from-red-500/60 to-transparent'
                      : isSelected
                      ? 'bg-gradient-to-r from-emerald-500/60 to-transparent'
                      : 'bg-transparent group-hover:bg-white/10'
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* Foot Banner */}
        <div className="mt-12 text-center">
          <p className="font-['Cormorant_Garamond',serif] text-lg text-[#7f918a] italic">
            You don't need 10 separate masterclasses. You need the unified engine that joins them together.
          </p>
        </div>
      </div>
    </section>
  );
};
