import React from 'react';
import { X, ArrowUpRight, Cpu } from 'lucide-react';
import { PortfolioItem } from '../types';

interface ProjectModalProps {
  project: PortfolioItem | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/95 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-5xl bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl animate-fade-in-down flex flex-col max-h-[90vh]">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-2 bg-black/50 text-white rounded-full hover:bg-white hover:text-black transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex-grow overflow-y-auto">
            {/* Hero Image */}
            <div className="relative h-64 md:h-96 w-full">
                <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 md:p-12">
                     <span className="px-3 py-1 mb-4 inline-block text-xs font-bold tracking-widest text-indigo-400 uppercase bg-indigo-500/10 border border-indigo-500/20 rounded-full">
                        {project.category}
                     </span>
                     <h2 className="text-4xl md:text-6xl font-bold text-white brand-font mb-2">{project.title}</h2>
                     <p className="text-xl text-gray-300">{project.client}</p>
                </div>
            </div>

            <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-12">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4 brand-font">The Challenge</h3>
                        <p className="text-gray-400 text-lg leading-relaxed">{project.challenge}</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4 brand-font">The Solution</h3>
                        <p className="text-gray-400 text-lg leading-relaxed">{project.solution}</p>
                    </div>
                    
                    {project.fullDescription && (
                        <div>
                             <h3 className="text-2xl font-bold text-white mb-4 brand-font">Project Overview</h3>
                             <p className="text-gray-400 text-lg leading-relaxed">{project.fullDescription}</p>
                        </div>
                    )}
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1 space-y-8">
                     {/* Stats */}
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                        <div className="mb-2 text-gray-500 text-xs font-bold uppercase tracking-widest">Impact</div>
                        <div className="text-5xl font-bold text-white brand-font mb-2">{project.stat}</div>
                        <div className="text-indigo-400 text-sm">{project.result}</div>
                    </div>

                    {/* Tech Stack */}
                    <div>
                        <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                            <Cpu className="w-4 h-4 text-indigo-500" /> Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies?.map(tech => (
                                <span key={tech} className="px-3 py-1 bg-black border border-white/10 rounded-full text-xs text-gray-300">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    
                    {project.projectUrl ? (
                      <a 
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-indigo-900/20"
                      >
                        Visit Live Project <ArrowUpRight className="w-4 h-4" />
                      </a>
                    ) : (
                      <button disabled className="w-full py-4 bg-gray-800 text-gray-500 font-bold rounded-xl flex items-center justify-center gap-2 cursor-not-allowed">
                        Live Project Unavailable
                      </button>
                    )}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;