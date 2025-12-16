import React from 'react';
import { ArrowRight } from 'lucide-react';

const Philosophy: React.FC = () => {
  return (
    <section className="py-32 bg-zinc-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-3">
             <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-gray-500 uppercase border border-gray-800 rounded-full">
               Our Belief
             </span>
          </div>

          <div className="lg:col-span-9">
            <h2 className="brand-font text-4xl md:text-6xl lg:text-7xl font-medium text-white leading-[1.1] tracking-tight mb-12">
              The gap between potential and performance is <span className="text-indigo-500">automation.</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 text-lg text-gray-400 font-light leading-relaxed">
              <p>
                We believe in a future where work calculates itself. Where your business runs while you sleep, and your team focuses on what truly matters: Strategy and Creation.
              </p>
              <p>
                We are not just developers. We are the architects of your automated empire. We bridge the gap between human creativity and machine execution.
              </p>
            </div>

            <div className="mt-16 pt-16 border-t border-white/10 flex flex-wrap gap-x-12 gap-y-6">
               <div className="group flex items-center gap-4 cursor-pointer">
                  <span className="text-4xl font-light text-white group-hover:text-indigo-500 transition-colors">2x</span>
                  <span className="text-sm uppercase tracking-widest text-gray-500">Revenue<br/>Growth</span>
               </div>
               <div className="group flex items-center gap-4 cursor-pointer">
                  <span className="text-4xl font-light text-white group-hover:text-indigo-500 transition-colors">0h</span>
                  <span className="text-sm uppercase tracking-widest text-gray-500">Admin<br/>Time</span>
               </div>
               <div className="group flex items-center gap-4 cursor-pointer">
                  <span className="text-4xl font-light text-white group-hover:text-indigo-500 transition-colors">24/7</span>
                  <span className="text-sm uppercase tracking-widest text-gray-500">Active<br/>Operations</span>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Philosophy;