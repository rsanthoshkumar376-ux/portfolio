import React, { useState, useEffect } from 'react';
import { ArrowUp, Mail, GraduationCap } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { LinkedInIcon, GitHubIcon } from './Icons';

export const Footer: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(Math.max((window.scrollY / totalHeight) * 100, 0), 100);
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

  return (
    <footer className="relative z-10 border-t border-cyan-500/15 bg-[#040711] text-slate-300 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info (5 Cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-600 to-indigo-600 p-[1.5px] shadow-md shadow-cyan-500/20">
                <div className="w-full h-full bg-[#060A17] rounded-[10px] flex items-center justify-center font-extrabold text-sm text-cyan-300 font-mono">
                  {personalInfo.initials}
                </div>
              </div>
              <div>
                <h3 className="text-base font-bold text-white tracking-tight">
                  SANTHOSH KUMAR R.
                </h3>
                <p className="text-xs text-cyan-400 font-mono">
                  Aspiring AI &amp; Data Science Engineer
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Engineering undergraduate at Rajalakshmi Institute of Technology focused on practical software systems, machine learning, and clean-energy platforms.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              <span>Rajalakshmi Institute of Technology (RIT), Chennai</span>
            </div>
          </div>

          {/* Quick Links (4 Cols) */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-slate-400 hover:text-cyan-300 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect & Social (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Connect Online
            </p>
            <div className="flex items-center gap-2.5">
              <a
                href={personalInfo.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/40 transition-colors"
                title="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-colors"
                title="GitHub"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <p className="text-[11px] text-slate-500 font-mono">
              rsanthoshkumar376@gmail.com
            </p>
          </div>

        </div>

        {/* Bottom Bar & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Santhosh Kumar R. All rights reserved.
          </p>

          <p className="flex items-center gap-1 text-[11px]">
            <span>Crafted with</span>
            <span className="text-cyan-400 font-mono">React + TypeScript + Tailwind</span>
          </p>

          {/* Circular Scroll-Progress Back To Top Trigger */}
          <button
            onClick={scrollToTop}
            title="Back to Top"
            className="flex items-center gap-2 p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-400 text-slate-400 hover:text-cyan-300 transition-all group"
          >
            <div className="relative w-5 h-5 flex items-center justify-center">
              <svg className="w-5 h-5 -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-slate-800"
                  strokeWidth="3"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-cyan-400 transition-all duration-150"
                  strokeDasharray={`${scrollProgress}, 100`}
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <ArrowUp className="w-2.5 h-2.5 absolute group-hover:-translate-y-0.5 transition-transform" />
            </div>
            <span className="text-[11px] font-mono">Top</span>
          </button>
        </div>

      </div>
    </footer>
  );
};
