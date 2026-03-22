import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowUp } from 'lucide-react';

const brands = [
  { id: 1, logo: 'https://popclub.co/brand-blinkit.png' },
  { id: 2, logo: 'https://popclub.co/brand-zomato.png' },
  { id: 3, logo: 'https://popclub.co/brand-curefit.png' },
  { id: 4, logo: 'https://popclub.co/brand-pharmeasy.png' },
  { id: 5, logo: 'https://popclub.co/brand-rapido.png' },
  { id: 6, logo: 'https://popclub.co/brand-cleartrip.png' },
  { id: 7, logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Apple_logo_grey.svg/1200px-Apple_logo_grey.svg.png' },
  { id: 8, logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png' },
  { id: 9, logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png' },
  { id: 10, logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png' },
  { id: 11, logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png' },
  { id: 12, logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png' },
  { id: 13, logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png' },
  { id: 14, logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png' },
  { id: 15, logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/2560px-Coca-Cola_logo.svg.png' },
  { id: 16, logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Pepsi_logo_2014.svg/2560px-Pepsi_logo_2014.svg.png' },
  { id: 17, logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png' },
  { id: 18, logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png' },
  { id: 19, logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Nike_logo_with_orange_background.svg/1200px-Nike_logo_with_orange_background.svg.png' },
  { id: 20, logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png' },
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
