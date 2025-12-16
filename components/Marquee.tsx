import React from 'react';
import { Star } from 'lucide-react';

const Marquee: React.FC = () => {
  const items = [
    "WHATSAPP AUTOMATION", "VOICE AI AGENTS", "INSTAGRAM BOTS", "SALES AUTOMATION", 
    "LEAD QUALIFICATION", "GOOGLE MAPS SEO", "CRM INTEGRATION", "24/7 SUPPORT",
    "REVENUE GROWTH", "AI CONSULTING", "WORKFLOW AUTOMATION", "CHATBOTS"
  ];

  return (
    <div className="relative bg-indigo-600 py-4 overflow-hidden border-y border-white/10 select-none z-20">
      <div className="animate-marquee whitespace-nowrap">
        {/* Render items twice for seamless loop */}
        <div className="flex items-center flex-shrink-0">
          {items.map((item, index) => (
            <div key={index} className="flex items-center px-8">
              <span className="text-sm md:text-base font-bold tracking-[0.25em] text-white">{item}</span>
              <Star className="w-3 h-3 ml-8 text-black fill-black" />
            </div>
          ))}
        </div>
        <div className="flex items-center flex-shrink-0">
          {items.map((item, index) => (
            <div key={`dup-${index}`} className="flex items-center px-8">
              <span className="text-sm md:text-base font-bold tracking-[0.25em] text-white">{item}</span>
              <Star className="w-3 h-3 ml-8 text-black fill-black" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;