import React, { useState } from 'react'
import { motion } from 'framer-motion'

const skills = [
  { name: 'HTML5', color: '#E34F26', category: 'Frontend' },
  { name: 'CSS3', color: '#1572B6', category: 'Frontend' },
  { name: 'JavaScript', color: '#F7DF1E', textColor: '#000', category: 'Frontend' },
  { name: 'React', color: '#61DAFB', category: 'Frontend' },
  { name: 'Vite', color: '#FFAC45', category: 'Tools' },
  { name: 'Tailwind', color: '#38BDF8', category: 'Frontend' },
  { name: 'Node.js', color: '#339933', category: 'Backend' },
  { name: 'Express', color: '#000000', category: 'Backend' },
  { name: 'MongoDB', color: '#47A248', category: 'Database' },
  { name: 'Git', color: '#F05032', category: 'Tools' },
  { name: 'Python', color: '#3776AB', category: 'Programming' },
  { name: 'Java', color: '#E76F00', category: 'Programming' },
  { name: 'C++', color: '#00599C', category: 'Programming' },
  { name: 'C', color: '#A8B9CC', category: 'Programming' },
  { name: 'Bootstrap', color: '#7952B3', category: 'Frontend' },
  { name: 'DSA', color: '#F06529', category: 'Programming' },
  { name: 'Gen AI', color: '#16D380', category: 'AI/ML' },
  { name: 'Prompt Eng', color: '#A78BFA', category: 'AI/ML' }
]

export default function Skills() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="skills" className="py-20 px-4">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-4xl font-bold gradient-text mb-12">
          Skills & Technologies
        </h2>
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-6
            gap-6
            justify-items-center
          "
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="relative flex flex-col items-center"
              onMouseEnter={() => setHovered(skill)}
              onMouseLeave={() => setHovered(null)}
              tabIndex={0}
              whileHover={{
                scale: 1.15,
                boxShadow: `0 0 16px ${skill.color}bb`,
                transition: { type: 'spring', stiffness: 220 },
                borderRadius:'100px'
              }}
              whileTap={{ scale: 1.07 }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center font-bold shadow-md transition-colors text-xs relative"
                style={{
                  backgroundColor: skill.color,
                  color: skill.textColor || '#fff'
                }}
              >
                {skill.name}
              </div>
              {/* Category tooltip appears below bubble */}
              {hovered === skill && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="
                    absolute left-1/2 -translate-x-1/2 mt-2 bg-slate-900 text-white text-[11px]
                    px-2 py-1 rounded shadow-lg pointer-events-none
                  "
                >
                  {skill.category}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
