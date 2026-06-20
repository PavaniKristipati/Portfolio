/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Mail, Github, Linkedin, Copy, Check, Sparkles, Phone } from "lucide-react";
import { motion } from "motion/react";
import { PERSONAL_INFO } from "../data";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.phone || "");
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-violet-500/5 blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-72 h-72 rounded-full bg-indigo-500/5 blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-semibold tracking-wider text-violet-600 dark:text-violet-400 uppercase font-mono">Let's Connect</h2>
          <h3 className="mt-2 text-3xl sm:text-4xl font-display font-extrabold text-gray-900 dark:text-gray-50 tracking-tight">
            Get In Touch
          </h3>
          <div className="w-12 h-1 bg-violet-600 dark:bg-violet-500 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 text-center">
            Have an internship role, an open-source project, or a technical idea? Reach out directly via email, phone, or connected social networks.
          </p>
        </div>

        <div className="flex justify-center">
          {/* Centered Contact Detail Panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-xl"
            id="contact-panel-card"
          >
            <div className="p-6 sm:p-10 bg-gray-50 dark:bg-slate-900/40 border border-gray-100 dark:border-slate-800/80 rounded-2xl space-y-6 shadow-xs">
              <h4 className="text-xl font-display font-bold text-gray-900 dark:text-gray-100 pb-3 border-b border-gray-200/50 dark:border-slate-800/80 text-center">
                Contact Information
              </h4>

              {/* Email Copier Block */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 block">Primary Email Address</span>
                <div className="flex items-center justify-between p-3.5 bg-white dark:bg-slate-950 border border-gray-200 dark:border-slate-800 rounded-xl shadow-xs group">
                  <div className="flex items-center space-x-3 overflow-hidden">
                    <div className="p-2 bg-violet-50 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400 rounded-lg">
                      <Mail size={16} />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-200 truncate select-all">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>

                  {/* Copy Button */}
                  <button
                    onClick={handleCopyEmail}
                    className={`p-2 rounded-lg cursor-pointer transition-colors ${
                      copied
                        ? "bg-green-100 text-green-700 dark:bg-green-950/40 dark:text-green-400"
                        : "bg-gray-50 hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800 text-gray-500 hover:text-violet-600 dark:text-gray-400 dark:hover:text-violet-400"
                    }`}
                    aria-label="Copy email to clipboard"
                    title="Copy email to clipboard"
                  >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                  </button>
                </div>
              </div>

              {/* Phone Copier Block */}
              {PERSONAL_INFO.phone && (
                <div className="space-y-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 block">Phone Number</span>
                  <div className="flex items-center justify-between p-3.5 bg-white dark:bg-slate-950 border border-gray-200 dark:border-slate-800 rounded-xl shadow-xs group">
                    <div className="flex items-center space-x-3 overflow-hidden">
                      <div className="p-2 bg-violet-50 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400 rounded-lg">
                        <Phone size={16} />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-200 truncate select-all">
                        {PERSONAL_INFO.phone}
                      </span>
                    </div>

                    {/* Copy Button */}
                    <button
                      onClick={handleCopyPhone}
                      className={`p-2 rounded-lg cursor-pointer transition-colors ${
                        copiedPhone
                          ? "bg-green-100 text-green-700 dark:bg-green-950/40 dark:text-green-400"
                          : "bg-gray-50 hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800 text-gray-500 hover:text-violet-600 dark:text-gray-400 dark:hover:text-violet-400"
                      }`}
                      aria-label="Copy phone to clipboard"
                      title="Copy phone to clipboard"
                    >
                      {copiedPhone ? <Check size={14} /> : <Copy size={14} />}
                    </button>
                  </div>
                </div>
              )}

              {/* Social Channels List */}
              <div className="space-y-3 pt-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 block text-center">External profiles</span>
                
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center space-x-2 p-3 bg-white hover:bg-violet-50 dark:bg-slate-950 dark:hover:bg-violet-950/20 border border-gray-200 dark:border-slate-800 rounded-xl text-xs font-semibold text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 hover:scale-[1.01] transition-all cursor-pointer"
                  >
                    <Linkedin size={15} />
                    <span>LinkedIn Page</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center space-x-2 p-3 bg-white hover:bg-violet-50 dark:bg-slate-950 dark:hover:bg-violet-950/20 border border-gray-200 dark:border-slate-800 rounded-xl text-xs font-semibold text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 hover:scale-[1.01] transition-all cursor-pointer"
                  >
                    <Github size={15} />
                    <span>GitHub Page</span>
                  </a>
                </div>
              </div>

              {/* Status Flag */}
              <div className="p-4 rounded-xl bg-violet-500/5 border border-violet-500/10 dark:border-violet-400/10 text-xs text-violet-800 dark:text-violet-300 flex items-start space-x-2.5">
                <Sparkles size={16} className="mt-0.5 shrink-0" />
                <p className="leading-relaxed">
                  Fast responder! Emails and LinkedIn messages are generally acknowledged inside 12-24 business hours.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
