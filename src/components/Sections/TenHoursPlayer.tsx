import React, { useState } from 'react';
import { EXTERNAL_LINKS, VIDEO_CHAPTERS } from '../../data/siteData';

export const TenHoursPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeChapter, setActiveChapter] = useState<number>(1);

  return (
    <section id="tenhours" className="relative py-28 px-4 overflow-hidden bg-[#040807] border-t border-white/5">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-red-950/20 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Head */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase font-['Special_Elite',monospace] tracking-widest text-[#e03a2e] mb-3 inline-block">
            Uncut Documentary Proof
          </span>
          <h2 className="font-['New_Rocker',Impact,sans-serif] text-5xl sm:text-7xl text-[#e9f0ec] leading-tight mb-4">
            Ten hours. <em className="text-[#e03a2e] not-italic">Uncut.</em>
          </h2>
          <p className="font-['Cormorant_Garamond',serif] text-xl sm:text-2xl text-[#b7c5be] italic font-light">
            No script. No edits. Real student conversations, deals, and earnings. Press play anywhere.
          </p>
        </div>

        {/* Video Player Box */}
        <div className="relative rounded-2xl border border-white/15 bg-black/80 shadow-[0_0_50px_rgba(0,0,0,0.9)] overflow-hidden">
          {isPlaying ? (
            <div className="aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${EXTERNAL_LINKS.youtubeVideoId}?autoplay=1&rel=0`}
                title="10 Hours Uncut Documentary"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          ) : (
            <div
              onClick={() => setIsPlaying(true)}
              className="group relative aspect-video w-full bg-radial from-[#120505] via-[#080303] to-[#040807] flex flex-col justify-between p-6 sm:p-10 cursor-pointer overflow-hidden border border-white/5"
            >
              {/* Scanline & sweep effects */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_50%,transparent_50%)] bg-[length:100%_4px] pointer-events-none opacity-40" />

              {/* Top Tag */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-xs font-['Special_Elite',monospace] uppercase tracking-widest text-red-400 bg-red-950/60 px-3 py-1 rounded-full border border-red-500/30">
                  Student Stories · Unscripted · Unedited
                </span>
                <span className="text-xs font-['Inter',sans-serif] text-[#7f918a]">
                  Full 1080p Master File
                </span>
              </div>

              {/* Big Center Row */}
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <div className="font-['New_Rocker',Impact,sans-serif] text-5xl sm:text-7xl md:text-8xl text-white tracking-tight leading-none">
                    10 <span className="text-2xl sm:text-4xl text-[#7f918a] font-normal not-italic">hours</span>
                  </div>
                  <div className="font-['Cormorant_Garamond',serif] text-lg sm:text-xl text-[#b7c5be] italic mt-1">
                    Uninterrupted freelancing reality.
                  </div>
                </div>

                {/* Big Glowing Play Button */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-red-500/80 bg-red-600/30 backdrop-blur-sm flex items-center justify-center text-white shadow-[0_0_35px_rgba(224,58,46,0.6)] group-hover:scale-110 group-hover:bg-red-600 transition-all duration-300">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 sm:w-8 sm:h-8 ml-1">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
              </div>

              {/* Bottom Simulated Timeline Bar */}
              <div className="relative z-10 pt-4 border-t border-white/10 flex items-center gap-4">
                <span className="font-['Special_Elite',monospace] text-xs text-[#7f918a]">00:00:00</span>
                <div className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-1/3 h-full bg-red-500/80 rounded-full" />
                </div>
                <span className="font-['Special_Elite',monospace] text-xs text-[#7f918a]">10:04:18</span>
              </div>
            </div>
          )}
        </div>

        {/* Chapters Accordion / Picker */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3">
          {VIDEO_CHAPTERS.map((chap) => (
            <div
              key={chap.id}
              onClick={() => {
                setActiveChapter(chap.id);
                setIsPlaying(true);
              }}
              className={`p-4 rounded-xl border transition-all cursor-pointer ${
                activeChapter === chap.id
                  ? 'border-red-500/50 bg-[#160605] shadow-[0_0_20px_rgba(224,58,46,0.2)]'
                  : 'border-white/5 bg-black/40 hover:border-white/15'
              }`}
            >
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-['Special_Elite',monospace] text-red-400 font-bold">
                  Chapter {chap.id}
                </span>
                <span className="font-['Special_Elite',monospace] text-[#7f918a]">
                  {chap.timestamp}
                </span>
              </div>
              <h4 className="font-['New_Rocker',Impact,sans-serif] text-lg text-[#e9f0ec]">
                {chap.title}
              </h4>
              <p className="text-xs font-['Cormorant_Garamond',serif] italic text-[#b7c5be] mt-1">
                {chap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
