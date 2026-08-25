import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaTrophy } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { aboutMe } = portfolioData;

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-24 bg-white dark:bg-darkBg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/3 w-64 h-64 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="font-outfit text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white"
          >
            About Me
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-violet-600 to-indigo-500 dark:from-violet-400 dark:to-cyan-400 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Avatar Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative">
              {/* Glowing Outer Rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-600 to-cyan-400 blur-md opacity-30 animate-pulse" />
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-violet-600 via-indigo-500 to-cyan-400 opacity-70 animate-spin-slow" />
              
              {/* Avatar Frame */}
              <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden bg-slate-100 dark:bg-darkCard border-4 border-white dark:border-darkBg flex items-center justify-center shadow-2xl">
                {/* Custom Vector SVG representing student developer */}
                <svg className="w-40 h-40 text-slate-400 dark:text-slate-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14c2.67 0 8 1.34 8 4v2H4v-2c0-2.66 5.33-4 8-4zm0-9a3.5 3.5 0 110 7 3.5 3.5 0 010-7z" />
                </svg>
                
                {/* Floating Initials Badge */}
                <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white font-outfit font-bold text-lg shadow-lg border-2 border-white dark:border-darkCard">
                  S
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio Details Column */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-4"
            >
              <h3 className="font-outfit text-2xl font-bold text-slate-800 dark:text-slate-200">
                Hi, I'm Soumya! 👋
              </h3>
              
              {aboutMe.paragraphs.map((para, index) => (
                <p key={index} className="text-slate-600 dark:text-slate-400 leading-relaxed font-sans text-base">
                  {para}
                </p>
              ))}
            </motion.div>

            {/* Quick Education & Hackathon Grid */}
            <motion.div 
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.15 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4"
            >
              {/* Card 1: Education */}
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-darkCard border border-slate-200/60 dark:border-slate-800/80 shadow-sm flex items-start gap-4">
                <div className="p-3 rounded-xl bg-violet-100 dark:bg-violet-950/50 text-violet-600 dark:text-violet-400 mt-1">
                  <FaGraduationCap size={20} />
                </div>
                <div>
                  <h4 className="font-outfit font-semibold text-slate-800 dark:text-slate-200 text-sm uppercase tracking-wider mb-1">
                    Education
                  </h4>
                  <p className="font-sans font-medium text-slate-700 dark:text-slate-300 text-sm">
                    REVA University
                  </p>
                  <p className="font-sans text-slate-500 dark:text-slate-400 text-xs">
                    B.Tech CSE (AI & Data Science)
                  </p>
                </div>
              </div>

              {/* Card 2: Hackathon Experience */}
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-darkCard border border-slate-200/60 dark:border-slate-800/80 shadow-sm flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan-100 dark:bg-cyan-950/50 text-cyan-600 dark:text-cyan-400 mt-1">
                  <FaTrophy size={18} />
                </div>
                <div>
                  <h4 className="font-outfit font-semibold text-slate-800 dark:text-slate-200 text-sm uppercase tracking-wider mb-1">
                    Hackathons
                  </h4>
                  <p className="font-sans font-medium text-slate-700 dark:text-slate-300 text-sm">
                    Hyperthon Participant
                  </p>
                  <p className="font-sans text-slate-500 dark:text-slate-400 text-xs">
                    Organized by DevSpirit
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
