import React from 'react';
import { 
  X, 
  Layers, 
  CheckCircle2, 
  Zap, 
  ShieldCheck 
} from 'lucide-react';
import type { Project } from '../types/portfolio';
import { GitHubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl glass-panel rounded-3xl border border-cyan-500/30 shadow-2xl p-6 sm:p-8 space-y-6 bg-[#060A17]/95 my-8">
        
        {/* Modal Top Bar */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className={`text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full ${
                project.flagship 
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                  : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
              }`}>
                {project.category}
              </span>
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                Status: {project.status}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-cyan-400 font-medium mt-1">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Critical System Architecture Notice for MRS SOLAR */}
        {project.gridTiedRequirement && (
          <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-2">
            <div className="flex items-center gap-2 text-amber-300 font-bold text-xs uppercase tracking-wider font-mono">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Crucial Grid-Tied System Architecture</span>
            </div>
            <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed">
              {project.gridTiedRequirement}
            </p>
            <div className="pt-2 flex items-center gap-2 text-[11px] font-mono text-amber-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Electricity exported directly to TNEB EB Grid • Strictly NO battery storage required</span>
            </div>
          </div>
        )}

        {/* Project Description */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
            System Overview &amp; Context
          </h4>
          <p className="text-sm text-slate-200 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Modules Breakdown (for MRS SOLAR) */}
        {project.modules && project.modules.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-4 h-4" />
                <span>Planned &amp; Developed Platform Modules (10 Modules)</span>
              </h4>
              <span className="text-[10px] text-slate-400 font-mono">Multi-Role Architecture</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {project.modules.map((module, i) => (
                <div
                  key={i}
                  className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-2 hover:border-cyan-500/30 transition-colors"
                >
                  <span className="w-5 h-5 rounded-md bg-cyan-950 text-cyan-400 text-[10px] font-mono flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    {i + 1}
                  </span>
                  <span className="text-slate-300 leading-snug">{module}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Features / Capabilities */}
        <div className="space-y-2.5">
          <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
            Key Engineering Features &amp; Implementations
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {project.features.map((feat, i) => (
              <div key={i} className="flex items-start gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
            Technologies &amp; Frameworks
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-3 py-1 rounded-xl bg-slate-900 border border-cyan-500/20 text-cyan-300 font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer Links */}
        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Honest Project Scope: Features shown reflect design specifications.</span>
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                <GitHubIcon className="w-4 h-4" />
                <span>View GitHub</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
