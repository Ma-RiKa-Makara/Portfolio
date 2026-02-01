'use client'

import React from 'react'
import { motion, Variants } from 'framer-motion'
import { Section } from './ui/Section'
import { Github, ExternalLink, Layers, Lock, Sparkles, Code2, Globe, Trophy } from 'lucide-react'

type Project = {
  title: string
  subtitle: string
  year: string
  description: string
  features: string[]
  tags: string[]
  demoUrl?: string
  repoType: 'private' | 'public'
  repoUrl?: string
  gradient: string
  icon: React.ElementType
}

const projects: Project[] = [
  {
    title: 'Beer Crown',
    subtitle: 'Great Cambodian Craft Beer Festival 2026',
    year: '2026',
    description:
      'A comprehensive event management and live voting platform built to digitize the festival experience. It features real-time analytics, brewery leaderboards, and a secure administration portal.',
    features: [
      'Developed a real-time "Festival Insights" dashboard with live voting stats.',
      'Built a secure Admin Portal for brewery registration and store management.',
      'Implemented a dynamic leaderboard (Podium) to display top breweries.',
      'Created a responsive event schedule and participating brewery directory.',
    ],
    tags: ['Next.js', 'Tailwind CSS', 'Vercel', 'Full Stack'],
    demoUrl: 'https://hackathoncrownbeer.vercel.app/',
    repoType: 'public',
    repoUrl: 'https://github.com/makara17092020/hackathon_crown_beer',
    gradient: 'from-orange-500 via-amber-600 to-yellow-700',
    icon: Trophy,
  },
  {
    title: 'Coco Khmer',
    subtitle: 'Full Stack E-commerce Solution',
    year: '2024',
    description:
      'A bespoke digital commerce ecosystem designed for Coco Khmer, bridging the gap between artisan products and modern consumer needs through a scalable architecture.',
    features: [
      'Engineered a high-performance React frontend with optimized SEO.',
      'Developed a robust Node.js backend for product and inventory control.',
      'Designed an intuitive Admin Dashboard for product management.',
      'Implemented secure authentication and user-friendly product interfaces.',
    ],
    tags: ['React', 'Node.js', 'Express', 'Admin Dashboard'],
    repoType: 'private',
    gradient: 'from-blue-600 via-indigo-600 to-violet-700',
    icon: Layers,
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 20 },
  },
}

export function Projects() {
  return (
    <Section id="projects" title="Featured Work" className="relative py-24">
      {/* AMBIENT BACKGROUND SYSTEM */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, 50, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-1/3 left-0 w-[40vw] h-[40vw] bg-primary-500/10 rounded-full blur-[120px]"
        />
      </div>

      <motion.div
        className="max-w-6xl mx-auto px-6 space-y-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="group relative overflow-hidden rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 shadow-2xl transition-all duration-500"
          >
            <div className="grid lg:grid-cols-2 min-h-[500px]">

              {/* LEFT: VISUAL SHOWCASE */}
              <div className={cn(
                "relative flex items-center justify-center overflow-hidden p-12 bg-gradient-to-br",
                project.gradient
              )}>
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative z-10 w-full max-w-sm aspect-video rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl flex items-center justify-center transition-transform duration-700"
                >
                  <div className="text-center text-white p-6">
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 6, repeat: Infinity }}
                    >
                      <project.icon size={64} className="mx-auto mb-4 opacity-90" />
                    </motion.div>
                    <h4 className="font-bold text-lg mb-2">{project.subtitle}</h4>
                    <div className="flex gap-2 justify-center flex-wrap">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 rounded-md bg-white/10 text-[10px] font-bold tracking-tighter uppercase border border-white/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <motion.div
                   animate={{ opacity: [0.2, 1, 0.2] }}
                   transition={{ duration: 3, repeat: Infinity }}
                   className="absolute top-10 left-10 text-white/40"
                >
                  <Sparkles size={24} />
                </motion.div>
              </div>

              {/* RIGHT: CONTENT & INFO */}
              <div className="p-8 md:p-14 flex flex-col justify-between dark:bg-slate-900/80 backdrop-blur-sm">
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-bold text-xs uppercase tracking-widest">
                        <Globe size={14} /> Full Stack Project
                      </div>
                      <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        {project.title}
                      </h3>
                    </div>
                    <span className="px-3 py-1 text-xs font-black rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                      {project.year}
                    </span>
                  </div>

                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {project.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300"
                      >
                        <Code2 size={16} className="text-primary-500 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ACTIONS */}
                <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                  {project.demoUrl ? (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.demoUrl}
                      target="_blank"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold transition-all shadow-xl"
                    >
                      <ExternalLink size={18} />
                      Live Site
                    </motion.a>
                  ) : (
                    <div className="px-6 py-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 font-bold flex items-center gap-2">
                       <Lock size={16} /> Confidential
                    </div>
                  )}

                  {project.repoType === 'public' ? (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-primary-500 font-bold transition-colors"
                    >
                      <Github size={20} />
                      View Source
                    </a>
                  ) : (
                    <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 text-sm font-semibold">
                      <Lock size={16} />
                      Private Repo
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}