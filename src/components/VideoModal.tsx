'use client';

import React from 'react';
import { X, Play } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#091c14] border border-emerald-500/30 rounded-2xl overflow-hidden shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/60 hover:bg-emerald-800/60 rounded-full text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Video Frame */}
        <div className="relative aspect-video bg-emerald-950/80 flex items-center justify-center">
          <div className="text-center p-8">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-emerald-500/20 border-2 border-emerald-400/50 flex items-center justify-center animate-pulse">
              <Play className="w-10 h-10 text-emerald-400 fill-emerald-400 translate-x-0.5" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Inside Acure Laboratories
            </h3>
            <p className="text-emerald-200/80 max-w-md mx-auto text-sm">
              Discover how our organic bioactive matrix and clinical formulation process create maximum cellular absorbability for busy lifestyles.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
