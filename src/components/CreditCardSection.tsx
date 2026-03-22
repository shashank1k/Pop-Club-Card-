import React from 'react';
import { CreditCard3DAnimation } from './CreditCard3DAnimation';
const brands = [
  { 
    name: 'blinkit', 
    color: 'bg-yellow-400', 
    logo: 'https://popclub.co/brand-blinkit.png' 
  },
  { 
    name: 'zomato', 
    color: 'bg-red-600', 
    logo: 'https://popclub.co/brand-zomato.png' 
  },
  { 
    name: 'curefit', 
    color: 'bg-white', 
    logo: 'https://popclub.co/brand-curefit.png' 
  },
  { 
    name: 'pharmeasy', 
    color: 'bg-teal-500', 
    logo: 'https://popclub.co/brand-pharmeasy.png' 
  },
  { 
    name: 'rapido', 
    color: 'bg-yellow-500', 
    logo: 'https://popclub.co/brand-rapido.png' 
  },
  { 
    name: 'cleartrip', 
    color: 'bg-orange-600', 
    logo: 'https://popclub.co/brand-cleartrip.png' 
  },
];
export const CreditCardSection: React.FC = () => {
  return (
    <section className="w-full py-12 px-5 flex flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-3">
        <p className="text-zinc-400 text-xs md:text-sm font-medium uppercase tracking-[0.2em]">Meet the all-new</p>
        <h2 className="text-white text-2xl md:text-[1.5rem] font-extrabold text-center max-w-[320px] md:max-w-[500px] leading-tight">
          YES BANK POPclub Credit Card
        </h2>
      </div>
      
      <div className="relative w-full flex flex-col items-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 z-20 bg-primary text-white text-[11px] md:text-xs font-extrabold px-5 py-2 rounded-full uppercase tracking-wider shadow-lg shadow-primary/20">
          Lifetime Free Card
        </div>
        
        <CreditCard3DAnimation />
      </div>

      <button className="bg-white text-black px-14 h-[44px] md:h-[52px] rounded-full font-extrabold text-sm md:text-base uppercase tracking-widest hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95 shadow-xl">
        Apply Now
      </button>

      <div className="flex flex-col items-center gap-3 mt-8">
        <h3 className="text-white text-xl md:text-[1.5rem] font-extrabold text-center leading-tight">
          India's First Multibranded<br />Credit Card
        </h3>
        <p className="text-zinc-500 text-[13px] md:text-[1.15rem] font-medium">Powered by India's 6 most-loved lifestyle brands</p>
      </div>

      <div className="grid grid-cols-3 gap-4 md:gap-6 w-full max-w-[320px] md:max-w-[500px] mt-6">
        {brands.map((brand) => (
          <div key={brand.name} className={`${brand.color} w-full aspect-square md:w-35 md:h-35 rounded-xl flex items-center justify-center p-3 md:p-4 shadow-lg hover:scale-110 transition-transform duration-300 mx-auto`}>
            <img 
              src={brand.logo} 
              alt={brand.name} 
              className="w-full h-auto object-contain" 
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
