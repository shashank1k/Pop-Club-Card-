import { DownloadAppCTA } from './components/Common';
import { HeroSection } from './components/HeroSection';
import { CreditCardSection } from './components/CreditCardSection';
import { BenefitsGrid } from './components/BenefitsGrid';
import { POPshopSection } from './components/POPshopSection';

export default function App() {
  return (
    <div className="min-h-screen flex justify-center bg-zinc-950">
      <main className="w-full max-w-[420px] md:max-w-[900px] bg-black min-h-screen relative shadow-2xl overflow-x-hidden no-scrollbar mx-auto p-5 md:p-10">
        <div className="flex flex-col gap-10 md:gap-14 pb-20">
          <DownloadAppCTA 
            subtext="Make your first POP UPI payment. Earn 100 POPcoins instantly." 
          />
          
          <HeroSection />
          
          <CreditCardSection />
          
          <BenefitsGrid />
          
          <DownloadAppCTA />
          
          <POPshopSection />
          
          <DownloadAppCTA />
        </div>
      </main>
    </div>
  );
}
