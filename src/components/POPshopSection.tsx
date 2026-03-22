import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowUp } from 'lucide-react';

const brands = [
  { id: 1, logo: 'https://popclub.co/slider-honeyandspice.png' },
  { id: 2, logo: 'https://popclub.co/slider-gytree.png' },
  { id: 3, logo: 'https://popclub.co/slider-offmint.png' },
  { id: 4, logo: 'https://popclub.co/slider-mcaffiene.png' },
  { id: 5, logo: 'https://popclub.co/slider-two-brothers.png' },
  { id: 6, logo: 'https://popclub.co/slider-anveshan.png' },
  { id: 7, logo: 'https://popclub.co/slider-earth-rythm.png' },
  { id: 8, logo: 'https://popclub.co/slider-revlon.png' },
  { id: 9, logo: 'https://popclub.co/slider-miniature-wellness.png' },
  { id: 10, logo: 'https://popclub.co/slider-urban-gabru.png' },
  { id: 11, logo: 'https://popclub.co/slider-adil-qadri.png' },
  { id: 12, logo: 'https://popclub.co/slider-keventer.png' },
  { id: 13, logo: 'https://popclub.co/slider-mcaffiene.png' },
  { id: 14, logo: 'https://popclub.co/slider-two-brothers.png' },
  { id: 15, logo: 'https://popclub.co/slider-anveshan.png' },
  { id: 16, logo: 'https://popclub.co/slider-honeyandspice.png' },
  { id: 17, logo: 'https://popclub.co/slider-gytree.png' },
  { id: 18, logo: 'https://popclub.co/slider-offmint.png' },
  { id: 19, logo: 'https://popclub.co/slider-mcaffiene.png' },
  { id: 20, logo: 'https://popclub.co/slider-two-brothers.png' },
];

export const POPshopSection: React.FC = () => {
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(arrowRef.current, {
      y: -8,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
  }, []);

  return (
    <section className="w-full py-16 px-5 flex flex-col items-center gap-10 relative">
      <h2 className="text-white text-xl md:text-[1.5rem] font-bold text-center max-w-[320px] md:max-w-[600px] leading-tight">
        Redeem POPcoins across 500+ new-age brands on <span className="text-primary">POPshop</span>
      </h2>

      <div className="grid grid-cols-5 gap-4 md:gap-8 w-full max-w-[800px]">
        {brands.map((brand) => (
          <div key={brand.id} className="aspect-square rounded-full bg-white border border-zinc-200 p-1 overflow-hidden hover:scale-110 transition-transform cursor-pointer">
            <img 
              src={brand.logo} 
              alt="brand" 
              className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>

      <div 
        ref={arrowRef}
        className="fixed bottom-8 right-8 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(147,51,234,0.5)] z-50 cursor-pointer hover:rotate-[20deg] transition-transform"
      >
        <ArrowUp className="text-white" size={24} />
      </div>
    </section>
  );
};
