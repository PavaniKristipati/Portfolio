/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Github, ExternalLink, Code2, Layers, Search, X, AppWindow } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS } from "../data";
import { Project } from "../types";

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"all" | "java" | "web">("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Categorization filter logic
  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeTab === "all") return true;
    if (activeTab === "java") {
      return proj.tags.some((tag) => tag.toLowerCase().includes("java") || tag.toLowerCase().includes("mysql") || tag.toLowerCase().includes("jdbc"));
    }
    if (activeTab === "web") {
      return proj.tags.some((tag) => tag.toLowerCase().includes("react") || tag.toLowerCase().includes("javascript") || tag.toLowerCase().includes("api") || tag.toLowerCase().includes("html/css"));
    }
    return true;
  });

  const categories: { id: "all" | "java" | "web"; label: string }[] = [
    { id: "all", label: "All Projects" },
    { id: "java", label: "Java & Database Systems" },
    { id: "web", label: "Web Apps & AI Platforms" }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-900/50 relative overflow-hidden">
      {/* Dynamic Grid backgrounds */}
      <div className="absolute inset-0 bg-transparent opacity-[0.03] dark:opacity-[0.015] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-semibold tracking-wider text-violet-600 dark:text-violet-400 uppercase font-mono">My Creations</h2>
          <h3 className="mt-2 text-3xl sm:text-4xl font-display font-extrabold text-gray-900 dark:text-gray-50 tracking-tight">
            Featured Projects
          </h3>
          <div className="w-12 h-1 bg-violet-600 dark:bg-violet-500 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            A verified list of academic systems, independent tools, and application builds designed and implemented by me.
          </p>
        </div>

        {/* Tab Selection Filter */}
        <div className="flex justify-center items-center space-x-1 sm:space-x-2.5 max-w-lg mx-auto mb-12 p-1 bg-white dark:bg-slate-950 rounded-xl border border-gray-100 dark:border-slate-800 shadow-xs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex-1 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === cat.id
                  ? "bg-violet-600 text-white shadow-xs"
                  : "text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-gray-50 dark:hover:bg-slate-900"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid Layout */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.45 }}
                className="group flex flex-col h-full bg-white dark:bg-slate-950 rounded-2xl border border-gray-100 dark:border-slate-800 overflow-hidden shadow-xs hover:shadow-md hover:border-violet-500/10 dark:hover:border-violet-400/10 transition-all duration-300"
              >
                {/* Card Copy Area */}
                <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1.5 text-xs text-violet-600 dark:text-violet-400 font-mono font-semibold">
                        <Code2 size={12} />
                        <span>{project.subtitle}</span>
                      </div>
                      
                      {project.featured && (
                        <span className="px-2 py-0.5 text-[9px] font-bold text-violet-700 dark:text-violet-300 uppercase bg-violet-50 dark:bg-violet-950/40 rounded-md tracking-wider">
                          Featured Build
                        </span>
                      )}
                    </div>

                    <h4 className="text-lg sm:text-xl font-display font-extrabold text-gray-900 dark:text-gray-50 group-hover:text-violet-700 dark:group-hover:text-violet-400 transition-colors">
                      {project.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-300 leading-relaxed font-sans">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags list */}
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold text-slate-600 dark:text-slate-300 bg-gray-100 dark:bg-slate-900"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Footer buttons (Visible in all sizes) */}
                    <div className="flex items-center space-x-3 pt-3 w-full border-t border-gray-100 dark:border-slate-800/80">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex-1 inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-violet-700 dark:text-violet-300 bg-violet-50 dark:bg-violet-950/30 hover:bg-violet-100 dark:hover:bg-violet-950/50 rounded-lg cursor-pointer transition-colors"
                      >
                        <Search size={14} className="mr-1.5" />
                        <span>System Architecture</span>
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-violet-600 dark:hover:text-violet-400 bg-gray-50 dark:bg-slate-900 hover:bg-gray-100 dark:hover:bg-slate-800 border border-gray-200 dark:border-slate-800/80 rounded-lg transition-all"
                      >
                        <Github size={14} className="mr-1.5" />
                        <span>Source Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                className="bg-white dark:bg-slate-950 border border-gray-200 dark:border-slate-800 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header without Banner image */}
                <div className="p-6 sm:p-8 border-b border-gray-100 dark:border-slate-800/80 bg-gray-50/50 dark:bg-slate-900/30 flex justify-between items-start">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-mono font-bold text-violet-600 dark:text-violet-400 uppercase tracking-widest">{selectedProject.subtitle}</span>
                      {selectedProject.featured && (
                        <span className="px-1.5 py-0.5 text-[8px] font-bold text-white uppercase bg-violet-600 rounded tracking-wider">
                          Featured Build
                        </span>
                      )}
                    </div>
                    <h5 className="text-2xl font-display font-extrabold text-gray-900 dark:text-gray-50">{selectedProject.title}</h5>
                  </div>
                  
                  {/* Close Button inside header */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-350 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Detail content */}
                <div className="p-6 space-y-6">
                  <div className="space-y-2">
                    <h6 className="text-xs font-bold text-gray-500 uppercase tracking-widest font-mono">Overview Description</h6>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-sans">
                      {selectedProject.detailedDescription || selectedProject.description}
                    </p>
                  </div>

                  {/* Core Architecture highlights */}
                  <div className="space-y-3.5">
                    <h6 className="text-xs font-bold text-gray-500 uppercase tracking-widest font-mono">Implementation Details</h6>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-gray-50 dark:bg-slate-900 rounded-lg">
                        <div className="text-xs font-bold text-gray-700 dark:text-gray-300">Build Layer</div>
                        <div className="text-[11px] text-gray-400 font-mono mt-0.5">Modular component structure, local persistence modules.</div>
                      </div>
                      <div className="p-3 bg-gray-50 dark:bg-slate-900 rounded-lg">
                        <div className="text-xs font-bold text-gray-700 dark:text-gray-300">Data Management</div>
                        <div className="text-[11px] text-gray-400 font-mono mt-0.5">Optimized relational mapping models and memory schemas.</div>
                      </div>
                    </div>
                  </div>

                  {/* Tech footprint */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {selectedProject.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-sm text-[10px] font-mono font-bold text-violet-700 dark:text-violet-300 bg-violet-50 dark:bg-violet-950/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center justify-end space-x-3 pt-4 border-t border-gray-100 dark:border-slate-800">
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2.5 hover:translate-y-[-1px] transition-all text-xs font-semibold rounded-lg text-white bg-violet-600 hover:bg-violet-700 shadow-md shadow-violet-500/10 flex items-center space-x-1.5"
                    >
                      <Github size={14} />
                      <span>View GitHub Source</span>
                    </a>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="px-5 py-2.5 text-xs font-semibold rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 border border-gray-200 dark:border-slate-800 transition-colors cursor-pointer"
                    >
                      <span>Close View</span>
                    </button>
                  </div>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
