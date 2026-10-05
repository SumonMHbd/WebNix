import React, { useEffect, useState } from 'react';

interface LoaderGateProps {
  onEnter: (withSound: boolean) => void;
  isSoundEnabled: boolean;
}

export const LoaderGate: React.FC<LoaderGateProps> = ({ onEnter, isSoundEnabled }) => {
  const [progress, setProgress] = useState(0);
  const [typewriterText, setTypewriterText] = useState('Calibrating the thunder...');
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const messages = [
      'Calibrating the thunder...',
      'Summoning 3,400+ dropouts...',
      'Forging the iron skills...',
      'Waking Baba from the shrine...',
      'The storm is upon us.',
    ];

    let currentMsgIdx = 0;
    const msgInterval = setInterval(() => {
      currentMsgIdx = (currentMsgIdx + 1) % messages.length;
      setTypewriterText(messages[currentMsgIdx]);
    }, 1800);

    const start = performance.now();
    const duration = 2400; // 2.4s smooth load

    const frame = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (pct < 100) {
        requestAnimationFrame(frame);
      } else {
        setIsReady(true);
        clearInterval(msgInterval);
        setTypewriterText('The gates are open.');
      }
    };

    const animId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(animId);
      clearInterval(msgInterval);
    };
  }, []);

  const strokeDashoffset = 352 - (352 * progress) / 100;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#040807] overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-label="The storm is loading"
    >
      {/* Background radial vignettes & fogs */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(30,143,117,0.12),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_40%,#040807_90%)] pointer-events-none" />

      {/* Atmospheric Fog */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-emerald-950/20 blur-3xl animate-pulse pointer-events-none" />

      {/* Core Center */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-lg">
        {/* Brand */}
        <div className="font-['New_Rocker',Impact,sans-serif] text-3xl md:text-4xl tracking-widest text-[#e9f0ec] mb-8 select-none">
          Digital <em className="text-[#e03a2e] not-italic">Dropouts</em>
        </div>

        {/* Circular Seal & Progress Meter */}
        <div className="relative w-44 h-44 mb-6 flex items-center justify-center">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
            {/* Background track */}
            <circle
              cx="60"
              cy="60"
              r="56"
              fill="none"
              stroke="rgba(160, 190, 178, 0.12)"
              strokeWidth="2"
            />
            {/* Inner dashed ring */}
            <circle
              cx="60"
              cy="60"
              r="51"
              fill="none"
              stroke="rgba(160, 190, 178, 0.2)"
              strokeWidth="1"
              strokeDasharray="2 4"
            />
            {/* Active progress bar */}
            <circle
              cx="60"
              cy="60"
              r="56"
              fill="none"
              stroke="#e03a2e"
              strokeWidth="3.5"
              strokeDasharray="352"
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-[stroke-dashoffset] duration-150 ease-out drop-shadow-[0_0_8px_rgba(224,58,46,0.6)]"
            />
          </svg>

          {/* Medallion inside */}
          <div className="absolute inset-6 rounded-full border border-red-900/40 bg-[#080505] flex flex-col items-center justify-center shadow-[inset_0_0_20px_rgba(224,58,46,0.25)]">
            <span className="font-['Special_Elite','Courier_New',monospace] text-3xl font-bold text-[#e9f0ec]">
              {progress}%
            </span>
            <span className="text-[10px] uppercase tracking-widest text-emerald-400/80 mt-0.5">
              {isReady ? 'Ready' : 'Charging'}
            </span>
          </div>
        </div>

        {/* Typewriter text */}
        <div
          className="h-8 font-['Special_Elite','Courier_New',monospace] text-sm md:text-base text-[#b7c5be] tracking-wider mb-6"
          aria-live="polite"
        >
          {typewriterText}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <button
            type="button"
            onClick={() => onEnter(true)}
            className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-[#e03a2e]/80 bg-radial from-[#e0473a] via-[#9e1c13] to-[#4a0d0a] text-white font-['Special_Elite',monospace] text-sm tracking-wider uppercase shadow-[0_0_35px_rgba(224,58,46,0.5)] hover:shadow-[0_0_55px_rgba(224,58,46,0.85)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <span className="w-5 h-5 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M11 5 6 9H2v6h4l5 4V5z"/>
                <path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14"/>
              </svg>
            </span>
            <span>{isSoundEnabled ? 'Enter The Storm' : 'Turn On Sound & Enter'}</span>
          </button>

          <button
            type="button"
            onClick={() => onEnter(false)}
            className="text-xs uppercase tracking-widest text-[#7f918a] hover:text-[#e9f0ec] px-4 py-2 transition-colors cursor-pointer"
          >
            Enter in silence →
          </button>
        </div>

        {/* Subtle note */}
        <p className="mt-8 text-xs text-[#7f918a] italic font-['Cormorant_Garamond',serif] max-w-sm">
          Digital Dropouts recommendation: Experience this on a desktop display. Sovereignty is not built on a telephone screen alone.
        </p>
      </div>
    </div>
  );
};
