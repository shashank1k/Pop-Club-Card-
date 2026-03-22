import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const CreditCard3DAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !cardRef.current) return;

    // Initial floating animation
    const floatTween = gsap.to(cardRef.current, {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    // Scroll-linked translation (moving from left to right like a train)
    gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%",
        end: "bottom 10%",
        scrub: 1,
      }
    })
    .fromTo(cardRef.current, 
      { x: "-150%", rotate: -5 },
      { x: "150%", rotate: 5, ease: "none" }
    );

    return () => {
      floatTween.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full py-24 flex justify-center items-center overflow-hidden"
      style={{ perspective: '1200px' }}
    >
      <div 
        ref={cardRef}
        className="relative w-[1000px] md:w-[1400px] aspect-[1.6/1] overflow-visible transform-gpu"
      >
        <img 
          src="https://popclub.co/_next/image?url=%2Fnew-mobile-hero.png&w=1920&q=75" 
          alt="YES BANK POPclub Credit Card" 
          className="w-full h-full object-contain"
          referrerPolicy="no-referrer"
        />
        {/* Red-orange glow beneath (now inside cardRef to move with it) */}
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-4/5 h-20 bg-primary/30 blur-[80px] rounded-full -z-10" />
      </div>
    </div>
  );
};
