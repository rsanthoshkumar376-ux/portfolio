import React from 'react';
import { 
  Brain, 
  Cpu, 
  Layers, 
  Database, 
  Code, 
  Lightbulb, 
  Trophy, 
  Compass, 
  CheckCircle2,
  GraduationCap
} from 'lucide-react';
import { aboutData, personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  const interestIcons = [
    <Brain className="w-5 h-5 text-cyan-400" />,
    <Cpu className="w-5 h-5 text-blue-400" />,
    <Layers className="w-5 h-5 text-sky-400" />,
    <Database className="w-5 h-5 text-teal-400" />,
    <Code className="w-5 h-5 text-indigo-400" />,
    <Lightbulb className="w-5 h-5 text-amber-400" />,
    <Trophy className="w-5 h-5 text-cyan-400" />,
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative z-10 border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Engineering Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient-cyan">Santhosh Kumar R.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600">
            Passionate student engineer eager to bridge the gap between algorithmic intelligence and practical web software.
          </p>
        </div>

        {/* Narrative & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main Narrative Card (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-5 border border-cyan-500/20 shadow-xl">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
                <div className="p-2.5 rounded-xl bg-cyan-950/70 border border-cyan-500/30 text-cyan-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Undergraduate Engineering Journey</h3>
                  <p className="text-xs text-cyan-400 font-mono">
                    Rajalakshmi Institute of Technology • AI &amp; Data Science
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                {aboutData.intro}
              </p>

              <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                {aboutData.philosophy}
              </p>

              {/* Career Objective Highlight Callout */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-blue-950/30 to-slate-900/40 border border-cyan-500/30 space-y-2">
                <p className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                  Career Objective
                </p>
                <p className="text-xs sm:text-sm text-slate-200 italic font-medium leading-relaxed">
                  "{personalInfo.careerObjective}"
                </p>
              </div>

              {/* Core Strengths Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Strong Algorithmic &amp; OOP Foundations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Hands-on React &amp; Node.js Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Practical Relational Database Modeling (MySQL)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Generative AI &amp; Gemini API Integration</span>
                </div>
              </div>

            </div>
          </div>

          {/* Quick Metrics & Pillars (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="grid grid-cols-2 gap-3.5">
              {aboutData.stats.map((stat, i) => (
                <div
                  key={i}
                  className="glass-card rounded-2xl p-4 sm:p-5 border border-slate-800 hover:border-cyan-500/30 transition-all text-center space-y-1.5"
                >
                  <p className="text-[11px] font-mono text-cyan-400/90 uppercase tracking-wider">{stat.label}</p>
                  <p className="text-lg sm:text-xl font-extrabold text-white tracking-tight">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Academic Environment Highlights */}
            <div className="glass-card rounded-3xl p-5 sm:p-6 border border-slate-800 space-y-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono text-cyan-300">
                Core Academic Rigor
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Trained at Rajalakshmi Institute of Technology with an intensive curriculum in artificial intelligence, mathematical optimization, and software system lifecycle. Dedicated to writing clean, maintainable code rather than relying on shallow shortcuts.
              </p>
              <div className="pt-2 flex flex-wrap gap-1.5">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                  Data Structures
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                  Machine Learning
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                  Relational DBs
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                  Web Stacks
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Interests & Domains of Passion Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Core Technical Interests &amp; Focus Areas
            </h3>
            <span className="text-xs font-mono text-cyan-400 hidden sm:inline">
              7 Specialized Verticals
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {aboutData.interests.map((item, index) => (
              <div
                key={item.title}
                className="glass-card rounded-2xl p-5 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-1 space-y-2.5"
              >
                <div className="p-2.5 rounded-xl bg-slate-900/80 w-fit group-hover:scale-110 transition-transform">
                  {interestIcons[index % interestIcons.length]}
                </div>
                <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
