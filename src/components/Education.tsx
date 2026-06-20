/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GraduationCap, BookOpen, School, Award, Calendar } from "lucide-react";
import { motion } from "motion/react";
import { EDUCATION_TIMELINE } from "../data";

// Helper to get correct icon for educational level
const getTimelineIcon = (iconType: "college" | "school" | "highschool") => {
  switch (iconType) {
    case "college":
      return <GraduationCap className="text-violet-600 dark:text-violet-400" size={18} />;
    case "highschool":
      return <BookOpen className="text-indigo-600 dark:text-indigo-400" size={18} />;
    case "school":
      return <School className="text-fuchsia-600 dark:text-fuchsia-400" size={18} />;
    default:
      return <GraduationCap className="text-violet-600" size={18} />;
  }
};

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Decorative backdrop shapes */}
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-violet-500/5 blur-3xl -z-10"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-semibold tracking-wider text-violet-600 dark:text-violet-400 uppercase font-mono">My Academic Foundation</h2>
          <h3 className="mt-2 text-3xl sm:text-4xl font-display font-extrabold text-gray-900 dark:text-gray-50 tracking-tight">
            Education History
          </h3>
          <div className="w-12 h-1 bg-violet-600 dark:bg-violet-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Timeline Path container */}
        <div className="relative border-l-2 border-gray-150 dark:border-slate-800 ml-4 sm:ml-6 space-y-12 pb-4">
          
          {EDUCATION_TIMELINE.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative pl-8 sm:pl-10"
            >
              {/* Spinning/pulsing anchor node */}
              <div className="absolute -left-[15px] top-1.5 flex h-[28px] w-[28px] items-center justify-center rounded-full bg-white dark:bg-slate-950 border-2 border-violet-500 dark:border-violet-400 shadow-md">
                {getTimelineIcon(item.iconType)}
              </div>

              {/* Box Info */}
              <div className="p-6 sm:p-8 bg-gray-50 dark:bg-slate-900/40 border border-gray-100 dark:border-slate-800/80 rounded-2xl hover:border-violet-500/15 dark:hover:border-violet-500/15 transition-all shadow-xs hover:shadow-md group">
                
                {/* Header card details */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 pb-4 border-b border-gray-200/55 dark:border-slate-800/70">
                  <div className="space-y-1">
                    <h4 className="text-lg font-display font-extrabold text-gray-950 dark:text-gray-50 group-hover:text-violet-700 dark:group-hover:text-violet-400 transition-colors leading-tight">
                      {item.degree}
                    </h4>
                    <p className="text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-300">
                      {item.institution}
                    </p>
                  </div>

                  {/* Duration Capsule */}
                  <div className="inline-flex items-center space-x-1 px-3 py-1 bg-white dark:bg-slate-900 border border-gray-200/50 dark:border-slate-800 rounded-md shadow-xs text-[10px] sm:text-xs font-semibold text-violet-700 dark:text-violet-300 font-mono w-fit">
                    <Calendar size={12} />
                    <span>{item.duration}</span>
                  </div>
                </div>

                {/* Score badge / achievement highlight */}
                <div className="flex items-center space-x-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 py-3 font-mono">
                  <Award size={14} />
                  <span>{item.result}</span>
                </div>

                {/* Descriptions bullets */}
                <ul className="space-y-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed list-none pl-0">
                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start">
                      <span className="text-violet-500 mr-2.5 mt-1 select-none font-bold">▪</span>
                      <span className="flex-1 font-sans">{detail}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
