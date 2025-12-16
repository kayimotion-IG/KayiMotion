import React, { useState } from 'react';
import { ArrowRight, Play, Bot, X, Phone, Mic, BarChart3, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black pt-20">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[128px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex-grow flex flex-col justify-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 mx-auto">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-medium text-gray-300 tracking-wide uppercase">Accepting New Clients</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight text-white mb-6">
          Business <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400">Automation</span>
        </h1>
        
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
          Stop chasing dead leads. We build Voice AI Agents, WhatsApp Bots, and Sales Systems that run your business on autopilot. 2x Revenue, 0 Admin time.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#contact" 
            onClick={scrollToContact}
            className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 group cursor-pointer"
          >
            Automate Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <button 
            onClick={() => setIsDemoOpen(true)}
            className="w-full sm:w-auto px-8 py-4 glass-card text-white rounded-full font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Bot className="w-5 h-5" /> View Demo
          </button>
        </div>
      </div>

      {/* Trusted By Section (Demo Content) */}
      <div className="relative z-10 w-full bg-black/50 border-t border-white/5 py-8 mt-12 backdrop-blur-sm">
        <p className="text-center text-sm text-gray-500 uppercase tracking-widest mb-6 font-medium">Trusted by Industry Leaders</p>
        <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale transition-all hover:grayscale-0 hover:opacity-100 duration-500 px-4">
          {/* Simple SVG Placeholders for "Demo" logos */}
          <div className="h-8 w-auto text-white font-bold text-xl flex items-center gap-2"><div className="w-6 h-6 bg-white rounded-full"></div> ACME Corp</div>
          <div className="h-8 w-auto text-white font-bold text-xl flex items-center gap-2"><div className="w-6 h-6 bg-white rotate-45"></div> Stark Ind</div>
          <div className="h-8 w-auto text-white font-bold text-xl flex items-center gap-2"><div className="w-6 h-6 border-2 border-white rounded-full"></div> Globex</div>
          <div className="h-8 w-auto text-white font-bold text-xl flex items-center gap-2"><div className="w-6 h-6 bg-white rounded-sm"></div> Massive</div>
        </div>
      </div>

      {/* Abstract Grid Background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>

      {/* Demo Modal */}
      {isDemoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsDemoOpen(false)}
          />
          
          <div className="relative w-full max-w-4xl bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden shadow-2xl animate-fade-in-down flex flex-col md:flex-row max-h-[90vh]">
            
            {/* Sidebar / Visual */}
            <div className="w-full md:w-1/3 bg-zinc-900 border-r border-white/5 p-6 flex flex-col justify-between relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />
               
               <div>
                 <div className="flex items-center gap-2 mb-8">
                   <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                   <span className="text-xs font-mono uppercase tracking-widest text-gray-400">Live Agent Active</span>
                 </div>
                 <h3 className="text-2xl font-bold text-white mb-2">Kayi Voice AI</h3>
                 <p className="text-gray-400 text-sm leading-relaxed">
                   Experience the speed of our autonomous voice agents. They handle objections, schedule appointments, and update your CRM in real-time.
                 </p>
               </div>

               <div className="mt-8 space-y-4">
                 <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="flex items-center gap-3 mb-2">
                      <BarChart3 className="w-4 h-4 text-indigo-400" />
                      <span className="text-xs font-bold text-white uppercase">Performance</span>
                    </div>
                    <div className="text-2xl font-mono text-white">98.5%</div>
                    <div className="text-xs text-gray-500">Intent Recognition Accuracy</div>
                 </div>
                 <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="flex items-center gap-3 mb-2">
                      <Globe className="w-4 h-4 text-pink-400" />
                      <span className="text-xs font-bold text-white uppercase">Languages</span>
                    </div>
                    <div className="text-xl font-mono text-white">24+</div>
                    <div className="text-xs text-gray-500">Native-level fluency</div>
                 </div>
               </div>
            </div>

            {/* Interactive Area */}
            <div className="w-full md:w-2/3 bg-black p-6 md:p-8 flex flex-col relative">
               <button 
                 onClick={() => setIsDemoOpen(false)}
                 className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors z-10"
               >
                 <X className="w-6 h-6" />
               </button>

               <div className="flex-grow flex flex-col justify-center items-center py-12">
                  <div className="relative w-32 h-32 flex items-center justify-center mb-8">
                     <div className="absolute inset-0 border-4 border-indigo-500/20 rounded-full animate-[spin_4s_linear_infinite]" />
                     <div className="absolute inset-4 border-4 border-indigo-500/40 rounded-full animate-[spin_3s_linear_infinite_reverse]" />
                     <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(79,70,229,0.5)] animate-pulse">
                        <Mic className="w-8 h-8 text-white" />
                     </div>
                  </div>

                  <div className="space-y-4 w-full max-w-md">
                     {/* Chat Bubbles */}
                     <div className="flex gap-3 animate-fade-in-down" style={{ animationDelay: '0.2s' }}>
                        <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0 mt-1">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-zinc-800 rounded-2xl rounded-tl-none p-4 text-sm text-gray-200">
                          "Hello! This is Kayi from KayiMotion. I saw you're interested in scaling your operations. Can I ask you a few quick questions to see if we're a good fit?"
                        </div>
                     </div>

                     <div className="flex gap-3 flex-row-reverse animate-fade-in-down" style={{ animationDelay: '0.8s' }}>
                        <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-xs font-bold text-white">YOU</span>
                        </div>
                        <div className="bg-indigo-600/20 border border-indigo-500/20 rounded-2xl rounded-tr-none p-4 text-sm text-gray-200">
                          "Sure, go ahead."
                        </div>
                     </div>

                     <div className="flex gap-3 animate-fade-in-down" style={{ animationDelay: '1.5s' }}>
                        <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0 mt-1">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-zinc-800 rounded-2xl rounded-tl-none p-4 text-sm text-gray-200 flex items-center gap-2">
                           <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" />
                           <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce delay-75" />
                           <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce delay-150" />
                        </div>
                     </div>
                  </div>
               </div>

               <div className="pt-6 border-t border-white/10 flex gap-4">
                  <a href="#contact" onClick={(e) => { setIsDemoOpen(false); scrollToContact(e); }} className="flex-1 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 cursor-pointer">
                     <Phone className="w-5 h-5" />
                     Request Live Call
                  </a>
               </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;