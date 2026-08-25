import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaPaintBrush, FaHeartbeat } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  const { projects } = portfolioData;

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Helper to render high-end custom visual placeholders for each project ID
  const renderProjectVisual = (id) => {
    if (id === 'graphics-editor') {
      return (
        <div className="relative w-full h-48 bg-gradient-to-br from-indigo-900 to-slate-900 overflow-hidden flex items-center justify-center">
          {/* Decorative Grid Lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:14px_24px]" />
          
          {/* Animated 2D Shapes */}
          <motion.div 
            animate={{ 
              rotate: 360,
              borderRadius: ["20% 20% 50% 50%", "50% 50% 20% 20%", "20% 50% 50% 20%", "20% 20% 50% 50%"]
            }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            className="absolute w-24 h-24 border border-violet-500/30 bg-violet-500/10 flex items-center justify-center"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: -360
            }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
            className="absolute w-16 h-16 border-2 border-cyan-400/40 rounded-full flex items-center justify-center"
          />
          <motion.div 
            animate={{ 
              y: [-10, 10, -10]
            }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-[28px] border-b-pink-500/40"
          />
          
          <div className="relative flex flex-col items-center gap-2 text-white">
            <FaPaintBrush size={28} className="text-violet-400 drop-shadow-[0_0_8px_rgba(167,139,250,0.5)]" />
            <span className="font-outfit text-xs font-semibold uppercase tracking-wider text-slate-300">2D Vector Canvas</span>
          </div>
        </div>
      );
    }

    if (id === 'smartwatch-prediction') {
      return (
        <div className="relative w-full h-48 bg-gradient-to-br from-cyan-950 to-slate-900 overflow-hidden flex items-center justify-center">
          {/* Decorative Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px]" />
          
          {/* Pulse ECG wave animation */}
          <svg className="absolute w-full h-24 text-cyan-400/20" viewBox="0 0 100 30" preserveAspectRatio="none">
            <path d="M0,15 L30,15 L35,5 L40,25 L45,15 L70,15 L75,2 L80,28 L85,15 L100,15" fill="none" stroke="currentColor" strokeWidth="1" />
          </svg>
          <svg className="absolute w-full h-24 text-cyan-400/60" viewBox="0 0 100 30" preserveAspectRatio="none">
            <motion.path 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              d="M0,15 L30,15 L35,5 L40,25 L45,15 L70,15 L75,2 L80,28 L85,15 L100,15" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
            />
          </svg>

          {/* Heart icon pulse */}
          <motion.div 
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
            className="relative flex flex-col items-center gap-2 text-white"
          >
            <FaHeartbeat size={32} className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]" />
            <span className="font-outfit text-xs font-semibold uppercase tracking-wider text-slate-300">Biometrics Telemetry</span>
          </motion.div>
        </div>
      );
    }

    return (
      <div className="w-full h-48 bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
        <span className="text-slate-400">Project Mockup</span>
      </div>
    );
  };

  return (
    <section id="projects" className="py-24 bg-white dark:bg-darkBg relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute right-0 bottom-1/4 w-80 h-80 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

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
            My Projects
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-violet-600 to-indigo-500 dark:from-violet-400 dark:to-cyan-400 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Projects Grid (2 Cols on desktop, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -8 }}
              className="group flex flex-col rounded-3xl bg-slate-50 dark:bg-darkCard border border-slate-200/60 dark:border-slate-800/80 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl dark:hover:shadow-violet-600/5 hover:border-slate-300 dark:hover:border-slate-700"
            >
              {/* Visual Panel Header */}
              {renderProjectVisual(project.id)}

              {/* Card Body */}
              <div className="p-8 flex flex-col flex-grow justify-between">
                <div className="space-y-4">
                  {/* Title */}
                  <h3 className="font-outfit text-2xl font-bold text-slate-800 dark:text-white group-hover:text-violet-600 dark:group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 rounded-full text-xs font-semibold font-outfit bg-slate-200/60 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 pt-8">
                  <a
                    href={project.githubLink}
                    className="flex items-center gap-2 font-outfit text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    <FaGithub size={16} /> Code
                  </a>
                  
                  <a
                    href={project.demoLink}
                    className="flex items-center gap-2 font-outfit text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    <FaExternalLinkAlt size={14} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
