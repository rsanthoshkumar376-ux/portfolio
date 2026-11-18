import React, { useState } from 'react';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Wrench, 
  Cpu, 
  Sparkles, 
  Layers, 
  CheckCircle,
  Terminal,
  GitBranch,
  Bot,
  Eye,
  FileCode,
  Palette,
  FileJson,
  Atom,
  Coffee
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import { GitHubIcon } from './Icons';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...skillCategories.map((c) => c.title)];

  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Programming Languages':
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'Frontend Engineering':
        return <Layout className="w-5 h-5 text-blue-400" />;
      case 'Backend & Systems':
        return <Server className="w-5 h-5 text-indigo-400" />;
      case 'Databases & Storage':
        return <Database className="w-5 h-5 text-teal-400" />;
      case 'Tools & Development Platforms':
        return <Wrench className="w-5 h-5 text-amber-400" />;
      case 'AI & Emerging Technologies':
        return <Cpu className="w-5 h-5 text-sky-400" />;
      default:
        return <Layers className="w-5 h-5 text-cyan-400" />;
    }
  };

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Python':
        return <Terminal className="w-4 h-4 text-amber-400" />;
      case 'Coffee':
        return <Coffee className="w-4 h-4 text-orange-400" />;
      case 'Database':
        return <Database className="w-4 h-4 text-emerald-400" />;
      case 'FileCode':
        return <FileCode className="w-4 h-4 text-orange-500" />;
      case 'Palette':
        return <Palette className="w-4 h-4 text-blue-400" />;
      case 'FileJson':
        return <FileJson className="w-4 h-4 text-yellow-400" />;
      case 'Atom':
        return <Atom className="w-4 h-4 text-cyan-400 animate-spin-slow" />;
      case 'Server':
        return <Server className="w-4 h-4 text-emerald-400" />;
      case 'Terminal':
        return <Terminal className="w-4 h-4 text-blue-400" />;
      case 'GitBranch':
        return <GitBranch className="w-4 h-4 text-rose-400" />;
      case 'Github':
        return <GitHubIcon className="w-4 h-4 text-slate-200" />;
      case 'Sparkles':
        return <Sparkles className="w-4 h-4 text-cyan-300" />;
      case 'Bot':
        return <Bot className="w-4 h-4 text-sky-400" />;
      case 'Eye':
        return <Eye className="w-4 h-4 text-purple-400" />;
      default:
        return <CheckCircle className="w-4 h-4 text-cyan-400" />;
    }
  };

  const filteredCategories = selectedCategory === 'All'
    ? skillCategories
    : skillCategories.filter((c) => c.title === selectedCategory);

  return (
    <section id="skills" className="py-20 lg:py-28 relative z-10 border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Skills &amp; <span className="text-gradient-cyan">Technologies</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600">
            A transparent overview of programming languages, frontend/backend stacks, and applied AI tools used in practical projects.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25 border border-cyan-400/50 scale-105'
                  : 'glass-panel text-slate-300 hover:text-white hover:border-cyan-500/30 border border-slate-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.title}
              className="glass-card rounded-3xl p-6 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-800">
                  <div className="p-2.5 rounded-2xl bg-cyan-950/60 border border-cyan-500/30 group-hover:scale-105 transition-transform">
                    {getCategoryIcon(cat.title)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 line-clamp-1">{cat.description}</p>
                  </div>
                </div>

                {/* Progress-Free Skill Cards */}
                <div className="space-y-3">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 transition-all group/item hover:bg-slate-900/90"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <div className="p-1.5 rounded-lg bg-slate-950/80 border border-slate-800">
                            {getSkillIcon(skill.iconName)}
                          </div>
                          <span className="text-xs sm:text-sm font-bold text-slate-100">
                            {skill.name}
                          </span>
                        </div>
                        {skill.isKey && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-300">
                            Core
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-400 pl-8 leading-tight">
                        {skill.practicalContext}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Integrity Tag */}
              <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>Practical Experience</span>
                <span className="text-cyan-400/80">No Fake Claims</span>
              </div>
            </div>
          ))}
        </div>

        {/* Academic & Applied Methodology Note */}
        <div className="mt-12 p-6 rounded-3xl glass-card border border-cyan-500/20 max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="p-3 rounded-2xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 shrink-0">
            <Sparkles className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-white">Honest Engineering Commitment</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Every skill listed here represents active, verified academic coursework, hands-on hackathons, or functional project implementations. I believe in demonstrating competence through working software rather than arbitrary progress percentages.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
