import React, { useState } from 'react';
import { PortfolioItem } from '../types';
import { ArrowUpRight, Trophy, Target, TrendingUp } from 'lucide-react';
import ProjectModal from './ProjectModal';

interface PortfolioProps {
  onOpenProject: () => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onOpenProject }) => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const items: PortfolioItem[] = [
    { 
      id: 1, 
      client: "Apex Logistics", 
      title: "AI Dispatch System", 
      category: "Automation", 
      result: "Reduced manual scheduling time",
      stat: "-40h/wk",
      imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop",
      challenge: "Apex Logistics was spending over 40 hours per week manually assigning drivers to routes. This manual process led to inefficiencies, delayed deliveries, and significant administrative overhead.",
      solution: "We built a custom Python-based AI agent that analyzes real-time traffic data, driver availability, and load sizes. The system optimizes routes instantly and assigns them to drivers via a mobile app.",
      fullDescription: "The AI Dispatch System completely transformed Apex's operations. By automating the core logistics logic, the dispatch team shifted their focus from data entry to driver support and client relations.",
      technologies: ["Python", "TensorFlow", "Google Maps API", "React Native"],
      projectUrl: "https://example.com/apex-logistics"
    },
    { 
      id: 2, 
      client: "Lumina Skin", 
      title: "E-commerce Scale-up", 
      category: "Web & Brand", 
      result: "Increase in conversion rate",
      stat: "+215%",
      imageUrl: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1600&auto=format&fit=crop",
      challenge: "Despite having high-quality organic traffic, Lumina Skin's conversion rate was stagnant at 1.2%. Users were abandoning carts due to a complex checkout flow and lack of trust signals.",
      solution: "We redesigned the entire UX with a focus on speed, minimalism, and trust. We implemented AI-powered product recommendations and a one-click checkout process using Shopify Plus.",
      fullDescription: "The new digital storefront not only looks premium but performs exceptionally well. Load times decreased by 60%, and the personalized shopping experience drove repeat purchases.",
      technologies: ["Shopify Plus", "Liquid", "Vue.js", "Klaviyo"],
      projectUrl: "https://example.com/lumina-skin"
    },
    { 
      id: 3, 
      client: "Nova Finance", 
      title: "Automated CRM", 
      category: "Automation", 
      result: "Lead qualification speed",
      stat: "Instant",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
      challenge: "Nova Finance was losing approximately 30% of their inbound leads because their sales team couldn't follow up fast enough. Competitors were reaching potential clients first.",
      solution: "We implemented a Voice AI agent that calls leads within 30 seconds of form submission. The AI qualifies the lead, checks eligibility, and books an appointment directly into the CRM.",
      fullDescription: "Speed to lead is everything in finance. Our automated system ensures no opportunity is missed, operating 24/7/365 without human intervention for the initial contact.",
      technologies: ["Vapi", "Make.com", "HubSpot", "Twilio"],
      projectUrl: "https://example.com/nova-finance"
    },
    { 
      id: 4, 
      client: "Urban Wear", 
      title: "Omnichannel Ads", 
      category: "Marketing", 
      result: "Return on Ad Spend (ROAS)",
      stat: "14x",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
      challenge: "Urban Wear struggled to track ROAS accurately across TikTok, Meta, and Google Ads. They were burning budget on underperforming creatives without realizing it.",
      solution: "We unified their data pipeline into a custom dashboard and launched a rapid creative-testing framework. We automated bid adjustments based on real-time inventory levels.",
      fullDescription: "By aligning inventory data with ad spend, we prevented wasted budget on out-of-stock items and scaled winners aggressively.",
      technologies: ["Meta Ads Manager", "TikTok Pixel", "Google Analytics 4", "Looker Studio"],
      projectUrl: "https://example.com/urban-wear"
    },
    { 
      id: 5, 
      client: "TechFlow", 
      title: "SaaS Brand Identity", 
      category: "Web & Brand", 
      result: "Seed round funding secured",
      stat: "$2.5M",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
      challenge: "TechFlow had superior technology but a generic brand image that failed to excite investors. They needed a visual identity that looked like a billion-dollar company for their Series A pitch.",
      solution: "We created a futuristic identity system, including a dynamic logo, 3D web assets, and a pitch deck that narrated their vision as a movement, not just a tool.",
      fullDescription: "The rebrand was instrumental in their fundraising success. It positioned TechFlow as a category leader before they had even launched their product globally.",
      technologies: ["WebGL", "Three.js", "Figma", "Blender"],
      projectUrl: "https://example.com/techflow"
    },
    { 
      id: 6, 
      client: "MediCare Plus", 
      title: "Local SEO Dominance", 
      category: "Marketing", 
      result: "Increase in patient bookings",
      stat: "+80%",
      imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1600&auto=format&fit=crop",
      challenge: "Medicare Plus was virtually invisible on Google Maps in their district. New patients were flocking to competitors simply because they appeared first in search results.",
      solution: "We optimized their Google Business Profile, implemented a review-generation automation via SMS, and created hyper-local content pages for every service they offer.",
      fullDescription: "Within 3 months, MediCare Plus ranked #1 for 'urgent care near me' in their zip code. The automated review system keeps their reputation pristine with minimal effort.",
      technologies: ["Google Business Profile", "Semrush", "Twilio", "WordPress"],
      projectUrl: "https://example.com/medicare-plus"
    },
  ];

  const categories = ['All', 'Automation', 'Web & Brand', 'Marketing'];

  const filteredItems = filter === 'All' 
    ? items 
    : items.filter(item => item.category === filter);

  return (
    <section id="work" className="py-32 bg-zinc-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
          <div className="max-w-xl">
             <div className="inline-flex items-center gap-2 text-indigo-400 mb-4 font-semibold tracking-wider uppercase text-sm">
              <Trophy className="w-4 h-4" />
              <span>Proven Impact</span>
            </div>
            <h2 className="brand-font text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-white">Case Studies</span>
            </h2>
            <p className="text-xl text-gray-400 font-light leading-relaxed">
              We don't just deliver outputs. We deliver outcomes. Explore how we've transformed businesses across industries.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border ${
                  filter === cat 
                    ? 'bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-900/50' 
                    : 'bg-transparent text-gray-400 border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              onClick={() => setSelectedProject(item)}
              className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer bg-gray-900 border border-white/5 hover:border-indigo-500/30 transition-all duration-500 shadow-2xl"
            >
              {/* Image */}
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40"
              />
              
              {/* Overlay Gradient - Darker on hover to make text pop */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/90 transition-opacity duration-300" />
              
              {/* Hover Reveal: Center Stat */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-90 group-hover:scale-100">
                <div className="text-center">
                   <div className="text-6xl md:text-7xl font-bold text-white brand-font tracking-tighter mb-2">
                     {item.stat}
                   </div>
                   <div className="text-indigo-400 text-sm font-medium uppercase tracking-widest bg-black/50 px-3 py-1 rounded-full backdrop-blur-md border border-indigo-500/30 inline-block">
                     {item.result}
                   </div>
                </div>
              </div>

              {/* Static Content (moves on hover) */}
              <div className="absolute inset-x-0 top-0 p-8 flex justify-between items-start">
                 <span className="px-3 py-1 text-xs font-bold tracking-widest text-white uppercase bg-white/10 backdrop-blur-md rounded-full border border-white/10">
                    {item.category}
                  </span>
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center transform translate-x-10 -translate-y-10 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <ArrowUpRight className="w-5 h-5 text-black" />
                  </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-8 transition-transform duration-500 group-hover:translate-y-2">
                <p className="text-indigo-400 text-xs font-bold tracking-widest uppercase mb-2">{item.client}</p>
                <h3 className="text-3xl font-medium text-white leading-tight brand-font group-hover:text-gray-200">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 grid md:grid-cols-3 gap-8 border-t border-white/10 pt-16">
           <div className="text-center md:text-left">
              <div className="text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-gray-500 text-sm uppercase tracking-widest">Client Retention</div>
           </div>
           <div className="text-center md:text-left">
              <div className="text-4xl font-bold text-white mb-2">$50M+</div>
              <div className="text-gray-500 text-sm uppercase tracking-widest">Revenue Generated</div>
           </div>
           <div className="text-center md:text-left flex md:justify-end items-center">
              <button 
                onClick={onOpenProject}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:bg-indigo-600 hover:text-white transition-all duration-300 group"
              >
                Start Your Project
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
           </div>
        </div>
      </div>
      
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default Portfolio;