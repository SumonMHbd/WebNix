import { useCallback, useEffect, useRef, useState } from 'react';
import { ASSETS_BASE } from '../data/siteData';

export interface AudioEngineState {
  isSoundEnabled: boolean;
  isNarrationPlaying: boolean;
  volume: number;
  activeCaption: string;
  hasInteracted: boolean;
}

export function useAudioEngine() {
  const [state, setState] = useState<AudioEngineState>({
    isSoundEnabled: false,
    isNarrationPlaying: false,
    volume: 0.75,
    activeCaption: '',
    hasInteracted: false,
  });

  const audioContextRef = useRef<AudioContext | null>(null);
  const synthNodesRef = useRef<{
    droneOsc?: OscillatorNode;
    droneGain?: GainNode;
    noiseNode?: AudioBufferSourceNode;
    noiseGain?: GainNode;
  } | null>(null);

  const bedAudioRef = useRef<HTMLAudioElement | null>(null);
  const storyAudioRef = useRef<HTMLAudioElement | null>(null);
  const captionTimerRef = useRef<number | null>(null);

  const showCaption = useCallback((text: string, durationMs = 3500) => {
    setState((prev) => ({ ...prev, activeCaption: text }));
    if (captionTimerRef.current) {
      window.clearTimeout(captionTimerRef.current);
    }
    captionTimerRef.current = window.setTimeout(() => {
      setState((prev) => ({ ...prev, activeCaption: '' }));
    }, durationMs);
  }, []);

  // Initialize procedural ambient drone synthesizer
  const startProceduralSynth = useCallback((ctx: AudioContext) => {
    try {
      if (synthNodesRef.current?.droneOsc) return;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.08, ctx.currentTime);
      masterGain.connect(ctx.destination);

      // Low frequency storm drone
      const droneOsc = ctx.createOscillator();
      droneOsc.type = 'sawtooth';
      droneOsc.frequency.setValueAtTime(54, ctx.currentTime);

      const droneFilter = ctx.createBiquadFilter();
      droneFilter.type = 'lowpass';
      droneFilter.frequency.setValueAtTime(140, ctx.currentTime);
      droneFilter.Q.setValueAtTime(4, ctx.currentTime);

      const droneGain = ctx.createGain();
      droneGain.gain.setValueAtTime(0.06, ctx.currentTime);

      droneOsc.connect(droneFilter);
      droneFilter.connect(droneGain);
      droneGain.connect(masterGain);
      droneOsc.start();

      // Atmospheric noise buffer for howling wind
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const noiseNode = ctx.createBufferSource();
      noiseNode.buffer = noiseBuffer;
      noiseNode.loop = true;

      const noiseFilter = ctx.createBiquadFilter();
      noiseFilter.type = 'bandpass';
      noiseFilter.frequency.setValueAtTime(280, ctx.currentTime);
      noiseFilter.Q.setValueAtTime(1.8, ctx.currentTime);

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.025, ctx.currentTime);

      noiseNode.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(masterGain);
      noiseNode.start();

      synthNodesRef.current = {
        droneOsc,
        droneGain,
        noiseNode,
        noiseGain,
      };
    } catch {
      // Fallback silently if synth fails
    }
  }, []);

  // Trigger procedural thunder rumble
  const triggerThunder = useCallback(() => {
    if (!state.isSoundEnabled) return;
    try {
      const ctx = audioContextRef.current;
      if (!ctx || ctx.state !== 'running') return;

      const now = ctx.currentTime;
      const thunderGain = ctx.createGain();
      thunderGain.gain.setValueAtTime(0.01, now);
      thunderGain.gain.exponentialRampToValueAtTime(0.35, now + 0.15);
      thunderGain.gain.exponentialRampToValueAtTime(0.001, now + 3.5);
      thunderGain.connect(ctx.destination);

      const osc = ctx.createOscillator();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(75, now);
      osc.frequency.exponentialRampToValueAtTime(28, now + 3.0);

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(160, now);
      filter.frequency.exponentialRampToValueAtTime(60, now + 3.2);

      osc.connect(filter);
      filter.connect(thunderGain);
      osc.start(now);
      osc.stop(now + 3.6);

      showCaption('⚡ Thunder echoes through the mountains...', 2500);
    } catch {
      // Ignore audio glitches
    }
  }, [state.isSoundEnabled, showCaption]);

  // Turn sound on / off
  const enableSound = useCallback(() => {
    try {
      if (!audioContextRef.current) {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (AudioContextClass) {
          audioContextRef.current = new AudioContextClass();
        }
      }

      if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
        audioContextRef.current.resume();
      }

      if (audioContextRef.current) {
        startProceduralSynth(audioContextRef.current);
      }

      // Start background bed audio if available
      if (!bedAudioRef.current) {
        bedAudioRef.current = new Audio(`${ASSETS_BASE}audio/bed.mp3`);
        bedAudioRef.current.loop = true;
        bedAudioRef.current.volume = 0.35;
      }
      bedAudioRef.current.play().catch(() => {
        // Procedural synth will handle soundscape
      });

      setState((prev) => ({
        ...prev,
        isSoundEnabled: true,
        hasInteracted: true,
      }));

      showCaption('Sound activated. The storm awakens.', 3000);
    } catch {
      setState((prev) => ({ ...prev, isSoundEnabled: true, hasInteracted: true }));
    }
  }, [showCaption, startProceduralSynth]);

  const toggleSound = useCallback(() => {
    if (!state.isSoundEnabled) {
      enableSound();
    } else {
      if (bedAudioRef.current) {
        bedAudioRef.current.pause();
      }
      if (storyAudioRef.current) {
        storyAudioRef.current.pause();
      }
      if (audioContextRef.current && audioContextRef.current.state === 'running') {
        audioContextRef.current.suspend();
      }
      setState((prev) => ({
        ...prev,
        isSoundEnabled: false,
        isNarrationPlaying: false,
      }));
      showCaption('Sound muted.', 2000);
    }
  }, [state.isSoundEnabled, enableSound, showCaption]);

  // Play / Pause story narration
  const toggleNarration = useCallback(() => {
    if (!state.isSoundEnabled) {
      enableSound();
    }

    if (!storyAudioRef.current) {
      storyAudioRef.current = new Audio(`${ASSETS_BASE}audio/story.mp3`);
      storyAudioRef.current.onended = () => {
        setState((prev) => ({ ...prev, isNarrationPlaying: false }));
        showCaption('The story echoes in silence.', 3000);
      };
    }

    const story = storyAudioRef.current;
    if (story.paused) {
      story.play().then(() => {
        setState((prev) => ({ ...prev, isNarrationPlaying: true }));
        showCaption('Narrator: "This is not a generation. This is an outbreak."', 4000);
      }).catch(() => {
        // Mock narration text ticker
        setState((prev) => ({ ...prev, isNarrationPlaying: true }));
        showCaption('Narrator: "This is not a generation. This is an outbreak."', 4000);
      });
    } else {
      story.pause();
      setState((prev) => ({ ...prev, isNarrationPlaying: false }));
      showCaption('Narration paused.', 2000);
    }
  }, [state.isSoundEnabled, enableSound, showCaption]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (captionTimerRef.current) {
        window.clearTimeout(captionTimerRef.current);
      }
      if (bedAudioRef.current) {
        bedAudioRef.current.pause();
      }
      if (storyAudioRef.current) {
        storyAudioRef.current.pause();
      }
      if (audioContextRef.current) {
        audioContextRef.current.close().catch(() => {});
      }
    };
  }, []);

  return {
    isSoundEnabled: state.isSoundEnabled,
    isNarrationPlaying: state.isNarrationPlaying,
    volume: state.volume,
    activeCaption: state.activeCaption,
    hasInteracted: state.hasInteracted,
    enableSound,
    toggleSound,
    toggleNarration,
    triggerThunder,
    showCaption,
  };
}
