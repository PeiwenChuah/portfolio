import React from 'react';
import { Project } from '../types';
import { Eye } from 'lucide-react';

interface ProjectCardProps {
  key?: string;
  project: Project;
  onSelect: (project: Project) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <div
      id={`project-card-${project.id}`}
      className="bg-white border border-slate-200 p-6 rounded-2xl flex flex-col justify-between shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 hover:-translate-y-0.5"
    >
      <div className="space-y-4">
        {/* Title & single primary language badge */}
        <div className="flex items-start justify-between gap-3">
          <h4 id={`title-${project.id}`} className="text-base font-bold text-slate-900 tracking-tight leading-tight font-sans">
            {project.title}
          </h4>
          {project.technologies[0] && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-slate-100 text-slate-600 border border-slate-200 rounded-md text-[9px] font-mono font-bold uppercase shrink-0">
              {project.technologies[0]}
            </span>
          )}
        </div>

        {/* One-sentence overview */}
        <p className="text-xs text-slate-500 leading-relaxed font-normal line-clamp-3">
          {project.description}
        </p>
      </div>

      {/* Single button */}
      <button
        onClick={() => onSelect(project)}
        className="mt-6 py-2 bg-slate-900 text-white rounded-xl font-mono font-bold hover:bg-slate-800 active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer select-none shadow-xs text-xs"
      >
        <Eye size={13} /> VIEW PROJECT
      </button>
    </div>
  );
}
