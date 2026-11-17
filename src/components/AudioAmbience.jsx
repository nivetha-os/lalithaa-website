import React, { useEffect, useRef } from 'react';

/**
 * AudioAmbience creates an ultra-luxurious, calm royal Indian ambient soundtrack
 * synthesized entirely in the browser using the Web Audio API.
 * 100% offline, zero network dependencies, pristine audio quality!
 */
export default function AudioAmbience({ isPlaying }) {
  const audioCtxRef = useRef(null);
  const gainNodeRef = useRef(null);
  const oscillatorsRef = useRef([]);

  useEffect(() => {
    if (isPlaying) {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!audioCtxRef.current) {
          audioCtxRef.current = new AudioContext();
        }

        const ctx = audioCtxRef.current;
        if (ctx.state === 'suspended') {
          ctx.resume();
        }

        // Master Gain
        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
        masterGain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 3);
        masterGain.connect(ctx.destination);
        gainNodeRef.current = masterGain;

        // Frequencies corresponding to Indian classical Tanpura drone (Sa - Pa - Sa' - Re)
        // C# (138.59 Hz), G# (207.65 Hz), C# octave (277.18 Hz), F (174.61 Hz)
        const freqs = [138.59, 207.65, 277.18, 174.61, 415.30];
        const oscs = [];

        freqs.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const panner = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
          const filter = ctx.createBiquadFilter();

          osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);

          // Subtle warm low-pass filter
          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(450 + idx * 80, ctx.currentTime);

          // Gentle LFO for shimmer modulation
          const lfo = ctx.createOscillator();
          const lfoGain = ctx.createGain();
          lfo.frequency.setValueAtTime(0.15 + idx * 0.05, ctx.currentTime);
          lfoGain.gain.setValueAtTime(1.5, ctx.currentTime);
          lfo.connect(osc.frequency);
          lfo.start();

          if (panner) {
            panner.pan.setValueAtTime((idx - 2) * 0.35, ctx.currentTime);
            osc.connect(filter);
            filter.connect(panner);
            panner.connect(masterGain);
          } else {
            osc.connect(filter);
            filter.connect(masterGain);
          }

          osc.start();
          oscs.push(osc, lfo);
        });

        oscillatorsRef.current = oscs;
      } catch (err) {
        console.warn("Web Audio initialization skipped:", err);
      }
    } else {
      // Fade out and stop
      if (gainNodeRef.current && audioCtxRef.current) {
        const ctx = audioCtxRef.current;
        gainNodeRef.current.gain.setValueAtTime(gainNodeRef.current.gain.value, ctx.currentTime);
        gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1);
        setTimeout(() => {
          oscillatorsRef.current.forEach((o) => {
            try { o.stop(); o.disconnect(); } catch (e) {}
          });
          oscillatorsRef.current = [];
        }, 1100);
      }
    }

    return () => {
      oscillatorsRef.current.forEach((o) => {
        try { o.stop(); o.disconnect(); } catch (e) {}
      });
      oscillatorsRef.current = [];
    };
  }, [isPlaying]);

  return null;
}
