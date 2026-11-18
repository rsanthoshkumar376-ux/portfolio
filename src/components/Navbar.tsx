import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, FileText, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Hackathons', href: '#hackathons' },
    { label: 'Opportunities', href: '#opportunities' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Determine active section
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'certifications', 'hackathons', 'opportunities', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-panel shadow-lg shadow-cyan-950/20 py-3 border-b border-cyan-500/15'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-600 to-indigo-600 p-[1.5px] shadow-md shadow-cyan-500/20 group-hover:shadow-cyan-400/40 transition-all duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#060A17] dark:bg-[#060A17] rounded-[10px] flex items-center justify-center">
                <span className="font-extrabold text-sm tracking-wider bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  {personalInfo.initials}
                </span>
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="text-base font-bold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-cyan-400 transition-colors">
                SANTHOSH KUMAR R.
              </span>
              <span className="block text-[11px] font-mono text-cyan-400/80 -mt-0.5 tracking-wide">
                AI &amp; Data Science
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-cyan-400 bg-cyan-500/10 font-semibold border border-cyan-500/30 shadow-sm shadow-cyan-500/10'
                      : 'text-slate-300 hover:text-cyan-300 hover:bg-slate-800/40 light:text-slate-700 light:hover:text-blue-600 light:hover:bg-slate-200/50'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons & Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              className="p-2 rounded-xl text-slate-300 hover:text-cyan-300 hover:bg-cyan-500/10 border border-slate-700/50 dark:border-slate-800 light:border-slate-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              title={theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-300 hover:rotate-90 transition-transform duration-300" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600" />
              )}
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-cyan-300 bg-cyan-950/60 border border-cyan-500/40 hover:bg-cyan-900/60 hover:border-cyan-400 shadow-sm shadow-cyan-500/20 transition-all duration-200 group"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span>Resume</span>
            </button>

            {/* Direct Connect CTA */}
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/25 transition-all duration-200 hover:shadow-cyan-400/40 hover:-translate-y-0.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </a>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-cyan-300 hover:bg-cyan-500/10 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-cyan-500/20 bg-[#060A17]/95 dark:bg-[#060A17]/95 light:bg-white/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-4 duration-200 shadow-2xl">
          <div className="grid grid-cols-2 gap-1.5 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-cyan-950/40 light:text-slate-800 light:hover:text-blue-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-cyan-300 bg-cyan-950/60 border border-cyan-500/40"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>View &amp; Download Resume</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600"
            >
              <Sparkles className="w-4 h-4" />
              <span>Contact Santhosh</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
