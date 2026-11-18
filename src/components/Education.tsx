import React from 'react';
import { GraduationCap, BookOpen, MapPin, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 lg:py-28 relative z-10 border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Education &amp; <span className="text-gradient-cyan">Academics</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600">
            Formal undergraduate engineering curriculum in Artificial Intelligence and Data Science at Rajalakshmi Institute of Technology.
          </p>
        </div>

        {/* Modern Vertical Timeline */}
        <div className="max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <div key={index} className="relative pl-8 sm:pl-10 pb-8 last:pb-0">
              
              {/* Left Timeline Bar & Dot */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-transparent" />
              <div className="absolute -left-[9px] top-1.5 w-5 h-5 rounded-full bg-[#060A17] border-2 border-cyan-400 flex items-center justify-center shadow-md shadow-cyan-400/30">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              </div>

              {/* Card Container */}
              <div className="glass-card rounded-3xl p-6 sm:p-8 border border-cyan-500/20 shadow-xl space-y-6">
                
                {/* Degree & College Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-slate-800">
                  <div>
                    <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider block mb-1">
                      Undergraduate Degree
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-base text-cyan-300 font-semibold mt-0.5">
                      {edu.department}
                    </p>
                    <p className="text-sm text-slate-300 font-medium mt-1">
                      {edu.institution}
                    </p>
                  </div>

                  <div className="flex sm:flex-col items-start sm:items-end gap-2 text-xs font-mono text-slate-400">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      {edu.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-semibold">
                      Current Degree Candidate
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {edu.description}
                </p>

                {/* Core Coursework Grid */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    <BookOpen className="w-4 h-4 text-cyan-400" />
                    <span>Key Engineering Coursework:</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs">
                    {edu.coreSubjects.map((sub, i) => (
                      <div
                        key={i}
                        className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span className="text-slate-200 font-medium">{sub}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Academic Highlights */}
                <div className="space-y-2 pt-1">
                  <p className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    Academic Focus &amp; Practical Application:
                  </p>
                  <div className="space-y-2 text-xs text-slate-300">
                    {edu.academicFocus.map((focus, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-cyan-400 font-bold">•</span>
                        <span>{focus}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
