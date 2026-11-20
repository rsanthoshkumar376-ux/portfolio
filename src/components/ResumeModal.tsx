import React from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Mail, 
  FileText
} from 'lucide-react';
import { personalInfo, educationData } from '../data/portfolioData';
import { LinkedInIcon, GitHubIcon } from './Icons';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white text-slate-900 rounded-3xl shadow-2xl p-6 sm:p-10 my-6 border border-slate-200 print:p-0 print:m-0 print:border-none print:shadow-none">
        
        {/* Modal Controls Bar (hidden during printing) */}
        <div className="no-print flex items-center justify-between pb-6 mb-6 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600" />
            <span className="font-bold text-sm text-slate-700">
              Interactive Resume Preview – Santhosh Kumar R.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>

            <a
              href={personalInfo.resumePath}
              download="Santhosh_Kumar_R_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* =========================================================================
            RESUME BODY (ATS-Optimized Clean Typography)
           ========================================================================= */}
        <div className="space-y-6 text-slate-800">
          
          {/* Header */}
          <div className="text-center sm:text-left sm:flex sm:justify-between sm:items-start pb-4 border-b-2 border-slate-800">
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                SANTHOSH KUMAR R.
              </h1>
              <p className="text-sm font-semibold text-blue-700 mt-0.5">
                Aspiring AI &amp; Data Science Engineer | Software Developer
              </p>
              <p className="text-xs text-slate-600">
                Rajalakshmi Institute of Technology (RIT), Chennai
              </p>
            </div>

            <div className="mt-3 sm:mt-0 text-xs space-y-1 text-slate-600 sm:text-right font-mono">
              <p className="flex sm:justify-end items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-blue-600" />
                <span>{personalInfo.email}</span>
              </p>
              <p className="flex sm:justify-end items-center gap-1.5">
                <LinkedInIcon className="w-3.5 h-3.5 text-blue-600" />
                <a href={personalInfo.linkedIn} target="_blank" rel="noreferrer" className="hover:underline">
                  linkedin.com/in/santhosh-kumar-r-1892553b4
                </a>
              </p>
              <p className="flex sm:justify-end items-center gap-1.5">
                <GitHubIcon className="w-3.5 h-3.5 text-blue-600" />
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:underline">
                  github.com/{personalInfo.githubUsername}
                </a>
              </p>
            </div>
          </div>

          {/* Career Objective */}
          <div>
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider pb-1 mb-2 border-b border-slate-300">
              Career Objective
            </h2>
            <p className="text-xs text-slate-700 leading-relaxed">
              {personalInfo.careerObjective}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider pb-1 mb-2 border-b border-slate-300">
              Education
            </h2>
            {educationData.map((edu, idx) => (
              <div key={idx} className="space-y-1 text-xs">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-bold text-slate-900">{edu.institution}</span>
                    <span className="text-slate-600"> — {edu.location}</span>
                  </div>
                  <span className="font-semibold text-blue-700">B.Tech Candidate</span>
                </div>
                <p className="italic text-slate-700">
                  {edu.degree} in {edu.department}
                </p>
                <p className="text-slate-600 text-[11px]">
                  <strong>Key Coursework:</strong> {edu.coreSubjects.join(', ')}
                </p>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider pb-1 mb-2 border-b border-slate-300">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs">
              <p>
                <strong className="text-slate-900">Programming Languages:</strong> Python, Java, SQL
              </p>
              <p>
                <strong className="text-slate-900">Frontend:</strong> HTML5, CSS3, JavaScript (ES6+), React
              </p>
              <p>
                <strong className="text-slate-900">Backend &amp; Database:</strong> Node.js, MySQL
              </p>
              <p>
                <strong className="text-slate-900">AI Technologies:</strong> Google Gemini API, AI Integration, Image Recognition Concepts
              </p>
              <p className="sm:col-span-2">
                <strong className="text-slate-900">Tools &amp; Platforms:</strong> Visual Studio Code, Git, GitHub
              </p>
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider pb-1 mb-2 border-b border-slate-300">
              Technical Projects
            </h2>
            <div className="space-y-4">
              
              {/* MRS SOLAR */}
              <div className="space-y-1 text-xs">
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-slate-900">
                    MRS SOLAR – Solar Loan Management &amp; Clean Energy Tracking Platform (Flagship)
                  </span>
                  <span className="font-mono text-[11px] text-emerald-700 font-semibold">Active Prototype</span>
                </div>
                <p className="text-slate-700 text-[11px] leading-relaxed">
                  Web and mobile-oriented clean energy platform engineered with 10 modules: Customer, Manager, Worker, and Main Owner Portals, Solar Generation Tracking, CRM Task Management, TNEB Bill Integration, and a conversational AI Chatbot powered by Google Gemini API.
                </p>
                <p className="text-[11px] text-slate-600">
                  <strong>System Architecture:</strong> 100% Grid-Tied direct feed to the TNEB electricity grid (no battery storage functionality).
                </p>
                <p className="text-[11px] text-slate-500 font-mono">
                  Tech: React, TypeScript, Node.js, MySQL, Google Gemini API, Tailwind CSS
                </p>
              </div>

              {/* Nourish Network */}
              <div className="space-y-1 text-xs">
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-slate-900">
                    Nourish Network – Real-Time Surplus Food Allocation Ecosystem
                  </span>
                  <span className="font-mono text-[11px] text-blue-700">System Architecture</span>
                </div>
                <p className="text-slate-700 text-[11px] leading-relaxed">
                  Designed a real-time matching ecosystem connecting farmers, commercial kitchens, and NGOs to redistribute surplus perishables to hunger-relief shelters before expiration.
                </p>
                <p className="text-[11px] text-slate-500 font-mono">
                  Tech: React, JavaScript, Node.js, SQL, Tailwind CSS
                </p>
              </div>

              {/* AICTE Validation */}
              <div className="space-y-1 text-xs">
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-slate-900">
                    AICTE Institutional Application Validation System
                  </span>
                  <span className="font-mono text-[11px] text-indigo-700">SIH Research Prototype</span>
                </div>
                <p className="text-slate-700 text-[11px] leading-relaxed">
                  Proposed compliance validation engine for scrutinizing college approval applications, verifying infrastructure records, and flagging filing anomalies with human-in-the-loop review.
                </p>
                <p className="text-[11px] text-slate-500 font-mono">
                  Tech: Python, FastAPI / Node.js, React, Document Verification Concepts, SQL
                </p>
              </div>

            </div>
          </div>

          {/* Certifications & Hackathons */}
          <div>
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider pb-1 mb-2 border-b border-slate-300">
              Certifications &amp; Hackathon Engagements
            </h2>
            <div className="space-y-2 text-xs">
              <p>
                <strong className="text-slate-900">Infosys Springboard (13 Verified Certifications):</strong> Completed advanced coursework in Data Science, Deep Learning, Natural Language Processing (NLP), OpenAI GPT-3 for Developers, Generative Models, Deep Learning for Developers, Prompt Engineering, Generative AI Unleashing, Computer Vision 101, Robotic Process Automation (RPA), and Agile Scrum in Practice.
              </p>
              <p>
                <strong className="text-slate-900">Hackathons:</strong> Smart India Hackathon (SIH) project participant in compliance scrutiny; Designathon 2.0 participant in rapid user-centered prototyping.
              </p>
            </div>
          </div>

        </div>

        {/* Instructions Note in Footer (Hidden in Print) */}
        <div className="no-print mt-8 pt-4 border-t border-slate-200 text-center text-xs text-slate-500 font-mono">
          <span>You can replace the downloadable PDF by placing your file in </span>
          <code className="text-blue-600 bg-slate-100 px-1 py-0.5 rounded">public/resume-santhosh-kumar.pdf</code>
        </div>

      </div>
    </div>
  );
};
