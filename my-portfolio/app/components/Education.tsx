'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Section } from './ui/Section'
import { GraduationCap, Calendar, Sparkles, MapPin } from 'lucide-react'
import { cn } from '../lip/utils'

const education = [
  {
    degree: 'Web & App Development',
    school: 'School of Business, PSE Institute',
    location: 'Phnom Penh',
    period: '2024 – 2025',
    color: 'from-blue-500 to-indigo-500',
    details: [
      'Architecting dynamic web applications with modern frameworks.',
      'Designing relational and non-relational database architectures.',
      'Implementing secure server-side logic and API documentation.',
    ],
  },
  {
    degree: 'Foundation Studies Division',
    school: 'Pour un Sourire d’Enfant (PSE)',
    location: 'Phnom Penh',
    period: '2023',
    color: 'from-purple-500 to-pink-500',
    details: [],
  },
  {
    degree: 'High School Diploma',
    school: 'HunSen Mitapheap High School',
    location: 'Sihanoukville',
    period: '2023',
    color: 'from-emerald-500 to-teal-500',
    details: [],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
} as const

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 16 },
  },
} as const

export function Education() {
  return (
    <Section id="education" title="Education" className="relative py-24">
      {/* AMBIENT BACKGROUND GLOWS */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-primary-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 -left-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-[120px]" />
      </div>

      <motion.div
        className="max-w-4xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="relative">
          {/* TRACK LINE */}
          <div className="absolute left-6 md:left-8 top-2 bottom-2 w-[2px] bg-gradient-to-b from-primary-500/50 via-slate-200 dark:via-slate-800/50 to-transparent" />

          <div className="space-y-12">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative pl-16 md:pl-24"
              >
                {/* TIMELINE NODE */}
                <div className="absolute left-1 md:left-3 top-2 flex items-center justify-center z-10">
                  <div className="relative">
                    <motion.div
                      animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute inset-0 rounded-full bg-primary-500/30 blur-xl -z-10"
                    />
                    <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-950 border-2 border-primary-500/30 flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <GraduationCap size={20} className="text-primary-500" />
                    </div>
                  </div>
                </div>

                {/* EDUCATION CARD */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.005 }}
                  className="p-6 md:p-8 rounded-[2rem] bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:shadow-primary-500/5 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                         <div className="flex items-center gap-1.5 text-primary-600 dark:text-primary-400 text-xs font-bold">
                           <Calendar size={14} />
                           {edu.period}
                         </div>
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-primary-500 transition-colors tracking-tight">
                        {edu.degree}
                      </h3>

                      <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-slate-500 dark:text-slate-400 text-sm font-medium">
                        <span className="text-primary-600 dark:text-primary-400 font-semibold">
                          {edu.school}
                        </span>
                        <div className="flex items-center gap-1 opacity-70">
                          <MapPin size={14} />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  {edu.details.length > 0 && (
                    <ul className="grid gap-3 border-t border-slate-100 dark:border-slate-800/50 pt-5">
                      {edu.details.map((detail, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * i }}
                          className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed"
                        >
                          <div className={cn("mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-gradient-to-r", edu.color)} />
                          {detail}
                        </motion.li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* BOTTOM DECORATIVE DIVIDER */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-20 flex justify-center"
        >
          <div className="relative p-2 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <Sparkles className="w-5 h-5 text-primary-500/50" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-dashed border-primary-500/20 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </Section>
  )
}