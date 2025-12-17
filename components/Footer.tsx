import React from 'react';
import { ArrowUpRight, Aperture } from 'lucide-react';
import { COMPANY_CONFIG } from '../constants';

interface FooterProps {
  onOpenProject: () => void;
  onNavigate: (view: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenProject, onNavigate }) => {
  return (
    <footer className="bg-black border-t border-white/10 text-white relative overflow-hidden">
      
      {/* Massive CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <p className="text-gray-500 mb-8 uppercase tracking-widest text-sm font-medium">Ready to Scale?</p>
        <button 
          onClick={onOpenProject}
          className="group block relative z-10 w-full text-left"
        >
          <h2 className="brand-font text-[12vw] leading-[0.8] font-bold tracking-tighter hover:text-indigo-500 transition-colors duration-500">
            LET'S TALK
          </h2>
          <div className="flex items-center gap-4 mt-8 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            <span className="text-xl md:text-2xl font-light group-hover:text-indigo-500 transition-colors">Start your project</span>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <ArrowUpRight className="w-6 h-6 text-black" />
            </div>
          </div>
        </button>
      </div>

      {/* Grid Links Section */}
      <div className="border-t border-white/10 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6 cursor-pointer" onClick={() => onNavigate('home')}>
                <Aperture className="h-6 w-6 text-indigo-500" />
                <span className="brand-font text-2xl font-extrabold tracking-tighter">
                  Kayi<span className="text-indigo-500">Motion</span>
                </span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                {COMPANY_CONFIG.tagline} <br/>
                Based in Dubai, Scaling Globally.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-500">Sitemap</h4>
              <ul className="space-y-4 text-lg font-light text-gray-300">
                <li><button onClick={() => onNavigate('home')} className="hover:text-indigo-500 transition-colors text-left">Home</button></li>
                <li><a href="#services" onClick={(e) => { if(window.location.pathname !== '/') onNavigate('home'); }} className="hover:text-indigo-500 transition-colors">Services</a></li>
                <li><a href="#work" onClick={(e) => { if(window.location.pathname !== '/') onNavigate('home'); }} className="hover:text-indigo-500 transition-colors">Case Studies</a></li>
                <li><a href="#studio" onClick={(e) => { if(window.location.pathname !== '/') onNavigate('home'); }} className="hover:text-indigo-500 transition-colors">AI Studio</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-500">Socials</h4>
              <ul className="space-y-4 text-lg font-light text-gray-300">
                <li><a href={COMPANY_CONFIG.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors">LinkedIn</a></li>
                <li><a href={COMPANY_CONFIG.socials.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors">Twitter / X</a></li>
                <li><a href={COMPANY_CONFIG.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors">Instagram</a></li>
                <li><a href={COMPANY_CONFIG.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors">GitHub</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-500">Contact</h4>
              <ul className="space-y-4 text-lg font-light text-gray-300">
                <li>{COMPANY_CONFIG.contact.email}</li>
                <li>{COMPANY_CONFIG.contact.phone}</li>
                <li className="pt-4 text-gray-500 text-sm">
                  {COMPANY_CONFIG.contact.address.line1}<br/>
                  {COMPANY_CONFIG.contact.address.line2}
                </li>
              </ul>
            </div>

          </div>

          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 uppercase tracking-wider">
            <p>© {new Date().getFullYear()} {COMPANY_CONFIG.name}. All rights reserved.</p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <button onClick={() => onNavigate('privacy')} className="hover:text-gray-400 uppercase tracking-wider">Privacy Policy</button>
              <button onClick={() => onNavigate('terms')} className="hover:text-gray-400 uppercase tracking-wider">Terms of Service</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;