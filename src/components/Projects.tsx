import React, { useState } from 'react';
import { 
  Sparkles, 
  Layers, 
  Zap, 
  CheckCircle2, 
  Bot, 
  ArrowRight,
  SunMedium,
  Grid,
  ShieldCheck,
  Building2,
  Users
} from 'lucide-react';
import { featuredProjects } from '../data/portfolioData';
import type { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { GitHubIcon } from './Icons';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Flagship Platform', 'AI & System Design', 'Full-Stack'];

  const filteredProjects = filter === 'All'
    ? featuredProjects
    : featuredProjects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 lg:py-28 relative z-10 border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Featured Software Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient-cyan">Projects</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600">
            Real-world systems, clean energy platforms, and AI-assisted architectures designed to solve tangible operational challenges.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                filter === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25 border border-cyan-400/50 scale-105'
                  : 'glass-panel text-slate-300 hover:text-white hover:border-cyan-500/30 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* =========================================================================
            FLAGSHIP SPOTLIGHT CARD: MRS SOLAR
           ========================================================================= */}
        {featuredProjects.filter(p => p.flagship).map((solarProject) => (
          <div
            key={solarProject.id}
            className="mb-14 rounded-3xl glass-card border-2 border-cyan-500/40 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden group"
          >
            {/* Ambient Background Accent Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Project Details (7 Cols) */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-cyan-500/20 border border-amber-400/50 text-amber-300 text-xs font-mono font-bold tracking-wide">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    FLAGSHIP PROJECT
                  </span>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-semibold">
                    ● In Active Development
                  </span>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                    Web &amp; Mobile Ready
                  </span>
                </div>

                {/* Title */}
                <div className="space-y-1">
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight flex items-center gap-3">
                    <span>{solarProject.title}</span>
                    <SunMedium className="w-7 h-7 text-amber-400 animate-spin-slow" />
                  </h3>
                  <p className="text-base sm:text-lg text-cyan-300 font-medium">
                    {solarProject.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {solarProject.description}
                </p>

                {/* CRITICAL ARCHITECTURE CALLOUT: GRID-TIED ONLY, NO BATTERY */}
                <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border-l-4 border-amber-400 border-t border-r border-b border-amber-500/20 space-y-2">
                  <div className="flex items-center gap-2 text-amber-300 font-bold text-xs uppercase tracking-wider font-mono">
                    <Zap className="w-4 h-4 text-amber-400" />
                    <span>Essential Architectural Requirement: 100% Grid-Tied System</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    Solar energy generated from rooftop photovoltaic panels is <strong>fed directly into the TNEB (Tamil Nadu Electricity Board) electrical grid</strong> via bidirectional net-metering.
                  </p>
                  <p className="text-xs text-amber-300 font-mono flex items-center gap-1.5 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>No battery storage or battery backup functionality is used — minimizing customer maintenance and maximizing net-metered credit returns.</span>
                  </p>
                </div>

                {/* Modules Overview Highlights */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                      Planned &amp; Developed Modules (10 Key Components)
                    </p>
                    <span className="text-[10px] text-slate-400 font-mono">Role-Based Ecosystem</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-900/60 border border-slate-800">
                      <Users className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="text-slate-200">Customer &amp; Owner Portals</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-900/60 border border-slate-800">
                      <Building2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span className="text-slate-200">Manager &amp; Worker CRM Portals</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-900/60 border border-slate-800">
                      <Grid className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="text-slate-200">Solar Generation &amp; Grid Tracking</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-900/60 border border-slate-800">
                      <Bot className="w-3.5 h-3.5 text-cyan-300 shrink-0" />
                      <span className="text-slate-200">Gemini API AI Solar Assistant</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-900/60 border border-slate-800">
                      <Zap className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="text-slate-200">TNEB Bill &amp; Tariff Integration</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-900/60 border border-slate-800">
                      <Layers className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span className="text-slate-200">Solar Loan &amp; Milestone Tracking</span>
                    </div>
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {solarProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-3 py-1 rounded-xl bg-slate-900 border border-cyan-500/20 text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => setSelectedProject(solarProject)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 transition-all shadow-md shadow-cyan-500/20"
                  >
                    <span>View Architecture &amp; All 10 Modules</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {solarProject.githubUrl && (
                    <a
                      href={solarProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
                    >
                      <GitHubIcon className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>

              </div>

              {/* Right Column: Architectural Flow Diagram Preview (5 Cols) */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#060A17] border border-cyan-500/30 p-5 space-y-4 shadow-xl">
                  
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <span className="text-xs font-mono font-bold text-cyan-400">
                      GRID-TIED SOLAR FLOW
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      Zero Battery Overhead
                    </span>
                  </div>

                  {/* Flow Steps SVG Visual */}
                  <div className="space-y-3">
                    {/* Step 1: Rooftop Solar PV */}
                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs">
                          1
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white">Rooftop Solar PV Array</p>
                          <p className="text-[10px] text-slate-400">Generates clean DC electricity</p>
                        </div>
                      </div>
                      <SunMedium className="w-4 h-4 text-amber-400" />
                    </div>

                    <div className="flex justify-center text-cyan-400">
                      ↓
                    </div>

                    {/* Step 2: On-Grid String Inverter */}
                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-xs">
                          2
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white">On-Grid String Inverter</p>
                          <p className="text-[10px] text-slate-400">Converts DC to synchronized AC power</p>
                        </div>
                      </div>
                      <Zap className="w-4 h-4 text-cyan-400" />
                    </div>

                    <div className="flex justify-center text-cyan-400">
                      ↓
                    </div>

                    {/* Step 3: Bi-directional Net Meter */}
                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs">
                          3
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white">Bi-Directional Net Meter</p>
                          <p className="text-[10px] text-slate-400">Records export vs import units</p>
                        </div>
                      </div>
                      <Grid className="w-4 h-4 text-blue-400" />
                    </div>

                    <div className="flex justify-center text-cyan-400">
                      ↓
                    </div>

                    {/* Step 4: TNEB Electrical Grid */}
                    <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-950/50 to-slate-950 border border-emerald-500/40 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                          4
                        </div>
                        <div>
                          <p className="text-xs font-bold text-emerald-300">TNEB Power Grid Export</p>
                          <p className="text-[10px] text-slate-300">Clean power sent directly to EB grid</p>
                        </div>
                      </div>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-400 text-center font-mono pt-1">
                    Direct Grid Integration • Zero Battery Degradation
                  </p>

                </div>
              </div>

            </div>
          </div>
        ))}

        {/* =========================================================================
            SECONDARY PROJECTS GRID (NOURISH NETWORK & AICTE VALIDATION)
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.filter(p => !p.flagship).map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-xl"
            >
              <div className="space-y-5">
                
                {/* Header Pills */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-300">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                    {project.status}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-400/90 font-medium mt-1">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="space-y-2 pt-1">
                  <p className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                    Core Architectural Features:
                  </p>
                  <div className="space-y-1.5 text-xs">
                    {project.features.slice(0, 4).map((f, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              {/* Card Footer Actions */}
              <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors"
                      title="View GitHub Repository"
                    >
                      <GitHubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Project Scope & Integrity Callout */}
        <div className="mt-12 text-center text-xs text-slate-400 max-w-2xl mx-auto flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>
            Status transparency: Flagship project features reflect active engineering while concepts represent architectural designs submitted for hackathon evaluations.
          </span>
        </div>

      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
