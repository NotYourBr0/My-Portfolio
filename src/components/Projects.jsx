import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { Code, Briefcase } from 'lucide-react'

const projects = [
  {
    title: "Admin Panel & Dashboard CMS (Full-Stack Web App)",
    stack: "React, Vite, Tailwind CSS, Node.js, Express.js, MongoDB Atlas, JWT, Cloudinary, Render, Netlify/Vercel",
    description: "I developed a full-stack Admin Panel and Public Dashboard CMS during my internship, handling everything from architecture to deployment. The admin panel allows authenticated users to add, edit, and delete blogs, interviews, and services. The public dashboard displays this content dynamically with a modern UI.",
    features: [
      "Fully functional admin dashboard",
      "Live content updates with MongoDB Atlas",
      "Review notification system with admin read-tracking",
      "Auth system with JWT tokens",
      "Cloudinary image uploads",
      "Clean, responsive UI using Tailwind CSS"
    ],
    Link:"https://my-dashboard-jade-nu.vercel.app/",
    git:"https://github.com/NotYourBr0/my-dashboard"
  },
  {
    title: "My First Hosted Portfolio Website",
    stack: "HTML, CSS, GitHub Pages, JS",
    description: "Developed and hosted my first ever personal portfolio website on GitHub using HTML, CSS etc.",
    features: [
      "Showcases skills and projects",
      "Hosted on GitHub Pages",
      "Utilizes AI tools for efficiency"
    ],
    Link:"https://notyourbr0.github.io/portfolio/",
    git:"https://github.com/NotYourBr0/portfolio"
  },
  {
    title: "Flappy Bird Game",
    stack: "React, Vite, Tailwind CSS, Netlify/Vercel",
    description: "Created classic games like Flappy Bird.",
    features: [
      "Classic game mechanics",
      "Score management",
      "Responsive",
      "Interactive user experience"
    ],
    Link:"https://flappy-bird-rust-xi.vercel.app/",
    git:"https://github.com/NotYourBr0/Flappy-Bird"
  },
  {
  title: "Gemini 2.0 AI Chat Application",
  stack: "React • Tailwind • Gemini API • Framer Motion",
  description: "Modern AI chatbot with Google Gemini 2.0 integration, featuring real-time conversations, beautiful animations, and responsive design. Built with React and production-ready architecture.",
  features: [
    "Google Gemini 2.0 Flash integration",
    "Real-time chat with typing indicators",
    "Smooth animations and transitions",
    "Multi-model support and conversation export",
    "Responsive mobile-first design",
    "Professional error handling and UX"
  ],
  Link:"https://ai-chatbot-omega-sage.vercel.app/",
  git:"https://github.com/NotYourBr0/AI-Chatbot"
}

]

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <Briefcase className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl font-bold gradient-text">Projects</h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            A showcase of my technical projects, ranging from full-stack web applications to AI-driven solutions.
            Each project reflects my journey in mastering different technologies and solving real-world problems.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              index={index} 
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="glass rounded-xl p-8 max-w-2xl mx-auto">
            <Code className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Want to see more?</h3>
            <p className="text-slate-400 mb-6">
              Check out my GitHub for more projects and contributions to open source.
            </p>
            <motion.a
              href="https://github.com/NotYourBr0"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
            >
              <Code className="w-5 h-5" />
              View GitHub Profile
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
