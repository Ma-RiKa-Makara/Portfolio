'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Section } from './ui/Section'
import { Briefcase, HeartHandshake, Calendar, Sparkles, MapPin } from 'lucide-react'
import { cn } from '../lip/utils'

const experiences = [
  {
    type: 'work',
    title: 'Roti Seller & Stock Assistant',
    organization: 'Sihanoukville',
    period: '2019 – 2023',
    points: [
      'Mastered customer relations and professional food service standards.',
      'Optimized inventory logistics and procurement for consistent daily operations.',
      'Analyzed sales data to monitor profit margins and operational costs.',
      'Leveraged time-management skills to balance multiple high-pressure tasks.',
    ],
  },
  {
    type: 'volunteer',
    title: 'Volunteer Developer',
    organization: 'Coco Khmer (School of Business, PSE)',
    period: '2024',
    points: [
      'Engineered a full-stack platform integrating frontend and backend logic.',
      'Developed a real-time admin dashboard for comprehensive product management.',
      'Prioritized user-centric design to streamline internal business workflows.',
    ],
  },
  {
    type: 'volunteer',
    title: 'Monitor – Winter Camp',
    organization: 'Pour un Sourire d’Enfant (PSE)',
    period: '2024 – 2025',
    points: [
      'Coordinated educational activities for youth engagement and development.',
      'Maintained rigorous safety standards while fostering an inclusive environment.',
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.2 },
  },
} as const

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 110, damping: 15 },
  },
} as const

export function Experience() {
  return (
    <Section id="experience" title="Experience" className="relative py-24">
      {/* PREMIUM AMBIENT LIGHTING */}
      <div className="absolute inset-0 -z-10 pointer-events-none select-none overflow-hidden">
        <motion.div
          animate={{ opacity: [0.1, 0.15, 0.1], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-0 left-0 w-[50vw] h-[50vw] bg-primary-500/10 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{ opacity: [0.05, 0.1, 0.05], x: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-indigo-500/10 blur-[140px] rounded-full"
        />
      </div>

      <motion.div
        className="max-w-4xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="relative">
          {/* REFINED GRADIENT TIMELINE */}
          <div className="absolute left-6 md:left-8 top-2 bottom-2 w-[2px] bg-gradient-to-b from-primary-500 via-slate-200 dark:via-slate-800 to-transparent opacity-50" />

          <div className="space-y-16">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative pl-16 md:pl-28"
              >
                {/* INTERACTIVE TIMELINE NODE */}
                <div className="absolute left-1.5 md:left-3.5 top-2 flex items-center justify-center z-10">
                  <div className="relative">
                    {/* HALO EFFECT */}
                    <motion.div
                      animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className={cn(
                        "absolute inset-0 rounded-full blur-xl -z-10",
                        exp.type === 'work' ? "bg-blue-500/50" : "bg-emerald-500/50"
                      )}
                    />
                    {/* ICON CONTAINER */}
                    <div className={cn(
                      "w-9 h-9 md:w-10 md:h-10 rounded-xl flex items-center justify-center shadow-lg border-2 bg-white dark:bg-slate-950 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110",
                      exp.type === 'work'
                        ? "border-blue-500/30 text-blue-500 shadow-blue-500/10"
                        : "border-emerald-500/30 text-emerald-500 shadow-emerald-500/10"
                    )}>
                      {exp.type === 'work' ? <Briefcase size={18} /> : <HeartHandshake size={18} />}
                    </div>
                  </div>
                </div>

                {/* GLASSMORPHIC EXPERIENCE CARD */}
                <motion.div
                  whileHover={{ y: -8, scale: 1.005 }}
                  className="relative p-6 md:p-8 rounded-[2rem] bg-white/50 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-500"
                >
                  {/* Subtle Card Glow */}
                  <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className={cn(
                            "text-[10px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 rounded-lg border shadow-sm",
                            exp.type === 'work'
                              ? "bg-blue-50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400"
                              : "bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400"
                          )}>
                            {exp.type}
                          </span>
                          <div className="flex items-center gap-1.5 text-slate-400 text-xs font-semibold">
                            <Calendar size={13} className="text-primary-500/70" />
                            {exp.period}
                          </div>
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-primary-500 transition-colors duration-300 tracking-tight">
                          {exp.title}
                        </h3>

                        <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 font-medium">
                          <MapPin size={14} className="opacity-70" />
                          <span>{exp.organization}</span>
                        </div>
                      </div>
                    </div>

                    {/* INTERACTIVE BULLET POINTS */}
                    <ul className="space-y-3.5">
                      {exp.points.map((point, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.15 + (i * 0.1) }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3.5 text-slate-600 dark:text-slate-300 text-sm leading-relaxed"
                        >
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-tr from-primary-500 to-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.5)] shrink-0" />
                          <span className="group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors duration-300">
                            {point}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION DIVIDER */}
        <div className="mt-24 relative flex justify-center">
          <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 p-1.5 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-full">
            <Sparkles size={14} className="text-primary-500/60" />
          </div>
        </div>
      </motion.div>
    </Section>
  )
}