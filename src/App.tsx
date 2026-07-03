import React, { useState } from 'react';
import { Project, ProjectCategory } from './types';
import { projectsData } from './data/projectsData';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import { Mail, Cpu, FolderGit2, Github, Linkedin, GraduationCap } from 'lucide-react';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('data_science');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter projects by category only (super simple)
  const filteredProjects = projectsData.filter((p) => p.category === selectedCategory);

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <div className="min-h-screen bg-slate-50/30 text-slate-800 font-sans antialiased selection:bg-slate-200 flex flex-col justify-between">
      
      {/* Sleek Top Personal Details Masthead */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 id="author-name" className="text-2xl font-bold tracking-tight text-slate-900 font-sans">
              Pei Wen Chuah
            </h1>
            <p className="text-sm text-slate-500 font-medium italic mt-0.5">
              Seeking full-time opportunities as a Data Scientist or Data Analyst
            </p>
            <div className="mt-2.5 flex flex-wrap items-center gap-2 text-xs text-slate-600 font-medium bg-slate-50 py-1.5 px-3 rounded-lg border border-slate-100 max-w-max">
              <GraduationCap size={15} className="text-blue-500" />
              <span>Monash University</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-500">Bachelor of Computer Science</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-xs text-slate-500 font-medium">
            <a
              href="mailto:peiwenchuah4321@gmail.com"
              className="flex items-center gap-2 hover:text-slate-900 transition-colors"
            >
              <Mail size={14} className="text-slate-400" /> peiwenchuah4321@gmail.com
            </a>
            

            <a
              href="https://www.linkedin.com/in/pei-wen-chuah/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-slate-900 transition-colors"
            >
              <Linkedin size={14} className="text-slate-400" /> LinkedIn
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto w-full px-6 py-10 flex-1 space-y-8">
        
        {/* Navigation Selector Bar */}
        <div id="navigation-bar" className="flex justify-center">
          <div className="inline-flex bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
            <button
              onClick={() => setSelectedCategory('data_science')}
              className={`px-6 py-2.5 rounded-xl font-medium text-xs tracking-tight transition-all flex items-center gap-2 cursor-pointer select-none ${
                selectedCategory === 'data_science'
                  ? 'bg-slate-950 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <Cpu size={14} /> Data Science & AI
            </button>
            <button
              onClick={() => setSelectedCategory('computer_science')}
              className={`px-6 py-2.5 rounded-xl font-medium text-xs tracking-tight transition-all flex items-center gap-2 cursor-pointer select-none ${
                selectedCategory === 'computer_science'
                  ? 'bg-slate-950 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <FolderGit2 size={14} /> Computer Science
            </button>
          </div>
        </div>

        {/* Dynamic Project Grid */}
        <div id="portfolio-project-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={handleSelectProject}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-4">
        {/* Simplified clean blank footer spacer for visual alignment */}
      </footer>

      {/* Project modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
