import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      id: "01",
      category: "Foundation",
      title: "Strategy",
      description: "We build the blueprint for your market dominance. From financial forecasting to customer journey mapping, every move is calculated.",
      items: ["Business Strategy", "Forecasting & Financials", "Pricing Strategy", "Customer Journey", "Workshops", "Consultancy", "Marketing Battle Plan", "Market Analysis"]
    },
    {
      id: "02",
      category: "Identity",
      title: "Brand",
      description: "Visual and verbal identity that separates you from the noise. We craft brands that command attention and build trust instantly.",
      items: ["Brand Naming", "Identity & Logo Design", "Brand Messaging", "Brand Positioning", "Brand Book & Guidelines", "Pitch Decks", "Design Assets", "Custom Graphics"]
    },
    {
      id: "03",
      category: "Digital Experience",
      title: "Website",
      description: "High-performance digital storefronts. We design and build websites that convert visitors into customers through superior UX and speed.",
      items: ["UI/UX Design", "SEO & Accessibility", "Prototyping", "Animations & Interactions", "Integrations & Migrations", "Landing Page Optimization", "Multi-Language", "E-commerce"]
    },
    {
      id: "04",
      category: "Production",
      title: "Content Creation",
      description: "Storytelling at scale. We produce high-converting copy, video, and visuals that engage your audience across every channel.",
      items: ["Sales Copywriting", "Article Writing", "Campaign Messaging", "Multi-Language Content", "Video Production", "Photography", "Motion Graphics", "Animation"]
    },
    {
      id: "05",
      category: "Visibility",
      title: "SEO",
      description: "Dominate search results. We optimize your local and global presence to ensure your business is found first by high-intent buyers.",
      items: ["Keyword Research", "Trend Analysis", "Content Strategy", "On-Page SEO", "Local SEO & Map Ranking", "Technical SEO", "Google Tools Optimization", "Content Optimization"]
    },
    {
      id: "06",
      category: "Automation Core",
      title: "Operations & AI",
      description: "The engine of your growth. We deploy AI agents and automated workflows to handle sales, support, and admin 24/7.",
      items: ["AI Automation", "WhatsApp Automation", "Voice AI Agents", "Sales Process Optimization", "CRM Implementation", "Appointment Booking", "Workflows & Pipeline", "Data & Analytics"]
    },
    {
      id: "07",
      category: "Retention",
      title: "Email & SMS",
      description: "Maximize lifetime value. We nurture your leads and customers with automated, personalized messaging sequences.",
      items: ["List Building", "Lead Nurturing", "Automation & Workflows", "Content Strategy", "Email & SMS Templates", "Compliance & Deliverability", "Lead Magnets", "Link Click Analysis"]
    },
    {
      id: "08",
      category: "Community",
      title: "Social",
      description: "Build a loyal following. We manage your social presence with strategic content and automated engagement tools.",
      items: ["Instagram Bots", "Graphics & Assets", "Content Calendar", "Scheduling & Publication", "Copywriting", "Channel Branding", "Trend Analysis", "Performance Insights"]
    },
    {
      id: "09",
      category: "Acquisition",
      title: "Advertising",
      description: "Scalable customer acquisition. We run data-driven ad campaigns that deliver measurable ROI across major platforms.",
      items: ["Industry Benchmarking", "Keyword Analysis", "Audience Demographics", "Ad Copywriting", "Landing Page Optimization", "CRO", "Retargeting Campaigns", "Performance Reporting"]
    }
  ];

  return (
    <section id="services" className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-indigo-500 font-mono text-sm tracking-widest uppercase mb-4 block">One Agency, Every Service</span>
            <h2 className="brand-font text-5xl md:text-7xl font-bold text-white tracking-tight">
              Capabilities
            </h2>
          </div>
          <p className="text-gray-400 max-w-md text-lg font-light">
            From strategic foundations to AI-powered execution. We provide the complete infrastructure for modern business growth.
          </p>
        </div>

        <div className="flex flex-col">
          {services.map((service) => (
            <div 
              key={service.id}
              className="group border-t border-white/10 py-16 transition-all duration-500 hover:bg-white/5 px-4 md:px-8 -mx-4 md:-mx-8 cursor-default"
            >
              <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* ID & Category */}
                <div className="md:col-span-2 lg:col-span-2">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-indigo-500 text-sm">/{service.id}</span>
                  </div>
                  <span className="text-xs font-bold tracking-widest text-gray-500 uppercase block mt-1">{service.category}</span>
                </div>

                {/* Title */}
                <div className="md:col-span-3 lg:col-span-3">
                  <h3 className="text-3xl md:text-4xl font-medium text-white group-hover:text-indigo-400 transition-colors brand-font">
                    {service.title}
                  </h3>
                </div>

                {/* Description & Items Grid */}
                <div className="md:col-span-7 lg:col-span-7 flex flex-col h-full">
                  <p className="text-gray-400 font-light leading-relaxed mb-8 max-w-2xl group-hover:text-gray-300 transition-colors text-lg">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-y-3 gap-x-6 mt-auto">
                    {service.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 group/item">
                        <CheckCircle2 className="w-4 h-4 text-indigo-900 group-hover:text-indigo-500 mt-0.5 flex-shrink-0 transition-colors" />
                        <span className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                     <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">
                        <ArrowUpRight className="w-5 h-5" />
                     </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
};

export default Services;