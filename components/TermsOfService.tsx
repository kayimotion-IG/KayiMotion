import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { COMPANY_CONFIG } from '../constants';

interface TermsOfServiceProps {
  onBack: () => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onBack }) => {
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

      <h1 className="brand-font text-4xl md:text-5xl font-bold text-white mb-8">Terms of Service</h1>
      <p className="mb-8 text-sm text-gray-500">Last Updated: {new Date().toLocaleDateString()}</p>

      <div className="space-y-8 leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-white mb-4 brand-font">1. Agreement to Terms</h2>
          <p>
            These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and {COMPANY_CONFIG.name} ("we," "us" or "our"), concerning your access to and use of our website and services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 brand-font">2. Intellectual Property Rights</h2>
          <p>
            Unless otherwise indicated, the Site and our services are our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 brand-font">3. User Representations</h2>
          <p>
            By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 brand-font">4. Prohibited Activities</h2>
          <p>
            You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li>Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
            <li>Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email.</li>
            <li>Use the Site to advertise or offer to sell goods and services.</li>
            <li>Engage in unauthorized framing of or linking to the Site.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 brand-font">5. Limitation of Liability</h2>
          <p>
            In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility of such damages.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 brand-font">6. Governing Law</h2>
          <p>
            These conditions are governed by and interpreted following the laws of the United Arab Emirates. The use of our website implies your acceptance of these terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 brand-font">7. Contact Us</h2>
          <p>
            In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
          </p>
          <div className="mt-4 p-6 bg-white/5 rounded-xl border border-white/10">
            <p className="text-indigo-400 font-bold">{COMPANY_CONFIG.contact.email}</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;