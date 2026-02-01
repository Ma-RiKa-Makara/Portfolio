'use client'

import React from 'react'
import { motion, Variants } from 'framer-motion'
import { Mail, Send, Github, Linkedin, ArrowRight, MousePointer2 } from 'lucide-react'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1, ease: "easeOut" },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15, filter: 'blur(12px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

export function Hero() {
  const name = "Chantha Makara"

  return (
    <section
      id="home"
      aria-label="Hero Section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-[#0b0f1a] pt-16 px-6"
    >
      {/* --- BACKGROUND ENGINE --- */}
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.05] dark:opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#64748b 1px, transparent 1px), linear-gradient(90deg, #64748b 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }}
        />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

        {/* --- LEFT: TEXT CONTENT --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left z-10 lg:col-span-7"
        >
          <motion.div variants={itemVariants} className="mb-6 flex justify-center lg:justify-start">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 text-[10px] font-black tracking-widest uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for Internship
            </span>
          </motion.div>

          <motion.header variants={itemVariants} className="space-y-3">
            <p className="text-slate-500 dark:text-slate-400 text-base font-medium tracking-tight">Hello, I'm</p>

            <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-black tracking-tighter leading-[1.1] pb-2 flex justify-center lg:justify-start">
              <span className="relative inline-block overflow-hidden">
                 <span className="bg-gradient-to-r from-primary-600 via-indigo-500 to-primary-600 bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent animate-typing-reveal whitespace-nowrap pr-2 border-r-4 border-primary-500">
                  {name}
                </span>
              </span>
            </h1>

            <p className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 tracking-tight">
              Full Stack Developer
            </p>
          </motion.header>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-lg mx-auto lg:mx-0 text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium"
          >
            I craft high-performance web applications, specializing in bridging the gap between
            <span className="text-primary-500"> backend complexity </span>
            and <span className="text-slate-900 dark:text-white font-semibold"> elegant user interfaces</span>.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
            <motion.a
              href="mailto:chanthamakara.info@gmail.com"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden px-8 py-4 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold flex items-center gap-2 shadow-lg transition-all"
            >
              <div className="absolute inset-0 w-1/2 h-full bg-white/10 dark:bg-black/5 skew-x-[-25deg] -translate-x-[150%] group-hover:animate-shimmer" />
              <Mail size={18} />
              <span>Contact Me</span>
              <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </motion.a>

            <motion.a
              href="https://t.me/M_akaara"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold flex items-center gap-2 backdrop-blur-md hover:border-primary-500 transition-colors"
            >
              <Send size={18} className="text-primary-500" />
              <span>Telegram</span>
            </motion.a>
          </motion.div>

          <motion.nav aria-label="Social links" variants={itemVariants} className="mt-12 flex justify-center lg:justify-start gap-4">
            {[
              { Icon: Github, href: "https://github.com", label: "GitHub" },
              { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" }
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.05 }}
                className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-400 hover:text-primary-500 transition-all shadow-sm"
              >
                <social.Icon size={20} />
              </motion.a>
            ))}
          </motion.nav>
        </motion.div>

        {/* --- RIGHT: VISUAL ELEMENT --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end lg:col-span-5"
        >
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary-500 to-indigo-600 rounded-full blur-3xl opacity-15 group-hover:opacity-30 transition duration-1000" />

            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[480px] lg:h-[480px] rounded-full p-2.5 bg-white/50 dark:bg-slate-900/50 backdrop-blur-3xl border border-white/20 dark:border-white/10 shadow-2xl transition-all duration-700 group-hover:scale-[1.01]">
               <img
                 src="/profile.jpg"
                 alt="Chantha Makara"
                 className="w-full h-full object-cover rounded-full grayscale-[10%] group-hover:grayscale-0 transition-all duration-1000"
                 loading="eager"
               />
            </div>

            {/* Float Experience Badge - REFACTORED FOR RESPONSIVENESS */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute
                bottom-2 -right-1     /* Mobile: tight to bottom right */
                md:bottom-6 md:right-4 /* Tablet/Desktop: floating position */
                bg-white dark:bg-slate-800
                p-2 md:p-4            /* Smaller padding on mobile */
                rounded-xl md:rounded-2xl
                shadow-2xl border border-slate-100 dark:border-white/10
                flex items-center gap-2 md:gap-3
                backdrop-blur-md z-20"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-500">
                <MousePointer2 className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div className="pr-1 text-left">
                <p className="text-[8px] md:text-[10px] text-slate-400 uppercase font-black tracking-tighter leading-none mb-0.5 md:mb-1">Role</p>
                <p className="text-xs md:text-sm font-bold dark:text-white leading-none whitespace-nowrap">Full Stack Dev</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}