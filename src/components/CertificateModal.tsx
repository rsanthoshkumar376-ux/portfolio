import React from 'react';
import { X, Award, CheckCircle2, ShieldCheck, FileText, ExternalLink } from 'lucide-react';
import type { Certificate } from '../types/portfolio';

interface CertificateModalProps {
  cert: Certificate | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ cert, onClose }) => {
  if (!cert) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl glass-panel rounded-3xl border border-cyan-500/30 shadow-2xl p-6 sm:p-8 space-y-6 bg-[#060A17]/95 text-slate-100">
        
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-cyan-400 font-bold uppercase tracking-wider block">
                {cert.issuer}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {cert.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Badge Display */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-[#0A1128] border border-cyan-500/20 text-center space-y-3">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 p-[1.5px] shadow-lg shadow-cyan-500/20">
            <div className="w-full h-full bg-[#060A17] rounded-[14px] flex items-center justify-center">
              <Award className="w-8 h-8 text-cyan-400" />
            </div>
          </div>
          <div>
            <p className="text-base font-bold text-white">{cert.title}</p>
            <p className="text-xs text-cyan-400 font-mono mt-0.5">Awarded to Santhosh Kumar R</p>
          </div>
          <div className="flex items-center justify-center gap-4 text-xs font-mono text-slate-300 pt-2 border-t border-slate-800">
            <span>Completed: <strong>{cert.date}</strong></span>
            {cert.credentialId && <span>ID: <strong className="text-cyan-300">{cert.credentialId}</strong></span>}
          </div>
        </div>

        {/* Competencies Verified */}
        <div className="space-y-2.5">
          <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
            Verified Competencies &amp; Coursework:
          </h4>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {cert.skillsLearned.map((skill, i) => (
              <div key={i} className="flex items-center gap-2 p-2 rounded-xl bg-slate-900/60 border border-slate-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="text-slate-200">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Official Document Actions */}
        <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>Official Infosys Issued Document Ready</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            {cert.certificateFile && (
              <a
                href={cert.certificateFile}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 transition-all shadow-sm"
              >
                <span>Open Certificate PDF</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {cert.verificationLink && (
              <a
                href={cert.verificationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 transition-all"
              >
                <span>Verify Online</span>
              </a>
            )}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-800">
          <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4" />
            <span>Verified by Infosys Wingspan</span>
          </span>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
