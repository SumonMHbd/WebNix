/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { STORM_RAW_HTML } from './data/stormHtml';

export default function App() {
  useEffect(() => {
    // Configure global assets and links matching the original deployment
    (window as any).STB_ASSETS = 'https://digitaldropouts.net/wp-content/uploads/stb-storm-v2/';
    (window as any).STB_LINKS = {
      waitlist: '#contact',
      contact: 'http://wa.me/+8801714605024',
      login: 'http://wa.me/+8801714605024',
      whatsapp: 'http://wa.me/+8801714605024',
      youtube: 'yw5lXk3GNy8',
      privacy: 'http://mhsumon.epizy.com/',
      refund: 'http://mhsumon.epizy.com/',
      cancellation: 'http://mhsumon.epizy.com/',
      terms: 'http://mhsumon.epizy.com/',
      success: '#projects',
      facebook: 'https://www.facebook.com/SumonMHbd/',
      instagram: 'https://www.instagram.com/sumonmhbd/',
      github: 'https://github.com/SumonMHbd',
      linkedin: 'https://www.linkedin.com/in/sumonmhbd/',
      youtubeChannel: 'https://www.youtube.com/@ShowOffsDhk',
    };

    // Dynamically mount the original stb-storm engine once the DOM is ready
    const script = document.createElement('script');
    script.src = '/stb_app.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#040807] text-[#e9f0ec]">
      {/* 1:1 IDENTICAL DIGITAL DROPOUTS SYSTEM (MARKUP, ANIMATIONS, AUDIO, SECTIONS) */}
      <div dangerouslySetInnerHTML={{ __html: STORM_RAW_HTML }} />
    </div>
  );
}
