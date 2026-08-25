import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaArrowDown } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const { personalDetails } = portfolioData;

  // Typing effect data
  const roles = [
    "AI & Data Science Student",
    "Problem Solver",
    "REVA University Scholar",
    "Tech Enthusiast"
  ];
  const [currentRoleIdx, setCurrentRoleIdx] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const activeRole = roles[currentRoleIdx];
    
    const handleTyping = () => {
      if (!isDeleting) {
        setCurrentText(activeRole.substring(0, currentText.length + 1));
        if (currentText === activeRole) {
          setIsDeleting(true);
          setTypingSpeed(2000); // Hold at full text
        } else {
          setTypingSpeed(80); // Typing speed
        }
      } else {
        setCurrentText(activeRole.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentRoleIdx((prev) => (prev + 1) % roles.length);
          setTypingSpeed(500); // Pause before typing next title
        } else {
          setTypingSpeed(45); // Deleting speed
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIdx]);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-darkBg pt-20"
    >
      {/* Background Decorative Glow Bubbles */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-violet-600/10 dark:bg-violet-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 dark:bg-cyan-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto px-6 text-center z-10">
        {/* Intro Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-200 bg-violet-50 text-violet-700 dark:border-slate-800 dark:bg-slate-900/80 dark:text-cyan-400 font-outfit text-sm font-semibold mb-6 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-violet-600 dark:bg-cyan-400 animate-ping" />
          Welcome to my portfolio
        </motion.div>

        {/* Hello Name */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="font-outfit text-5xl md:text-8xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4"
        >
          Hi, I am <br className="md:hidden" />
          <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent dark:from-violet-400 dark:via-indigo-400 dark:to-cyan-300">
            {personalDetails.fullName}
          </span>
        </motion.h1>

        {/* Animated Subtitle / Role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-outfit text-xl md:text-3xl font-medium text-slate-700 dark:text-slate-200 h-10 mb-6"
        >
          I'm an <span className="text-violet-600 dark:text-cyan-400 border-r-2 border-violet-600 dark:border-cyan-400 pr-1 animate-pulse">{currentText}</span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="font-sans text-base md:text-lg max-w-2xl mx-auto text-slate-600 dark:text-slate-400 mb-10 leading-relaxed"
        >
          {personalDetails.tagline}. {personalDetails.intro}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <button
            onClick={() => handleScrollTo('projects')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-outfit font-semibold shadow-lg hover:shadow-violet-500/25 dark:shadow-none hover:scale-105 transition-all duration-300"
          >
            View Projects
          </button>
          
          <button
            onClick={() => handleScrollTo('contact')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full border-2 border-slate-300 hover:border-slate-800 hover:bg-slate-100 dark:border-slate-700 dark:hover:border-white dark:hover:bg-slate-800/30 text-slate-800 dark:text-slate-200 font-outfit font-semibold hover:scale-105 transition-all duration-300"
          >
            Contact Me
          </button>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center gap-6"
        >
          {[
            { icon: <FaGithub size={22} />, url: personalDetails.github, label: "GitHub" },
            { icon: <FaLinkedin size={22} />, url: personalDetails.linkedin, label: "LinkedIn" },
            { icon: <FaEnvelope size={22} />, url: `mailto:${personalDetails.email}`, label: "Email" },
            { icon: <FaPhoneAlt size={20} />, url: `tel:${personalDetails.phone}`, label: "Phone" }
          ].map((social, index) => (
            <a
              key={index}
              href={social.url}
              target={social.url.startsWith('http') ? "_blank" : "_self"}
              rel="noopener noreferrer"
              aria-label={social.label}
              className="p-3.5 rounded-full bg-white hover:bg-slate-100 text-slate-600 hover:text-violet-600 dark:bg-slate-900 dark:hover:bg-slate-800/80 dark:text-slate-400 dark:hover:text-cyan-400 border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:-translate-y-1.5 shadow-sm"
            >
              {social.icon}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer hidden md:flex flex-col items-center gap-2 text-slate-400 dark:text-slate-600 hover:text-violet-600 dark:hover:text-cyan-400 transition-colors"
        onClick={() => handleScrollTo('about')}
      >
        <span className="font-outfit text-xs tracking-widest font-semibold uppercase">Scroll Down</span>
        <FaArrowDown size={14} />
      </motion.div>
    </section>
  );
};

export default Hero;
