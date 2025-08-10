import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle, Send } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <MessageCircle className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl font-bold gradient-text">Get In Touch</h2>
          </div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            I’m currently seeking opportunities as a Frontend, Backend, or MERN Stack Developer. 
            Let’s connect and discuss how we can work together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } }
            }}
            className="space-y-8"
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Let's Connect</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                I’m always open to new opportunities and interesting projects. Feel free to reach out!
              </p>
            </motion.div>

            <div className="space-y-4">
              <motion.a
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                href="mailto:ks806425@gmail.com"
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-center gap-4 glass rounded-lg p-4 transition-all"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-200">Email</h4>
                  <p className="text-slate-400 text-sm">ks806425@gmail.com</p>
                </div>
              </motion.a>

              <motion.div
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                className="flex items-center gap-4 glass rounded-lg p-4"
              >
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-200">Phone</h4>
                  <p className="text-slate-400 text-sm">+91-6378019172</p>
                </div>
              </motion.div>

              <motion.div
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                className="flex items-center gap-4 glass rounded-lg p-4"
              >
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-200">Location</h4>
                  <p className="text-slate-400 text-sm">Jaipur, Rajasthan, India</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="pt-6"
            >
              <h4 className="font-medium text-slate-300 mb-4">Follow me on</h4>
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/NotYourBr0"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-12 h-12 bg-slate-800 hover:bg-gray-700 rounded-lg flex items-center justify-center"
                >
                  <Github className="w-6 h-6 text-slate-300" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/kartik--swami"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Formspree-powered Contact Form */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass rounded-xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>

            <form
              action="https://formspree.io/f/myzpbqla"  
              method="POST"
              className="space-y-6"
            >
              {/* Optional: custom email subject */}
              <input
                type="hidden"
                name="_subject"
                value="New contact form submission!"
              />

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Your Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-400"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email Address
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-400"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-400 resize-none"
                  placeholder="Tell me about your project or just say hi!"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg font-semibold flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
