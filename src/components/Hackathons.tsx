import React from 'react';
import { ShieldCheck, Flame } from 'lucide-react';
import { hackathonsData } from '../data/portfolioData';

export const Hackathons: React.FC = () => {
  return (
    <section id="hackathons" className="py-20 lg:py-28 relative z-10 border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>Competitive Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Hackathons &amp; <span className="text-gradient-cyan">Achievements</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600">
            Participation in national-tier hackathons, design sprints, and technical symposia focused on building functional solutions.
          </p>
        </div>

        {/* Hackathon Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {hackathonsData.map((hackathon) => (
            <div
              key={hackathon.id}
              className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 shadow-xl relative overflow-hidden"
            >
              {/* Subtle Ambient Blob */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-5 relative z-10">
                {/* Event Badge & Verified Status */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-gradient-to-r from-cyan-950 to-blue-950 border border-cyan-500/40 text-cyan-300">
                    {hackathon.event}
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified
                  </span>
                </div>

                {/* Title and Tagline */}
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {hackathon.title}
                  </h3>
                  <p className="text-xs text-cyan-400 font-mono mt-1">
                    Role: {hackathon.role}
                  </p>
                </div>

                {/* Problem Statement Tackled */}
                <div className="space-y-1.5">
                  <p className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                    Challenge Addressed:
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {hackathon.problemStatement}
                  </p>
                </div>

                {/* Solution Summary */}
                <div className="space-y-1.5">
                  <p className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                    Engineered Solution:
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {hackathon.solutionSummary}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {hackathon.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2.5 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>

              {/* Footer Status */}
              <div className="pt-5 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Activity:</span>
                <span className="text-cyan-300 font-semibold">{hackathon.status}</span>
              </div>

            </div>
          ))}
        </div>

        {/* Participation Transparency Callout */}
        <div className="mt-12 text-center text-xs text-slate-400 max-w-2xl mx-auto flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>
            Ethical portfolio policy: All hackathons represent genuine participation and software prototypes. No fictional placements or unverified rankings.
          </span>
        </div>

      </div>
    </section>
  );
};
