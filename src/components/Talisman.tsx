import React from 'react';

interface TalismanProps {
  isSoundEnabled: boolean;
  isNarrationPlaying: boolean;
  activeCaption: string;
  onToggleSound: () => void;
  onToggleNarration: () => void;
  onTriggerThunder: () => void;
  onOpenAnalysis: () => void;
}

export const Talisman: React.FC<TalismanProps> = ({
  isSoundEnabled,
  isNarrationPlaying,
  activeCaption,
  onToggleSound,
  onToggleNarration,
  onTriggerThunder,
  onOpenAnalysis,
}) => {
  return (
    <>
      {/* Fixed Header Toolbar */}
      <header className="fixed top-0 left-0 right-0 z-40 px-4 md:px-8 py-3.5 flex items-center justify-between pointer-events-none">
        {/* Brand */}
        <div className="flex items-center gap-3 pointer-events-auto">
          <a href="#top" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-full border border-red-500/40 bg-black/80 flex items-center justify-center text-red-500 font-bold text-xs shadow-[0_0_15px_rgba(224,58,46,0.4)] group-hover:scale-105 transition-transform">
              DD
            </div>
            <span className="font-['New_Rocker',Impact,sans-serif] text-lg tracking-wider text-[#e9f0ec] drop-shadow">
              Digital <em className="text-[#e03a2e] not-italic">Dropouts</em>
            </span>
          </a>
        </div>

        {/* Controls Pill */}
        <div className="flex items-center gap-2 pointer-events-auto bg-[#040807]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-lg">
          {/* Architecture & Feasibility Inspector button */}
          <button
            type="button"
            onClick={onOpenAnalysis}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-['Special_Elite',monospace] uppercase tracking-wider bg-emerald-950/70 border border-emerald-500/50 text-emerald-300 hover:bg-emerald-900 hover:text-white transition-all shadow-[0_0_12px_rgba(53,195,159,0.3)] cursor-pointer"
            title="Inspect architectural breakdown and feasibility proof"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Architecture &amp; Feasibility</span>
          </button>

          {/* Thunder strike button */}
          <button
            type="button"
            onClick={onTriggerThunder}
            className="p-1.5 rounded-full text-[#b7c5be] hover:text-amber-400 hover:bg-white/5 transition-colors cursor-pointer"
            title="Trigger Thunder SFX"
            aria-label="Trigger Thunder"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />
            </svg>
          </button>

          {/* Sound Toggle */}
          <button
            type="button"
            onClick={onToggleSound}
            className={`p-1.5 rounded-full transition-colors cursor-pointer ${
              isSoundEnabled ? 'text-red-400 hover:bg-red-950/40' : 'text-[#7f918a] hover:text-white'
            }`}
            title={isSoundEnabled ? 'Mute Audio Engine' : 'Enable Audio Engine'}
            aria-label="Toggle Sound"
          >
            {isSoundEnabled ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <line x1="23" y1="9" x2="17" y2="15" />
                <line x1="17" y1="9" x2="23" y2="15" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Swaying Central Talisman (Hero Anchor) */}
      <div className="fixed top-14 left-1/2 -translate-x-1/2 z-30 pointer-events-none flex flex-col items-center">
        {/* Cord line */}
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/20 to-red-600/50" />

        {/* Medallion */}
        <button
          type="button"
          onClick={onToggleNarration}
          className="pointer-events-auto relative group w-14 h-14 md:w-16 md:h-16 rounded-full border border-red-500/50 bg-[#080505] p-1 flex items-center justify-center shadow-[0_0_30px_rgba(224,58,46,0.4)] hover:shadow-[0_0_50px_rgba(224,58,46,0.8)] hover:scale-105 active:scale-95 transition-all cursor-pointer animate-[sway_6s_ease-in-out_infinite]"
          title="Click to play/pause the Voice in the Storm narration"
        >
          {/* Rotating outer orbit glyphs */}
          <div className="absolute inset-0 rounded-full border border-dashed border-red-500/30 animate-[spin_25s_linear_infinite]" />

          {/* Inner pulsating core */}
          <div className="w-full h-full rounded-full bg-radial from-[#3d0906] to-[#040807] flex flex-col items-center justify-center">
            {isNarrationPlaying ? (
              <div className="flex items-center gap-0.5 h-4">
                <span className="w-1 bg-red-400 rounded-full animate-[bounce_0.8s_ease-in-out_infinite]" />
                <span className="w-1 bg-red-400 rounded-full animate-[bounce_0.6s_ease-in-out_infinite_0.2s]" />
                <span className="w-1 bg-red-400 rounded-full animate-[bounce_1.0s_ease-in-out_infinite_0.4s]" />
                <span className="w-1 bg-red-400 rounded-full animate-[bounce_0.7s_ease-in-out_infinite_0.1s]" />
              </div>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-red-500 ml-0.5 group-hover:scale-110 transition-transform">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            )}
            <span className="text-[7px] tracking-widest uppercase font-['Special_Elite',monospace] text-stone-400 mt-0.5">
              {isNarrationPlaying ? 'Voice' : 'Talisman'}
            </span>
          </div>
        </button>

        {/* Live Caption Bar */}
        {activeCaption && (
          <div className="pointer-events-auto mt-3 px-4 py-1.5 rounded-full bg-[#040807]/90 border border-red-500/30 text-xs md:text-sm font-['Cormorant_Garamond',serif] italic tracking-wide text-[#e9f0ec] shadow-[0_4px_20px_rgba(0,0,0,0.8)] animate-fade-in backdrop-blur-md max-w-md text-center">
            {activeCaption}
          </div>
        )}
      </div>
    </>
  );
};
