import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const CareerGoal = () => {
  const { careerGoal } = portfolioData;

  return (
    <section id="career-goal" className="py-20 bg-white dark:bg-darkBg relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative p-8 md:p-14 rounded-3xl bg-slate-50 dark:bg-darkCard border border-slate-200/60 dark:border-slate-800/80 shadow-md text-center overflow-hidden"
        >
          {/* Top Left Quote Icon Decor */}
          <div className="absolute top-4 left-6 text-slate-200 dark:text-slate-800/50 opacity-50">
            <FaQuoteLeft size={80} />
          </div>

          {/* Title */}
          <h3 className="font-outfit text-xs font-bold uppercase tracking-widest text-violet-600 dark:text-cyan-400 mb-6">
            Career Goal & Vision
          </h3>

          {/* Quote Text */}
          <p className="font-outfit text-lg md:text-2xl font-semibold text-slate-700 dark:text-slate-200 leading-relaxed max-w-2xl mx-auto mb-6 relative z-10">
            "{careerGoal.quote}"
          </p>

          {/* Bottom Right Quote Icon Decor */}
          <div className="absolute bottom-4 right-6 text-slate-200 dark:text-slate-800/50 opacity-50">
            <FaQuoteRight size={80} />
          </div>

          {/* Bottom Accent line */}
          <div className="w-16 h-1.5 bg-gradient-to-r from-violet-600 to-indigo-500 dark:from-violet-400 dark:to-cyan-400 mx-auto rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default CareerGoal;
