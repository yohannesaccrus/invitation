"use client";

import { useState, Suspense, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, Calendar, MapPin, Clock } from "lucide-react";

function Countdown() {
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2026-05-17T10:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex space-x-6 md:space-x-12">
      {[
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Mins", value: timeLeft.minutes },
        { label: "Secs", value: timeLeft.seconds },
      ].map((item) => (
        <div key={item.label} className="flex flex-col items-center">
          <span className="font-serif text-5xl md:text-7xl text-white">{item.value.toString().padStart(2, '0')}</span>
          <span className="font-sans text-xs md:text-sm font-bold tracking-[0.2em] text-[#DAA520] uppercase mt-2">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

function SangjitContent() {
  const searchParams = useSearchParams();
  const recipient = searchParams.get("to") || "Jangan Diganti!";

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#8B0000]">
      <img 
        src="/sangjit.jpg" 
        alt="" 
        className="absolute inset-0 h-full w-full object-cover opacity-10 blur-[8px]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(218,165,32,0.1),transparent)] opacity-40" />

      <main className="relative z-10 mx-auto flex min-h-screen max-w-4xl flex-col items-center px-6 py-20 text-center">
        <div className="absolute top-10 left-6 lg:left-10">
          <Link 
            href={{ pathname: '/', query: { to: recipient } }}
            className="group flex items-center space-x-2 text-[#DAA520] transition-colors hover:text-white"
          >
            <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            <span className="font-sans text-sm font-medium tracking-widest uppercase">Back</span>
          </Link>
        </div>

        <section className="mb-10 flex flex-col items-center animate-fade-in">
          <span className="font-serif text-6xl text-[#DAA520] mb-6 select-none opacity-80" style={{ fontFamily: 'serif' }}>囍</span>
          <p className="font-sans text-xs font-semibold tracking-[0.4em] text-[#DAA520] uppercase mb-4">
            Traditional Chinese Engagement
          </p>
          <h1 className="font-tangerine text-8xl text-white md:text-9xl">
            Sangjit Ceremony
          </h1>
          <div className="w-16 h-[1px] bg-[#DAA520] my-8 opacity-40" />
        </section>

        <section className="mb-20 w-full max-w-4xl animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl p-10 md:p-14">
            <div className="absolute inset-4 border border-[#DAA520]/20 rounded-[1.8rem] pointer-events-none" />
            
            <div className="grid gap-12 md:grid-cols-3 relative">
              <div className="flex flex-col items-center space-y-4">
                <div className="bg-[#DAA520]/10 p-3 rounded-full">
                  <Calendar className="h-6 w-6 text-[#DAA520]" />
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-sans text-[10px] font-bold tracking-[0.3em] text-[#DAA520] uppercase mb-2">The Date</span>
                  <p className="font-sans text-xl md:text-[22px] font-bold tracking-widest text-white uppercase">Sunday</p>
                  <p className="font-serif text-lg text-neutral-100 opacity-80">17 May 2026</p>
                </div>
              </div>
              
              <div className="hidden md:block absolute left-1/3 top-1/2 -translate-y-1/2 w-[1px] h-20 bg-gradient-to-b from-transparent via-[#DAA520]/20 to-transparent" />

              <div className="flex flex-col items-center space-y-4">
                <div className="bg-[#DAA520]/10 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-[#DAA520]" />
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-sans text-[10px] foknt-bold tracking-[0.3em] text-[#DAA520] uppercase mb-2">The Time</span>
                  <p className="font-sans text-xl md:text-[22px] font-bold tracking-widest text-white">11.00 - 15.00</p>
                  <p className="font-serif text-sm text-neutral-300 tracking-wider">Afternoon Reception</p>
                </div>
              </div>

              <div className="hidden md:block absolute left-2/3 top-1/2 -translate-y-1/2 w-[1px] h-20 bg-gradient-to-b from-transparent via-[#DAA520]/20 to-transparent" />

              <div className="flex flex-col items-center space-y-4">
                <div className="bg-[#DAA520]/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-[#DAA520]" />
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-sans text-[10px] font-bold tracking-[0.3em] text-[#DAA520] uppercase mb-2">The Venue</span>
                  <p className="font-sans text-xl md:text-[22px] font-bold tracking-widest text-white line-clamp-1">Javanine Resto</p>
                  <p className="font-serif text-sm text-neutral-300 tracking-wider">Malang, East Java</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 space-y-8">
            <div className="w-full overflow-hidden rounded-3xl border border-white/20 bg-white/5 p-1 md:p-2 shadow-2xl backdrop-blur-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.3068016810107!2d112.6209049!3d-7.9672115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6282a1e5aa25b%3A0xbc685824a832b05a!2sJavanine%20Resto!5e0!3m2!1sen!2sid!4v1775045523391!5m2!1sen!2sid" 
                width="100%" 
                height="300" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl opacity-90"
              ></iframe>
            </div>

            <Link 
              href="https://maps.app.goo.gl/4kFnvjcFjRRKnuFg7"
              target="_blank"
              className="group inline-flex items-center space-x-3 rounded-full border border-[#DAA520]/40 bg-white/5 px-10 py-4 text-[10px] font-bold tracking-[0.3em] text-[#DAA520] backdrop-blur-sm transition-all hover:bg-[#DAA520] hover:text-[#8B0000] active:scale-95 shadow-lg hover:shadow-[#DAA520]/20"
            >
              <MapPin className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
              <span>VIEW ON GOOGLE MAPS</span>
            </Link>
          </div>
        </section>

        <section className="mb-24 flex flex-col items-center animate-slide-up px-6" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
          <p className="font-italiana text-[16px] md:text-[18px] font-bold tracking-[0.3em] text-[#DAA520] uppercase mb-8 opacity-70">Counting down to the Ceremony</p>
          <Countdown />
        </section>

        <section className="relative max-w-2xl animate-slide-up pb-24 px-6" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
          <div className="relative mb-12 flex flex-col items-center">
            <span className="absolute -top-12 -left-4 font-playfair text-[100px] md:text-[120px] text-[#DAA520] select-none opacity-10 pointer-events-none">“</span>
            <span className="absolute -bottom-24 -right-4 font-playfair text-[100px] md:text-[120px] text-[#DAA520] select-none opacity-10 pointer-events-none rotate-180">“</span>
            
            <p className="font-playfair text-2xl md:text-3xl text-white leading-relaxed italic mb-8 px-8">
              Two souls, two hearts, joined together in one timeless journey of love and tradition.
            </p>
            
            <div className="flex items-center space-x-6 opacity-40">
              <div className="w-8 h-[1px] bg-[#DAA520]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#DAA520]" />
              <div className="w-8 h-[1px] bg-[#DAA520]" />
            </div>
          </div>
          
          <p className="font-playfair text-sm text-neutral-300 leading-relaxed tracking-[0.2em] uppercase max-w-lg mx-auto">
            Your presence means the world to us as we embark on this sacred journey of union and tradition.
          </p>
        </section>
      </main>
    </div>
  );
}

export default function SangjitPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#8B0000]" />}>
      <SangjitContent />
    </Suspense>
  );
}
