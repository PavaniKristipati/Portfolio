/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
  activeSection: string;
}

export default function Header({ theme, toggleTheme, activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "credentials", label: "Certifications" },
    { id: "contact", label: "Contact" }
  ];

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-md border-b border-purple-500/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick("hero")}
          className="flex items-center space-x-3 cursor-pointer"
        >
          <div className="w-10 h-10 bg-violet-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-sm">
            PK
          </div>
          <span className="font-bold text-slate-900 dark:text-white tracking-tight font-display">
            Pavani Kristipati
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex align-middle items-center space-x-1 lg:space-x-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeSection === item.id
                  ? "bg-violet-50 text-violet-600 border-b-2 border-violet-600 dark:bg-violet-950/40 dark:text-violet-300 rounded-b-none"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 hover:text-violet-600 dark:hover:bg-slate-900/60 dark:hover:text-violet-400"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Actions Button (Desktop & Mobile Actions) */}
        <div className="flex items-center space-x-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl border border-gray-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors shadow-sm cursor-pointer"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Download Resume Quicklink */}
          <button
            onClick={() => handleNavClick("contact")}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 hover:translate-y-[-1px] transition-all text-xs font-semibold rounded-full text-white bg-violet-600 hover:bg-violet-700 shadow-sm cursor-pointer"
          >
            Resume
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl border border-gray-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors cursor-pointer"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-950 border-b border-gray-200 dark:border-slate-800 shadow-lg overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-1.5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex w-full items-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? "bg-violet-50 text-violet-600 dark:bg-violet-950/40 dark:text-violet-300"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-900"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-3 px-4">
                <button
                  onClick={() => handleNavClick("contact")}
                  className="flex w-full items-center justify-center py-2.5 bg-violet-600 hover:bg-violet-700 text-white border border-transparent rounded-lg text-sm font-medium shadow-md shadow-violet-500/10 cursor-pointer"
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
