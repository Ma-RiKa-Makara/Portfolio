'use client'

import React, { useEffect, useState } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '../lip/utils'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

const containerVariants = {
  open: {
    transition: { staggerChildren: 0.08, delayChildren: 0.3 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
}

const itemVariants = {
  open: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring' as const, stiffness: 300, damping: 24 }
  },
  closed: {
    opacity: 0,
    x: 50,
    transition: { type: 'spring' as const, stiffness: 300, damping: 24 }
  }
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('Home')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark')
      setDarkMode(true)
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev
      document.documentElement.classList.toggle('dark', next)
      localStorage.setItem('theme', next ? 'dark' : 'light')
      return next
    })
  }

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16)

      navLinks.forEach((link) => {
        const section = document.querySelector(link.href)
        if (!section) return
        const rect = section.getBoundingClientRect()
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(link.name)
        }
      })
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'
  }, [isOpen])

  return (
    <nav
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-white/90 dark:bg-slate-900/95 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-black/30'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 font-bold text-slate-900 dark:text-white"
          >
            <motion.div
              whileHover={{ scale: 1.15, rotate: 6 }}
              className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary-600 to-indigo-600 flex items-center justify-center text-white text-lg shadow-xl hover:shadow-2xl hover:shadow-primary-500/40 transition-all"
            >
              CM
            </motion.div>
            <span className="hidden sm:inline bg-gradient-to-r from-primary-600 to-indigo-600 bg-clip-text text-transparent text-xl">
              CHANTHA
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <div key={link.name} className="group relative">
                <motion.a
                  href={link.href}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.96 }}
                  className={cn(
                    'text-sm font-medium transition-colors duration-300',
                    active === link.name
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-slate-600 dark:text-slate-400 group-hover:text-primary-600 dark:group-hover:text-primary-400'
                  )}
                >
                  {link.name}
                </motion.a>

                {/* Hover & Active Underline */}
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-500 to-transparent rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: active === link.name ? 1 : 0 }}
                  whileHover={{ scaleX: 0.8 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                />

                {/* Active Glow */}
                {active === link.name && (
                  <motion.span
                    className="absolute -bottom-2 left-0 right-0 h-2 bg-primary-500/30 dark:bg-primary-400/40 rounded-full blur-xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all relative overflow-hidden"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={darkMode ? 'sun' : 'moon'}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                  {darkMode ? (
                    <Sun size={20} className="text-yellow-500" />
                  ) : (
                    <Moon size={20} className="text-slate-600 dark:text-slate-300" />
                  )}
                </motion.div>
              </AnimatePresence>
            </button>

            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 z-50 h-[100dvh] w-80 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-2xl flex flex-col p-8"
            >
              <div className="flex items-center justify-between mb-10">
                <span className="font-bold text-xl bg-gradient-to-r from-primary-600 to-indigo-600 bg-clip-text text-transparent">
                  Menu
                </span>
                <button onClick={() => setIsOpen(false)} className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800">
                  <X size={26} />
                </button>
              </div>

              <motion.div
                variants={containerVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="flex flex-col gap-3"
              >
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    variants={itemVariants}
                    className={cn(
                      'px-6 py-4 rounded-2xl text-lg font-medium transition-all',
                      active === link.name
                        ? 'bg-gradient-to-r from-primary-100/70 to-indigo-100/70 dark:from-primary-900/40 dark:to-indigo-900/40 text-primary-600 dark:text-primary-400 shadow-lg shadow-primary-500/20'
                        : 'hover:bg-slate-100/70 dark:hover:bg-slate-800/70 hover:translate-x-4 hover:shadow-md'
                    )}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}