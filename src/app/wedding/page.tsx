"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Clock, Church, Heart } from "lucide-react";

function Countdown() {
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2026-06-06T09:00:00").getTime();

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
          <span className="font-serif text-5xl md:text-7xl text-[#2f3542]">{item.value.toString().padStart(2, '0')}</span>
          <span className="font-sans text-xs md:text-sm font-bold tracking-[0.2em] text-[#57606f] uppercase mt-2">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

function WeddingContent() {
  const [recipient, setRecipient] = useState("Guest");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const to = params.get("to");
    if (to) setRecipient(to);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-neutral-100 font-serif">
      <img 
        src="/wedding.jpg" 
        alt="" 
        className="absolute inset-0 h-full w-full object-cover opacity-10 blur-[8px]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-[#2f3542]/5" />

      <main className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center px-6 py-20 text-center">
        <div className="absolute top-10 left-6 lg:left-10">
          <Link 
            href={{ pathname: '/', query: { to: recipient } }}
            className="group flex items-center space-x-2 text-[#2f3542] transition-colors hover:text-neutral-900"
          >
            <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            <span className="font-sans text-xs font-bold tracking-widest uppercase">Back</span>
          </Link>
        </div>

        <section className="mb-16 md:mb-24 flex flex-col items-center animate-fade-in px-4">
          <Church className="h-10 w-10 md:h-12 md:w-12 text-[#2f3542] mb-6 md:mb-8 opacity-60" strokeWidth={1} />
          <p className="font-italiana text-[10px] md:text-[12px] font-bold tracking-[0.4em] text-[#57606f] uppercase mb-8 md:mb-10">
            Wedding Celebration of
          </p>
          <h1 className="font-tangerine text-7xl text-[#2f3542] md:text-9xl tracking-tight leading-tight">
            Holy Matrimony
          </h1>
          <div className="w-12 md:w-16 h-[1px] bg-[#2f3542]/30 mt-8 md:mt-10" />
        </section>

        <section className="mb-24 md:mb-32 w-full max-w-4xl grid gap-12 md:gap-16 md:grid-cols-[1fr_auto_1fr] items-center animate-slide-up px-6">
           <div className="flex flex-col space-y-4">
              <h2 className="font-tangerine text-5xl md:text-6xl text-[#2f3542]">Yohannes Accrus</h2>
              <div className="space-y-1">
                <p className="font-italiana text-[10px] font-bold tracking-widest text-[#57606f] uppercase">Son of</p>
                <p className="text-base md:text-lg text-neutral-800 leading-relaxed font-playfair">
                  Bapak Elysius Teguh Wirawan (Alm.) & Ibu Cicilia Lilik Indrawati
                </p>
              </div>
           </div>

           <div className="flex flex-col items-center">
              <div className="h-px w-8 bg-[#2f3542]/20 mb-4 hidden md:block" />
              <span className="font-tangerine text-4xl md:text-5xl text-[#2f3542]/40 select-none">&</span>
              <div className="h-px w-8 bg-[#2f3542]/20 mt-4 hidden md:block" />
           </div>

           <div className="flex flex-col space-y-4">
              <h2 className="font-tangerine text-5xl md:text-6xl text-[#2f3542]">Chattleya Therence</h2>
              <div className="space-y-1">
                <p className="font-italiana text-[10px] font-bold tracking-widest text-[#57606f] uppercase">Daughter of</p>
                <p className="text-base md:text-lg text-neutral-800 leading-relaxed font-playfair">
                  Bapak Joseph Fransiscus Hendry & Ibu Maria Elisabeth Merry
                </p>
              </div>
           </div>
        </section>

        <section className="mb-24 md:mb-32 w-full max-w-4xl animate-slide-up px-4 md:px-0" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-[#2f3542]/10 bg-white/40 backdrop-blur-xl shadow-2xl p-8 md:p-14">
            <div className="absolute inset-4 border border-[#2f3542]/5 rounded-[1.8rem] pointer-events-none" />
            
            <div className="grid gap-10 md:grid-cols-3 relative text-center">
              <div className="flex flex-col items-center space-y-4">
                <div className="bg-[#2f3542]/5 p-3 rounded-full">
                  <Calendar className="h-5 w-5 md:h-6 md:w-6 text-[#2f3542]" />
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-italiana text-[10px] font-bold tracking-[0.3em] text-[#57606f] uppercase mb-2">The Date</span>
                  <p className="font-playfair text-2xl font-medium text-[#2f3542] italic">Saturday</p>
                  <p className="text-neutral-700 font-sans tracking-widest">06 June 2026</p>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-4">
                <div className="bg-[#2f3542]/5 p-3 rounded-full">
                  <Clock className="h-5 w-5 md:h-6 md:w-6 text-[#2f3542]" />
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-italiana text-[10px] font-bold tracking-[0.3em] text-[#57606f] uppercase mb-2">The Time</span>
                  <p className="font-playfair text-2xl font-medium text-[#2f3542] italic">09.00 - 11.00</p>
                  <p className="text-neutral-700 font-sans tracking-widest">WIB (GMT+7)</p>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-4">
                <div className="bg-[#2f3542]/5 p-3 rounded-full">
                  <MapPin className="h-5 w-5 md:h-6 md:w-6 text-[#2f3542]" />
                </div>
                <div className="flex flex-col items-center">
                    <span className="font-italiana text-[10px] font-bold tracking-[0.3em] text-[#57606f] uppercase mb-2">The Venue</span>
                    <p className="font-playfair text-xl md:text-2xl font-medium text-[#2f3542] italic leading-tight">Albertus de Trapani</p>
                    <p className="text-[10px] text-neutral-600 tracking-widest mt-1 px-4 font-sans uppercase">Gereja Katolik Paroki, Malang</p>
                </div>
              </div>
            </div>

            <div className="mt-12 md:mt-14 space-y-8">
              <div className="w-full overflow-hidden rounded-3xl border border-[#2f3542]/10 bg-white/20 p-1 md:p-2 shadow-inner">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.546861614909!2d112.6396390753446!3d-7.942301079112588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd629c0433c5ccb%3A0x75690d6c79ab08f0!2sGereja%20Katolik%20Paroki%20St.%20Albertus%20de%20Trapani!5e0!3m2!1sen!2sid!4v1775046986049!5m2!1sen!2sid" 
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl grayscale contrast-[0.9] opacity-80"
                ></iframe>
              </div>

              <Link 
                href="https://maps.app.goo.gl/3w5i2jHjJR6n9X8v8" 
                target="_blank"
                className="group inline-flex items-center space-x-3 rounded-full border border-[#2f3542]/40 bg-white/50 px-10 py-4 text-[10px] font-bold tracking-[0.3em] text-[#2f3542] backdrop-blur-sm transition-all hover:bg-[#2f3542] hover:text-white active:scale-95 shadow-lg hover:shadow-[#2f3542]/20"
              >
                <MapPin className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
                <span>OPEN IN GOOGLE MAPS</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-24 md:mb-32 flex flex-col items-center animate-slide-up px-6" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
          <p className="font-italiana text-[12px] md:text-[14px] font-bold tracking-[0.4em] text-[#57606f] uppercase mb-10 opacity-70">
            Counting down to the Celebration
          </p>
          <Countdown />
        </section>

        <section className="relative max-w-3xl animate-slide-up pb-32 px-6" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
           <div className="relative mb-16 flex flex-col items-center">
              <span className="absolute -top-12 font-playfair text-[100px] md:text-[140px] text-[#2f3542] select-none opacity-5 pointer-events-none">“</span>
              <p className="font-playfair text-2xl md:text-3xl text-[#2f3542] leading-relaxed italic mb-8 px-6">
                &quot;Therefore what God has joined together, let no one separate.&quot;
              </p>
              <p className="font-italiana text-[10px] md:text-[11px] font-bold tracking-[0.4em] text-[#57606f] uppercase">Matthew 19:6</p>
           </div>

           <div className="w-16 md:w-24 h-[1px] bg-[#2f3542]/10 mx-auto mb-16" />

           <div className="space-y-8 md:space-y-10">
              <p className="font-playfair text-sm md:text-base text-[#57606f] leading-relaxed tracking-widest max-w-md mx-auto">
                Your presence means the world to us as we embark on this sacred journey of union and love.
              </p>
              <Heart className="h-5 w-5 text-[#2f3542]/20 mx-auto" strokeWidth={1} />
           </div>
        </section>
      </main>
    </div>
  );
}

export default function WeddingPage() {
  return <WeddingContent />;
}
