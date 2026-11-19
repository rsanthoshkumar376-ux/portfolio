import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  X, 
  FileText, 
  Sparkles, 
  Copy, 
  Check, 
  Sun, 
  Moon, 
  Layers, 
  GraduationCap, 
  Award, 
  Flame, 
  Compass, 
  Mail, 
  ArrowRight,
  Zap,
  Code2
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/portfolioData';
import { LinkedInIcon, GitHubIcon } from './Icons';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
  onOpenRecruiter: () => void;
}

interface CommandItem {
  id: string;
  category: 'Navigation' | 'Actions' | 'Projects' | 'Links';
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  action: () => void;
  keywords?: string[];
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenResume,
  onOpenRecruiter
}) => {
  const { theme, toggleTheme } = useTheme();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Jump to page section helper
  const navigateTo = (sectionId: string) => {
    onClose();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const commands: CommandItem[] = [
    // Actions
    {
      id: 'recruiter-view',
      category: 'Actions',
      title: 'Recruiter Quick-View (30s Snapshot)',
      subtitle: 'Executive summary of Santhosh’s qualifications',
      icon: <Sparkles className="w-4 h-4 text-cyan-400" />,
      action: () => {
        onClose();
        onOpenRecruiter();
      },
      keywords: ['recruiter', 'hire', 'quick', 'summary', 'snapshot', 'fast']
    },
    {
      id: 'resume',
      category: 'Actions',
      title: 'View & Download Resume',
      subtitle: 'Open interactive ATS resume with PDF download',
      icon: <FileText className="w-4 h-4 text-blue-400" />,
      action: () => {
        onClose();
        onOpenResume();
      },
      keywords: ['resume', 'cv', 'pdf', 'download', 'print']
    },
    {
      id: 'copy-email',
      category: 'Actions',
      title: 'Copy Email Address',
      subtitle: personalInfo.email,
      icon: copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-amber-400" />,
      action: () => {
        navigator.clipboard.writeText(personalInfo.email);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
          onClose();
        }, 800);
      },
      keywords: ['email', 'copy', 'mail', 'contact']
    },
    {
      id: 'toggle-theme',
      category: 'Actions',
      title: `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`,
      subtitle: 'Toggle interface color scheme',
      icon: theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />,
      action: () => {
        toggleTheme();
        onClose();
      },
      keywords: ['theme', 'mode', 'dark', 'light', 'color']
    },

    // Navigation
    {
      id: 'nav-about',
      category: 'Navigation',
      title: 'Go to About Me',
      subtitle: 'RIT engineering student background & philosophy',
      icon: <Code2 className="w-4 h-4 text-cyan-400" />,
      action: () => navigateTo('about'),
      keywords: ['about', 'bio', 'story', 'rit', 'background']
    },
    {
      id: 'nav-skills',
      category: 'Navigation',
      title: 'Go to Technical Skills',
      subtitle: 'Python, Java, SQL, React, Node.js, Gemini API',
      icon: <Layers className="w-4 h-4 text-blue-400" />,
      action: () => navigateTo('skills'),
      keywords: ['skills', 'python', 'java', 'sql', 'react', 'node', 'gemini', 'mysql']
    },
    {
      id: 'nav-projects',
      category: 'Navigation',
      title: 'Go to Featured Projects',
      subtitle: 'MRS SOLAR, Nourish Network, AICTE Validation',
      icon: <Zap className="w-4 h-4 text-amber-400" />,
      action: () => navigateTo('projects'),
      keywords: ['projects', 'mrs solar', 'nourish', 'aicte', 'code']
    },
    {
      id: 'nav-education',
      category: 'Navigation',
      title: 'Go to Education & Academics',
      subtitle: 'Rajalakshmi Institute of Technology (RIT Chennai)',
      icon: <GraduationCap className="w-4 h-4 text-sky-400" />,
      action: () => navigateTo('education'),
      keywords: ['education', 'college', 'degree', 'rit', 'btech']
    },
    {
      id: 'nav-certifications',
      category: 'Navigation',
      title: 'Go to Certifications',
      subtitle: '13 Infosys Springboard verified courses',
      icon: <Award className="w-4 h-4 text-emerald-400" />,
      action: () => navigateTo('certifications'),
      keywords: ['certifications', 'certificates', 'infosys', 'springboard', 'courses']
    },
    {
      id: 'nav-hackathons',
      category: 'Navigation',
      title: 'Go to Hackathons & Achievements',
      subtitle: 'Smart India Hackathon, Designathon 2.0',
      icon: <Flame className="w-4 h-4 text-orange-400" />,
      action: () => navigateTo('hackathons'),
      keywords: ['hackathons', 'sih', 'designathon', 'achievements', 'competitions']
    },
    {
      id: 'nav-opportunities',
      category: 'Navigation',
      title: 'Go to Career Opportunities',
      subtitle: 'Open for internships & junior developer roles',
      icon: <Compass className="w-4 h-4 text-purple-400" />,
      action: () => navigateTo('opportunities'),
      keywords: ['opportunities', 'internship', 'hire', 'career', 'fresher', 'job']
    },
    {
      id: 'nav-contact',
      category: 'Navigation',
      title: 'Go to Contact Section',
      subtitle: 'Send message to rsanthoshkumar376@gmail.com',
      icon: <Mail className="w-4 h-4 text-cyan-400" />,
      action: () => navigateTo('contact'),
      keywords: ['contact', 'message', 'form', 'email', 'touch']
    },

    // Projects
    {
      id: 'project-solar',
      category: 'Projects',
      title: 'MRS SOLAR (Flagship Platform)',
      subtitle: '100% Grid-Tied clean energy system with 10 modules',
      icon: <Zap className="w-4 h-4 text-amber-400" />,
      action: () => navigateTo('projects'),
      keywords: ['mrs solar', 'solar', 'grid', 'tneb', 'clean energy', 'flagship', 'eb']
    },
    {
      id: 'project-nourish',
      category: 'Projects',
      title: 'Nourish Network',
      subtitle: 'Real-time surplus food allocation ecosystem',
      icon: <Layers className="w-4 h-4 text-cyan-400" />,
      action: () => navigateTo('projects'),
      keywords: ['nourish', 'food', 'waste', 'ngo', 'farmers']
    },
    {
      id: 'project-aicte',
      category: 'Projects',
      title: 'AICTE Application Validation System',
      subtitle: 'Compliance checking & anomaly detection prototype',
      icon: <Award className="w-4 h-4 text-blue-400" />,
      action: () => navigateTo('projects'),
      keywords: ['aicte', 'validation', 'compliance', 'sih', 'anomaly']
    },

    // Links
    {
      id: 'link-github',
      category: 'Links',
      title: 'Visit GitHub Profile',
      subtitle: `github.com/${personalInfo.githubUsername}`,
      icon: <GitHubIcon className="w-4 h-4 text-slate-300" />,
      action: () => {
        window.open(personalInfo.github, '_blank');
        onClose();
      },
      keywords: ['github', 'code', 'repo', 'git']
    },
    {
      id: 'link-linkedin',
      category: 'Links',
      title: 'Visit LinkedIn Profile',
      subtitle: 'Connect with Santhosh Kumar R.',
      icon: <LinkedInIcon className="w-4 h-4 text-blue-400" />,
      action: () => {
        window.open(personalInfo.linkedIn, '_blank');
        onClose();
      },
      keywords: ['linkedin', 'social', 'network', 'connect']
    }
  ];

  const filteredCommands = commands.filter((cmd) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      cmd.title.toLowerCase().includes(q) ||
      (cmd.subtitle && cmd.subtitle.toLowerCase().includes(q)) ||
      (cmd.keywords && cmd.keywords.some((k) => k.toLowerCase().includes(q)))
    );
  });

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Keyboard navigation within the palette
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, filteredCommands, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-xl glass-panel rounded-3xl border border-cyan-500/40 shadow-2xl bg-[#060A17]/95 overflow-hidden text-slate-100 flex flex-col max-h-[75vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 p-4 sm:p-5 border-b border-slate-800">
          <Search className="w-5 h-5 text-cyan-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command, project, or skill... (e.g. 'solar', 'resume', 'python')"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm sm:text-base text-white placeholder-slate-500 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-lg text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-flex items-center gap-0.5 px-2 py-0.5 rounded text-[10px] font-mono text-slate-400 bg-slate-900 border border-slate-800">
            ESC
          </kbd>
        </div>

        {/* Command Results List */}
        <div className="flex-1 overflow-y-auto p-2 sm:p-3 space-y-1">
          {filteredCommands.length === 0 ? (
            <div className="p-8 text-center text-xs text-slate-400">
              No matching commands or projects found for "{query}".
            </div>
          ) : (
            filteredCommands.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => item.action()}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`flex items-center justify-between p-3 rounded-2xl cursor-pointer transition-all duration-150 ${
                    isSelected
                      ? 'bg-gradient-to-r from-cyan-950/80 to-blue-950/60 border border-cyan-500/40 text-white'
                      : 'hover:bg-slate-900/60 border border-transparent text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`p-2 rounded-xl shrink-0 ${isSelected ? 'bg-cyan-950 text-cyan-300' : 'bg-slate-900 text-slate-400'}`}>
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <p className={`text-xs sm:text-sm font-semibold truncate ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                        {item.title}
                      </p>
                      {item.subtitle && (
                        <p className="text-[11px] text-slate-400 truncate">
                          {item.subtitle}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 text-slate-500 pl-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900/80 border border-slate-800 hidden sm:inline">
                      {item.category}
                    </span>
                    {isSelected && (
                      <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Keyboard Hints */}
        <div className="p-3 bg-slate-950/80 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <div className="flex items-center gap-3">
            <span><kbd className="text-slate-400 font-bold">↑↓</kbd> Navigate</span>
            <span><kbd className="text-slate-400 font-bold">↵</kbd> Select</span>
            <span><kbd className="text-slate-400 font-bold">ESC</kbd> Close</span>
          </div>
          <span className="text-cyan-400/80 hidden sm:inline">
            Quick Command System
          </span>
        </div>

      </div>
    </div>
  );
};
