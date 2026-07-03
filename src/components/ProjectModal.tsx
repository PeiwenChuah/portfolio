import React from 'react';
import { Project } from '../types';
import { X, CheckCircle, ImageOff, ExternalLink } from 'lucide-react';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const VIDEO_EXTENSIONS = ['.mp4', '.webm', '.mov', '.ogg'];

function isVideo(src: string): boolean {
  const lower = src.toLowerCase();
  return VIDEO_EXTENSIONS.some((ext) => lower.endsWith(ext));
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const media = project.media ?? [];

  return (
    <div
      id="project-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/30 backdrop-blur-xs select-none"
      onClick={onClose}
    >
      <div
        id="modal-card"
        className="bg-white border border-slate-200 w-full max-w-2xl max-h-[90vh] overflow-hidden rounded-2xl shadow-xl flex flex-col text-slate-800"
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex justify-between items-start bg-white">
          <div className="space-y-1">
            <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase">
              {project.category.replace('_', ' ')}
            </span>
            <h3 id="modal-project-title" className="text-xl font-bold font-sans text-slate-900 tracking-tight leading-none">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 px-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 transition-all text-xs font-mono font-bold rounded-lg flex items-center gap-1 cursor-pointer select-none"
          >
            <X size={14} /> CLOSE
          </button>
        </div>

        {/* Body: key points + media gallery */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {/* Key points */}
          <div className="space-y-2.5">
            {project.highlights.map((hlt, idx) => (
              <div key={idx} className="flex gap-2.5 text-sm text-slate-600 leading-relaxed">
                <CheckCircle size={15} className="text-blue-500 shrink-0 mt-0.5" />
                <span>{hlt}</span>
              </div>
            ))}
          </div>

          {/* External link (e.g. live dashboard) */}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-700 rounded-xl font-mono font-bold text-xs uppercase tracking-wide transition-colors"
            >
              <ExternalLink size={14} /> Click HERE to open the dashboard
            </a>
          )}

          {/* Media gallery (images and/or videos) */}
          {media.length > 0 ? (
            <div className="space-y-4">
              {media.map((src, idx) =>
                isVideo(src) ? (
                  <video
                    key={idx}
                    src={src}
                    controls
                    className="w-full h-auto rounded-xl border border-slate-200 bg-slate-50"
                  />
                ) : (
                  <img
                    key={idx}
                    src={src}
                    alt={`${project.title} screenshot ${idx + 1}`}
                    className="w-full h-auto rounded-xl border border-slate-200 bg-slate-50 object-contain"
                  />
                )
              )}
            </div>
          ) : (
            <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-50 flex items-center justify-center min-h-[180px]">
              <div className="flex flex-col items-center gap-2 text-slate-400 py-10 text-xs font-mono text-center px-6">
                <ImageOff size={22} />
                No images or videos added yet
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
