import React from 'react';
import { Home, Terminal } from 'lucide-react';

interface NotFoundProps {
  onBackToHome: () => void;
}

export const NotFound: React.FC<NotFoundProps> = ({ onBackToHome }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#060A17] text-white">
      <div className="max-w-md w-full glass-card rounded-3xl p-8 border border-cyan-500/30 text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center mx-auto text-cyan-400">
          <Terminal className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <p className="text-4xl font-extrabold text-cyan-400 font-mono">404</p>
          <h2 className="text-xl font-bold">Route Not Found</h2>
          <p className="text-xs text-slate-400">
            The requested portfolio page or artifact doesn't exist or has moved.
          </p>
        </div>

        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 transition-all shadow-md"
        >
          <Home className="w-4 h-4" />
          <span>Return to Homepage</span>
        </button>
      </div>
    </div>
  );
};
