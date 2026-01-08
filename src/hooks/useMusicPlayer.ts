/**
 * MUSIC PLAYER HOOK
 * Manages background music playback
 * From: sooraj project, enhanced with better controls
 */

import { useState, useRef, useEffect, useCallback } from "react";
import { MUSIC_CONFIG } from "@/utils/constants";

interface UseMusicPlayerOptions {
  url?: string;
  volume?: number;
  loop?: boolean;
  autoPlay?: boolean;
}

interface UseMusicPlayerReturn {
  isPlaying: boolean;
  isMuted: boolean;
  toggle: () => void;
  play: () => void;
  pause: () => void;
  setVolume: (volume: number) => void;
}

export const useMusicPlayer = (options: UseMusicPlayerOptions = {}): UseMusicPlayerReturn => {
  const {
    url = MUSIC_CONFIG.url,
    volume = MUSIC_CONFIG.volume,
    loop = MUSIC_CONFIG.loop,
    autoPlay = false,
  } = options;

  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio element
  useEffect(() => {
    audioRef.current = new Audio(url);
    audioRef.current.loop = loop;
    audioRef.current.volume = volume;

    if (autoPlay) {
      audioRef.current.play().catch(console.error);
      setIsPlaying(true);
      setIsMuted(false);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [url, loop, volume, autoPlay]);

  const toggle = useCallback(() => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play().catch(console.error);
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
      setIsMuted(!isMuted);
    }
  }, [isMuted]);

  const play = useCallback(() => {
    if (audioRef.current && !isPlaying) {
      audioRef.current.play().catch(console.error);
      setIsPlaying(true);
      setIsMuted(false);
    }
  }, [isPlaying]);

  const pause = useCallback(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      setIsMuted(true);
    }
  }, [isPlaying]);

  const setVolumeLevel = useCallback((newVolume: number) => {
    if (audioRef.current) {
      audioRef.current.volume = Math.max(0, Math.min(1, newVolume));
    }
  }, []);

  return {
    isPlaying,
    isMuted,
    toggle,
    play,
    pause,
    setVolume: setVolumeLevel,
  };
};

export default useMusicPlayer;
