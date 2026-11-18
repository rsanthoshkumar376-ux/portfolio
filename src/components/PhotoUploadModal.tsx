import React, { useState } from 'react';
import { X, Upload, CheckCircle2, Image as ImageIcon, RefreshCw, Folder } from 'lucide-react';

interface PhotoUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPhotoSelected: (url: string) => void;
  currentPhotoUrl?: string;
}

export const PhotoUploadModal: React.FC<PhotoUploadModalProps> = ({
  isOpen,
  onClose,
  onPhotoSelected,
}) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'upload' | 'instructions'>('instructions');

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleApplyPreview = () => {
    if (preview) {
      onPhotoSelected(preview);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg glass-panel rounded-3xl border border-cyan-500/30 shadow-2xl p-6 sm:p-8 space-y-6 bg-[#060A17]/95">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-950 border border-cyan-500/30 text-cyan-400">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Profile Photo Settings</h3>
              <p className="text-xs text-slate-400">Customize or replace your profile picture</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex rounded-xl bg-slate-900/80 p-1 border border-slate-800 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('instructions')}
            className={`flex-1 py-2 rounded-lg transition-all ${
              activeTab === 'instructions'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Permanent Setup (Recommended)
          </button>
          <button
            onClick={() => setActiveTab('upload')}
            className={`flex-1 py-2 rounded-lg transition-all ${
              activeTab === 'upload'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Live Browser Preview
          </button>
        </div>

        {/* Tab Content: Instructions */}
        {activeTab === 'instructions' && (
          <div className="space-y-4 text-xs text-slate-300">
            <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/20 space-y-3">
              <div className="flex items-start gap-2.5">
                <Folder className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Target File Location:</p>
                  <p className="font-mono text-cyan-300 mt-1 bg-slate-950/70 p-2 rounded border border-slate-800">
                    public/images/profile.jpg
                  </p>
                </div>
              </div>
            </div>

            <ol className="space-y-2.5 list-decimal list-inside text-slate-300 leading-relaxed">
              <li>Save your professional portrait image as <code className="text-cyan-300 bg-slate-900 px-1 py-0.5 rounded">profile.jpg</code> (or <code className="text-cyan-300 bg-slate-900 px-1 py-0.5 rounded">profile.png</code>).</li>
              <li>Place the file directly into the <code className="text-cyan-300 bg-slate-900 px-1 py-0.5 rounded">public/images/</code> folder in this project.</li>
              <li>The website automatically detects and displays it in the hero section and resume card.</li>
              <li>Recommended resolution: <strong>800 × 1000px</strong> (aspect ratio 4:5).</li>
            </ol>
          </div>
        )}

        {/* Tab Content: Upload */}
        {activeTab === 'upload' && (
          <div className="space-y-4">
            <label className="block p-6 rounded-2xl border-2 border-dashed border-cyan-500/30 hover:border-cyan-400 cursor-pointer bg-slate-900/40 text-center transition-all group">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <Upload className="w-8 h-8 text-cyan-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <p className="text-xs font-semibold text-white">Select image from your computer</p>
              <p className="text-[11px] text-slate-400 mt-1">PNG, JPG, WEBP up to 5MB</p>
            </label>

            {preview && (
              <div className="flex items-center gap-4 p-3 rounded-2xl bg-slate-900/60 border border-slate-800">
                <img
                  src={preview}
                  alt="Preview"
                  className="w-14 h-14 rounded-xl object-cover border border-cyan-500/40"
                />
                <div className="flex-1">
                  <p className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Image ready for preview
                  </p>
                  <p className="text-[11px] text-slate-400">Click Apply to test it immediately.</p>
                </div>
                <button
                  onClick={handleApplyPreview}
                  className="px-3.5 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs"
                >
                  Apply
                </button>
              </div>
            )}
          </div>
        )}

        {/* Modal Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-800">
          <button
            onClick={() => {
              onPhotoSelected('');
              setPreview(null);
            }}
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-200"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset to Default</span>
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
