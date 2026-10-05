import React, { useState } from 'react';
import { BABA_QUESTIONS } from '../../data/siteData';
import { BabaQA } from '../../types';

interface BabaOracleProps {
  onTriggerVoice?: (text: string) => void;
}

export const BabaOracle: React.FC<BabaOracleProps> = ({ onTriggerVoice }) => {
  const [activeQA, setActiveQA] = useState<BabaQA | null>(BABA_QUESTIONS[0]);
  const [customQuestion, setCustomQuestion] = useState('');
  const [customAnswer, setCustomAnswer] = useState<string | null>(null);
  const [isAnswering, setIsAnswering] = useState(false);

  const handleSelectQuestion = (qa: BabaQA) => {
    setActiveQA(qa);
    setCustomAnswer(null);
    if (onTriggerVoice) {
      onTriggerVoice(qa.answer);
    }
  };

  const handleAskCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customQuestion.trim()) return;

    setIsAnswering(true);
    setTimeout(() => {
      const q = customQuestion.toLowerCase();
      let answer = 'The storm favors those who execute in silence while others debate in public. Focus on your first $500 client before you worry about a tax ID.';
      if (q.includes('price') || q.includes('charge') || q.includes('rate')) {
        answer = 'Charge based on the revenue you generate for the client, not the hours you spend staring at your timeline. An $800 video that sells $10,000 of product is cheap.';
      } else if (q.includes('quit') || q.includes('university') || q.includes('job')) {
        answer = 'Do not drop out into emptiness. Drop out into an obsession. Until your freelance income pays 3x your living costs for 4 consecutive months, keep your head down and build at night.';
      } else if (q.includes('ai') || q.includes('replace') || q.includes('future')) {
        answer = 'AI will not replace video editors. An editor using AI to deliver 5x faster with cinematic taste will replace twenty editors who complain on Facebook.';
      } else if (q.includes('saturat')) {
        answer = 'Mediocrity is saturated. Top 5% craftsmanship, reliable communication, and prompt delivery have never had less competition in human history.';
      }
      setCustomAnswer(answer);
      setIsAnswering(false);
      if (onTriggerVoice) {
        onTriggerVoice(answer);
      }
    }, 600);
  };

  return (
    <section id="ask" className="relative py-28 px-4 overflow-hidden bg-[#040807] border-t border-white/5">
      {/* Background Shrine Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-red-950/25 blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Head */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase font-['Special_Elite',monospace] tracking-widest text-[#e03a2e] mb-3 inline-block">
            The Oracle
          </span>
          <h2 className="font-['New_Rocker',Impact,sans-serif] text-5xl sm:text-7xl text-[#e9f0ec] leading-tight mb-4">
            Ask the <em className="text-[#e03a2e] not-italic">Baba.</em>
          </h2>
          <p className="font-['Cormorant_Garamond',serif] text-xl sm:text-2xl text-[#b7c5be] italic font-light">
            Press a question. He will answer.
          </p>
        </div>

        {/* The Seer Centerpiece Box */}
        <div className="relative max-w-xl mx-auto mb-12 flex flex-col items-center">
          {/* Rotating Chakra Mandala SVG */}
          <div className="relative w-64 h-64 flex items-center justify-center">
            <svg
              className="absolute inset-0 w-full h-full animate-[spin_35s_linear_infinite] opacity-60 text-red-500/40"
              viewBox="-100 -100 200 200"
            >
              <circle r="96" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 5" />
              <circle r="88" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <circle r="78" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 8" />
              <circle r="60" fill="none" stroke="currentColor" strokeWidth="0.75" />
            </svg>

            {/* Glowing Baba Face / Medallion Center */}
            <div className="relative z-10 w-44 h-44 rounded-full border-2 border-red-500/70 bg-radial from-[#380b08] via-[#160505] to-[#040807] flex flex-col items-center justify-center p-4 text-center shadow-[0_0_40px_rgba(224,58,46,0.5)]">
              <div className="text-3xl mb-1 filter drop-shadow">🧙‍♂️</div>
              <div className="font-['New_Rocker',Impact,sans-serif] text-xl text-white tracking-wider">
                Baba
              </div>
              <div className="text-[10px] font-['Special_Elite',monospace] uppercase text-emerald-400 tracking-widest mt-0.5">
                {isAnswering ? 'Divining...' : 'The Mentor'}
              </div>
            </div>
          </div>

          {/* Answer Display Box */}
          <div className="mt-8 w-full min-h-[120px] p-6 rounded-2xl border border-red-500/30 bg-[#0d0505]/90 backdrop-blur-md shadow-2xl text-center relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-2 left-4 text-[10px] font-['Special_Elite',monospace] uppercase tracking-widest text-[#7f918a]">
              Oracle Transmission
            </div>

            <p className="font-['Cormorant_Garamond',serif] text-xl sm:text-2xl text-[#e9f0ec] italic font-light leading-relaxed mt-2">
              "{customAnswer || activeQA?.answer}"
            </p>
          </div>
        </div>

        {/* 10 Charms / Questions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
          {BABA_QUESTIONS.map((qa) => {
            const isSelected = activeQA?.id === qa.id && !customAnswer;
            return (
              <button
                key={qa.id}
                type="button"
                onClick={() => handleSelectQuestion(qa)}
                className={`p-4 rounded-xl border text-left flex items-start gap-3 transition-all cursor-pointer ${
                  isSelected
                    ? 'border-red-500/80 bg-[#1e0705] shadow-[0_0_20px_rgba(224,58,46,0.3)]'
                    : 'border-white/10 bg-black/40 hover:border-white/20 hover:bg-black/70'
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-['Special_Elite',monospace] shrink-0 mt-0.5 ${
                    isSelected ? 'bg-red-500 text-white' : 'bg-white/10 text-[#7f918a]'
                  }`}
                >
                  {qa.id}
                </span>
                <span className="font-['Special_Elite',monospace] text-sm text-[#e9f0ec]">
                  {qa.question}
                </span>
              </button>
            );
          })}
        </div>

        {/* Custom Question Terminal */}
        <div className="p-6 rounded-2xl border border-white/10 bg-[#0a0706] max-w-xl mx-auto">
          <div className="text-xs uppercase font-['Special_Elite',monospace] tracking-wider text-stone-400 mb-2">
            Ask Baba your own question:
          </div>
          <form onSubmit={handleAskCustom} className="flex gap-2">
            <input
              type="text"
              value={customQuestion}
              onChange={(e) => setCustomQuestion(e.target.value)}
              placeholder="e.g. How do I get my first foreign client?"
              className="flex-1 bg-black/60 border border-white/15 rounded-lg px-4 py-2.5 text-sm text-white placeholder-stone-600 focus:outline-none focus:border-red-500"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-['Special_Elite',monospace] uppercase tracking-wider transition-all cursor-pointer shrink-0"
            >
              Inquire
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
