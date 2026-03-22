import React from 'react';
import { Battery, Signal, Wifi } from 'lucide-react';

export const DownloadAppCTA: React.FC<{ subtext?: string }> = ({ subtext }) => {
  return (
    <div className="flex flex-col items-center gap-4 py-6">
      <button className="bg-white text-black px-10 h-[44px] md:h-[52px] rounded-full font-extrabold text-sm md:text-base uppercase tracking-wider hover:bg-zinc-200 transition-all scale-100 hover:scale-105 active:scale-95 duration-200 shadow-lg">
        Download App
      </button>
      {subtext && (
        <p className="text-zinc-500 text-[13px] md:text-[1.15rem] text-center px-8 leading-relaxed max-w-[600px]">
          {subtext}
        </p>
      )}
    </div>
  );
};
