import React, { useState, useEffect } from 'react';
import { Menu, X, Aperture, Link as LinkIcon, Check, Download } from 'lucide-react';
import { COMPANY_CONFIG } from '../constants';

interface NavbarProps {
  onNavigate: (view: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    // Check if app is already installed/standalone
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsStandalone(true);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Listen for the 'beforeinstallprompt' event to enable the Install button
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setDeferredPrompt(null);
      }
    } else {
      // Fallback instruction for manual install
      alert(`To install ${COMPANY_CONFIG.name} App:\n\n1. Look for the 'Install' icon in your browser's address bar.\nOR\n2. Open the Browser Menu (three dots) -> Select 'Save and Share' -> 'Install App'.`);
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'AI Studio', href: '#studio' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' },
  ];

  // Robust smooth scroll handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    
    // Check if we need to navigate back to home view first
    // Since we are in the Navbar component, we assume any nav click implies going to home + section
    // We call onNavigate('home') first.
    
    onNavigate('home');

    // Small timeout to allow view to switch before trying to find the element
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 100);
      
    setIsMobileMenuOpen(false);
  };

  const handleShare = async () => {
    // Directly copy the URL to clipboard to avoid OS/Browser specific share menus
    try {
      await navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  // Background logic: Scrolled OR Mobile Menu Open -> Dark background
  const navBackground = isScrolled || isMobileMenuOpen 
    ? 'bg-black/95 backdrop-blur-md border-b border-white/10' 
    : 'bg-transparent';

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${navBackground}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex-shrink-0 flex items-center gap-3 cursor-pointer group"
          >
            <Aperture className="h-8 w-8 md:h-10 md:w-10 text-indigo-500 group-hover:rotate-180 transition-transform duration-700" />
            <span className="brand-font text-3xl md:text-4xl font-extrabold tracking-tighter text-white">
              Kayi<span className="text-indigo-500">Motion</span>
            </span>
          </a>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer"
                >
                  {link.name}
                </a>
              ))}

              <div className="flex items-center gap-4 pl-4 border-l border-white/10">
                {/* Install App Button - Show if not standalone, regardless of deferredPrompt (provides instruction if not ready) */}
                {!isStandalone && (
                  <button 
                    onClick={handleInstallClick}
                    className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 bg-indigo-500/10 hover:bg-indigo-500/20 px-3 py-2 rounded-full transition-all text-xs font-bold uppercase tracking-wide border border-indigo-500/20"
                    title="Save to Desktop"
                  >
                    <Download className="w-4 h-4" /> Install
                  </button>
                )}

                <button 
                  onClick={handleShare}
                  className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5 relative"
                  title="Copy Link"
                >
                  {isCopied ? <Check className="w-5 h-5 text-green-500" /> : <LinkIcon className="w-5 h-5" />}
                  {isCopied && (
                    <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 text-xs bg-zinc-800 text-white px-2 py-1 rounded whitespace-nowrap">
                      Copied!
                    </span>
                  )}
                </button>

                <a 
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105 inline-block cursor-pointer shadow-lg shadow-indigo-900/20"
                >
                  Let's Talk
                </a>
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-zinc-950 border-b border-white/10 shadow-2xl animate-fade-in-down">
          <div className="px-4 pt-4 pb-8 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-4 py-4 rounded-lg text-lg font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
              >
                {link.name}
              </a>
            ))}
            
            <div className="grid grid-cols-2 gap-2 mt-2">
              <button
                onClick={() => {
                  handleShare();
                }}
                className="text-center px-4 py-4 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors border border-white/10 flex flex-col items-center justify-center gap-2"
              >
                {isCopied ? <Check className="w-5 h-5 text-green-500" /> : <LinkIcon className="w-5 h-5" />}
                {isCopied ? "Link Copied!" : "Copy Link"}
              </button>
              
              {!isStandalone && (
                 <button
                  onClick={() => {
                    handleInstallClick();
                    // Don't close menu here so they can see the alert if needed
                  }}
                  className="text-center px-4 py-4 rounded-lg text-sm font-medium text-indigo-300 hover:text-white bg-indigo-900/20 hover:bg-indigo-900/40 transition-colors border border-indigo-500/20 flex flex-col items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Install App
                </button>
              )}
            </div>

            <div className="pt-6 mt-4">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="block w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-4 rounded-xl text-lg font-bold transition-all shadow-lg shadow-indigo-900/20"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;