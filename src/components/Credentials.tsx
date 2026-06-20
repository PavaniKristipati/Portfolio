/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Award, ShieldCheck, Trophy } from "lucide-react";
import { motion } from "motion/react";
import { ACHIEVEMENTS } from "../data";

export default function Credentials() {
  return (
    <section id="credentials" className="py-20 bg-gray-50 dark:bg-slate-900/50 relative overflow-hidden">
      
      {/* Absolute Decorative Blobs */}
      <div className="absolute top-1/3 left-10 w-48 h-48 rounded-full bg-violet-500/5 blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 right-10 w-60 h-60 rounded-full bg-indigo-500/5 blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold tracking-wider text-violet-600 dark:text-violet-400 uppercase font-mono">My Credentials</h2>
          <h3 className="mt-2 text-3xl sm:text-4xl font-display font-extrabold text-gray-900 dark:text-gray-50 tracking-tight">
            Achievements & Certifications
          </h3>
          <div className="w-12 h-1 bg-violet-600 dark:bg-violet-500 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            A catalogue of earned certificates, technical achievements, and hackathon accomplishments validating my skill set.
          </p>
        </div>

        {/* Credentials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ACHIEVEMENTS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="p-6 sm:p-8 bg-white dark:bg-slate-950 border border-gray-100 dark:border-slate-800/80 rounded-2xl shadow-xs hover:shadow-md hover:border-violet-500/10 dark:hover:border-violet-400/10 hover:translate-y-[-2px] transition-all flex flex-col justify-between h-full group"
            >
              <div className="space-y-4">
                {/* Upper Badge and Metadata row */}
                <div className="flex items-center justify-between">
                  {/* Type Badge */}
                  <span className={`inline-flex items-center px-2.5 py-1 text-[10px] font-mono font-bold uppercase rounded-md ${
                    item.type === "competition"
                      ? "bg-amber-50 text-amber-600 dark:bg-amber-950/20 dark:text-amber-400 border border-amber-500/10"
                      : "bg-violet-50 text-violet-600 dark:bg-violet-950/20 dark:text-violet-400 border border-violet-500/10"
                  }`}>
                    {item.type === "competition" ? (
                      <>
                        <Trophy size={11} className="mr-1.5" />
                        <span>Mock Competition</span>
                      </>
                    ) : (
                      <>
                        <ShieldCheck size={11} className="mr-1.5" />
                        <span>Verified Certification</span>
                      </>
                    )}
                  </span>

                  {/* Year Tag */}
                  <span className="text-[11px] font-bold font-mono text-gray-400 dark:text-gray-500">
                    {item.date}
                  </span>
                </div>

                {/* Main Content Info */}
                <div className="space-y-2">
                  <div className="flex items-start space-x-3">
                    <div className="mt-1 p-2 bg-violet-50 dark:bg-violet-950/30 rounded-lg text-violet-600 dark:text-violet-400">
                      {item.type === "competition" ? <Trophy size={18} /> : <Award size={18} />}
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-md sm:text-lg font-display font-bold text-gray-950 dark:text-gray-50 group-hover:text-violet-700 dark:group-hover:text-violet-400 transition-colors leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold font-sans">
                        Issued by: {item.issuer}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed pl-11">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Lower tags list */}
              {item.tags && (
                <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-gray-100 dark:border-slate-800/80 pl-11">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 text-[10px] font-mono font-bold rounded-md bg-gray-50 dark:bg-slate-900 text-gray-500 dark:text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
