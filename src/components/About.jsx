import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BookOpen, Award, Calendar } from 'lucide-react'

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold gradient-text mb-6"
          >
            About Me
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            A passionate and dedicated Computer Science student with a strong interest in programming and
            problem-solving. Embraces modern technologies and Generative AI tools to boost productivity,
            creativity, and efficiency. Motivated by innovation and explores real-world problem-solving
            through code, AI, and machine learning.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Personal Info Card */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="glass rounded-xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">Personal Journey</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-slate-300">🚀 Innovation-driven problem solver</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-slate-300">🤖 AI & ML enthusiast</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span className="text-slate-300">💻 Full-stack development passionate</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-slate-300">🎯 Always learning new technologies</span>
              </div>
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <div className="glass rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <BookOpen className="w-6 h-6 text-blue-400" />
                <h4 className="text-xl font-semibold">Current Education</h4>
              </div>
              <div className="pl-9">
                <h5 className="font-medium text-blue-400">Bachelor of Technology (B.Tech) - CSE</h5>
                <p className="text-slate-400">Arya College of Engineering, Jaipur</p>
                <div className="flex items-center gap-2 mt-1">
                  <Calendar className="w-4 h-4 text-slate-500" />
                  <span className="text-slate-500 text-sm">2025 - Present (3rd Year)</span>
                </div>
              </div>
            </div>

            <div className="glass rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Award className="w-6 h-6 text-purple-400" />
                <h4 className="text-xl font-semibold">Academic Background</h4>
              </div>
              <div className="pl-9 space-y-3">
                <div>
                  <h5 className="font-medium text-purple-400">Senior Secondary (12th)</h5>
                  <p className="text-slate-400">A.V.M. Aadarsh School, Jaipur</p>
                  <span className="text-slate-500 text-sm">73% (RBSE)</span>
                </div>
                <div>
                  <h5 className="font-medium text-pink-400">Secondary (10th)</h5>
                  <p className="text-slate-400">Affect Bibliophile Children Sr. Sec. School</p>
                  <span className="text-slate-500 text-sm">87.50% (RBSE)</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
