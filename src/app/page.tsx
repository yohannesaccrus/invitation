"use client";

import { useState, useEffect, Suspense } from "react";
import { MailOpen, Church } from "lucide-react";
import Link from "next/link";
import { useMusic } from "@/components/MusicProvider";

function InvitationContent() {
  const [recipient, setRecipient] = useState("Jangan Diganti!");
  const [isCoverOpen, setIsCoverOpen] = useState(true);
  const { isMuted, toggleMute, playMusic } = useMusic();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const to = params.get("to");
    if (to) setRecipient(to);
  }, []);

  const openInvitation = () => {
    setIsCoverOpen(false);
    playMusic();
  };

  return (
    <>
      <div className="fixed inset-0 z-[-1] bg-black">
        <img 
          src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=3000&auto=format&fit=crop" 
          alt="Wedding Background" 
          className="h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-neutral-900/30" />
      </div>

      <div 
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isCoverOpen ? "translate-y-0" : "-translate-y-full"
        }`}
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
            <button 
              onClick={openInvitation}
              style={{ zIndex: 9999 }}
              className="group relative flex items-center justify-center space-x-3 overflow-visible rounded-full bg-white/95 backdrop-blur-md px-14 py-5 font-sans text-sm font-semibold tracking-[0.2em] text-neutral-900 transition-all hover:bg-white active:scale-95 animate-ring-pulse hover:cursor-pointer touch-manipulation"
            >
              <span>OPEN INVITATION</span>
              <MailOpen className="h-4 w-4 text-neutral-400 transition-colors group-hover:text-rose-400" />
            </button>
          </div>
        </div>
      </div>


      <main className={`relative min-h-screen transition-opacity duration-1000 ${isCoverOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="flex min-h-screen flex-col-reverse lg:flex-row">
          
          <section className="relative flex min-h-[50vh] flex-1 flex-col items-center justify-center overflow-hidden p-8 lg:min-h-screen">
            <div className="absolute inset-0 bg-[#8B0000]" />
            <img 
              src="/sangjit.jpg" 
              alt="" 
              className="absolute inset-0 h-full w-full object-cover opacity-20 blur-[4px]"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(218,165,32,0.15),transparent)] opacity-40" />
            
            <div className="absolute inset-3 md:inset-4 opacity-50 pointer-events-none z-10">
              <img 
                src="/corner_sangjit.webp" 
                alt="" 
                className="absolute top-0 left-0 h-10 w-10 md:h-20 md:w-20 object-contain rotate-90"
                style={{ filter: 'sepia(100%) saturate(400%) brightness(1.2) hue-rotate(5deg)' }}
              />
              <img 
                src="/corner_sangjit.webp" 
                alt="" 
                className="absolute top-0 right-0 h-10 w-10 md:h-20 md:w-20 object-contain rotate-180"
                style={{ filter: 'sepia(100%) saturate(400%) brightness(1.2) hue-rotate(5deg)' }}
              />
              <img 
                src="/corner_sangjit.webp" 
                alt="" 
                className="absolute bottom-0 right-0 h-10 w-10 md:h-20 md:w-20 object-contain rotate-270"
                style={{ filter: 'sepia(100%) saturate(400%) brightness(1.2) hue-rotate(5deg)' }}
              />
              <img 
                src="/corner_sangjit.webp" 
                alt="" 
                className="absolute bottom-0 left-0 h-10 w-10 md:h-20 md:w-20 object-contain rotate-360"
                style={{ filter: 'sepia(100%) saturate(400%) brightness(1.2) hue-rotate(5deg)' }}
              />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center px-4">
              <span className="font-serif text-5xl md:text-6xl text-[#DAA520] mb-6 select-none opacity-80" style={{ fontFamily: 'serif' }}>囍</span>
              <p className="font-sans text-[10px] font-semibold tracking-[0.3em] text-[#DAA520] uppercase mb-4">
                The Celebration of
              </p>
              <h2 className="font-tangerine text-6xl text-white mb-6 md:text-8xl">
                Sangjit Ceremony
              </h2>
              <div className="inline-block rounded-full border border-[#DAA520]/20 bg-[#DAA520]/10 px-8 py-2 font-sans text-lg font-semibold tracking-[0.2em] text-[#DAA520] uppercase backdrop-blur-sm shadow-xl mb-8">
                17 May 2026
              </div>
              <div className="w-12 h-[1px] bg-[#DAA520] mb-8 opacity-50" />
              <p className="max-w-sm font-serif text-lg text-neutral-200 leading-relaxed italic mb-6 md:mb-12">
                Join us for the traditional Chinese Engagement ceremony uniting Yohannes & Chattleya
              </p>
              
              <Link 
                href={{ pathname: '/sangjit', query: { to: recipient } }}
                className="group relative flex items-center space-x-3 overflow-visible rounded-full border border-[#DAA520]/40 bg-[#DAA520]/10 px-8 py-3 md:px-10 md:py-4 text-sm font-medium tracking-[0.2em] text-[#DAA520] transition-all hover:bg-[#DAA520] hover:text-[#8B0000] animate-ring-pulse hover:cursor-pointer shadow-2xl"
                style={{ "--pulse-color": "rgba(218, 165, 32, 0.4)" } as any}
              >
                <span>SANGJIT DETAILS</span>
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </section>

          <section className="relative flex min-h-[50vh] flex-1 flex-col items-center justify-center overflow-hidden p-8 lg:min-h-screen">
            <div className="absolute inset-0 bg-neutral-100" />
            <img 
              src="/wedding.jpg" 
              alt="" 
              className="absolute inset-0 h-full w-full object-cover opacity-55 blur-[4px]"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white via-[#57606f]/5 to-[#2f3542]/10" />
            
            <div className="absolute inset-4 md:inset-10 opacity-80 pointer-events-none z-10">
              <div className="absolute top-0 left-0">
                <div className="h-10 w-10 md:h-14 md:w-14 border-t-[2.5px] border-l-[2.5px] border-[#2f3542]" />
                <div className="absolute top-2 left-2 h-4 w-4 md:h-6 md:w-6 border-t-[1px] border-l-[1px] border-[#2f3542] opacity-40" />
              </div>
              
              <div className="absolute top-0 right-0">
                <div className="h-10 w-10 md:h-14 md:w-14 border-t-[2.5px] border-r-[2.5px] border-[#2f3542]" />
                <div className="absolute top-2 right-2 h-4 w-4 md:h-6 md:w-6 border-t-[1px] border-r-[1px] border-[#2f3542] opacity-40" />
              </div>

              <div className="absolute bottom-0 left-0">
                <div className="h-10 w-10 md:h-14 md:w-14 border-b-[2.5px] border-l-[2.5px] border-[#2f3542]" />
                <div className="absolute bottom-2 left-2 h-4 w-4 md:h-6 md:w-6 border-b-[1px] border-l-[1px] border-[#2f3542] opacity-40" />
              </div>

              <div className="absolute bottom-0 right-0">
                <div className="h-10 w-10 md:h-14 md:w-14 border-b-[2.5px] border-r-[2.5px] border-[#2f3542]" />
                <div className="absolute bottom-2 right-2 h-4 w-4 md:h-6 md:w-6 border-b-[1px] border-r-[1px] border-[#2f3542] opacity-40" />
              </div>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center px-4">
              <Church className="h-12 w-12 md:h-14 md:w-14 text-[#2f3542] mb-6 opacity-60" strokeWidth={1} />
              <span className="font-sans text-[10px] font-semibold tracking-[0.3em] text-[#57606f] uppercase mb-8">
                Wedding Celebration
              </span>
              <h2 className="font-tangerine text-6xl text-neutral-900 mb-6 md:text-8xl">
                Holy Matrimony
              </h2>
              <div className="inline-block rounded-full border border-[#2f3542]/30 bg-white/70 px-8 py-2 font-sans text-lg font-semibold tracking-[0.2em] text-[#2f3542] uppercase backdrop-blur-md shadow-sm mb-8">
                06 June 2026
              </div>
              <div className="w-12 h-[1px] bg-[#57606f] mb-8 opacity-50" />
              <p className="max-w-sm font-serif text-lg text-[#57606f] leading-relaxed italic mb-6 md:mb-12">
                Witness the union of Yohannes & Chattleya as we embark on our new Chapter of Life
              </p>
              
              <Link 
                href={{ pathname: '/wedding', query: { to: recipient } }}
                className="group relative flex items-center space-x-3 overflow-visible rounded-full border border-[#2f3542]/40 bg-[#2f3542]/5 px-8 py-3 md:px-10 md:py-4 text-sm font-medium tracking-[0.2em] text-[#2f3542] transition-all hover:bg-[#2f3542] hover:text-white animate-ring-pulse hover:cursor-pointer shadow-2xl"
                style={{ "--pulse-color": "rgba(47, 53, 66, 0.4)" } as any}
              >
                <span>WEDDING DETAILS</span>
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}

export default function Home() {
  return <InvitationContent />;
}
