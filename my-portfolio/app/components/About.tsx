'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Section } from './ui/Section'
import { Briefcase, Rocket, Clock, MapPin, Sparkles } from 'lucide-react'
import { cn } from '../lip/utils'

const stats = [
  { icon: Briefcase, label: 'Experience', value: '2+ Years', color: 'from-blue-500 to-cyan-500' },
  { icon: Rocket, label: 'Projects', value: '5+', color: 'from-violet-500 to-fuchsia-500' },
  { icon: Clock, label: 'Availability', value: 'Immediate', color: 'from-emerald-500 to-teal-500' },
  { icon: MapPin, label: 'Location', value: 'Phnom Penh', color: 'from-orange-500 to-rose-500' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
}

const childVariants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring", // TypeScript now sees this as the literal "spring"
      stiffness: 100,
      damping: 20
    },
  },
} as const; // <--- Add this right here

export function About() {
  return (
    <Section id="about" title="About Me" className="relative py-24 overflow-hidden">
      {/* AMBIENT BACKGROUND GLOWS */}
      <div className="absolute inset-0 -z-10 pointer-events-none select-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px]"
        />
      </div>

      <motion.div
        className="max-w-6xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* LEFT COLUMN: NARRATIVE */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div variants={childVariants} className="flex items-center gap-2">
              <div className="px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-600 dark:text-primary-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <Sparkles size={14} className="animate-pulse" />
                My Journey
              </div>
            </motion.div>

            <motion.h2
              variants={childVariants}
              className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]"
            >
              Crafting digital excellence through <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-indigo-500">
                clean code & intent.
              </span>
            </motion.h2>

            <div className="space-y-6">
              <motion.p
                variants={childVariants}
                className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed text-balance"
              >
                I am a <span className="text-slate-900 dark:text-slate-100 font-semibold">Full Stack Developer</span> with 2+ years of experience. I don't just write code; I build solutions that bridge the gap between complex backend logic and intuitive frontend design.
              </motion.p>

              <motion.p
                variants={childVariants}
                className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
              >
                My philosophy is simple: **Stay curious.** Whether it's mastering a new framework or optimizing a database query, I thrive on the challenges that come with modern web development. Currently looking for impactful opportunities to scale with a forward-thinking team.
              </motion.p>
            </div>

            <motion.div variants={childVariants} className="pt-4">
               <div className="h-[2px] w-24 bg-gradient-to-r from-primary-500 to-transparent rounded-full" />
            </motion.div>
          </div>

          {/* RIGHT COLUMN: STATS GRID */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((item, index) => (
              <motion.div
                key={item.label}
                variants={childVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative p-6 rounded-3xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-slate-800 hover:border-primary-500/30 transition-colors duration-500"
              >
                {/* Accent Glow on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl bg-gradient-to-br from-primary-500/5 via-transparent to-transparent pointer-events-none" />

                <div className={cn(
                  "w-12 h-12 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3",
                  item.color
                )}>
                  <item.icon size={22} />
                </div>

                <div className="space-y-1 relative z-10">
                  <div className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {item.value}
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-400 dark:text-slate-500">
                    {item.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* BOTTOM ACCENT */}
        <motion.div
          variants={childVariants}
          className="mt-24 flex flex-col items-center gap-4"
        >
          <div className="relative h-px w-full bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent">
             <motion.div
               initial={{ width: 0, left: "50%" }}
               whileInView={{ width: "40%", left: "30%" }}
               transition={{ duration: 2, ease: "easeInOut" }}
               className="absolute top-0 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent"
             />
          </div>
        </motion.div>
      </motion.div>
    </Section>
  )
}