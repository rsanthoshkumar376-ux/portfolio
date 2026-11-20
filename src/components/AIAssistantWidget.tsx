import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  ArrowRight,
  RefreshCw
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  actionButton?: {
    label: string;
    action: () => void;
  };
  timestamp: string;
}

interface AIAssistantWidgetProps {
  onOpenResume: () => void;
  onOpenRecruiter: () => void;
}

export const AIAssistantWidget: React.FC<AIAssistantWidgetProps> = ({
  onOpenResume,
  onOpenRecruiter
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const initialMessages: Message[] = [
    {
      id: '1',
      sender: 'ai',
      text: "Hello! I am Santhosh's AI Portfolio Assistant. Ask me anything about his projects, technical skills, or availability for internships!",
      timestamp: 'Just now'
    }
  ];

  const [messages, setMessages] = useState<Message[]>(initialMessages);

  const suggestedQuestions = [
    "Why does MRS SOLAR send power directly to EB grid?",
    "What are Santhosh's top technical skills?",
    "Tell me about his RIT education & major.",
    "Is Santhosh available for immediate internship?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const generateAIResponse = (userQuestion: string): { text: string; actionButton?: { label: string; action: () => void } } => {
    const q = userQuestion.toLowerCase();

    if (q.includes('solar') || q.includes('mrs') || q.includes('battery') || q.includes('grid')) {
      return {
        text: "MRS SOLAR is Santhosh's flagship project—a 10-module rooftop solar platform. Crucially, it features a 100% GRID-TIED architecture where solar power is exported directly into the TNEB (Tamil Nadu Electricity Board) electrical grid via bi-directional net metering. It intentionally eliminates battery storage to lower customer upfront costs and prevent battery degradation.",
        actionButton: {
          label: "View MRS SOLAR Architecture",
          action: () => {
            const el = document.getElementById('projects');
            el?.scrollIntoView({ behavior: 'smooth' });
          }
        }
      };
    }

    if (q.includes('skill') || q.includes('python') || q.includes('java') || q.includes('stack') || q.includes('tech')) {
      return {
        text: "Santhosh's verified core stack includes Python, Java, and SQL for programming; HTML5, CSS3, JavaScript, and React for frontend; Node.js for backend APIs; and MySQL for relational database modeling. He also works actively with the Google Gemini API for applied generative AI workflows.",
        actionButton: {
          label: "Explore Skills Matrix",
          action: () => {
            const el = document.getElementById('skills');
            el?.scrollIntoView({ behavior: 'smooth' });
          }
        }
      };
    }

    if (q.includes('intern') || q.includes('hire') || q.includes('job') || q.includes('available') || q.includes('opportunity')) {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } });
      return {
        text: "Yes! Santhosh is an aspiring AI & Data Science Engineer and active fresher who is immediately available for Summer/Fall software development, full-stack, and AI engineering internships. You can connect with him directly at rsanthoshkumar376@gmail.com.",
        actionButton: {
          label: "Open 30s Recruiter Snapshot",
          action: () => onOpenRecruiter()
        }
      };
    }

    if (q.includes('college') || q.includes('rit') || q.includes('education') || q.includes('degree') || q.includes('university')) {
      return {
        text: "Santhosh is pursuing his Engineering degree at Rajalakshmi Institute of Technology (RIT), Chennai, majoring in Artificial Intelligence and Data Science. His coursework includes Data Structures, Machine Learning Foundations, DBMS, and Object-Oriented Programming.",
        actionButton: {
          label: "View Education Timeline",
          action: () => {
            const el = document.getElementById('education');
            el?.scrollIntoView({ behavior: 'smooth' });
          }
        }
      };
    }

    if (q.includes('certif') || q.includes('infosys') || q.includes('course') || q.includes('springboard')) {
      return {
        text: "Santhosh has completed 13 verified Infosys Springboard certifications focusing heavily on AI & Data Science: Data Science, Deep Learning, Natural Language Processing, OpenAI GPT-3, Generative Models, Prompt Engineering, Computer Vision 101, RPA, and Agile Scrum.",
        actionButton: {
          label: "Browse 13 Verified Certifications",
          action: () => {
            const el = document.getElementById('certifications');
            el?.scrollIntoView({ behavior: 'smooth' });
          }
        }
      };
    }

    if (q.includes('hackathon') || q.includes('sih') || q.includes('designathon')) {
      return {
        text: "Santhosh participated in the Smart India Hackathon (SIH) designing the AICTE Institutional Application Validation System, and in Designathon 2.0 focusing on rapid user-centric frontend prototyping.",
        actionButton: {
          label: "Inspect Hackathon Projects",
          action: () => {
            const el = document.getElementById('hackathons');
            el?.scrollIntoView({ behavior: 'smooth' });
          }
        }
      };
    }

    if (q.includes('resume') || q.includes('cv')) {
      return {
        text: "You can preview and download Santhosh's ATS-friendly resume directly from the portfolio. It includes his complete education, technical projects, and contact links.",
        actionButton: {
          label: "Open Resume Viewer",
          action: () => onOpenResume()
        }
      };
    }

    // Default intelligent contextual response
    return {
      text: `Santhosh Kumar R. is an aspiring AI & Data Science Engineer at Rajalakshmi Institute of Technology. He specializes in building practical software applications including MRS SOLAR, Nourish Network, and AICTE Validation System. Feel free to ask about his skills, projects, or email him at ${personalInfo.email}.`,
      actionButton: {
        label: "Contact Santhosh",
        action: () => {
          const el = document.getElementById('contact');
          el?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
  };

  const handleSend = (textToSend?: string) => {
    const queryText = textToSend || input;
    if (!queryText.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: queryText,
      timestamp: 'Now'
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response = generateAIResponse(queryText);
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: response.text,
        actionButton: response.actionButton,
        timestamp: 'Just now'
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <>
      {/* Floating Launcher Trigger Pill (Bottom-Right) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs sm:text-sm shadow-xl shadow-cyan-500/30 hover:shadow-cyan-400/50 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-300 group"
          aria-label="Ask Santhosh AI Assistant"
        >
          <div className="relative">
            <Bot className="w-5 h-5 text-slate-950 group-hover:rotate-12 transition-transform" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400" />
          </div>
          <span>Ask Santhosh AI</span>
          <Sparkles className="w-4 h-4 text-slate-950" />
        </button>
      )}

      {/* Floating Chat Drawer */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[92vw] sm:w-[410px] h-[540px] max-h-[85vh] glass-panel rounded-3xl border border-cyan-500/40 shadow-2xl bg-[#060A17]/95 flex flex-col overflow-hidden text-slate-100 animate-in slide-in-from-bottom-6 duration-200">
          
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-950/70">
            <div className="flex items-center gap-2.5">
              <div className="relative p-2 rounded-xl bg-cyan-950 border border-cyan-500/30 text-cyan-300">
                <Bot className="w-5 h-5" />
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="text-xs sm:text-sm font-bold text-white">
                    Santhosh AI Assistant
                  </h4>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                    Gemini Engine
                  </span>
                </div>
                <p className="text-[10px] text-emerald-400 font-mono">
                  ● Online • Trained on Portfolio
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 text-slate-400">
              <button
                onClick={() => setMessages(initialMessages)}
                title="Reset Conversation"
                className="p-1.5 rounded-lg hover:text-white hover:bg-slate-800 transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-medium rounded-tr-sm'
                      : 'bg-slate-900/80 border border-slate-800 text-slate-200 rounded-tl-sm'
                  }`}
                >
                  <p>{m.text}</p>

                  {/* Optional Action CTA Button */}
                  {m.actionButton && (
                    <button
                      onClick={m.actionButton.action}
                      className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-950 border border-cyan-500/40 text-cyan-300 hover:text-white hover:bg-cyan-900 font-semibold text-[11px] transition-all"
                    >
                      <span>{m.actionButton.label}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}
                </div>
                <span className="text-[9px] font-mono text-slate-500 mt-1 px-1">
                  {m.timestamp}
                </span>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-1.5 p-3 rounded-2xl bg-slate-900/60 border border-slate-800 text-cyan-400 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]" />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Prompt Chips Bar */}
          <div className="p-2 border-t border-slate-800/80 bg-slate-950/60 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {suggestedQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q)}
                className="whitespace-nowrap px-2.5 py-1 rounded-lg text-[10px] font-mono bg-slate-900 hover:bg-cyan-950 border border-slate-800 hover:border-cyan-500/30 text-slate-300 hover:text-cyan-300 transition-all shrink-0"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Footer */}
          <div className="p-3 border-t border-slate-800 bg-slate-950/90 flex items-center gap-2">
            <input
              type="text"
              placeholder="Ask anything about Santhosh..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSend();
              }}
              className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
            />
            <button
              onClick={() => handleSend()}
              disabled={!input.trim()}
              className="p-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}
    </>
  );
};
