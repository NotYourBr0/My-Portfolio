import React from 'react'
import { motion } from 'framer-motion'
import { Award, Calendar, Building } from 'lucide-react'

const Certificates = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20
      }
    }
  }

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 25
      }
    }
  }

  return (
    <section id="certificates" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Award className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl font-bold gradient-text">Certificates</h2>
          </div>
          <p className="text-slate-400 text-lg">
            Professional certifications and achievements in my technical journey.
          </p>
        </motion.div>

        {/* Certificate Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ 
              y: -8,
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)",
              transition: { duration: 0.3 }
            }}
            className="glass rounded-xl p-8 relative overflow-hidden group"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />

            <div className="relative">
              {/* Certificate header */}
              <motion.div variants={textVariants} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-purple-400">
                    Internship Completion Certificate
                  </h3>
                  <div className="flex items-center gap-2 text-blue-400">
                    <Building className="w-4 h-4" />
                    <span className="font-medium">Vidhema Solutions</span>
                  </div>
                </div>
              </motion.div>

              {/* Certificate details */}
              <motion.div variants={textVariants} className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  <span className="text-slate-300">
                    <span className="font-medium">Position:</span> Software Developer Trainee
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full" />
                  <span className="text-slate-300 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    <span><span className="font-medium">Duration:</span> June 17, 2025 - August 1, 2025</span>
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span className="text-slate-300">
                    <span className="font-medium">Focus:</span> Full-stack development, Admin Panel & CMS
                  </span>
                </div>
              </motion.div>

              {/* Skills gained */}
              <motion.div variants={textVariants} className="mt-6 pt-6 border-t border-slate-700">
                <h4 className="text-sm font-medium text-slate-400 mb-3">Key Skills & Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Node.js', 'MongoDB', 'JWT Auth', 'Tailwind CSS', 'Express.js'].map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full border border-slate-600"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Achievement highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="glass rounded-xl p-6 max-w-xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold">Achievement Unlocked!</h3>
            </div>
            <p className="text-slate-400 text-sm">
              Successfully completed a comprehensive internship program, gaining hands-on experience 
              in full-stack development and contributing to real-world projects.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certificates
