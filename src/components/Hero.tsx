/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight, Github, Linkedin, Mail, FileText, Download } from "lucide-react";
import { motion } from "motion/react";
import { PERSONAL_INFO } from "../data";

interface HeroProps {
  onScrollTo: (id: string) => void;
  onOpenResumeModal: () => void;
}

export default function Hero({ onScrollTo, onOpenResumeModal }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden bg-radial from-transparent via-violet-100/5 to-transparent dark:via-violet-950/5 grid-animation"
    >
      {/* Absolute Decorative Background Elements */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-violet-500/10 blur-3xl -z-10 animate-pulse duration-[6000ms]"></div>
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-indigo-500/5 blur-3xl -z-10 animate-pulse duration-[8000ms]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Content (Left Side) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left z-10"
          >
            {/* Status chip */}
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-violet-50 border border-violet-100 dark:bg-violet-950/30 dark:border-violet-800/30 text-violet-700 dark:text-violet-300 text-xs font-semibold uppercase tracking-wider shadow-sm select-none">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
              </span>
              <span>Available for Internships & Projects</span>
            </div>

            {/* Headline and Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-gray-900 dark:text-gray-50 leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-fuchsia-500 bg-clip-text text-transparent dark:from-violet-400 dark:via-indigo-300 dark:to-fuchsia-400">
                  {PERSONAL_INFO.name}
                </span>
              </h1>
              <p className="text-md sm:text-lg md:text-xl font-display font-medium text-violet-600 dark:text-violet-300">
                {PERSONAL_INFO.title}
              </p>
            </div>

            {/* Introduction BIO */}
            <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base leading-relaxed font-sans">
              Passionate Computer Science student with strong interests in{" "}
              <strong className="text-gray-900 dark:text-white font-semibold">Software Development</strong>,{" "}
              <strong className="text-gray-900 dark:text-white font-semibold">Java Programming</strong>,{" "}
              <strong className="text-gray-900 dark:text-white font-semibold">Web Development</strong>, and{" "}
              <strong className="text-gray-900 dark:text-white font-semibold">Data Structures & Algorithms</strong>. Seeking opportunities to apply technical skills and contribute to innovative projects.
            </p>

            {/* Quick Metrics display */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 max-w-lg mx-auto lg:mx-0">
              {PERSONAL_INFO.aboutMe.stats.map((stat, idx) => (
                <div key={idx} className="p-3 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xs rounded-xl border border-gray-100 dark:border-slate-800/60 shadow-xs">
                  <div className="text-xl sm:text-2xl font-bold font-display text-violet-600 dark:text-violet-400">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => onScrollTo("projects")}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-violet-600 hover:bg-violet-700 shadow-lg shadow-violet-200 dark:shadow-none hover:translate-y-[-1px] transition-all cursor-pointer group"
              >
                <span>View Projects</span>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenResumeModal}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-semibold text-violet-700 dark:text-violet-200 bg-violet-50 dark:bg-violet-950/40 hover:bg-violet-100 dark:hover:bg-violet-950/60 border border-violet-200/50 dark:border-violet-800/40 hover:scale-[1.01] transition-all cursor-pointer group"
              >
                <FileText size={16} className="mr-2 text-violet-600 dark:text-violet-400" />
                <span>View Resume</span>
              </button>

              <button
                onClick={() => onScrollTo("contact")}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 hover:scale-[1.01] transition-all cursor-pointer"
              >
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social handles quick bar */}
            <div className="flex items-center justify-center lg:justify-start space-x-4 pt-6 text-gray-400">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Connect:</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-900 text-gray-500 hover:text-violet-600 dark:text-gray-400 dark:hover:text-violet-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-900 text-gray-500 hover:text-violet-600 dark:text-gray-400 dark:hover:text-violet-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-900 text-gray-500 hover:text-violet-600 dark:text-gray-400 dark:hover:text-violet-400 transition-colors"
                aria-label="Email Pavani"
              >
                <Mail size={18} />
              </a>
            </div>
          </motion.div>

          {/* Hero Avatar Card (Right Side) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center z-10"
          >
            <div className="relative w-72 h-72 sm:w-85 sm:h-85 lg:w-96 lg:h-96 group">
              {/* Spinning / Glowing Gradient Ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-fuchsia-500 blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
              
              {/* Dynamic Outer border card decoration */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-violet-500 to-fuchsia-500 opacity-20 group-hover:opacity-100 transition duration-500 group-hover:duration-200"></div>

              {/* Main Profile Container */}
              <div className="relative w-full h-full bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl shadow-xl flex items-center justify-center overflow-hidden border-2 border-dashed border-violet-200 dark:border-violet-800/40">
                <img
                  src={PERSONAL_INFO.avatar}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover rounded-xl select-none"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating Tech Badges on Avatar card */}
                <div className="absolute bottom-6 right-6 px-3 py-1.5 rounded-lg bg-slate-900/90 backdrop-blur-xs border border-slate-700/50 shadow-lg text-white flex items-center space-x-1">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  <span className="text-[10px] font-mono font-medium tracking-wide">PAVANI.JAVA_DEV</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
