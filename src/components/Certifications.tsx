import React, { useState } from 'react';
import { Award, Calendar, Search, ShieldCheck, FileCheck, FileDown, ExternalLink } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';
import type { Certificate } from '../types/portfolio';
import { CertificateModal } from './CertificateModal';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCerts = certificationsData.filter((c) =>
    c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.skillsLearned.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section id="certifications" className="py-20 lg:py-28 relative z-10 border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Infosys Springboard <span className="text-gradient-cyan">Certifications</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600">
            13 verified credentials completed in Artificial Intelligence, Deep Learning, Generative Models (GPT-3), Natural Language Processing, Computer Vision, Prompt Engineering, RPA, and Agile Scrum.
          </p>
        </div>

        {/* Action Controls & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 max-w-6xl mx-auto">
          <div className="flex items-center gap-3">
            <span className="text-3xl font-black text-cyan-400 font-mono">13</span>
            <div>
              <p className="text-xs sm:text-sm text-slate-100 font-bold">
                Total Verified Certifications
              </p>
              <p className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" />
                Authorized by Infosys Springboard &amp; Wingspan
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search AI, GPT-3, Vision, NLP..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>

            {/* Master PDF Download Button */}
            <a
              href="/certificates/infosys-springboard-certificates.pdf"
              download="Santhosh_Kumar_R_13_Infosys_Certificates.pdf"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 transition-all shadow-md shadow-cyan-500/20 shrink-0"
            >
              <FileDown className="w-4 h-4" />
              <span>Download All 13 (Master PDF)</span>
            </a>
          </div>
        </div>

        {/* 13 Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredCerts.map((cert, index) => (
            <div
              key={cert.id}
              className="glass-card rounded-3xl p-6 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
            >
              <div className="space-y-4">
                
                {/* Header Badge */}
                <div className="flex items-start justify-between gap-2">
                  <div className="p-2.5 rounded-2xl bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 group-hover:scale-105 transition-transform">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-400">
                    #{index + 1}
                  </span>
                </div>

                {/* Title and Issuer */}
                <div>
                  <span className="text-[11px] font-mono text-cyan-400 font-semibold uppercase tracking-wider block">
                    {cert.issuer}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mt-1">
                    {cert.title}
                  </h3>
                </div>

                {/* Date & Meta */}
                <div className="flex items-center gap-3 text-xs font-mono text-slate-400 pt-1">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    {cert.date}
                  </span>
                  <span>•</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified
                  </span>
                </div>

                {/* Skills Preview */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cert.skillsLearned.map((skill, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-900/80 border border-slate-800 text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>

              {/* View Certificate Button */}
              <div className="pt-5 mt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold text-slate-200 bg-slate-900/90 hover:bg-cyan-950 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/40 transition-all duration-200"
                >
                  <FileCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Inspect Credential</span>
                </button>

                {cert.certificateFile && (
                  <a
                    href={cert.certificateFile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl text-slate-400 hover:text-cyan-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors"
                    title="Open PDF Document"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Real Document Callout */}
        <div className="mt-12 p-4 rounded-2xl glass-panel border border-emerald-500/20 text-center max-w-2xl mx-auto text-xs text-slate-300 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>
            All 13 certificates have been verified and linked directly to their respective official Infosys Springboard PDF documents.
          </span>
        </div>

      </div>

      {/* Certificate Detail Modal */}
      <CertificateModal
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
};
