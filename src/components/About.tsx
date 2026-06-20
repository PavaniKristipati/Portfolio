/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BookOpen, Award, Target, HelpCircle, Code2, GraduationCap } from "lucide-react";
import { motion } from "motion/react";
import { PERSONAL_INFO } from "../data";

export default function About() {
  const elements = [
    {
      icon: <GraduationCap size={22} className="text-violet-600 dark:text-violet-400" />,
      title: "Educational Journey",
      desc: "Currently traversing advanced Computer Science curriculum with special focus on programming mechanics, structures, and systems deployment."
    },
    {
      icon: <Code2 size={22} className="text-indigo-600 dark:text-indigo-400" />,
      title: "Passion for Coding",
      desc: "Engaged in daily programming practices, competitive assignments, and algorithmic projects. Enthusiastic about creating beautiful developer architectures."
    },
    {
      icon: <Target size={22} className="text-fuchsia-600 dark:text-fuchsia-400" />,
      title: "Career Objective",
      desc: "Aspiring to evolve into a highly skilled Software Engineer, developing robust software that optimizes processes and empowers organizations."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-slate-900/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white dark:from-slate-950 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold tracking-wider text-violet-600 dark:text-violet-400 uppercase font-mono">My Identity</h2>
          <h3 className="mt-2 text-3xl sm:text-4xl font-display font-extrabold text-gray-900 dark:text-gray-50 tracking-tight">
            About Me
          </h3>
          <div className="w-12 h-1 bg-violet-600 dark:bg-violet-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Description Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6"
          >
            <h4 className="text-xl sm:text-2xl font-display font-bold text-gray-800 dark:text-gray-100">
              Passionate Computer Science Student & Aspiring Developer
            </h4>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base font-sans">
              {PERSONAL_INFO.aboutMe.bio}
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base font-sans">
              {PERSONAL_INFO.aboutMe.journey}
            </p>

            {/* Accent Highlight box */}
            <div className="p-4 rounded-xl bg-violet-500/5 border border-violet-500/10 dark:border-violet-400/10 dark:bg-violet-950/10">
              <p className="text-sm italic text-violet-800 dark:text-violet-300 font-medium">
                "Software engineering isn't just about writing syntax. It is the art of formulating optimal computer logic to solve complex, human-centric constraints."
              </p>
            </div>
          </motion.div>

          {/* Right Highlights Column */}
          <div className="lg:col-span-6 grid grid-cols-1 gap-6">
            {elements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white dark:bg-slate-950 border border-gray-100 dark:border-slate-800/80 hover:shadow-md dark:hover:border-violet-500/10 transition-all flex items-start space-x-4 group"
              >
                <div className="p-3 bg-violet-50 dark:bg-violet-950/30 rounded-xl group-hover:bg-violet-100 dark:group-hover:bg-violet-900/30 transition-colors">
                  {item.icon}
                </div>
                <div className="space-y-1.5 flex-1">
                  <h5 className="text-md sm:text-lg font-display font-bold text-gray-800 dark:text-gray-200 group-hover:text-violet-700 dark:group-hover:text-violet-400 transition-colors">
                    {item.title}
                  </h5>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
