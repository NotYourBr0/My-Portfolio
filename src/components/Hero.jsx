import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Download } from 'lucide-react'

const Hero = () => {
  const [text, setText] = useState('')
  const fullText = "Computer Science Student & Full Stack Developer"

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 sm:pt-32 lg:pt-36"
      // pt-28 (~7rem), adjust as per your navbar
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="relative mx-auto mb-8 w-40 h-40 sm:w-48 sm:h-48"
        >
          <div className="floating-animation w-full h-full rounded-full bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 p-1 shadow-2xl">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
              <img
                src="/portfol.jpg"
                alt="Kartik Swami's profile picture"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          {/* Decorative rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-dashed border-blue-400/30"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-2 rounded-full border border-purple-400/20"
          />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6"
        >
          <span className="gradient-text">Hi, I'm</span>
          <br />
          <span className="gradient-text">Kartik Swami</span>
        </motion.h1>

        {/* Typing effect subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-xl sm:text-2xl lg:text-3xl text-slate-300 mb-4 h-12 flex items-center justify-center"
        >
          <span className="typing-cursor">{text}</span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Passionate about creating innovative solutions through code, AI, and modern web technologies.
          Currently seeking opportunities as a Frontend, Backend, or MERN Stack Developer.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 shadow-lg"
          >
            Let's Connect
          </motion.a>

          <motion.a
            href="/Kartik_Swami_Resume.pdf"
            download="Kartik_Swami_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass text-slate-300 hover:text-purple-400 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="cursor-pointer"
            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
          >
            <ChevronDown className="w-8 h-8 text-slate-400 hover:text-blue-400 transition-colors" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
