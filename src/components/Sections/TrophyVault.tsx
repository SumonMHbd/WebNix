import React from 'react';
import { GIVEAWAYS } from '../../data/siteData';

interface TrophyVaultProps {
  onOpenLightbox: (imageUrl: string, title?: string) => void;
}

export const TrophyVault: React.FC<TrophyVaultProps> = ({ onOpenLightbox }) => {
  return (
    <section className="relative py-28 px-4 overflow-hidden bg-[#040807] border-t border-white/5">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[350px] bg-amber-950/15 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Head */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-['Special_Elite',monospace] tracking-widest text-amber-400 mb-3 inline-block">
            Physical Stage Handover
          </span>
          <h2 className="font-['New_Rocker',Impact,sans-serif] text-5xl sm:text-7xl text-[#e9f0ec] leading-tight mb-4">
            Given. <em className="text-amber-400 not-italic">Not promised.</em>
          </h2>
          <p className="font-['Cormorant_Garamond',serif] text-xl sm:text-2xl text-[#b7c5be] italic font-light">
            MacBooks, PCs, bikes, scholarships, investments, gear. Handed over on a physical stage, not in a comment section.
          </p>
        </div>

        {/* Giveaway Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GIVEAWAYS.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item.imgUrl, `${item.title} — ${item.stage}`)}
              className="group rounded-xl border border-white/10 bg-[#0a0706] p-4 flex flex-col justify-between hover:border-amber-500/50 hover:shadow-[0_0_25px_rgba(245,158,11,0.25)] transition-all duration-300 cursor-pointer"
            >
              {/* Image Preview */}
              <div className="relative aspect-[4/3] rounded-lg bg-black/60 overflow-hidden mb-4 border border-white/5 flex items-center justify-center">
                <img
                  src={item.imgUrl}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="text-center p-3">
                          <div class="text-amber-400 font-mono text-2xl font-bold">🏆</div>
                          <div class="text-xs text-stone-300 font-mono mt-1">Physical Award</div>
                        </div>
                      `;
                    }
                  }}
                />
              </div>

              {/* Details */}
              <div>
                <span className="text-[10px] font-['Special_Elite',monospace] uppercase tracking-wider text-amber-400">
                  {item.stage}
                </span>
                <h3 className="font-['New_Rocker',Impact,sans-serif] text-xl text-[#e9f0ec] mt-1 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-['Inter',sans-serif] text-[#7f918a] mt-1">
                  {item.specs}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-[#b7c5be]">
                <span className="text-[11px] font-['Special_Elite',monospace] text-emerald-400">Verified Stage Delivery</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
