"use client";

import Image from "next/image";
import egcLogo from "@/assets/clients/ekora-global.png";
import c2exLogo from "@/assets/clients/c2ex.png";
import belesuLogo from "@/assets/clients/belesu.png";

interface ClientLogo {
  id: string;
  name: string;
  logo: typeof egcLogo;
  heightClass: string;
}

const clientLogos: ClientLogo[] = [
  {
    id: "egc",
    name: "Ekora Global Consulting",
    logo: egcLogo,
    heightClass: "h-11 sm:h-14 md:h-16",
  },
  {
    id: "c2ex",
    name: "C2Ex - Ideate Connect Execute",
    logo: c2exLogo,
    heightClass: "h-14 sm:h-16 md:h-20",
  },
  {
    id: "belesu",
    name: "Belesu - Kannada Mathadi, Kannada Belesi",
    logo: belesuLogo,
    heightClass: "h-10 sm:h-12 md:h-14",
  },
];

export function ClientLogosSection() {
  // Repeating list to produce a seamless infinite scroll loop
  const repeatedLogos = [
    ...clientLogos,
    ...clientLogos,
    ...clientLogos,
    ...clientLogos,
  ];

  return (
    <section className="relative py-12 sm:py-16 border-y border-border/60 bg-surface/20 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Sleek Label */}
        <p className="text-center text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-muted-foreground/75 mb-8 sm:mb-10">
          Trusted by Industry Leaders & High-Growth Brands
        </p>

        {/* Marquee Wrapper with edge fade masks */}
        <div className="relative w-full overflow-hidden marquee-mask py-3 group">
          <div className="flex w-max items-center animate-client-marquee group-hover:[animation-play-state:paused]">
            {/* First set of logos */}
            <div className="flex items-center shrink-0">
              {repeatedLogos.map((client, idx) => (
                <div
                  key={`client-a-${client.id}-${idx}`}
                  className="flex items-center justify-center mx-8 sm:mx-14 md:mx-20 shrink-0"
                  title={client.name}
                >
                  <Image
                    src={client.logo}
                    alt={`${client.name} Logo`}
                    className={`${client.heightClass} w-auto max-w-[180px] sm:max-w-[220px] md:max-w-[260px] object-contain opacity-85 hover:opacity-100 hover:scale-105 transition-all duration-300 drop-shadow-xs`}
                    priority={idx < 6}
                  />
                </div>
              ))}
            </div>

            {/* Duplicate set for perfectly seamless looping */}
            <div className="flex items-center shrink-0" aria-hidden="true">
              {repeatedLogos.map((client, idx) => (
                <div
                  key={`client-b-${client.id}-${idx}`}
                  className="flex items-center justify-center mx-8 sm:mx-14 md:mx-20 shrink-0"
                  title={client.name}
                >
                  <Image
                    src={client.logo}
                    alt=""
                    className={`${client.heightClass} w-auto max-w-[180px] sm:max-w-[220px] md:max-w-[260px] object-contain opacity-85 hover:opacity-100 hover:scale-105 transition-all duration-300 drop-shadow-xs`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes clientMarquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-client-marquee {
          animation: clientMarquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
