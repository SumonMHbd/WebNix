import React, { useState } from 'react';
import { TECHNICAL_ANALYSIS } from '../data/siteData';

interface AnalysisDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  isSmokeActive: boolean;
  onToggleSmoke: () => void;
  isSoundEnabled: boolean;
  onToggleSound: () => void;
  onTriggerThunder: () => void;
}

export const AnalysisDrawer: React.FC<AnalysisDrawerProps> = ({
  isOpen,
  onClose,
  isSmokeActive,
  onToggleSmoke,
  isSoundEnabled,
  onToggleSound,
  onTriggerThunder,
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl h-full bg-[#080505] border-l border-emerald-500/40 shadow-2xl p-6 sm:p-8 flex flex-col overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="flex items-start justify-between border-b border-white/10 pb-5 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-[11px] font-['Special_Elite',monospace] uppercase text-emerald-300 tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Technical Deep-Dive
            </div>
            <h2 className="font-['New_Rocker',Impact,sans-serif] text-3xl sm:text-4xl text-white">
              Website Analysis &amp; Feasibility
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full border border-white/20 hover:border-white/50 text-white flex items-center justify-center transition-colors cursor-pointer text-sm"
            aria-label="Close Analysis"
          >
            ✕
          </button>
        </div>

        {/* Verdict Callout Banner */}
        <div className="p-5 rounded-xl border border-emerald-500/40 bg-radial from-[#09221b] to-[#040e0b] shadow-[0_0_25px_rgba(53,195,159,0.2)] mb-6">
          <div className="flex items-center gap-2.5 text-emerald-400 font-['Special_Elite',monospace] text-xs uppercase tracking-wider font-bold">
            <span className="text-base">✓</span>
            <span>Verdict: {TECHNICAL_ANALYSIS.verdict}</span>
          </div>
          <p className="mt-2 text-sm text-[#b7c5be] font-['Inter',sans-serif] leading-relaxed">
            {TECHNICAL_ANALYSIS.summary}
          </p>
        </div>

        {/* Live Playground Toggles */}
        <div className="p-4 rounded-xl border border-white/10 bg-black/50 mb-6">
          <div className="text-xs font-['Special_Elite',monospace] uppercase text-stone-400 tracking-wider mb-3">
            Interactive Diagnostics &amp; Engine Controls:
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            <button
              type="button"
              onClick={onToggleSmoke}
              className={`p-2.5 rounded-lg border text-xs font-['Special_Elite',monospace] uppercase transition-all cursor-pointer ${
                isSmokeActive
                  ? 'border-emerald-500 bg-emerald-950/60 text-emerald-300'
                  : 'border-white/10 text-stone-500 hover:text-white'
              }`}
            >
              Smoke Canvas: {isSmokeActive ? 'ON' : 'OFF'}
            </button>

            <button
              type="button"
              onClick={onToggleSound}
              className={`p-2.5 rounded-lg border text-xs font-['Special_Elite',monospace] uppercase transition-all cursor-pointer ${
                isSoundEnabled
                  ? 'border-red-500 bg-red-950/60 text-red-300'
                  : 'border-white/10 text-stone-500 hover:text-white'
              }`}
            >
              Soundbed: {isSoundEnabled ? 'ON' : 'OFF'}
            </button>

            <button
              type="button"
              onClick={onTriggerThunder}
              className="p-2.5 rounded-lg border border-amber-500/50 bg-amber-950/40 text-amber-300 hover:bg-amber-900/60 text-xs font-['Special_Elite',monospace] uppercase transition-all cursor-pointer"
            >
              ⚡ Test Thunder SFX
            </button>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="flex gap-1.5 border-b border-white/10 pb-3 mb-6 overflow-x-auto">
          {TECHNICAL_ANALYSIS.aspects.map((aspect, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`px-3 py-1.5 rounded-lg text-xs font-['Special_Elite',monospace] uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                activeTab === idx
                  ? 'bg-red-600 text-white shadow-md'
                  : 'text-stone-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {aspect.tag}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="space-y-4 flex-1">
          {TECHNICAL_ANALYSIS.aspects.map((aspect, idx) => {
            if (activeTab !== idx) return null;
            return (
              <div key={idx} className="space-y-4 animate-fade-in">
                <div>
                  <h3 className="font-['New_Rocker',Impact,sans-serif] text-2xl text-white">
                    {aspect.title}
                  </h3>
                  <p className="text-sm font-['Cormorant_Garamond',serif] italic text-[#b7c5be] mt-1 text-lg">
                    {aspect.description}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  {aspect.keyPoints.map((point, pIdx) => {
                    const [head, ...rest] = point.split(':');
                    return (
                      <div
                        key={pIdx}
                        className="p-3.5 rounded-xl border border-white/5 bg-white/[0.02] hover:border-white/15 transition-colors"
                      >
                        <span className="font-['Special_Elite',monospace] text-xs text-red-400 font-bold block mb-1">
                          {head}
                        </span>
                        <p className="text-xs sm:text-sm font-['Inter',sans-serif] text-[#b7c5be] leading-relaxed">
                          {rest.join(':')}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer info */}
        <div className="pt-6 border-t border-white/10 mt-8 flex items-center justify-between text-xs text-stone-500 font-['Inter',sans-serif]">
          <span>Full fidelity recreation in React + Vite</span>
          <button
            type="button"
            onClick={onClose}
            className="text-white hover:text-red-400 font-['Special_Elite',monospace] uppercase tracking-wider cursor-pointer"
          >
            Back to Experience →
          </button>
        </div>
      </div>
    </div>
  );
};
