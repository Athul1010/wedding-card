import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [volume, setVolume] = useState(0.35);
  const audioCtxRef = useRef(null);
  const masterGainRef = useRef(null);
  const intervalRef = useRef(null);

  // Traditional pentatonic notes (Mohanam / Kalyani auspicious frequencies)
  // C4, D4, E4, G4, A4, C5, D5
  const notes = [
    261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25
  ];

  const initAudio = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(volume, ctx.currentTime);
      masterGain.connect(ctx.destination);
      masterGainRef.current = masterGain;

      // Create warm ambient drone (Tanpura foundation Sa-Pa)
      createDrone(ctx, masterGain, 130.81); // C3
      createDrone(ctx, masterGain, 196.00); // G3
      createDrone(ctx, masterGain, 261.63); // C4
    }

    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
  };

  const createDrone = (ctx, destination, freq) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(380, ctx.currentTime);

    gain.gain.setValueAtTime(0.04, ctx.currentTime);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(destination);

    osc.start();
  };

  const playFluteNote = (freq, duration = 3.5) => {
    if (!audioCtxRef.current || !isPlaying) return;
    const ctx = audioCtxRef.current;
    const dest = masterGainRef.current;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    // Subtle natural vibrato
    const vibrato = ctx.createOscillator();
    const vibratoGain = ctx.createGain();
    vibrato.frequency.setValueAtTime(5.2, ctx.currentTime); // 5Hz vibrato
    vibratoGain.gain.setValueAtTime(2.5, ctx.currentTime);
    vibrato.connect(osc.frequency);
    vibrato.start();

    // Gentle low-pass for woody flute warmth
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(900, ctx.currentTime);

    const now = ctx.currentTime;
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.08, now + 0.6); // slow attack
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(dest);

    osc.start(now);
    osc.stop(now + duration + 0.1);
    vibrato.stop(now + duration + 0.1);
  };

  // Melody pattern sequence
  const startMelody = () => {
    let step = 0;
    const melody = [
      notes[0], notes[1], notes[2], notes[3],
      notes[4], notes[3], notes[2], notes[1],
      notes[2], notes[4], notes[5], notes[4],
      notes[3], notes[2], notes[1], notes[0]
    ];

    intervalRef.current = setInterval(() => {
      const freq = melody[step % melody.length];
      playFluteNote(freq, 2.8);
      step++;
    }, 2400);
  };

  const togglePlay = () => {
    setHasInteracted(true);
    if (!isPlaying) {
      initAudio();
      setIsPlaying(true);
      startMelody();
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (audioCtxRef.current) {
        audioCtxRef.current.suspend();
      }
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (e) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (masterGainRef.current && audioCtxRef.current) {
      masterGainRef.current.gain.setValueAtTime(val, audioCtxRef.current.currentTime);
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (audioCtxRef.current) audioCtxRef.current.close();
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 group">
      {/* Tooltip hint if not yet interacted */}
      {!hasInteracted && !isPlaying && (
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-900/90 text-gold-200 text-xs shadow-lg backdrop-blur-md border border-gold-500/30 animate-pulse">
          <Music className="w-3.5 h-3.5 text-gold-400" />
          <span>Play Wedding Melody</span>
        </div>
      )}

      {/* Floating Audio Controller */}
      <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-stone-900/85 text-white shadow-xl backdrop-blur-md border border-gold-500/40 hover:border-gold-400 transition-all duration-300">
        <button
          onClick={togglePlay}
          className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
          aria-label={isPlaying ? 'Mute wedding music' : 'Play wedding music'}
          title={isPlaying ? 'Mute wedding music' : 'Play soothing wedding ambiance'}
        >
          {isPlaying ? (
            <div className="flex items-center gap-2">
              <Volume2 className="w-4 h-4 text-gold-400" />
              {/* Equalizer animation */}
              <div className="flex items-end gap-0.5 h-4 w-4">
                <span className="w-0.5 bg-gold-400 rounded-full animate-[bounce_1s_infinite_100ms] h-2"></span>
                <span className="w-0.5 bg-gold-300 rounded-full animate-[bounce_1s_infinite_300ms] h-3.5"></span>
                <span className="w-0.5 bg-gold-400 rounded-full animate-[bounce_1s_infinite_200ms] h-1.5"></span>
                <span className="w-0.5 bg-gold-200 rounded-full animate-[bounce_1s_infinite_400ms] h-3"></span>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-1.5">
              <VolumeX className="w-4 h-4 text-stone-400 group-hover:text-gold-300 transition-colors" />
              <span className="text-xs font-serif tracking-wider text-stone-300 hidden sm:inline">Music</span>
            </div>
          )}
        </button>

        {isPlaying && (
          <div className="hidden group-hover:flex items-center pl-1 pr-1 transition-all duration-300">
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={handleVolumeChange}
              className="w-16 h-1 accent-gold-400 bg-stone-700 rounded-lg cursor-pointer"
              aria-label="Volume slider"
            />
          </div>
        )}
      </div>
    </div>
  );
};
