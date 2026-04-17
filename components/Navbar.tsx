'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Moon, Sun } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('light-mode');
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Process', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-[#050505]/80 py-4 backdrop-blur-md border-b border-white/5' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 md:px-12">
        <a href="#" className="font-syne text-xl font-bold tracking-wider text-white">
          ZULFIQAR<span className="text-[var(--color-accent-teal)]">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-widest text-[#aaaaaa] transition-colors hover:text-[var(--color-accent-teal)]"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={toggleTheme}
            className="text-gray-400 hover:text-[var(--color-accent-teal)] transition-colors"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a
            href="#contact"
            className="rounded-full border border-[var(--color-accent-teal)] px-6 py-2 text-sm uppercase tracking-widest text-[var(--color-accent-teal)] transition-all hover:bg-[var(--color-accent-teal)] hover:text-black"
          >
            Let&apos;s Talk
          </a>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleTheme}
            className="text-gray-400 hover:text-[var(--color-accent-teal)] transition-colors"
          >
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button
            className="text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute left-0 top-full w-full bg-[#050505]/95 backdrop-blur-md border-b border-white/10 md:hidden"
          >
            <div className="flex flex-col items-center justify-center gap-6 py-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg uppercase tracking-widest text-white hover:text-[var(--color-accent-teal)]"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 rounded-full border border-[var(--color-accent-teal)] px-8 py-3 text-lg uppercase tracking-widest text-[var(--color-accent-teal)]"
              >
                Let&apos;s Talk
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
