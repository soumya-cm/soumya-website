import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const { personalDetails } = portfolioData;

  const scrollToSection = (id) => {
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
    <footer className="bg-white dark:bg-darkCard border-t border-slate-200/60 dark:border-slate-800/80 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand/Logo */}
        <div className="flex flex-col items-center md:items-start">
          <div 
            onClick={() => scrollToSection('home')}
            className="cursor-pointer font-outfit text-xl font-bold tracking-wider text-slate-900 dark:text-white"
          >
            <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent dark:from-violet-400 dark:to-cyan-400">
              {personalDetails.name}
            </span>
            <span className="text-violet-600 dark:text-cyan-400">.</span>
          </div>
          <p className="font-sans text-slate-500 dark:text-slate-450 text-xs mt-1">
            B.Tech CSE (AI & Data Science) Student
          </p>
        </div>

        {/* Navigation Quick Links */}
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {[
            { label: 'Home', id: 'home' },
            { label: 'About', id: 'about' },
            { label: 'Skills', id: 'skills' },
            { label: 'Projects', id: 'projects' },
            { label: 'Certifications', id: 'certifications' },
            { label: 'Contact', id: 'contact' },
          ].map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="font-outfit text-sm font-medium text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-colors"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Link Quick Row */}
        <div className="flex gap-4">
          <a
            href={personalDetails.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-450 hover:text-slate-800 dark:text-slate-500 dark:hover:text-white transition-colors"
          >
            <FaGithub size={18} />
          </a>
          <a
            href={personalDetails.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-450 hover:text-slate-800 dark:text-slate-500 dark:hover:text-white transition-colors"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href={`mailto:${personalDetails.email}`}
            aria-label="Email"
            className="text-slate-450 hover:text-slate-800 dark:text-slate-500 dark:hover:text-white transition-colors"
          >
            <FaEnvelope size={18} />
          </a>
        </div>
      </div>

      {/* Dividers & Copyright */}
      <div className="max-w-7xl mx-auto px-6 mt-8 pt-8 border-t border-slate-100 dark:border-slate-800/40 text-center">
        <p className="font-sans text-xs text-slate-400 dark:text-slate-500">
          &copy; {new Date().getFullYear()} {personalDetails.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
