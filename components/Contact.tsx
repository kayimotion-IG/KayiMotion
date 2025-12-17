import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { COMPANY_CONFIG } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      alert(`Thank you, ${formState.name}! We will be in touch shortly.`);
      setFormState({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-zinc-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-indigo-900/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="brand-font text-3xl md:text-5xl font-bold text-white mb-4">Start a Project</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to elevate your brand with motion? Tell us about your vision.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="glass-card p-8 rounded-2xl space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Studio</h3>
                  <p className="text-gray-400 mt-1">
                    {COMPANY_CONFIG.contact.address.line1}<br/>
                    {COMPANY_CONFIG.contact.address.line2}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Email</h3>
                  <p className="text-gray-400 mt-1">{COMPANY_CONFIG.contact.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Phone</h3>
                  <p className="text-gray-400 mt-1">{COMPANY_CONFIG.contact.phone}</p>
                </div>
              </div>
            </div>

            {/* Active Map */}
            <div className="h-64 rounded-2xl bg-gray-800/50 border border-white/5 relative overflow-hidden group">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178512307137!2d55.27180437605553!3d25.21260673099958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f428d086576df%3A0x3c27653770387532!2sTowers%20Rotana%20-%20Sheikh%20Zayed%20Rd%20-%20Trade%20Centre%20-%20Trade%20Centre%201%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1709664446358!5m2!1sen!2s"
                 width="100%" 
                 height="100%" 
                 style={{ border: 0, filter: 'grayscale(1) invert(1) contrast(0.8) brightness(0.8)' }} 
                 allowFullScreen={true} 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 title="Office Location"
                 className="absolute inset-0 w-full h-full opacity-70 group-hover:opacity-100 transition-opacity duration-500"
               />
               <div className="absolute bottom-4 left-4 z-10 pointer-events-none">
                 <span className="text-xs text-black font-bold uppercase tracking-widest bg-white/90 px-3 py-1.5 rounded-md shadow-lg flex items-center gap-2">
                    <MapPin className="w-3 h-3 text-indigo-600" /> Dubai, UAE
                 </span>
               </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    placeholder="Mike Brid"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    placeholder={COMPANY_CONFIG.contact.email}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                  placeholder="Tell us about your project goals, timeline, and budget..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-white text-black hover:bg-indigo-600 hover:text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <Send className="w-5 h-5" />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;