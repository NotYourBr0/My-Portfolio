import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Code, Coffee } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-12 px-4 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold gradient-text">Kartik Swami</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Computer Science student passionate about creating innovative solutions 
              through modern web technologies and AI.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-slate-300">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {['About', 'Skills', 'Projects', 'Certificates', 'Contact'].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  whileHover={{ x: 5, color: '#3b82f6' }}
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-slate-300">Built With</h4>
            <div className="flex flex-wrap gap-2 text-xs">
              {['React', 'Vite', 'Tailwind CSS', 'Framer Motion'].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-slate-800 text-slate-400 rounded border border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-slate-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <span>© {currentYear} Kartik Swami. Made with</span>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <Heart className="w-4 h-4 text-red-400" fill="currentColor" />
              </motion.div>
              <span>and</span>
              <Coffee className="w-4 h-4 text-amber-400" />
            </div>

            <div className="flex items-center gap-4 text-slate-400 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>Available for opportunities</span>
              </div>
            </div>
          </div>

          {/* Fun stats */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-6 pt-6 border-t border-slate-800"
          >
            <div className="flex justify-center items-center gap-8 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <Code className="w-3 h-3" />
                <span>Lines of code: ∞</span>
              </div>
              <div className="flex items-center gap-2">
                <Coffee className="w-3 h-3" />
                <span>Coffee consumed: 247 cups</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-3 h-3" />
                <span>Projects loved: All of them</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
