/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { X, Mail, Phone, MapPin, Github, Linkedin, Printer, Download, Award, Briefcase } from "lucide-react";
import { motion } from "motion/react";
import { PERSONAL_INFO, PROJECTS, EDUCATION_TIMELINE, ACHIEVEMENTS } from "../data";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-xs z-50 overflow-y-auto flex items-start justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.95 }}
        transition={{ duration: 0.4 }}
        className="my-8 bg-white dark:bg-slate-950 border border-gray-200 dark:border-slate-800 rounded-3xl w-full max-w-4xl overflow-hidden shadow-2xl relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header tools */}
        <div className="sticky top-0 bg-gray-50/90 dark:bg-slate-900/90 backdrop-blur-xs border-b border-gray-100 dark:border-slate-800 py-4 px-6 flex items-center justify-between z-30">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-violet-500 animate-pulse"></span>
            <span className="text-xs font-mono font-bold text-gray-500 uppercase tracking-widest">Pavani's Digital Resume</span>
          </div>

          <div className="flex items-center space-x-2.5">
            {/* Print trigger */}
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950 hover:bg-gray-150 dark:hover:bg-slate-900 text-xs font-semibold text-gray-600 dark:text-gray-300 flex items-center space-x-1.5 cursor-pointer shadow-xs transition-all"
              title="Print Curriculum Vitae"
            >
              <Printer size={13} />
              <span className="hidden sm:inline">Print CV</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-gray-500 dark:text-gray-400 transition-colors cursor-pointer"
              aria-label="Close resume view"
            >
              <X size={15} />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div id="printable-resume-area" className="p-8 sm:p-12 space-y-8 max-h-[80vh] overflow-y-auto">
          
          {/* Resume Header Grid */}
          <div className="border-b-2 border-violet-500 pb-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-8 space-y-2">
              <h4 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-gray-900 dark:text-white">
                {PERSONAL_INFO.name}
              </h4>
              <p className="text-sm font-semibold text-violet-700 dark:text-violet-400 tracking-wide font-mono">
                {PERSONAL_INFO.title}
              </p>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-300 max-w-xl font-sans">
                Passionate and logical Computer Science undergraduate. Proficient in Java, Python, and modern web application layers with proven strengths in Data Structures and Systems mapping.
              </p>
            </div>

            {/* Resume Contact Details List */}
            <div className="md:col-span-4 space-y-1.5 text-xs text-gray-600 dark:text-gray-300 font-mono sm:text-right">
              <div className="flex items-center sm:justify-end space-x-2">
                <span className="truncate">{PERSONAL_INFO.email}</span>
                <Mail size={12} className="text-violet-500 shrink-0" />
              </div>
              {PERSONAL_INFO.phone && (
                <div className="flex items-center sm:justify-end space-x-2">
                  <span>{PERSONAL_INFO.phone}</span>
                  <Phone size={12} className="text-violet-500 shrink-0" />
                </div>
              )}
              <div className="flex items-center sm:justify-end space-x-2">
                <span>Hyderabad, Telangana</span>
                <MapPin size={12} className="text-violet-500 shrink-0" />
              </div>
              <div className="flex items-center sm:justify-end space-x-2">
                <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:underline hover:text-violet-600">
                  github.com/PavaniKristipati
                </a>
                <Github size={12} className="text-violet-500 shrink-0" />
              </div>
              <div className="flex items-center sm:justify-end space-x-2">
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:underline hover:text-violet-600">
                  linkedin.com/in/pavani-kristipati
                </a>
                <Linkedin size={12} className="text-violet-500 shrink-0" />
              </div>
            </div>
          </div>

          {/* Education Block */}
          <div className="space-y-4">
            <h5 className="text-sm font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400 border-b border-gray-150 dark:border-slate-800 pb-1.5 font-mono">
              Education History
            </h5>
            <div className="space-y-4">
              {EDUCATION_TIMELINE.map((edu, idx) => (
                <div key={idx} className="grid grid-cols-1 sm:grid-cols-12 gap-1 gap-sm-4 items-start">
                  <div className="sm:col-span-3 text-xs sm:text-sm font-bold text-gray-500 dark:text-gray-400 font-mono">
                    {edu.duration}
                  </div>
                  <div className="sm:col-span-9 space-y-1">
                    <div className="flex items-center justify-between">
                      <h6 className="text-sm sm:text-base font-extrabold text-gray-900 dark:text-white leading-tight">
                        {edu.degree}
                      </h6>
                      <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 shrink-0">
                        {edu.result}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-gray-600 dark:text-gray-300">
                      {edu.institution}
                    </p>
                    <ul className="list-disc pl-4 text-xs text-gray-500 dark:text-gray-400 space-y-0.5 pt-1">
                      {edu.details.map((detail, dIdx) => (
                        <li key={dIdx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Map */}
          <div className="space-y-4">
            <h5 className="text-sm font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400 border-b border-gray-150 dark:border-slate-800 pb-1.5 font-mono">
              Technical Capabilities
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs sm:text-sm">
              <div className="space-y-1.5">
                <h6 className="font-extrabold text-gray-901 dark:text-gray-200">Programming Languages</h6>
                <p className="text-gray-500 dark:text-gray-400 font-mono text-xs">Java (Expert), Python, JavaScript (ES6+), SQL (Query Optimization)</p>
              </div>
              <div className="space-y-1.5">
                <h6 className="font-extrabold text-gray-901 dark:text-gray-200">Web Development</h6>
                <p className="text-gray-500 dark:text-gray-400 font-mono text-xs">HTML, CSS, Tailwind CSS framework, React (Vite/TypeScript)</p>
              </div>
              <div className="space-y-1.5">
                <h6 className="font-extrabold text-gray-901 dark:text-gray-200">Core Engineering Concepts</h6>
                <p className="text-gray-500 dark:text-gray-400 font-mono text-xs">Data Structures & Algorithms, OOP paradigm patterns, Database Management (DBMS), Git branching methodologies</p>
              </div>
            </div>
          </div>

          {/* Featured Projects Block */}
          <div className="space-y-4">
            <h5 className="text-sm font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400 border-b border-gray-150 dark:border-slate-800 pb-1.5 font-mono">
              Academic Projects
            </h5>
            <div className="space-y-4">
              {PROJECTS.map((proj, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h6 className="text-sm sm:text-base font-extrabold text-gray-950 dark:text-white">
                      {proj.title}
                    </h6>
                    <span className="text-[10px] font-mono font-medium text-gray-400 dark:text-gray-500">
                      {proj.tags.slice(0, 3).join(" | ")}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {proj.detailedDescription || proj.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Credentials Profile */}
          <div className="space-y-4 pb-4">
            <h5 className="text-sm font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400 border-b border-gray-150 dark:border-slate-800 pb-1.5 font-mono">
              Accomplishments & Certifications
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ACHIEVEMENTS.map((ach) => (
                <div key={ach.id} className="flex items-start space-x-2.5 text-xs text-gray-500 dark:text-gray-400">
                  <span className="text-violet-500 font-bold mt-0.5">✔</span>
                  <div>
                    <strong className="text-gray-800 dark:text-gray-300 font-bold">{ach.title}</strong>
                    <span className="block text-[10px] text-gray-400 mt-0.5">Issued: {ach.issuer} ({ach.date})</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer controls */}
        <div className="p-6 bg-gray-50 dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800 flex items-center justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-xs font-semibold rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-150 dark:hover:bg-slate-800 border border-gray-200 dark:border-slate-800 cursor-pointer"
          >
            Close Resume
          </button>
          
          <button
            onClick={handlePrint}
            className="px-5 py-2.5 text-xs font-semibold rounded-xl text-white bg-violet-600 hover:bg-violet-700 shadow-md shadow-violet-500/10 flex items-center space-x-1.5 cursor-pointer"
          >
            <Printer size={13} />
            <span>Print or Save to PDF</span>
          </button>
        </div>

      </motion.div>
    </div>
  );
}
