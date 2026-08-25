import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const { personalDetails } = portfolioData;

  // Form states
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    
    // Simulate API/Formspree submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success banner after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-darkBg relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute left-0 top-1/2 w-80 h-80 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

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
            Get In Touch
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-violet-600 to-indigo-500 dark:from-violet-400 dark:to-cyan-400 mx-auto mt-4 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <h3 className="font-outfit text-2xl font-bold text-slate-800 dark:text-slate-100">
                Contact Details
              </h3>
              <p className="font-sans text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-sm">
                Feel free to drop a message or reach out directly. I'll get back to you as soon as possible!
              </p>

              {/* Direct Info List */}
              <div className="space-y-4">
                {/* Info Card: Phone */}
                <a 
                  href={`tel:${personalDetails.phone}`}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-darkCard border border-slate-200/60 dark:border-slate-800/80 shadow-sm hover:border-violet-400 dark:hover:border-slate-700 hover:shadow-md transition-all duration-300"
                >
                  <div className="p-3 rounded-xl bg-violet-100 dark:bg-violet-950/50 text-violet-600 dark:text-violet-400">
                    <FaPhoneAlt size={18} />
                  </div>
                  <div>
                    <h4 className="font-outfit font-semibold text-slate-800 dark:text-slate-200 text-sm">Call Me</h4>
                    <p className="font-sans text-slate-500 dark:text-slate-400 text-xs mt-0.5">{personalDetails.phone}</p>
                  </div>
                </a>

                {/* Info Card: Email */}
                <a 
                  href={`mailto:${personalDetails.email}`}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-darkCard border border-slate-200/60 dark:border-slate-800/80 shadow-sm hover:border-violet-400 dark:hover:border-slate-700 hover:shadow-md transition-all duration-300"
                >
                  <div className="p-3 rounded-xl bg-indigo-100 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400">
                    <FaEnvelope size={18} />
                  </div>
                  <div>
                    <h4 className="font-outfit font-semibold text-slate-800 dark:text-slate-200 text-sm">Email Me</h4>
                    <p className="font-sans text-slate-500 dark:text-slate-400 text-xs mt-0.5">{personalDetails.email}</p>
                  </div>
                </a>

                {/* Info Card: Location */}
                <div className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-darkCard border border-slate-200/60 dark:border-slate-800/80 shadow-sm">
                  <div className="p-3 rounded-xl bg-cyan-100 dark:bg-cyan-950/50 text-cyan-600 dark:text-cyan-400">
                    <FaMapMarkerAlt size={18} />
                  </div>
                  <div>
                    <h4 className="font-outfit font-semibold text-slate-800 dark:text-slate-200 text-sm">Location</h4>
                    <p className="font-sans text-slate-500 dark:text-slate-400 text-xs mt-0.5">Bangalore, Karnataka, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Grid */}
            <div className="space-y-4 pt-6 lg:pt-0">
              <h4 className="font-outfit text-sm font-semibold text-slate-400 uppercase tracking-widest">Connect with me online</h4>
              <div className="flex gap-4">
                <a 
                  href={personalDetails.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white dark:bg-darkCard text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-cyan-400 border border-slate-200/60 dark:border-slate-800/80 shadow-sm transition-all hover:-translate-y-1"
                >
                  <FaGithub size={20} />
                </a>
                <a 
                  href={personalDetails.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white dark:bg-darkCard text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-cyan-400 border border-slate-200/60 dark:border-slate-800/80 shadow-sm transition-all hover:-translate-y-1"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-8 rounded-3xl bg-white dark:bg-darkCard border border-slate-200/60 dark:border-slate-800/80 shadow-md">
              <h3 className="font-outfit text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1: Name */}
                <div className="flex flex-col">
                  <label htmlFor="name" className="font-outfit text-sm font-semibold text-slate-600 dark:text-slate-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your name"
                    className="px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-darkBg text-slate-850 dark:text-white focus:outline-none focus:border-violet-500 dark:focus:border-cyan-400 transition-colors text-sm font-sans"
                  />
                </div>

                {/* Row 2: Email */}
                <div className="flex flex-col">
                  <label htmlFor="email" className="font-outfit text-sm font-semibold text-slate-600 dark:text-slate-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email"
                    className="px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-darkBg text-slate-850 dark:text-white focus:outline-none focus:border-violet-500 dark:focus:border-cyan-400 transition-colors text-sm font-sans"
                  />
                </div>

                {/* Row 3: Message */}
                <div className="flex flex-col">
                  <label htmlFor="message" className="font-outfit text-sm font-semibold text-slate-600 dark:text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    placeholder="Type your message here..."
                    className="px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-darkBg text-slate-850 dark:text-white focus:outline-none focus:border-violet-500 dark:focus:border-cyan-400 transition-colors text-sm font-sans resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl font-outfit font-bold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer shadow-md"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane size={14} />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              {/* Submission banner */}
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="mt-6 p-4 rounded-xl border border-emerald-500/20 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-400 flex items-center gap-3 text-sm font-sans"
                  >
                    <FaCheckCircle size={18} className="flex-shrink-0" />
                    <span>Your message has been successfully received. Thank you!</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
