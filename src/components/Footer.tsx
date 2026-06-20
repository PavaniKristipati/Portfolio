/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Github, Linkedin, Mail, Terminal, ArrowUp } from "lucide-react";
import { PERSONAL_INFO } from "../data";

interface FooterProps {
  onScrollTo: (id: string) => void;
}

export default function Footer({ onScrollTo }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const links = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "credentials", label: "Certifications" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <footer className="bg-slate-950 text-gray-400 border-t border-purple-950/40 relative">
      
      {/* Scroll to Top button container in corner of footer */}
      <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2">
        <button
          onClick={() => onScrollTo("hero")}
          className="p-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full border-4 border-slate-950 hover:scale-105 transition-all shadow-lg cursor-pointer"
          title="Scroll To Top"
          aria-label="Scroll To Top"
        >
          <ArrowUp size={16} />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center justify-between">
          
          {/* Logo / Tagline */}
          <div className="md:col-span-4 space-y-3.5 text-center md:text-left">
            <button
              onClick={() => onScrollTo("hero")}
              className="flex items-center justify-center md:justify-start space-x-2 text-xl font-display font-bold text-white cursor-pointer"
            >
              <div className="p-1.5 rounded-lg bg-gradient-to-tr from-purple-600 via-indigo-600 to-pink-600 text-white shadow-md">
                <Terminal size={17} />
              </div>
              <span className="bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent">
                Pavani.dev
              </span>
            </button>
            <p className="text-xs text-gray-500 font-sans max-w-xs mx-auto md:mx-0 leading-relaxed">
              Aspiring Software Engineer & Computer Science student engineering responsive websites and secure algorithmic frameworks.
            </p>
          </div>

          {/* Quick Navigations */}
          <div className="md:col-span-5 flex flex-wrap justify-center gap-x-6 gap-y-3.5 text-xs sm:text-sm">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => onScrollTo(link.id)}
                className="hover:text-purple-400 transition-colors cursor-pointer select-none"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Sinks social */}
          <div className="md:col-span-3 flex items-center justify-center md:justify-end space-x-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-gray-400 hover:text-white hover:border-purple-500/40 transition-all shadow-xs"
              aria-label="GitHub Profile Link"
            >
              <Github size={16} />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-gray-400 hover:text-white hover:border-purple-500/40 transition-all shadow-xs"
              aria-label="LinkedIn Profile Link"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-gray-400 hover:text-white hover:border-purple-500/40 transition-all shadow-xs"
              aria-label="Email Link"
            >
              <Mail size={16} />
            </a>
          </div>

        </div>

        {/* Lower row */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-center text-xs text-gray-600">
          <div>
            &copy; {currentYear} {PERSONAL_INFO.name}. All Rights Reserved.
          </div>
          <div className="font-mono">
            Designed with <span className="text-purple-500/70">✦</span> in computer science studies
          </div>
        </div>

      </div>
    </footer>
  );
}
