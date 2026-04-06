"use client";

import { createContext, useContext, useRef, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

interface MusicContextType {
  isMuted: boolean;
  toggleMute: () => void;
  playMusic: () => void;
  isStarted: boolean;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export function MusicProvider({ children }: { children: React.ReactNode }) {
  const [isMuted, setIsMuted] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const toggleMute = () => {
    if (!isStarted) {
      playMusic();
      return;
    }
    setIsMuted((prev) => !prev);
  };

  const playMusic = () => {
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsStarted(true);
      }).catch((err) => {
        console.warn("Audio play blocked by browser:", err);
      });
    }
  };

  const isVisible = pathname !== "/" || isStarted;

  return (
    <MusicContext.Provider value={{ isMuted, toggleMute, playMusic, isStarted }}>
      <audio ref={audioRef} src="/ost.mp3" loop />
      
      {/* Floating Mute Toggle */}
      <div 
        className={`fixed bottom-6 right-6 z-[60] transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={toggleMute}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-white/70 text-neutral-900 shadow-2xl backdrop-blur-xl transition-all hover:scale-110 active:scale-95 border border-white/50 ring-1 ring-black/5"
          aria-label={isMuted ? "Unmute music" : "Mute music"}
        >
          {isMuted || !isStarted ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
            </svg>
          ) : (
            <svg className="h-6 w-6 animate-spin-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
          )}
        </button>
      </div>

      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error("useMusic must be used within a MusicProvider");
  }
  return context;
}
