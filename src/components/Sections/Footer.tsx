import React from 'react';
import { EXTERNAL_LINKS } from '../../data/siteData';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#020504] border-t border-white/10 pt-16 pb-12 px-4 text-[#7f918a]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <a href="#top" className="inline-flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full border border-red-500/50 bg-black flex items-center justify-center text-red-500 font-bold text-xs">
                DD
              </div>
              <span className="font-['New_Rocker',Impact,sans-serif] text-2xl tracking-wider text-[#e9f0ec]">
                Digital <em className="text-[#e03a2e] not-italic">Dropouts</em>
              </span>
            </a>
            <p className="font-['Cormorant_Garamond',serif] text-base text-[#b7c5be] italic max-w-md">
              Skills to Bills. One unified ecosystem. Every skill. Built for everyone who is done being sold to.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href={EXTERNAL_LINKS.youtubeChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-red-500 hover:text-white transition-colors"
                aria-label="YouTube Channel"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              <a
                href={EXTERNAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-blue-500 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <a
                href={EXTERNAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-pink-500 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links 1: The House */}
          <div>
            <h4 className="font-['Special_Elite',monospace] text-xs uppercase tracking-widest text-[#e9f0ec] mb-4">
              The House
            </h4>
            <ul className="space-y-2 text-xs font-['Inter',sans-serif]">
              <li><a href="#top" className="hover:text-white transition-colors">Manifesto</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Curriculum</a></li>
              <li><a href="#ask" className="hover:text-white transition-colors">Ask Baba</a></li>
              <li><a href="#tenhours" className="hover:text-white transition-colors">10h Masterclass</a></li>
              <li>
                <a
                  href={EXTERNAL_LINKS.login}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline font-bold"
                >
                  Student Portal Login →
                </a>
              </li>
            </ul>
          </div>

          {/* Links 2: The Fine Print */}
          <div>
            <h4 className="font-['Special_Elite',monospace] text-xs uppercase tracking-widest text-[#e9f0ec] mb-4">
              The Fine Print
            </h4>
            <ul className="space-y-2 text-xs font-['Inter',sans-serif]">
              <li><a href={EXTERNAL_LINKS.terms} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href={EXTERNAL_LINKS.privacy} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href={EXTERNAL_LINKS.refund} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Refund Policy</a></li>
              <li><a href={EXTERNAL_LINKS.cancellation} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Cancellation Terms</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-['Inter',sans-serif] text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} Digital Dropouts & Rafayat Rakib. All rights reserved.</p>
          <p className="font-['Cormorant_Garamond',serif] italic text-stone-400">
            "Your skill decides. Anyone who promises you dates is selling dreams."
          </p>
        </div>
      </div>
    </footer>
  );
};
