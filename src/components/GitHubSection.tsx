import React, { useState, useEffect } from 'react';
import { 
  ExternalLink, 
  Star, 
  GitFork, 
  FolderGit2
} from 'lucide-react';
import { fallbackGithubRepos, personalInfo } from '../data/portfolioData';
import type { GitHubRepo } from '../types/portfolio';
import { GitHubIcon } from './Icons';

export const GitHubSection: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [isUsingFallback, setIsUsingFallback] = useState(false);

  useEffect(() => {
    const fetchGithubData = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          `https://api.github.com/users/${personalInfo.githubUsername}/repos?sort=updated&per_page=6`
        );

        if (!response.ok) {
          throw new Error(`GitHub API returned status ${response.status}`);
        }

        const data: GitHubRepo[] = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          setRepos(data);
          setIsUsingFallback(false);
        } else {
          // If the profile has 0 public repos yet, use verified project repositories
          setRepos(fallbackGithubRepos as unknown as GitHubRepo[]);
          setIsUsingFallback(true);
        }
      } catch (err) {
        console.warn('GitHub API fetch fallback:', err);
        setRepos(fallbackGithubRepos as unknown as GitHubRepo[]);
        setIsUsingFallback(true);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  const getLanguageColor = (lang: string | null) => {
    switch (lang?.toLowerCase()) {
      case 'python':
        return 'bg-amber-400';
      case 'javascript':
        return 'bg-yellow-400';
      case 'typescript':
        return 'bg-blue-400';
      case 'java':
        return 'bg-orange-500';
      case 'html':
        return 'bg-rose-500';
      default:
        return 'bg-cyan-400';
    }
  };

  return (
    <section id="github" className="py-20 lg:py-28 relative z-10 border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <GitHubIcon className="w-3.5 h-3.5" />
            <span>Open Source &amp; Codebase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            GitHub <span className="text-gradient-cyan">Repositories</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600">
            Real-time synchronization with{' '}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline font-mono"
            >
              github.com/{personalInfo.githubUsername}
            </a>
          </p>
        </div>

        {/* Live Status Indicator Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-8 max-w-5xl mx-auto text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isUsingFallback ? 'bg-amber-400' : 'bg-emerald-400'} opacity-75`} />
              <span className={`relative inline-flex rounded-full h-2 w-2 ${isUsingFallback ? 'bg-amber-500' : 'bg-emerald-500'}`} />
            </span>
            <span>
              {isUsingFallback
                ? 'Source: Primary Project Repositories (Verified)'
                : 'Source: Live GitHub API Feed'}
            </span>
          </div>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
          >
            <span>Visit @{personalInfo.githubUsername}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Repositories Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[1, 2, 3].map((n) => (
              <div key={n} className="glass-card rounded-3xl p-6 border border-slate-800 animate-pulse h-48">
                <div className="h-5 bg-slate-800 rounded w-3/4 mb-3" />
                <div className="h-3 bg-slate-800 rounded w-full mb-2" />
                <div className="h-3 bg-slate-800 rounded w-2/3" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {repos.map((repo) => (
              <a
                key={repo.name}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-3xl p-6 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
              >
                <div className="space-y-3">
                  
                  {/* Top Bar */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FolderGit2 className="w-4 h-4 text-cyan-400" />
                      <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {repo.name}
                      </h3>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                    {repo.description || 'Public repository by Santhosh Kumar R.'}
                  </p>
                </div>

                {/* Footer Metrics */}
                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                  {repo.language && (
                    <span className="flex items-center gap-1.5">
                      <span className={`w-2.5 h-2.5 rounded-full ${getLanguageColor(repo.language)}`} />
                      <span className="text-slate-300">{repo.language}</span>
                    </span>
                  )}

                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 hover:text-amber-400 transition-colors">
                      <Star className="w-3.5 h-3.5" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1 hover:text-cyan-400 transition-colors">
                      <GitFork className="w-3.5 h-3.5" />
                      {repo.forks_count}
                    </span>
                  </div>
                </div>

              </a>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
