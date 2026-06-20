/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

// Data
import { PERSONAL_INFO } from "./data";

// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Credentials from "./components/Credentials";
import Contact from "./components/Contact";
import ResumeModal from "./components/ResumeModal";
import Footer from "./components/Footer";

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [activeSection, setActiveSection] = useState("hero");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Initialize theme on mount from localStorage or client preferences
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const preference = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      setTheme(preference);
    }
  }, []);

  // Update DOM when theme state shifts
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Track current scroll to determine active navigation item & back-to-top button visibility
  useEffect(() => {
    const handleScrollAndSectionTrack = () => {
      // Toggle back-to-top visibility
      setShowScrollTop(window.scrollY > 450);

      // Track sections
      const sections = ["hero", "about", "skills", "projects", "education", "credentials", "contact"];
      const scrollPosition = window.scrollY + 160; // Header height safety offset

      for (const sect of sections) {
        const el = document.getElementById(sect);
        if (el) {
          const topElement = el.offsetTop;
          const heightElement = el.offsetHeight;
          if (scrollPosition >= topElement && scrollPosition < topElement + heightElement) {
            setActiveSection(sect);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollAndSectionTrack);
    // Execute on mount to highlight correct section
    handleScrollAndSectionTrack();

    return () => window.removeEventListener("scroll", handleScrollAndSectionTrack);
  }, []);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const handleScrollTo = (id: string) => {
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
    <div className="bg-white dark:bg-slate-950 text-gray-800 dark:text-gray-100 min-h-screen transition-colors duration-300 font-sans antialiased overflow-x-hidden selection:bg-purple-500/10">
      
      {/* Header Panel */}
      <Header
        theme={theme}
        toggleTheme={handleToggleTheme}
        activeSection={activeSection}
      />

      {/* Main Content Sections Assembly */}
      <main className="relative">
        <Hero
          onScrollTo={handleScrollTo}
          onOpenResumeModal={() => setIsResumeOpen(true)}
        />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Credentials />
        <Contact />
      </main>

      {/* Footer Block */}
      <Footer onScrollTo={handleScrollTo} />

      {/* Float: Scroll To Top (Animated sliding panel) */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            onClick={() => handleScrollTo("hero")}
            className="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-purple-600 dark:bg-purple-500 text-white shadow-lg hover:bg-purple-700 dark:hover:bg-purple-600 transition-all cursor-pointer hover:scale-105 active:scale-95 border border-purple-400/20"
            aria-label="Scroll to top"
            title="Scroll to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Modal: Interactive Curriculum Vitae Resume Print View */}
      <AnimatePresence>
        {isResumeOpen && (
          <ResumeModal
            isOpen={isResumeOpen}
            onClose={() => setIsResumeOpen(false)}
          />
        )}
      </AnimatePresence>

    </div>
  );
}
