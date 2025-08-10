import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Star } from 'lucide-react'
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ project, index }) => {
    const navigate = useNavigate();

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="glass rounded-xl p-6 h-full group cursor-pointer"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-purple-400 mb-2 group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-1 mb-3">
            {project.stack.split(', ').slice(0, 3).map((tech, i) => (
              <span
                key={i}
                className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full"
              >
                {tech}
              </span>
            ))}
            {project.stack.split(', ').length > 3 && (
              <span className="px-2 py-1 bg-slate-700 text-slate-400 text-xs rounded-full">
                +{project.stack.split(', ').length - 3} more
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2 ml-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-blue-400 hover:bg-blue-600 transition-colors"
           
          >
            <Github className="w-4 h-4 text-white" 
             onClick={()=> window.open(project.git, "_blank")}
            />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-blue-400 hover:bg-blue-600 transition-colors"
          >
            <ExternalLink className="w-4 h-4 text-white" 
             onClick={()=> window.open(project.Link, "_blank")}

             />
          </motion.button>
        </div>
      </div>

      {/* Description */}
      <p className="text-slate-400 text-sm mb-4 leading-relaxed">
        {project.description}
      </p>

      {/* Features */}
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Star className="w-4 h-4 text-yellow-400" />
          Key Features:
        </h4>
        <ul className="space-y-1">
          {project.features.slice(0, 3).map((feature, i) => (
            <li key={i} className="text-xs text-slate-400 flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
              {feature}
            </li>
          ))}
          {project.features.length > 3 && (
            <li className="text-xs text-slate-500">
              +{project.features.length - 3} more features...
            </li>
          )}
        </ul>
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.article>
  )
}

export default ProjectCard
