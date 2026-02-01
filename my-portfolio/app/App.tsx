'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * REFINED STARFIELD
 * Uses useMemo to prevent star positions from jumping on re-renders.
 * Subtle flickering and various sizes create a sense of deep space.
 */
const StarField = React.memo(() => {
  const stars = useMemo(() =>
    Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      size: Math.random() * 1.5 + 0.5,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 3 + Math.random() * 7,
      delay: Math.random() * 5,
    })), []);

  return (
    <div className="fixed inset-0 -z-30 pointer-events-none overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            width: star.size,
            height: star.size,
            left: star.left,
            top: star.top,
          }}
          animate={{
            opacity: [0.05, 0.4, 0.05],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
});

StarField.displayName = 'StarField';

/**
 * INTERACTIVE AMBIENT GLOWS
 * These blobs move slowly to create an "organic" feel.
 */
const AmbientGlows = () => (
  <div className="fixed inset-0 -z-20 pointer-events-none overflow-hidden overflow-y-hidden">
    {/* Top Left Blob */}
    <motion.div
      animate={{
        x: [0, 30, 0],
        y: [0, 50, 0],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute -top-[10%] -left-[10%] w-[40vw] h-[40vw] bg-primary-600/10 dark:bg-primary-500/10 rounded-full blur-[120px]"
    />
    {/* Bottom Right Blob */}
    <motion.div
      animate={{
        x: [0, -40, 0],
        y: [0, -60, 0],
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="absolute -bottom-[10%] -right-[10%] w-[50vw] h-[50vw] bg-indigo-600/10 dark:bg-indigo-500/10 rounded-full blur-[140px]"
    />
    {/* Center Subtle Mesh */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(11,15,26,0.2)_100%)] dark:block hidden" />
  </div>
);

export function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const isDark =
      localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
    if (isDark) document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="relative min-h-screen bg-white dark:bg-[#0b0f1a] transition-colors duration-700 selection:bg-primary-500/30">

      {/* --- GLOBAL BACKGROUND SYSTEM --- */}
      <AmbientGlows />
      <AnimatePresence>
        {darkMode && <StarField />}
      </AnimatePresence>

      {/* Subtle Noise Texture for a "Paper/Cinematic" feel */}
      <div className="fixed inset-0 -z-10 pointer-events-none opacity-[0.015] dark:opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <Navbar />

      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </div>

      <Footer />

      {/* Scroll-to-top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-4 rounded-2xl bg-white dark:bg-primary-600 text-slate-900 dark:text-white shadow-2xl z-50 border border-slate-200 dark:border-white/10 backdrop-blur-xl"
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
}