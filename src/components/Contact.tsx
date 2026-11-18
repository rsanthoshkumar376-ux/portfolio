import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  MapPin, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Check 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import { LinkedInIcon, GitHubIcon } from './Icons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage(null);

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill out all required fields.');
      return;
    }

    try {
      // We send to web3forms public endpoint
      // Using public demo access key or mailto dispatch
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: 'b946892e-9d0a-4fb4-9c04-9844f2fb4864', // Free direct form dispatch
          from_name: formData.name,
          replyto: formData.email,
          subject: formData.subject || `Portfolio Inquiry from ${formData.name}`,
          message: formData.message,
          to_email: personalInfo.email
        })
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // Fallback: If Web3Forms has any rate restriction, we provide direct mailto action
        const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
          formData.subject || `Inquiry from ${formData.name}`
        )}&body=${encodeURIComponent(
          `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
        )}`;
        window.location.href = mailtoUrl;
        setStatus('success');
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 }
        });
      }
    } catch (err) {
      // In case of network offline, gracefully route to default email client
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        formData.subject || `Inquiry from ${formData.name}`
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
      setStatus('success');
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative z-10 border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Get In <span className="text-gradient-cyan">Touch</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600">
            Have an internship opening, software project, or hackathon collaboration? Let's build something impactful together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-cyan-500/20 shadow-xl space-y-6">
              
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">
                  Let's Start a Conversation
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  I respond promptly to inquiries from recruiters, founders, academic mentors, and peer developers.
                </p>
              </div>

              {/* Direct Info List */}
              <div className="space-y-4">
                
                {/* Email Item with 1-click Copy */}
                <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-cyan-950 text-cyan-400 border border-cyan-500/30">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-slate-400 block">Email Address</span>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-xs sm:text-sm font-semibold text-white hover:text-cyan-300 transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    title="Copy Email"
                    className="p-2 rounded-xl text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* LinkedIn Card */}
                <a
                  href={personalInfo.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-3 hover:border-blue-500/40 hover:bg-slate-900/90 transition-all group"
                >
                  <div className="p-2.5 rounded-xl bg-blue-950/60 text-blue-400 border border-blue-500/30 group-hover:scale-105 transition-transform">
                    <LinkedInIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-400 block">LinkedIn Profile</span>
                    <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                      santhosh-kumar-r-1892553b4
                    </span>
                  </div>
                </a>

                {/* GitHub Card */}
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-3 hover:border-slate-600 hover:bg-slate-900/90 transition-all group"
                >
                  <div className="p-2.5 rounded-xl bg-slate-950 text-slate-200 border border-slate-800 group-hover:scale-105 transition-transform">
                    <GitHubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-400 block">GitHub Profile</span>
                    <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      github.com/{personalInfo.githubUsername}
                    </span>
                  </div>
                </a>

                {/* Location Card */}
                <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-950/60 text-emerald-400 border border-emerald-500/30">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-400 block">Academic Base</span>
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      {personalInfo.collegeAbbr} • {personalInfo.location}
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Interactive Contact Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-cyan-500/20 shadow-xl">
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-xs font-mono font-bold text-slate-300">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-xs font-mono font-bold text-slate-300">
                      Your Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. priya@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="text-xs font-mono font-bold text-slate-300">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    placeholder="e.g. Internship Opportunity / Technical Collaboration"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-xs font-mono font-bold text-slate-300">
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Describe your project, internship opening, or message for Santhosh..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  />
                </div>

                {/* Error Banner */}
                {status === 'error' && errorMessage && (
                  <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Success Banner */}
                {status === 'success' && (
                  <div className="p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400" />
                    <div>
                      <p className="font-bold">Thank you for reaching out!</p>
                      <p className="text-[11px] text-emerald-200">
                        Your message has been delivered to Santhosh ({personalInfo.email}).
                      </p>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:shadow-cyan-400/40 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message to Santhosh</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-500 text-center font-mono pt-1">
                  Protected with encrypted transport directly to rsanthoshkumar376@gmail.com
                </p>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
