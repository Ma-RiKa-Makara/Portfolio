'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUp, Send } from 'lucide-react'

// --- Data ---
const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

const socials = [
  { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:chanthamakara.info@gmail.com', label: 'Email' },
]

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.215, 0.61, 0.355, 1] as const}
  })
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative mt-20 border-t border-slate-200/60 dark:border-slate-800/60 bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/5 dark:bg-primary-400/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/5 dark:bg-indigo-400/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Column 1: Brand & Bio (5 Cols) */}
          <motion.div
            custom={0} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <h4 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Chantha <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-indigo-500">Makara</span>
            </h4>
            <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              Crafting high-performance web experiences with a focus on clean code and user-centric design. Based in 🇰🇭 Phnom Penh.
            </p>
            <motion.a
              href="mailto:chanthamakara.info@gmail.com"
              whileHover={{ scale: 1.05 }}
              className="mt-6 flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 text-sm font-semibold shadow-lg transition-all"
            >
              Let's Talk <Send size={14} />
            </motion.a>
          </motion.div>

          {/* Column 2: Navigation (3 Cols) */}
          <motion.div
            custom={1} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="lg:col-span-3 flex flex-col items-center lg:items-start"
          >
            <h5 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-6">
              Navigation
            </h5>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group relative text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Socials & Action (4 Cols) */}
          <motion.div
            custom={2} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="lg:col-span-4 flex flex-col items-center lg:items-end justify-between"
          >
            <div className="text-center lg:text-right w-full">
              <h5 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-6">
                Connect
              </h5>
              <div className="flex items-center justify-center lg:justify-end gap-3">
                {socials.map((social, i) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                      className="p-3 rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-500/50 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <Icon size={20} />
                    </motion.a>
                  )
                })}
              </div>
            </div>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -3 }}
              className="mt-12 lg:mt-0 group flex items-center gap-2 text-xs font-bold uppercase tracking-tighter text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Back to Top
              <div className="p-2 rounded-full border border-slate-200 dark:border-slate-800 group-hover:border-slate-900 dark:group-hover:border-white transition-colors">
                <ArrowUp size={14} />
              </div>
            </motion.button>
          </motion.div>
        </div>

        {/* Divider & Copyright */}
        <div className="mt-16 pt-8 border-t border-slate-200/60 dark:border-slate-800/60">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              © {currentYear} <span className="font-semibold text-slate-700 dark:text-slate-200">Chantha Makara</span>. All rights reserved.
            </p>
            <p className="text-sm text-slate-400 dark:text-slate-500 flex items-center gap-1">
              Made with <span className="text-red-500">❤️</span> in Phnom Penh
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}