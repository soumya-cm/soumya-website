import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaCertificate, FaCode } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

// Map icon string names to actual react-icons
const certIcons = {
  FaTrophy: FaTrophy,
  FaCertificate: FaCertificate,
  FaCode: FaCode
};

const Certifications = () => {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-24 bg-slate-50 dark:bg-darkBg relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-1/4 top-1/4 w-72 h-72 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="font-outfit text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white"
          >
            Certifications & Achievements
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-violet-600 to-indigo-500 dark:from-violet-400 dark:to-cyan-400 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Timeline container */}
        <div className="relative">
          
          {/* Central Vertical Line (visible on desktop) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-violet-600 via-indigo-500 to-cyan-400 dark:from-violet-500 dark:via-indigo-600 dark:to-cyan-500 rounded-full transform -translate-x-1/2 opacity-20 md:opacity-100" />

          {/* Timeline Cards */}
          <div className="space-y-12 md:space-y-16">
            {certifications.map((cert, index) => {
              const IconComponent = certIcons[cert.iconName] || FaCertificate;
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={cert.id}
                  className={`flex flex-col md:flex-row items-stretch md:justify-between relative ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Outer Spacing column for desktop grid balance */}
                  <div className="hidden md:block w-[45%]" />

                  {/* Bullet Node (Center Line) */}
                  <div className="absolute left-4 md:left-1/2 top-6 md:top-1/2 w-8 h-8 rounded-full bg-white dark:bg-darkCard border-4 border-violet-500 dark:border-cyan-400 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-violet-500 dark:text-cyan-400 shadow-md z-10">
                    <IconComponent size={12} />
                  </div>

                  {/* Card Container */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full md:w-[45%] ml-10 md:ml-0 p-6 md:p-8 rounded-3xl bg-white dark:bg-darkCard border border-slate-200/60 dark:border-slate-800/80 shadow-sm hover:shadow-md dark:hover:shadow-cyan-500/5 transition-all duration-300"
                  >
                    {/* Header Details */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <span className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-violet-50 dark:bg-cyan-950/20 text-violet-700 dark:text-cyan-400 mb-2">
                          {cert.issuer}
                        </span>
                        
                        <h3 className="font-outfit text-xl font-bold text-slate-800 dark:text-white leading-snug">
                          {cert.title}
                        </h3>
                      </div>
                      
                      {/* Course badge type icon */}
                      <div className="p-3 rounded-2xl bg-slate-50 dark:bg-darkBg text-slate-500 dark:text-slate-400 border border-slate-100 dark:border-slate-800 flex-shrink-0">
                        <IconComponent size={20} />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="font-sans text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                      {cert.description}
                    </p>

                    {/* Date / Label */}
                    <div className="font-outfit text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                      {cert.date}
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Certifications;
