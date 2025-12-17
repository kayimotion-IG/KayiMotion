import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { COMPANY_CONFIG } from '../constants';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-gray-300 font-light">
      <button 
        onClick={onBack} 
        className="group flex items-center gap-2 text-indigo-400 mb-12 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> 
        Back to Home
      </button>

      <h1 className="brand-font text-4xl md:text-5xl font-bold text-white mb-8">Privacy Policy</h1>
      <p className="mb-8 text-sm text-gray-500">Last Updated: {new Date().toLocaleDateString()}</p>

      <div className="space-y-8 leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-white mb-4 brand-font">1. Introduction</h2>
          <p>
            Welcome to {COMPANY_CONFIG.name}. We respect your privacy and are committed to protecting your personal data. 
            This privacy policy will inform you as to how we look after your personal data when you visit our website 
            and tell you about your privacy rights and how the law protects you.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 brand-font">2. Data We Collect</h2>
          <p>
            We may collect, use, store, and transfer different kinds of personal data about you which we have grouped together follows:
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data:</strong> includes billing address, delivery address, email address, and telephone numbers.</li>
            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
            <li><strong>Usage Data:</strong> includes information about how you use our website, products, and services.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 brand-font">3. How We Use Your Data</h2>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal obligation.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 brand-font">4. AI & Automation Services</h2>
          <p>
            Our services utilize Artificial Intelligence (AI) and automation technologies. Data processed through our AI models 
            is anonymized where possible. We do not use your confidential business data to train public AI models without 
            your explicit consent.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 brand-font">5. Data Security</h2>
          <p>
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, 
            or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to 
            those employees, agents, contractors, and other third parties who have a business need to know.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 brand-font">6. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or our privacy practices, please contact us at:
          </p>
          <div className="mt-4 p-6 bg-white/5 rounded-xl border border-white/10">
            <p className="text-white font-bold">{COMPANY_CONFIG.name}</p>
            <p>{COMPANY_CONFIG.contact.address.line1}</p>
            <p>{COMPANY_CONFIG.contact.address.line2}</p>
            <p className="mt-2 text-indigo-400">{COMPANY_CONFIG.contact.email}</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;