import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Hackathons } from './components/Hackathons';
import { ExploringOpportunities } from './components/ExploringOpportunities';
import { GitHubSection } from './components/GitHubSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { PhotoUploadModal } from './components/PhotoUploadModal';
import { RecruiterModal } from './components/RecruiterModal';
import { CommandPalette } from './components/CommandPalette';
import { AIAssistantWidget } from './components/AIAssistantWidget';
import { NotFound } from './components/NotFound';
import { personalInfo } from './data/portfolioData';

export const AppContent: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [isRecruiterOpen, setIsRecruiterOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [customPhotoUrl, setCustomPhotoUrl] = useState<string>('');
  const [is404, setIs404] = useState(false);

  useEffect(() => {
    // Check if path is unknown 404
    const path = window.location.pathname;
    if (path !== '/' && path !== '' && !path.startsWith('/#')) {
      // In SPA, handles root or 404
    }

    // Custom sleek initial loading preloader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  // Global keyboard shortcut for Command Palette (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (is404) {
    return <NotFound onBackToHome={() => setIs404(false)} />;
  }

  return (
    <div className="relative min-h-screen text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Custom Preloader / Loading Transition */}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#060A17] transition-opacity duration-500">
          <div className="text-center space-y-4">
            <div className="relative w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-600 to-indigo-600 p-[2px] shadow-2xl shadow-cyan-500/30 animate-pulse">
              <div className="w-full h-full bg-[#060A17] rounded-[14px] flex items-center justify-center">
                <span className="font-extrabold text-2xl bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent font-mono">
                  {personalInfo.initials}
                </span>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-bold text-white tracking-wide">
                SANTHOSH KUMAR R.
              </p>
              <p className="text-xs text-cyan-400 font-mono">
                Aspiring AI &amp; Data Science Engineer
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Interactive Background Canvas */}
      <BackgroundCanvas />

      {/* Main Content Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Navigation Bar */}
        <Navbar 
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenRecruiter={() => setIsRecruiterOpen(true)}
          onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        />

        {/* Hero Section */}
        <main className="flex-1">
          <Hero
            onOpenResume={() => setIsResumeOpen(true)}
            onOpenPhotoModal={() => setIsPhotoModalOpen(true)}
            customPhotoUrl={customPhotoUrl}
          />

          {/* About Me Section */}
          <About />

          {/* Technical Skills Section */}
          <Skills />

          {/* Featured Projects Section */}
          <Projects />

          {/* Education Section */}
          <Education />

          {/* Certifications Section (13 Infosys Springboard Certs) */}
          <Certifications />

          {/* Hackathons & Achievements Section */}
          <Hackathons />

          {/* Career & Opportunities Section */}
          <ExploringOpportunities />

          {/* GitHub Integration Section */}
          <GitHubSection />

          {/* Contact Section */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <PhotoUploadModal
        isOpen={isPhotoModalOpen}
        onClose={() => setIsPhotoModalOpen(false)}
        onPhotoSelected={(url) => setCustomPhotoUrl(url)}
        currentPhotoUrl={customPhotoUrl}
      />

      <RecruiterModal
        isOpen={isRecruiterOpen}
        onClose={() => setIsRecruiterOpen(false)}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenProjects={() => {
          const el = document.getElementById('projects');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenRecruiter={() => setIsRecruiterOpen(true)}
      />

      {/* Floating Ask Santhosh AI Assistant */}
      <AIAssistantWidget
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenRecruiter={() => setIsRecruiterOpen(true)}
      />

    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
