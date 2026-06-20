/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Coffee, Binary, Code2, Database, Layers, Atom, Cpu, Server, GitMerge, GitBranch, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { SKILL_GROUPS } from "../data";

// Asset Icon lookup helper
const getSkillIcon = (iconName: string) => {
  switch (iconName) {
    case "Coffee":
      return <Coffee className="text-orange-500" size={20} />;
    case "Binary":
      return <Binary className="text-blue-500" size={20} />;
    case "Code2":
      return <Code2 className="text-yellow-500" size={20} />;
    case "Database":
      return <Database className="text-cyan-500" size={20} />;
    case "Layers":
      return <Layers className="text-pink-500" size={20} />;
    case "Atom":
      return <Atom className="text-indigo-400" size={20} />;
    case "Cpu":
      return <Cpu className="text-pink-600" size={20} />;
    case "Server":
      return <Server className="text-amber-500" size={20} />;
    case "GitMerge":
      return <GitMerge className="text-violet-500" size={20} />;
    case "GitBranch":
      return <GitBranch className="text-gray-600 dark:text-gray-300" size={20} />;
    default:
      return <Code2 className="text-violet-500" size={20} />;
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-950 relative overflow-hidden">
      
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-violet-500/5 blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold tracking-wider text-violet-600 dark:text-violet-400 uppercase font-mono">My Capabilities</h2>
          <h3 className="mt-2 text-3xl sm:text-4xl font-display font-extrabold text-gray-900 dark:text-gray-50 tracking-tight">
            Skills & Core Competencies
          </h3>
          <div className="w-12 h-1 bg-violet-600 dark:bg-violet-500 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            A comprehensive overview of my technical toolset, structured proficiency levels, and computational workflows.
          </p>
        </div>

        {/* Skills Bento Panels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_GROUPS.map((group, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl bg-gray-50 dark:bg-slate-900/40 border border-gray-100 dark:border-slate-800/80 hover:border-violet-500/10 dark:hover:border-violet-500/20 transition-all flex flex-col justify-between shadow-xs relative overflow-hidden group hover:shadow-md h-full"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200/50 dark:border-slate-800/50">
                  <h4 className="text-md sm:text-lg font-display font-bold text-gray-800 dark:text-gray-100">
                    {group.category}
                  </h4>
                  <div className="p-1 rounded-sm bg-violet-100 dark:bg-violet-950/40 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight size={14} className="text-violet-600 dark:text-violet-400" />
                  </div>
                </div>

                {/* Category Skills */}
                <div className="space-y-6">
                  {group.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2.5">
                          <div className="p-1 rounded-sm bg-white dark:bg-slate-900 shadow-xs border border-gray-100 dark:border-slate-800/50">
                            {getSkillIcon(skill.iconName)}
                          </div>
                          <span className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-200">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs font-mono font-bold text-violet-700 dark:text-violet-400">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Bar Container */}
                      <div className="h-2 w-full bg-gray-200 dark:bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                          className={`h-full rounded-full bg-gradient-to-r ${skill.color} shadow-xs`}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Little detail/flair */}
              <div className="mt-8 pt-4 border-t border-dashed border-gray-200/30 dark:border-slate-800/30 text-[10px] sm:text-xs text-gray-400 font-mono text-right flex items-center justify-end space-x-1.5 select-none">
                <span>VERIFIED SKILL BLOCK</span>
                <span className="w-1.5 h-1.5 rounded-full bg-violet-500"></span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
