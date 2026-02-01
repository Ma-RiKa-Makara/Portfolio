import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../lip/utils'

interface SectionProps {
  id: string
  children: ReactNode
  className?: string
  title?: string
  subtitle?: string
}

export function Section({
  id,
  children,
  className,
  title,
  subtitle,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-16',
        className
      )}
    >
      {(title || subtitle) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 text-center"
        >
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight relative inline-block">
              {title}
              <motion.span
                layoutId="section-underline"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="absolute left-0 bottom-0 h-1.5 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500"
              />
            </h2>
          )}
          {subtitle && (
            <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 mx-auto rounded-full mt-2" />
          )}
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </section>
  )
}
