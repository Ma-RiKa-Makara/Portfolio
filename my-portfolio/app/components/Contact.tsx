import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, User, ExternalLink } from 'lucide-react';

// --- Data ---
const contacts = [
  {
    icon: Mail,
    label: 'Email',
    value: 'chanthamakara.info@gmail.com',
    href: 'mailto:chanthamakara.info@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone / Telegram',
    value: '+855 965 383 113',
    href: 'https://t.me/M_akaara',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Phnom Penh, Cambodia',
    subValue: 'Berng Tumpon, Mean Chey',
  },
];

const references = [
  {
    name: 'Mr. Em Siem Hong',
    role: 'Software Engineer, PSE Institute',
    phone: '+855 983 457 88',
    email: 'siemhong.em@pse.ngo',
  },
  {
    name: 'Mr. Sovanden Sarim',
    role: 'Software Engineer, PSE',
    phone: '+855 862 800 18',
    email: 'sovanden.sarim@pse.ngo',
  },
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

// --- Sub-Components ---
const GlassCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.div
    variants={cardVariants}
    whileHover={{ y: -5, scale: 1.01 }}
    className={`
      backdrop-blur-md bg-white/70 dark:bg-slate-900/40
      border border-white/20 dark:border-slate-700/50
      shadow-xl shadow-slate-200/50 dark:shadow-none
      rounded-3xl p-6 transition-all duration-300 ${className}
    `}
  >
    {children}
  </motion.div>
);

export function Contact() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Soft Background Glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-400/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/10 blur-[120px] rounded-full" />
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Left Column: Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Let's <span className="text-blue-600 dark:text-blue-400">Connect.</span>
              </h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                I'm currently seeking internship opportunities. If you have a question or just want to say hi, my inbox is open!
              </p>
            </div>

            <div className="space-y-4">
              {contacts.map((contact, idx) => {
                const Icon = contact.icon;
                const isLink = !!contact.href;
                const Wrapper = isLink ? 'a' : 'div';

                return (
                  <GlassCard key={idx} className="group">
                    <Wrapper
                      href={contact.href}
                      target={isLink ? "_blank" : undefined}
                      className="flex items-center gap-5"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-600/10 dark:bg-blue-400/10 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                        <Icon size={22} />
                      </div>
                      <div className="flex-grow">
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-0.5">
                          {contact.label}
                        </p>
                        <p className="text-slate-900 dark:text-slate-100 font-medium">
                          {contact.value}
                        </p>
                        {contact.subValue && <p className="text-sm text-slate-500">{contact.subValue}</p>}
                      </div>
                      {isLink && <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-400" />}
                    </Wrapper>
                  </GlassCard>
                );
              })}
            </div>
          </div>

          {/* Right Column: References (7 cols) */}
          <div className="lg:col-span-7">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
              Professional References
              <div className="h-px flex-grow bg-slate-200 dark:bg-slate-800" />
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
              {references.map((ref, idx) => (
                <GlassCard key={idx} className="!p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg">
                        <User size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white">{ref.name}</h4>
                        <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold">{ref.role}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-100 dark:border-slate-800">
                    <a href={`tel:${ref.phone}`} className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">
                      <Phone size={16} />
                      <span className="text-sm font-medium">{ref.phone}</span>
                    </a>
                    <a href={`mailto:${ref.email}`} className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">
                      <Mail size={16} />
                      <span className="text-sm font-medium">{ref.email}</span>
                    </a>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}