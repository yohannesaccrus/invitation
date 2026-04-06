"use client";

import { useState, useEffect } from "react";
import { MailOpen } from "lucide-react";
import Link from "next/link";

export default function CoverPage() {
  const [recipient, setRecipient] = useState("Jangan Diganti!");

  const handleOpen = () => {
    const audio = document.getElementById('bg-audio') as HTMLAudioElement;
    if (audio) {
      audio.play().catch(err => console.warn("Audio play failed:", err));
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const to = params.get("to");
    if (to) setRecipient(to);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Static Background */}
      <div className="fixed inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=3000&auto=format&fit=crop" 
          alt="Wedding Background" 
          className="h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-neutral-900/30" />
      </div>

      {/* Cover Overlay */}
      <div 
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
      >
        <img 
          src="/bg.jpg" 
          alt="Cover Background" 
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm" />
        
        <div className="absolute top-[15%] left-0 right-0 z-20 flex flex-col items-center justify-center text-center px-6 pointer-events-none" style={{ animation: 'fade-in 1.5s ease-out forwards 0.8s', opacity: 0 }}>
          <p className="font-sans text-xs font-semibold tracking-[0.2em] text-rose-200 uppercase mb-3">
            Dear, special guest
          </p>
          <div className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-md px-8 py-3">
            <p className="font-serif text-2xl font-medium text-white tracking-wide">
              {recipient}
            </p>
          </div>
        </div>

        <div className="relative z-50 flex flex-col items-center justify-center text-center px-6 pt-10">
          <p className="animate-fade-in font-sans text-sm font-medium tracking-[0.2em] text-rose-200 uppercase mb-8">
            The Wedding Of
          </p>
          <h1 className="animate-slide-up font-tangerine text-8xl tracking-tight text-white sm:text-9xl md:text-[10rem] mb-6 drop-shadow-2xl" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            Accrus <span className="mx-2 font-normal text-[#f19066]">&amp;</span> Eren
          </h1>

          <div className="animate-slide-up" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
            <Link 
              href={{ pathname: '/home', query: { to: recipient } }}
              onClick={handleOpen}
              className="group relative flex items-center justify-center space-x-3 overflow-visible rounded-full bg-white/95 backdrop-blur-md px-14 py-5 font-sans text-sm font-semibold tracking-[0.2em] text-neutral-900 transition-all hover:bg-white active:scale-95 animate-ring-pulse hover:cursor-pointer touch-manipulation"
              style={{ zIndex: 9999 }}
            >
              <span>OPEN INVITATION</span>
              <MailOpen className="h-4 w-4 text-neutral-400 transition-colors group-hover:text-rose-400" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
