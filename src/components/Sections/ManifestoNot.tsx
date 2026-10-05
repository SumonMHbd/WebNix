import React from 'react';

export const ManifestoNot: React.FC = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden border-t border-b border-white/5 bg-[#040807]">
      {/* Subtle radial emerald/teal glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-teal-950/15 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        <span className="text-xs uppercase font-['Special_Elite',monospace] tracking-widest text-[#35c39f] mb-4">
          The Manifesto
        </span>

        <h2 className="font-['New_Rocker',Impact,sans-serif] text-4xl sm:text-6xl md:text-7xl text-[#e9f0ec] leading-tight mb-8">
          This is not a generation. <br />
          <em className="text-[#35c39f] not-italic">This is an outbreak.</em>
        </h2>

        <div className="space-y-6 text-[#b7c5be] font-['Cormorant_Garamond',serif] text-xl sm:text-2xl font-light italic leading-relaxed max-w-3xl">
          <p>
            They conditioned you to sit in straight rows, memorize outdated syllabi, and trade your most potent twenties for an unpaid internship and an entry-level cubicle.
          </p>
          <p className="text-[#e9f0ec]">
            We dropped out not because we lacked discipline, but because we refused to drown in their stagnant pond.
          </p>
          <p className="text-base sm:text-lg font-normal not-italic font-['Inter',sans-serif] text-[#7f918a] max-w-2xl mx-auto pt-2">
            Skills to Bills is the blueprint for extracting real income from the borderless global economy. High-ticket video editing, client closing protocols, and AI operational leverage.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-white/10 w-full">
          <div>
            <div className="font-['Special_Elite',monospace] text-3xl sm:text-4xl text-[#35c39f]">3,400+</div>
            <div className="text-xs text-[#7f918a] uppercase tracking-wider font-['Inter',sans-serif] mt-1">Sovereign Dropouts</div>
          </div>
          <div>
            <div className="font-['Special_Elite',monospace] text-3xl sm:text-4xl text-[#e9f0ec]">$1.8M+</div>
            <div className="text-xs text-[#7f918a] uppercase tracking-wider font-['Inter',sans-serif] mt-1">Foreign Client Billings</div>
          </div>
          <div>
            <div className="font-['Special_Elite',monospace] text-3xl sm:text-4xl text-[#e03a2e]">62+</div>
            <div className="text-xs text-[#7f918a] uppercase tracking-wider font-['Inter',sans-serif] mt-1">Stage Giveaways Handed</div>
          </div>
          <div>
            <div className="font-['Special_Elite',monospace] text-3xl sm:text-4xl text-amber-400">10h 00m</div>
            <div className="text-xs text-[#7f918a] uppercase tracking-wider font-['Inter',sans-serif] mt-1">Uncut Documentary Proof</div>
          </div>
        </div>
      </div>
    </section>
  );
};
