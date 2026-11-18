import React from 'react';
import { 
  Compass, 
  Sparkles, 
  Brain, 
  Code2, 
  Users, 
  ArrowRight, 
  GraduationCap,
  Mail
} from 'lucide-react';
import { careerOpportunities, personalInfo } from '../data/portfolioData';
import { LinkedInIcon } from './Icons';

export const ExploringOpportunities: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return <Brain className="w-5 h-5 text-cyan-400" />;
      case 'Code':
        return <Code2 className="w-5 h-5 text-blue-400" />;
      case 'Users':
        return <Users className="w-5 h-5 text-sky-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="opportunities" className="py-20 lg:py-28 relative z-10 border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Career Path &amp; Growth</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Currently Exploring <span className="text-gradient-cyan">Opportunities</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600">
            As a motivated fresher with a solid foundation in AI, Data Science, and full-stack software development, I am actively seeking internships, collaborative projects, and hackathon teams.
          </p>
        </div>

        {/* Fresher Transparency Banner */}
        <div className="max-w-4xl mx-auto mb-12 p-6 rounded-3xl glass-card border border-cyan-500/30 bg-gradient-to-r from-cyan-950/30 via-blue-950/20 to-slate-900/30">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                  Fresher Candidate • RIT Chennai
                </span>
                <h3 className="text-lg font-bold text-white">
                  Ready to Deliver Real Value from Day One
                </h3>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Immediate Internship</span>
            </div>
          </div>
        </div>

        {/* Opportunities Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {careerOpportunities.map((opp, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-6 sm:p-7 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
            >
              <div className="space-y-4">
                <div className="p-3 rounded-2xl bg-cyan-950/70 border border-cyan-500/30 w-fit group-hover:scale-110 transition-transform">
                  {getIcon(opp.icon)}
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-cyan-400">
                    {opp.type}
                  </span>
                  <h4 className="text-lg font-bold text-white mt-2 group-hover:text-cyan-300 transition-colors">
                    {opp.role}
                  </h4>
                </div>

                <div className="space-y-1">
                  <p className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                    Target Focus:
                  </p>
                  <p className="text-xs text-cyan-300/90 font-medium">
                    {opp.focus}
                  </p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {opp.description}
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono">Immediate Impact</span>
                <a
                  href="#contact"
                  className="font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Connect</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Recruiter / Mentor Call to Action Box */}
        <div className="max-w-4xl mx-auto rounded-3xl glass-card border border-cyan-500/30 p-8 sm:p-10 text-center space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Looking for a Driven, Fast-Learning Engineering Intern?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
              I bring hands-on experience with multi-portal systems, clear understanding of Python, Java, SQL, React, and Gemini AI APIs, and an insatiable hunger to learn production engineering standards.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${personalInfo.email}?subject=Internship%20Opportunity%20-%20Santhosh%20Kumar%20R.`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 shadow-md shadow-cyan-500/25 transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Discuss Internship Opportunity</span>
            </a>

            <a
              href={personalInfo.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors"
            >
              <LinkedInIcon className="w-4 h-4 text-blue-400" />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
