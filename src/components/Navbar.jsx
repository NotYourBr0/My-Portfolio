// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    addEventListener('scroll', onScroll);
    return () => removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Home', 'About', 'Skills', 'Projects', 'Certificates', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`fixed inset-x-0 z-50 ${scrolled && 'glass shadow-lg'}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="#home" className="gradient-text text-xl font-bold">Kartik Swami</a>

        {/* desktop */}
        <div className="hidden gap-6 md:flex">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-black hover:text-blue-400">
              {l}
            </a>
          ))}
        </div>

        {/* icons */}
        <div className="hidden items-center gap-4 md:flex">
          <a href="https://github.com/NotYourBr0" target="_blank"><Github size={18}/></a>
          <a href="https://linkedin.com/in/kartik--swami" target="_blank"><Linkedin size={18}/></a>
        </div>

        {/* mobile burger */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X/> : <Menu/>}
        </button>
      </div>

      {/* mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="glass px-4 pb-4 md:hidden"
          >
            {links.map(l => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block py-2 text-slate-300 hover:text-blue-400"
              >
                {l}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
