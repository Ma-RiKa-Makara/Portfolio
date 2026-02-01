'use client'

import React from 'react'
import { motion, Variants } from 'framer-motion'
import {
  Code2,
  Terminal,
  Database,
  Cpu,
  Figma,
  Layers,
  Languages,
  Heart,
  Sparkles,
  CheckCircle2
} from 'lucide-react'
import { cn } from '../lip/utils' // Ensure this utility path is correct

// --- Data based on your CV & Requirements ---
const categories = [
  {
    title: "Frontend",
    icon: Code2,
    color: "from-blue-500 to-cyan-400",
    skills: [
      { name: "React & Next.js" },
      { name: "Vue.js" },
      { name: "JavaScript / HTML" },
      { name: "Tailwind CSS" }
    ]
  },
  {
    title: "Backend",
    icon: Terminal,
    color: "from-violet-600 to-indigo-500",
    skills: [
      { name: "Node.js & Express" },
      { name: "Java Spring Boot" },
      { name: "RESTful API Dev" },
      { name: "Business Logic" }
    ]
  },
  {
    title: "Database",
    icon: Database,
    color: "from-emerald-500 to-teal-400",
    skills: [
      { name: "SQL (Relational)" },
      { name: "NoSQL (MongoDB)" },
      { name: "Prisma / Redis" },
      { name: "Data Mapping" }
    ]
  },
  {
    title: "UX / UI",
    icon: Figma,
    color: "from-pink-500 to-rose-400",
    skills: [
      { name: "Figma Design" },
      { name: "Prototyping" },
      { name: "Wireframing" },
      { name: "User Research" }
    ]
  },
  {
    title: "Tools",
    icon: Cpu,
    color: "from-orange-500 to-amber-400",
    skills: [
      { name: "Docker" },
      { name: "Git & GitHub" },
      { name: "Postman" },
      { name: "Jira / Agile" }
    ]
  }
]

const softSkills = [
  'Communication',
  'Problem Solving',
  'Teamwork',
  'Flexibility',
  'Fast Learner',
  'Hard Working'
]

// --- Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
}

export function Skills() {
  return (
    <section id="skills" className="relative py-24 overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* MAGICAL BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-primary-500/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADER */}
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-primary-500 animate-pulse" />
            <span className="text-xs font-bold tracking-widest uppercase text-slate-500">Expertise</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-indigo-600">Arsenal.</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A versatile skillset built through academic rigor at PSE Institute and hands-on project development.
          </p>
        </div>

        {/* MAIN SKILLS GRID - Set to 5 columns for Large screens */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative p-6 rounded-3xl bg-white/80 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200 dark:border-slate-800 hover:border-primary-500/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary-500/10"
            >
              <div className={cn(
                "w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br text-white mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300",
                cat.color
              )}>
                <cat.icon size={20} />
              </div>
              <h3 className="text-lg font-bold mb-4 text-slate-900 dark:text-white leading-tight">{cat.title}</h3>
              <ul className="space-y-3">
                {cat.skills.map((skill) => (
                  <li key={skill.name} className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                    <CheckCircle2 className="w-4 h-4 text-primary-500 flex-shrink-0" />
                    <span className="text-[13px] font-medium leading-tight">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* SOFT SKILLS & LANGUAGES */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Soft Skills Card */}
          <div className="md:col-span-2 p-8 rounded-3xl bg-slate-900 text-white overflow-hidden relative group">
             <Layers className="absolute -right-8 -bottom-8 w-48 h-48 text-white/5 group-hover:rotate-12 transition-transform duration-700" />
             <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                    <Heart className="text-rose-500" fill="currentColor" size={20} /> Professional Skills
                  </h3>
                  <p className="text-slate-400 mb-6 max-w-md italic text-sm">
                    "Known for being punctual, adaptable, and eager to take on new challenges."
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map(s => (
                    <span key={s} className="px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-sm font-medium hover:bg-white/20 transition-colors">
                      {s}
                    </span>
                  ))}
                </div>
             </div>
          </div>

          {/* Languages Card */}
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-900 dark:text-white">
              <Languages className="text-primary-500" size={20} /> Languages
            </h3>
            <div className="space-y-5">
              {[
                { lang: 'Khmer', level: 'Native', progress: 100 },
                { lang: 'English', level: 'Intermediate', progress: 65 }
              ].map(l => (
                <div key={l.lang} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">{l.lang}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-bold uppercase">{l.level}</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${l.progress}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-primary-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* DECORATIVE DIVIDER */}
        <div className="mt-20 relative flex justify-center">
           <div className="w-1/2 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
           <Sparkles className="absolute -top-2 text-primary-500/50 w-4 h-4" />
        </div>
      </div>
    </section>
  )
}