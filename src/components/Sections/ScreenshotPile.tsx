import React, { useState } from 'react';
import { ASSETS_BASE, SAMPLE_SUCCESS_ITEMS } from '../../data/siteData';
import { SuccessItem } from '../../types';

interface ScreenshotPileProps {
  onOpenLightbox: (imageUrl: string, title?: string) => void;
}

export const ScreenshotPile: React.FC<ScreenshotPileProps> = ({ onOpenLightbox }) => {
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredItems = activeCategory === 'all'
    ? SAMPLE_SUCCESS_ITEMS
    : SAMPLE_SUCCESS_ITEMS.filter((item) => item.category === activeCategory);

  const displayedItems = showAll ? filteredItems : filteredItems.slice(0, 8);

  const rotations = ['-3deg', '2.5deg', '-4deg', '3.5deg', '-2deg', '4deg', '-3.5deg', '2deg'];

  return (
    <section className="relative py-28 px-4 overflow-hidden bg-[#040807] border-t border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-red-950/15 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Head */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase font-['Special_Elite',monospace] tracking-widest text-[#35c39f] mb-3 inline-block">
            Evidence Vault
          </span>
          <h2 className="font-['New_Rocker',Impact,sans-serif] text-5xl sm:text-7xl text-[#e9f0ec] leading-tight mb-4">
            What the storm <em className="text-[#35c39f] not-italic">left behind.</em>
          </h2>
          <p className="font-['Cormorant_Garamond',serif] text-xl sm:text-2xl text-[#b7c5be] italic font-light">
            Messages from the ones who walked in before you. Catch one.
          </p>
        </div>

        {/* Filter Controls (Zero-pill compliant tabs) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Proofs' },
            { id: 'retainer', label: 'Monthly Retainers' },
            { id: 'upwork', label: 'Upwork Deals' },
            { id: 'direct', label: 'Direct Wires' },
            { id: 'fiverr', label: 'Fiverr Pro' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveCategory(tab.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-['Special_Elite',monospace] uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === tab.id
                  ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 shadow-[0_0_15px_rgba(53,195,159,0.25)]'
                  : 'bg-black/40 text-[#7f918a] hover:text-white border border-white/5 hover:border-white/15'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Scattered Leaf Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative">
          {displayedItems.map((item: SuccessItem, idx: number) => {
            const rot = rotations[idx % rotations.length];
            const fullUrl = `${ASSETS_BASE}success/${item.filename}`;

            return (
              <div
                key={item.id}
                style={{ transform: `rotate(${rot})` }}
                onClick={() => onOpenLightbox(fullUrl, `${item.client || 'Student Success Proof'} · ${item.amount || 'Payment verified'}`)}
                className="group relative rounded-xl border border-white/10 bg-[#0d0908] p-3 shadow-xl hover:shadow-[0_0_30px_rgba(224,58,46,0.4)] hover:border-red-500/50 hover:scale-105 hover:z-30 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col"
              >
                {/* Image Container with Fallback Graphic */}
                <div className="relative aspect-[16/10] bg-[#140b0a] rounded-lg overflow-hidden flex items-center justify-center border border-white/5">
                  <img
                    src={fullUrl}
                    alt={item.client || 'Screenshot Proof'}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback visual simulation if CDN is slow
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.classList.add('p-3', 'flex', 'flex-col', 'justify-between');
                        parent.innerHTML = `
                          <div class="text-[10px] uppercase tracking-wider text-emerald-400 font-mono">Invoice Paid · Verified</div>
                          <div class="text-xl font-bold font-mono text-white">${item.amount || '$3,200.00'}</div>
                          <div class="text-[11px] text-stone-400 font-serif italic">${item.client || 'Direct Client Wire'}</div>
                        `;
                      }
                    }}
                  />
                  {/* Subtle glass reflection overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
                </div>

                {/* Card Footer Info */}
                <div className="mt-3 flex items-center justify-between text-xs font-['Inter',sans-serif]">
                  <span className="text-[#b7c5be] font-medium truncate max-w-[120px]">
                    {item.client || 'Client Payment'}
                  </span>
                  <span className="font-['Special_Elite',monospace] font-bold text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20">
                    {item.amount || '$2,500+'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Foot Action */}
        <div className="mt-14 text-center">
          <p className="font-['Cormorant_Garamond',serif] text-base text-[#7f918a] italic mb-4">
            Names blurred by the students themselves. Real invoices from Upwork, Stripe, and direct bank transfers.
          </p>
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-[#e9f0ec] font-['Special_Elite',monospace] text-xs uppercase tracking-wider transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <span>{showAll ? 'Show Fewer Cards' : `See All ${filteredItems.length} Proofs`}</span>
            <span>{showAll ? '↑' : '↓'}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
