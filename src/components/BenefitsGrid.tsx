import React from 'react';
import { ShieldCheck, Zap, Gift, CreditCard, Percent, Coins } from 'lucide-react';

const benefits = [
  { icon: <ShieldCheck className="text-primary" />, title: "₹0 No Joining Fee", sub: "Absolutely free for life" },
  { icon: <Zap className="text-primary" />, title: "Instant Approval", sub: "Get your digital card in mins" },
  { icon: <Gift className="text-primary" />, title: "Welcome Benefits", sub: "Worth ₹5000+ on joining" },
  { icon: <CreditCard className="text-primary" />, title: "RuPay Benefits", sub: "UPI payments on credit card" },
  { icon: <Percent className="text-primary" />, title: "10% POPcoins", sub: "On all partner brands" },
  { icon: <Coins className="text-primary" />, title: "Unlimited Rewards", sub: "No cap on POPcoins earned" },
];

export const BenefitsGrid: React.FC = () => {
  return (
    <section className="w-full py-12 px-5 max-w-[800px] mx-auto">
      <div className="grid grid-cols-2 gap-4 md:gap-8">
        <div className="bg-zinc-900/50 border border-white/5 p-6 md:p-8 rounded-3xl flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="text-primary text-2xl md:text-3xl font-black italic">₹</span>
            <span className="text-white text-3xl md:text-5xl font-black">0</span>
            <div className="w-6 h-6 md:w-8 md:h-8 -ml-1">
              <img 
                src="https://popclub.co/middle-coin.png" 
                alt="POPcoin" 
                className="w-full h-full object-contain shadow-[0_0_16px_4px_rgba(255,92,92,0.35)]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <p className="text-zinc-500 text-xs md:text-sm font-bold uppercase tracking-wider">No Joining Fee</p>
        </div>

        <div className="bg-zinc-900/50 border border-white/5 p-6 md:p-8 rounded-3xl flex flex-col gap-4">
          <div className="flex items-center gap-1">
            <span className="text-white text-3xl md:text-5xl font-black">10%</span>
          </div>
          <p className="text-zinc-500 text-xs md:text-sm font-bold uppercase tracking-wider leading-tight">Earn 10% POPcoins on every online transaction</p>
        </div>

        <div className="col-span-2 bg-zinc-900/50 border border-white/5 p-8 md:p-10 rounded-3xl flex items-center justify-between overflow-hidden relative">
          <div className="flex flex-col gap-3 z-10">
            <span className="text-primary text-3xl md:text-5xl font-black">+5%</span>
            <p className="text-zinc-400 text-sm md:text-[1.15rem] font-bold leading-tight max-w-[200px] md:max-w-[350px]">
              Earn extra 5% POPcoins when you use POPclub RuPay card with POP UPI
            </p>
          </div>
          <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 rotate-[25deg] scale-75 md:scale-100 opacity-40">
            <div className="w-40 h-24 md:w-56 md:h-32 bg-zinc-800 rounded-xl border border-white/10 shadow-2xl flex items-center justify-center">
               <span className="text-blue-500 text-4xl md:text-6xl font-black italic">p</span>
            </div>
          </div>
        </div>

        <div className="col-span-2 bg-zinc-900/50 border border-white/5 p-8 md:p-10 rounded-3xl flex flex-col gap-3">
          <div className="flex items-baseline gap-1">
            <span className="text-primary text-2xl md:text-3xl font-black italic">₹</span>
            <span className="text-white text-4xl md:text-6xl font-black">5K</span>
          </div>
          <p className="text-zinc-500 text-xs md:text-sm font-bold uppercase tracking-wider">worth joining benefits</p>
        </div>
      </div>

      <ul className="mt-12 space-y-4 px-4">
        {[
          "Earn 2% POPcoins on all UPI spends",
          "Redeem POPcoins for shopping on POPshop",
          "Exclusive access to POPclub lounges",
          "Fuel surcharge waiver across India"
        ].map((text, i) => (
          <li key={i} className="flex items-center gap-4 text-[13px] md:text-[1.15rem] text-zinc-300">
            <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#FF5C5C]" />
            {text}
          </li>
        ))}
      </ul>
    </section>
  );
};
