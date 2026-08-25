import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaHtml5, FaCss3Alt, FaGithub, FaLightbulb, FaUsers } from 'react-icons/fa';
import { SiC, SiMysql } from 'react-icons/si';
import { portfolioData } from '../data/portfolioData';

// Map icon string names to actual react-icons components
const skillIcons = {
  SiC: SiC,
  FaPython: FaPython,
  SiMysql: SiMysql,
  FaHtml5: FaHtml5,
  FaCss3Alt: FaCss3Alt,
  FaGithub: FaGithub,
  FaLightbulb: FaLightbulb,
  FaUsers: FaUsers
};

const Skills = () => {
  const { skills } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-darkBg relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="font-outfit text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white"
          >
            My Skills
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-violet-600 to-indigo-500 dark:from-violet-400 dark:to-cyan-400 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Skills Categories Grid */}
        <div className="space-y-12">
          {skills.map((categoryObj, idx) => (
            <motion.div 
              key={categoryObj.category}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-6"
            >
              {/* Category Heading */}
              <h3 className="font-outfit text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200 border-l-4 border-violet-600 dark:border-cyan-400 pl-4">
                {categoryObj.category}
              </h3>

              {/* Badges/Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {categoryObj.items.map((skill) => {
                  const IconComponent = skillIcons[skill.iconName] || FaLightbulb; // fallback
                  return (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -5,
                        transition: { duration: 0.2 }
                      }}
                      className="p-6 rounded-2xl bg-white dark:bg-darkCard border border-slate-200/60 dark:border-slate-800/80 shadow-sm hover:shadow-md dark:hover:shadow-cyan-500/5 dark:hover:border-slate-700/80 flex flex-col items-center justify-center text-center gap-3 transition-colors group cursor-default"
                    >
                      {/* Icon */}
                      <div className={`p-4 rounded-full bg-slate-50 dark:bg-darkBg/60 text-slate-700 dark:text-slate-300 group-hover:bg-violet-50 dark:group-hover:bg-cyan-950/20 group-hover:text-violet-600 dark:group-hover:text-cyan-400 transition-colors`}>
                        <IconComponent size={28} />
                      </div>
                      
                      {/* Skill Name */}
                      <span className="font-outfit font-semibold text-slate-800 dark:text-slate-200 text-sm">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
