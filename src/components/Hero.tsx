import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  ArrowRight, 
  Mail, 
  Sparkles, 
  Cpu, 
  Code2, 
  Camera, 
  ExternalLink,
  GraduationCap
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { LinkedInIcon, GitHubIcon } from './Icons';

interface HeroProps {
  onOpenResume: () => void;
  onOpenPhotoModal: () => void;
  customPhotoUrl?: string;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenPhotoModal, customPhotoUrl }) => {
  const [photoError, setPhotoError] = useState(false);
  
  // Rotating animated titles
  const titles = [
    "Aspiring AI & Data Science Engineer",
    "Full-Stack Web Developer",
    "Practical Problem Solver",
    "Hackathon Innovator"
  ];
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && displayedText === currentTitle) {
      // Pause before deleting
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedText(
        isDeleting
          ? currentTitle.substring(0, displayedText.length - 1)
          : currentTitle.substring(0, displayedText.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, titleIndex]);

  const activePhoto = customPhotoUrl || personalInfo.avatarPlaceholder;

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs (7 columns on desktop) */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Status / Affiliation Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 text-xs font-medium backdrop-blur-md shadow-sm shadow-cyan-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold text-emerald-400">Open for Internships</span>
              <span className="text-slate-500">•</span>
              <span className="flex items-center gap-1 text-slate-300">
                <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                Rajalakshmi Institute of Technology (RIT)
              </span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2">
              <p className="text-base sm:text-lg font-mono text-cyan-400 tracking-wider">
                Hi, I'm
              </p>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-tight">
                <span className="bg-gradient-to-r from-white via-slate-100 to-cyan-200 bg-clip-text text-transparent">
                  SANTHOSH
                </span>{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                  KUMAR R.
                </span>
              </h1>
            </div>

            {/* Animated Subtitle / Title */}
            <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
              <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-200">
                {displayedText}
                <span className="inline-block w-0.5 h-6 sm:h-7 bg-cyan-400 ml-1 animate-pulse align-middle" />
              </span>
            </div>

            {/* Core Objective / Value Proposition */}
            <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 light:text-slate-700 max-w-2xl leading-relaxed">
              I build practical digital solutions using programming, web technologies and artificial intelligence.
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              {/* Explore Projects Button */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:shadow-cyan-400/40 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              {/* Download Resume Button */}
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-100 dark:text-slate-100 light:text-slate-900 bg-slate-900/80 hover:bg-slate-800/80 border border-slate-700/80 hover:border-cyan-500/50 shadow-md backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social & Contact Buttons Bar */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-3">
              {/* LinkedIn Button */}
              <a
                href={personalInfo.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Santhosh Kumar R. LinkedIn Profile"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-900/60 hover:bg-blue-600/20 border border-slate-800 hover:border-blue-500/50 transition-all duration-200"
              >
                <LinkedInIcon className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>

              {/* GitHub Button */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Santhosh Kumar R. GitHub Profile"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800 border border-slate-800 hover:border-slate-600 transition-all duration-200"
              >
                <GitHubIcon className="w-4 h-4 text-slate-300" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>

              {/* Email Contact Button */}
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email Santhosh Kumar R."
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-900/60 hover:bg-cyan-500/20 border border-slate-800 hover:border-cyan-500/50 transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Email Me</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Profile Photo Card (5 columns on desktop) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer Decorative Glow Rings */}
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/30 via-blue-600/30 to-purple-600/30 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 animate-pulse duration-1000" />

              {/* Glassmorphic Profile Card Container */}
              <div className="relative rounded-3xl glass-card p-6 sm:p-7 border border-cyan-500/30 shadow-2xl">
                
                {/* Photo Display Frame */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-b from-[#0A1128] to-[#060A17] border border-cyan-500/20 flex flex-col items-center justify-center group/photo">
                  
                  {!photoError ? (
                    <img
                      src={activePhoto}
                      alt="Santhosh Kumar R."
                      onError={() => setPhotoError(true)}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/photo:scale-105"
                    />
                  ) : (
                    /* Default Developer Avatar Illustration if image not yet placed in /public/images/profile.jpg */
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center space-y-4 bg-gradient-to-b from-slate-900/90 to-[#060A17]">
                      <div className="relative w-28 h-28 rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-600 to-indigo-600 p-[2px] shadow-xl shadow-cyan-500/20">
                        <div className="w-full h-full bg-[#060A17] rounded-[14px] flex items-center justify-center">
                          <span className="font-extrabold text-4xl bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent font-mono">
                            SK
                          </span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-semibold text-slate-200">Santhosh Kumar R.</p>
                        <p className="text-xs text-cyan-400 font-mono">B.Tech AI &amp; Data Science</p>
                        <p className="text-[11px] text-slate-400">Rajalakshmi Institute of Technology</p>
                      </div>
                      <div className="pt-2">
                        <span className="text-[10px] px-2.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 font-mono">
                          Editable Photo Area
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Quick Photo Replacement Helper Button */}
                  <button
                    onClick={onOpenPhotoModal}
                    title="Change / Upload photo preview"
                    className="absolute top-3 right-3 p-2 rounded-xl bg-slate-900/80 hover:bg-cyan-950 border border-cyan-500/40 text-cyan-300 shadow-md backdrop-blur-md transition-all hover:scale-105"
                  >
                    <Camera className="w-4 h-4" />
                  </button>

                  {/* Flagship Project Floating Ribbon on Card */}
                  <div className="absolute bottom-3 left-3 right-3 px-3.5 py-2.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-cyan-500/30 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-cyan-400" />
                      <div>
                        <p className="text-xs font-bold text-white">MRS SOLAR</p>
                        <p className="text-[10px] text-slate-400">Flagship Grid-Tied Platform</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      Active
                    </span>
                  </div>
                </div>

                {/* Floating Tech Chips around Card */}
                <div className="mt-5 grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-900/50 border border-slate-800">
                    <Cpu className="w-4 h-4 text-cyan-400" />
                    <div>
                      <p className="font-semibold text-slate-200">Google Gemini API</p>
                      <p className="text-[10px] text-slate-400">AI Integration</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-900/50 border border-slate-800">
                    <Code2 className="w-4 h-4 text-blue-400" />
                    <div>
                      <p className="font-semibold text-slate-200">Full-Stack Web</p>
                      <p className="text-[10px] text-slate-400">React • Node • MySQL</p>
                    </div>
                  </div>
                </div>

                {/* Developer Instructions Note */}
                <p className="text-[11px] text-slate-400 text-center mt-3 font-mono">
                  Tip: Put <code className="text-cyan-300">profile.jpg</code> in <code className="text-cyan-300">/public/images/</code> to display your photo.
                </p>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
