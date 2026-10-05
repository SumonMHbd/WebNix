import React, { useState } from 'react';

export const WaitlistGate: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skill: 'video-editing',
    experience: 'beginner',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [passId, setPassId] = useState('');
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email.trim() || !formData.name.trim()) return;

    const randomNum = Math.floor(100 + Math.random() * 900);
    const generatedPass = `DD-B4-${randomNum}`;
    setPassId(generatedPass);
    setIsSubmitted(true);
  };

  const handleCopyPass = () => {
    navigator.clipboard.writeText(passId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="waitlist" className="relative py-28 px-4 overflow-hidden bg-[#040807] border-t border-white/5">
      {/* Background Storm Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-red-950/25 blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Head */}
        <span className="text-xs uppercase font-['Special_Elite',monospace] tracking-widest text-[#e03a2e] mb-3 inline-block">
          Registration Gate
        </span>
        <h2 className="font-['New_Rocker',Impact,sans-serif] text-5xl sm:text-7xl md:text-8xl text-[#e9f0ec] leading-[0.95] mb-4">
          It is coming <br />
          <em className="text-[#e03a2e] not-italic">this October.</em>
        </h2>
        <p className="font-['Cormorant_Garamond',serif] text-xl sm:text-2xl text-[#b7c5be] italic font-light mb-12">
          Be in the room before the doors open. Only 500 seats for Batch #04.
        </p>

        {isSubmitted ? (
          /* Personalized Sovereign Pass Badge */
          <div className="p-8 rounded-2xl border-2 border-red-500/80 bg-radial from-[#240806] via-[#100404] to-[#040807] shadow-[0_0_60px_rgba(224,58,46,0.5)] text-left max-w-lg mx-auto relative overflow-hidden">
            {/* Top Pass Header */}
            <div className="flex items-center justify-between border-b border-red-500/30 pb-4 mb-6">
              <div>
                <span className="text-[10px] font-['Special_Elite',monospace] uppercase tracking-widest text-emerald-400">
                  Priority Access Granted
                </span>
                <h3 className="font-['New_Rocker',Impact,sans-serif] text-2xl text-white">
                  Digital Dropout Sovereign Pass
                </h3>
              </div>
              <div className="w-10 h-10 rounded-full border border-red-500 bg-red-950/50 flex items-center justify-center font-bold text-xs text-red-400">
                DD
              </div>
            </div>

            {/* Pass Metadata */}
            <div className="space-y-3 font-['Inter',sans-serif] text-xs">
              <div className="flex justify-between">
                <span className="text-stone-400">Candidate Name:</span>
                <span className="font-bold text-white uppercase">{formData.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Registered Email:</span>
                <span className="text-stone-300">{formData.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Focus Track:</span>
                <span className="text-emerald-300 uppercase font-mono">{formData.skill}</span>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-white/10">
                <span className="text-stone-400">Seat Reservation Pass ID:</span>
                <span className="font-['Special_Elite',monospace] text-base font-bold text-red-400">
                  {passId}
                </span>
              </div>
            </div>

            {/* Copy button */}
            <div className="mt-6 flex items-center gap-3">
              <button
                type="button"
                onClick={handleCopyPass}
                className="flex-1 py-3 rounded-lg bg-red-600 hover:bg-red-500 text-white font-['Special_Elite',monospace] text-xs uppercase tracking-wider transition-colors cursor-pointer text-center"
              >
                {copied ? 'Pass ID Copied!' : 'Copy Pass ID'}
              </button>
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="px-4 py-3 rounded-lg border border-white/15 text-stone-400 hover:text-white text-xs font-['Special_Elite',monospace] uppercase transition-colors"
              >
                Modify
              </button>
            </div>
          </div>
        ) : (
          /* Registration Form */
          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-8 rounded-2xl border border-white/15 bg-black/60 backdrop-blur-md shadow-2xl text-left max-w-lg mx-auto"
          >
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-['Special_Elite',monospace] uppercase tracking-wider text-[#b7c5be] mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name"
                  className="w-full bg-[#0a0706] border border-white/15 rounded-lg px-4 py-3 text-sm text-white placeholder-stone-600 focus:outline-none focus:border-red-500"
                />
              </div>

              <div>
                <label className="block text-xs font-['Special_Elite',monospace] uppercase tracking-wider text-[#b7c5be] mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@domain.com"
                  className="w-full bg-[#0a0706] border border-white/15 rounded-lg px-4 py-3 text-sm text-white placeholder-stone-600 focus:outline-none focus:border-red-500"
                />
              </div>

              <div>
                <label className="block text-xs font-['Special_Elite',monospace] uppercase tracking-wider text-[#b7c5be] mb-1.5">
                  WhatsApp / Phone (for SMS dispatch)
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+880 1..."
                  className="w-full bg-[#0a0706] border border-white/15 rounded-lg px-4 py-3 text-sm text-white placeholder-stone-600 focus:outline-none focus:border-red-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-['Special_Elite',monospace] uppercase tracking-wider text-[#b7c5be] mb-1.5">
                    Target Skill
                  </label>
                  <select
                    value={formData.skill}
                    onChange={(e) => setFormData({ ...formData, skill: e.target.value })}
                    className="w-full bg-[#0a0706] border border-white/15 rounded-lg px-3 py-3 text-xs text-white focus:outline-none focus:border-red-500"
                  >
                    <option value="video-editing">Video Editing</option>
                    <option value="client-outreach">Client Outreach</option>
                    <option value="funnels-business">Funnels & Business</option>
                    <option value="full-curriculum">Full Curriculum</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-['Special_Elite',monospace] uppercase tracking-wider text-[#b7c5be] mb-1.5">
                    Experience
                  </label>
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full bg-[#0a0706] border border-white/15 rounded-lg px-3 py-3 text-xs text-white focus:outline-none focus:border-red-500"
                  >
                    <option value="beginner">Starting From Zero</option>
                    <option value="intermediate">Already Earning &lt;$1k</option>
                    <option value="advanced">Scaling to Agency</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-4 py-4 rounded-full border border-red-500/80 bg-radial from-[#e0473a] via-[#9e1c13] to-[#4a0d0a] text-white font-['Special_Elite',monospace] text-sm uppercase tracking-widest shadow-[0_0_40px_rgba(224,58,46,0.5)] hover:shadow-[0_0_60px_rgba(224,58,46,0.85)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                Put Me On The List
              </button>
            </div>
          </form>
        )}

        <p className="mt-4 text-xs font-['Cormorant_Garamond',serif] italic text-[#7f918a]">
          One message when the doors open · nothing else
        </p>
      </div>
    </section>
  );
};
