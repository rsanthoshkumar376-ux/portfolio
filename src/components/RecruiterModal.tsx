import React from 'react';
import { 
  X, 
  Sparkles, 
  GraduationCap, 
  Layers, 
  FileText, 
  Mail, 
  Zap, 
  Award, 
  ExternalLink,
  ArrowRight
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { LinkedInIcon, GitHubIcon } from './Icons';

interface RecruiterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
  onOpenProjects: () => void;
}

export const RecruiterModal: React.FC<RecruiterModalProps> = ({
  isOpen,
  onClose,
  onOpenResume,
  onOpenProjects
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl glass-panel rounded-3xl border border-cyan-500/40 shadow-2xl p-6 sm:p-8 space-y-6 bg-[#060A17]/95 my-6 text-slate-100">
        
        {/* Header Bar */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/40 text-cyan-300">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold">
                  ● 30-Second Candidate Snapshot
                </span>
                <span className="text-[10px] font-mono text-cyan-400">
                  Recruiter Fast-Track
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                Santhosh Kumar R.
              </h3>
              <p className="text-xs text-slate-300">
                Aspiring AI &amp; Data Science Engineer | Software Developer
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 4 Quick Executive Bullet Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          
          {/* Card 1: Education */}
          <div className="p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-1.5">
            <div className="flex items-center gap-2 text-cyan-400 font-bold font-mono">
              <GraduationCap className="w-4 h-4" />
              <span>Academic Foundation</span>
            </div>
            <p className="text-white font-semibold">Rajalakshmi Institute of Technology</p>
            <p className="text-slate-400 text-[11px]">
              B.Tech in Artificial Intelligence &amp; Data Science (Fresher candidate, Chennai).
            </p>
          </div>

          {/* Card 2: Technical Skills */}
          <div className="p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-1.5">
            <div className="flex items-center gap-2 text-blue-400 font-bold font-mono">
              <Layers className="w-4 h-4" />
              <span>Core Stack</span>
            </div>
            <p className="text-white font-semibold">Python • Java • SQL • React • Node.js</p>
            <p className="text-slate-400 text-[11px]">
              MySQL relational modeling, Gemini AI API integration, Git/GitHub.
            </p>
          </div>

          {/* Card 3: Flagship Project */}
          <div className="p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-1.5">
            <div className="flex items-center gap-2 text-amber-400 font-bold font-mono">
              <Zap className="w-4 h-4" />
              <span>Flagship: MRS SOLAR</span>
            </div>
            <p className="text-white font-semibold">10-Module Grid-Tied Clean Energy Platform</p>
            <p className="text-slate-400 text-[11px]">
              Direct export to TNEB EB grid (zero battery storage) + Gemini conversational AI.
            </p>
          </div>

          {/* Card 4: Verified Certifications */}
          <div className="p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-1.5">
            <div className="flex items-center gap-2 text-emerald-400 font-bold font-mono">
              <Award className="w-4 h-4" />
              <span>13 Verified Certificates</span>
            </div>
            <p className="text-white font-semibold">Infosys Springboard Program</p>
            <p className="text-slate-400 text-[11px]">
              Verified coursework in Python, Java OOP, DBMS, AI, Machine Learning, Web &amp; Git.
            </p>
          </div>

        </div>

        {/* Why Hire Santhosh Callout */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-950/50 to-blue-950/40 border border-cyan-500/30 space-y-2">
          <p className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Why Consider Santhosh for Your Team
          </p>
          <p className="text-xs text-slate-200 leading-relaxed">
            Unlike many students with theoretical-only knowledge, Santhosh has architected complete end-to-end applications (such as <strong>MRS SOLAR</strong> with multi-role portals, field CRM, and utility grid integration). He brings fast learning agility, rigorous honesty, and direct availability for internships and trainee roles.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            
            <button
              onClick={() => {
                onClose();
                onOpenResume();
              }}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 transition-all shadow-md shadow-cyan-500/25"
            >
              <FileText className="w-4 h-4" />
              <span>View &amp; Download Full Resume</span>
            </button>

            <a
              href={`mailto:${personalInfo.email}?subject=Interview%20/%20Internship%20Inquiry%20-%20Santhosh%20Kumar%20R.`}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-md shadow-blue-500/20"
            >
              <Mail className="w-4 h-4" />
              <span>Email Santhosh Directly</span>
            </a>

          </div>

          <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800">
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <LinkedInIcon className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <GitHubIcon className="w-3.5 h-3.5 text-slate-400" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenProjects();
              }}
              className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
