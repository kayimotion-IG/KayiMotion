import React, { useState } from 'react';
import { Sparkles, Loader2, Video, Music, Palette, Film } from 'lucide-react';
import { generateCreativeConcept } from '../services/geminiService';
import { AIConceptResponse } from '../types';

const AIStudio: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [concept, setConcept] = useState<AIConceptResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsLoading(true);
    setError(null);
    setConcept(null);

    try {
      const result = await generateCreativeConcept(prompt);
      setConcept(result);
    } catch (err: any) {
      console.error(err);
      let errorMessage = "Failed to generate concept. Please try again.";
      if (err.message) {
        errorMessage += ` (${err.message})`;
      }
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="studio" className="py-24 relative overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/10 to-black pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Input */}
          <div>
            <div className="inline-flex items-center gap-2 text-indigo-400 mb-4 font-semibold tracking-wider uppercase text-sm">
              <Sparkles className="w-4 h-4" />
              <span>AI Creative Director</span>
            </div>
            <h2 className="brand-font text-4xl md:text-5xl font-bold text-white mb-6">
              Concept to Reality in <br/>
              <span className="gradient-text">Milliseconds</span>
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Stuck on a brief? Describe your product, vibe, or message, and let our Gemini-powered engine generate a comprehensive video treatment for you.
            </p>

            <form onSubmit={handleGenerate} className="space-y-4">
              <div className="relative">
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="e.g., A futuristic sneaker commercial featuring neon lights, urban running, and high-energy electronic music..."
                  className="w-full h-40 bg-white/5 border border-white/10 rounded-2xl p-6 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none transition-all"
                />
              </div>
              <button
                type="submit"
                disabled={isLoading || !prompt.trim()}
                className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-800 disabled:cursor-not-allowed text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Generating Vision...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    Generate Concept
                  </>
                )}
              </button>
            </form>
            
            {error && (
              <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                {error}
              </div>
            )}
          </div>

          {/* Right Column: Output */}
          <div className="min-h-[500px]">
            {concept ? (
              <div className="glass-card rounded-3xl p-8 border border-indigo-500/30 animate-fade-in shadow-2xl shadow-indigo-900/20">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-white">{concept.title}</h3>
                  <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs rounded-full font-mono">
                    AI GENERATED
                  </span>
                </div>

                <div className="space-y-8">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-300 font-semibold text-sm uppercase tracking-wider">
                      <Film className="w-4 h-4 text-indigo-400" /> Logline
                    </div>
                    <p className="text-gray-300 italic border-l-2 border-indigo-500 pl-4">"{concept.logline}"</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-300 font-semibold text-sm uppercase tracking-wider">
                      <Palette className="w-4 h-4 text-pink-400" /> Visual Style
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">{concept.visualStyle}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-300 font-semibold text-sm uppercase tracking-wider">
                      <Video className="w-4 h-4 text-blue-400" /> Key Scenes
                    </div>
                    <ul className="space-y-3">
                      {concept.keyScenes.map((scene, i) => (
                        <li key={i} className="flex gap-3 text-sm text-gray-400">
                          <span className="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full bg-white/5 text-xs text-white">
                            {i + 1}
                          </span>
                          {scene}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                     <div className="flex items-center gap-2 text-gray-300 font-semibold text-sm uppercase tracking-wider">
                      <Music className="w-4 h-4 text-green-400" /> Audio Mood
                    </div>
                    <p className="text-sm text-gray-400">{concept.audioMood}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center border-2 border-dashed border-white/10 rounded-3xl p-12 text-center">
                <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mb-6">
                   <ApertureLogo className="w-12 h-12 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-300 mb-2">Ready to Imagine</h3>
                <p className="text-gray-500 max-w-xs mx-auto">
                  Your creative brief will appear here. Try describing a product launch or a brand manifesto.
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

const ApertureLogo = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="14.31" y1="8" x2="20.05" y2="17.94" />
    <line x1="9.69" y1="8" x2="21.17" y2="8" />
    <line x1="7.38" y1="12" x2="13.12" y2="2.06" />
    <line x1="9.69" y1="16" x2="3.95" y2="6.06" />
    <line x1="14.31" y1="16" x2="2.83" y2="16" />
    <line x1="16.62" y1="12" x2="10.88" y2="21.94" />
  </svg>
);

export default AIStudio;