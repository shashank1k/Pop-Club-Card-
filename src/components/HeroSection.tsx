import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const HeroSection: React.FC = () => {
  const coinLeftRef = useRef<HTMLImageElement>(null);
  const coinRightRef = useRef<HTMLImageElement>(null);
  const coinFloatRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Floating animations for coins
    gsap.to([coinLeftRef.current, coinRightRef.current, coinFloatRef.current], {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      stagger: 0.3
    });
  }, []);

  const features = [
    "Zero Joining and Annual Charges (Limited Time Only)*",
    "Welcome Benefits Worth ₹5,000",
    "10% POPcoins on Online Spending",
    "5% Instant POPcoins Via POP UPI",
    "1% Fuel Surcharge Waiver"
  ];

  return (
    <section className="relative w-full pt-12 pb-16 px-5 flex flex-col items-center overflow-visible">
      <div className="w-full max-w-[1000px] flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
        
        {/* Left: Angled Credit Card */}
        <div className="relative w-[400px] h-[500px] md:w-[320px] md:h-[200px] shrink-0">
          <img 
            src="https://popclub.co/_next/image?url=%2Fnew-mobile-hero.png&w=1920&q=75" 
            alt="YES BANK POPclub Credit Card" 
            className="w-full h-full object-contain transform-gpu"
            referrerPolicy="no-referrer"
          />
          {/* Reflection/Glow under card */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-4 bg-primary/20 blur-xl rounded-full" />
        </div>

        {/* Right: Feature Card */}
        <div className="relative flex-1 max-w-[500px] flex flex-col items-center md:items-start">
          <h1 className="text-white text-3xl md:text-[2.5rem] font-extrabold mb-6 text-center md:text-left leading-tight w-full">
            Yes Bank POP Credit Card
          </h1>
          
          <div className="relative w-full bg-gradient-to-br from-[#0A0A2A] to-[#1A0A2A] rounded-[32px] md:rounded-[40px] p-6 md:p-10 border border-white/10 shadow-[0_0_30px_rgba(255,92,92,0.1)] overflow-visible">
            {/* Coins on edges */}
            <img 
              ref={coinLeftRef}
              src="https://popclub.co/middle-coin.png" 
              alt="POPcoin" 
              className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 md:w-16 h-12 md:h-16 object-contain shadow-[0_0_16px_4px_rgba(255,92,92,0.35)] z-20"
              referrerPolicy="no-referrer"
            />
            <img 
              ref={coinRightRef}
              src="https://popclub.co/middle-coin.png" 
              alt="POPcoin" 
              className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-12 md:w-16 h-12 md:h-16 object-contain shadow-[0_0_16px_4px_rgba(255,92,92,0.35)] z-20"
              referrerPolicy="no-referrer"
            />

            <ul className="space-y-4 md:space-y-6">
              {features.map((feature, idx) => (
                <React.Fragment key={idx}>
                  <li className="flex items-start gap-3 text-white text-sm md:text-base font-medium leading-tight">
                    <span className="text-white font-bold text-lg md:text-xl shrink-0">»</span>
                    {feature}
                  </li>
                  {idx < features.length - 1 && (
                    <div className="w-full h-[1px] bg-white/10" />
                  )}
                </React.Fragment>
              ))}
            </ul>

            {/* Floating coin at bottom right */}
            <img 
              ref={coinFloatRef}
              src="https://popclub.co/middle-coin.png" 
              alt="POPcoin" 
              className="absolute -bottom-6 -right-6 w-16 md:w-20 h-16 md:h-20 object-contain shadow-[0_0_20px_6px_rgba(255,92,92,0.4)] z-30"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      {/* Pill Badge (Updated) */}
      <div className="mt-16 flex items-center gap-3 bg-black border border-white/20 px-8 h-[36px] rounded-full shadow-lg">
        <img 
          src="https://popclub.co/middle-coin.png" 
          alt="POPcoin" 
          className="w-5 h-5 object-contain shadow-[0_0_10px_rgba(255,92,92,0.3)]"
          referrerPolicy="no-referrer"
        />
        <span className="text-white text-sm md:text-base font-bold tracking-tight">1 POPcoin = ₹1</span>
      </div>
    </section>
  );
};
