import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Check, ChevronLeft, Calendar, Clock, FileText } from 'lucide-react';

interface StartProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type ModalMode = 'brief' | 'booking';

const StartProjectModal: React.FC<StartProjectModalProps> = ({ isOpen, onClose }) => {
  const [mode, setMode] = useState<ModalMode>('brief');
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Briefing Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    services: [] as string[],
    budget: '',
    description: ''
  });

  // Booking State
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  // Calendar Logic
  const today = new Date();
  const currentMonth = today.toLocaleString('default', { month: 'long' });
  const currentYear = today.getFullYear();
  const daysInMonth = new Date(currentYear, today.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, today.getMonth(), 1).getDay();
  
  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", 
    "11:00 AM", "11:30 AM", "01:00 PM", "01:30 PM", 
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM"
  ];

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setIsSuccess(false);
      setMode('brief'); // Reset to default
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const servicesList = [
    "AI Automation", "Web Design", "Branding", 
    "SEO", "Social Media", "Video Production", 
    "Custom Dev", "Consulting"
  ];

  const toggleService = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service) 
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => setStep(prev => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/95 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      />

      <div className="relative w-full max-w-4xl bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl animate-fade-in-down flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/5 bg-black/20 flex-shrink-0">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              <span className="text-sm font-bold tracking-widest text-white uppercase">
                Kayi<span className="text-indigo-500">Motion</span>
              </span>
            </div>
            {/* Mode Toggle */}
            <div className="flex bg-black/40 rounded-full p-1 border border-white/5 ml-4">
              <button 
                onClick={() => { setMode('brief'); setStep(1); setIsSuccess(false); }}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${mode === 'brief' ? 'bg-indigo-600 text-white shadow-lg' : 'text-gray-500 hover:text-white'}`}
              >
                <FileText className="w-3 h-3" /> Briefing
              </button>
              <button 
                onClick={() => { setMode('booking'); setStep(1); setIsSuccess(false); }}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${mode === 'booking' ? 'bg-indigo-600 text-white shadow-lg' : 'text-gray-500 hover:text-white'}`}
              >
                <Calendar className="w-3 h-3" /> Book Call
              </button>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto">
          <div className="p-8 md:p-12 min-h-[500px] flex flex-col">
            
            {isSuccess ? (
              <div className="flex-grow flex flex-col items-center justify-center text-center space-y-6 animate-fade-in-down">
                <div className="w-24 h-24 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-4 border border-green-500/30">
                  <Check className="w-12 h-12" />
                </div>
                <h3 className="text-3xl font-bold text-white brand-font">
                  {mode === 'brief' ? 'Brief Received.' : 'Session Confirmed.'}
                </h3>
                <p className="text-gray-400 max-w-md text-lg">
                  {mode === 'brief' 
                    ? "Your briefing has been securely transmitted. We are reviewing your requirements and will initiate contact shortly."
                    : `Your 30-minute strategy call has been scheduled for ${selectedDate} ${currentMonth} at ${selectedSlot}. A calendar invite has been sent to your email.`}
                </p>
                <button 
                  onClick={onClose}
                  className="mt-8 px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                {/* --- MODE: BRIEFING --- */}
                {mode === 'brief' && (
                  <form onSubmit={handleSubmit} className="flex-grow flex flex-col max-w-2xl mx-auto w-full">
                    <div className="w-full h-1 bg-white/5 rounded-full mb-12">
                      <div 
                        className="h-full bg-indigo-500 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${(step / 3) * 100}%` }}
                      />
                    </div>

                    <div className="flex-grow">
                      {step === 1 && (
                        <div className="space-y-6 animate-fade-in-down">
                          <h2 className="text-4xl font-bold text-white brand-font mb-2">Let's get introduced.</h2>
                          <p className="text-gray-400 mb-8 text-lg">Who are we collaborating with?</p>
                          
                          <div className="space-y-6">
                            <div>
                              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Name</label>
                              <input 
                                type="text" 
                                value={formData.name}
                                onChange={(e) => updateField('name', e.target.value)}
                                className="w-full bg-black/20 border-b border-white/10 px-0 py-4 text-xl text-white focus:outline-none focus:border-indigo-500 transition-colors placeholder-white/10"
                                placeholder="Your Name"
                                autoFocus
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Email</label>
                              <input 
                                type="email" 
                                value={formData.email}
                                onChange={(e) => updateField('email', e.target.value)}
                                className="w-full bg-black/20 border-b border-white/10 px-0 py-4 text-xl text-white focus:outline-none focus:border-indigo-500 transition-colors placeholder-white/10"
                                placeholder="name@company.com"
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Company</label>
                              <input 
                                type="text" 
                                value={formData.company}
                                onChange={(e) => updateField('company', e.target.value)}
                                className="w-full bg-black/20 border-b border-white/10 px-0 py-4 text-xl text-white focus:outline-none focus:border-indigo-500 transition-colors placeholder-white/10"
                                placeholder="Company Name"
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {step === 2 && (
                        <div className="space-y-6 animate-fade-in-down">
                          <h2 className="text-4xl font-bold text-white brand-font mb-2">Define the scope.</h2>
                          <p className="text-gray-400 mb-8 text-lg">What services are you interested in?</p>
                          
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {servicesList.map(service => (
                              <button
                                key={service}
                                type="button"
                                onClick={() => toggleService(service)}
                                className={`p-4 rounded-xl text-left transition-all border ${
                                  formData.services.includes(service)
                                    ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-900/50'
                                    : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:border-white/20'
                                }`}
                              >
                                {service}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {step === 3 && (
                        <div className="space-y-6 animate-fade-in-down">
                          <h2 className="text-4xl font-bold text-white brand-font mb-2">Final details.</h2>
                          <p className="text-gray-400 mb-8 text-lg">Tell us a bit more about the project.</p>
                          
                          <div className="space-y-6">
                            <div>
                              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Budget Range</label>
                              <select 
                                value={formData.budget}
                                onChange={(e) => updateField('budget', e.target.value)}
                                className="w-full bg-black/20 border-b border-white/10 px-0 py-4 text-xl text-white focus:outline-none focus:border-indigo-500 transition-colors"
                              >
                                <option value="" disabled className="bg-zinc-900">Select a range</option>
                                <option value="10-25k" className="bg-zinc-900">$10k - $25k</option>
                                <option value="25-50k" className="bg-zinc-900">$25k - $50k</option>
                                <option value="50-100k" className="bg-zinc-900">$50k - $100k</option>
                                <option value="100k+" className="bg-zinc-900">$100k+</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Project Description</label>
                              <textarea 
                                value={formData.description}
                                onChange={(e) => updateField('description', e.target.value)}
                                rows={4}
                                className="w-full bg-black/20 border-b border-white/10 px-0 py-4 text-xl text-white focus:outline-none focus:border-indigo-500 transition-colors placeholder-white/10 resize-none"
                                placeholder="Describe your goals and vision..."
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="mt-12 flex justify-between items-center">
                      {step > 1 ? (
                        <button 
                          type="button" 
                          onClick={handleBack}
                          className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors"
                        >
                          <ChevronLeft className="w-5 h-5" /> Back
                        </button>
                      ) : (
                        <div /> 
                      )}

                      {step < 3 ? (
                        <button 
                          type="button" 
                          onClick={handleNext}
                          disabled={
                            (step === 1 && (!formData.name || !formData.email)) ||
                            (step === 2 && formData.services.length === 0)
                          }
                          className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Next Step <ArrowRight className="w-5 h-5" />
                        </button>
                      ) : (
                        <button 
                          type="submit"
                          disabled={isSubmitting || !formData.budget}
                          className="flex items-center gap-2 bg-indigo-600 text-white px-8 py-3 rounded-full font-bold hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-indigo-900/50"
                        >
                          {isSubmitting ? 'Sending...' : 'Submit Brief'} <Check className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                  </form>
                )}

                {/* --- MODE: BOOKING --- */}
                {mode === 'booking' && (
                  <div className="flex-grow flex flex-col md:flex-row gap-8 max-w-4xl mx-auto w-full h-full animate-fade-in-down">
                     
                     {/* Calendar Side */}
                     <div className="w-full md:w-1/2">
                        <h2 className="text-2xl font-bold text-white mb-6">Select a Date</h2>
                        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                          <div className="flex justify-between items-center mb-6">
                            <span className="text-lg font-bold text-white">{currentMonth} {currentYear}</span>
                            <div className="flex gap-2">
                              <button disabled className="p-1 rounded-full hover:bg-white/10 disabled:opacity-30"><ChevronLeft className="w-4 h-4" /></button>
                              <button disabled className="p-1 rounded-full hover:bg-white/10 disabled:opacity-30"><ArrowRight className="w-4 h-4" /></button>
                            </div>
                          </div>
                          <div className="grid grid-cols-7 gap-2 mb-2 text-center">
                             {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => (
                               <div key={d} className="text-xs text-gray-500 font-bold uppercase">{d}</div>
                             ))}
                          </div>
                          <div className="grid grid-cols-7 gap-2">
                             {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                               <div key={`empty-${i}`} />
                             ))}
                             {Array.from({ length: daysInMonth }).map((_, i) => {
                               const day = i + 1;
                               const isPast = day < today.getDate();
                               const isSelected = selectedDate === day;
                               return (
                                 <button
                                   key={day}
                                   disabled={isPast}
                                   onClick={() => setSelectedDate(day)}
                                   className={`h-10 w-10 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                                     isSelected 
                                       ? 'bg-indigo-600 text-white shadow-lg' 
                                       : isPast 
                                         ? 'text-gray-700 cursor-not-allowed' 
                                         : 'text-gray-300 hover:bg-white/10 hover:text-white'
                                   }`}
                                 >
                                   {day}
                                 </button>
                               )
                             })}
                          </div>
                        </div>
                     </div>

                     {/* Slots Side */}
                     <div className="w-full md:w-1/2 flex flex-col">
                        <h2 className="text-2xl font-bold text-white mb-6">Select a Time</h2>
                        <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar">
                           <div className="grid grid-cols-2 gap-3">
                              {timeSlots.map((slot) => (
                                <button
                                  key={slot}
                                  onClick={() => setSelectedSlot(slot)}
                                  disabled={!selectedDate}
                                  className={`p-3 rounded-lg text-sm font-medium border transition-all flex items-center justify-center gap-2 ${
                                    selectedSlot === slot 
                                      ? 'bg-white text-black border-white' 
                                      : 'bg-transparent border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
                                  } disabled:opacity-30 disabled:cursor-not-allowed`}
                                >
                                  <Clock className="w-4 h-4" /> {slot}
                                </button>
                              ))}
                           </div>
                        </div>

                        <button 
                           onClick={handleSubmit}
                           disabled={!selectedDate || !selectedSlot || isSubmitting}
                           className="mt-8 w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? 'Booking...' : 'Confirm Meeting'}
                        </button>
                     </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartProjectModal;