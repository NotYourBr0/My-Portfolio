import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const ParticleBackground = () => {
  const containerRef = useRef(null)

  // Generate random particles
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 100 + 50,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 20,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.1 + 0.05
  }))

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      style={{ background: 'transparent' }}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            background: `radial-gradient(circle, 
              rgba(59, 130, 246, ${particle.opacity}) 0%, 
              rgba(147, 51, 234, ${particle.opacity * 0.7}) 50%, 
              transparent 70%
            )`,
            filter: 'blur(1px)'
          }}
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -40, 40, 0],
            scale: [1, 1.2, 0.8, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay
          }}
        />
      ))}

      {/* Floating geometric shapes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`geo-${i}`}
          className="absolute opacity-10"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5
          }}
        >
          {i % 3 === 0 ? (
            <div className="w-6 h-6 border border-blue-400 rotate-45" />
          ) : i % 3 === 1 ? (
            <div className="w-8 h-8 rounded-full border border-purple-400" />
          ) : (
            <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 clip-triangle" />
          )}
        </motion.div>
      ))}

      {/* Gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
          filter: 'blur(40px)'
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 opacity-10"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.1) 0%, transparent 70%)',
          filter: 'blur(40px)'
        }}
      />
    </div>
  )
}

export default ParticleBackground
