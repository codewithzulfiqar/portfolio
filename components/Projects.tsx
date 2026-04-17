'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const projects = [
  { id: 1, title: 'MediCare Hub', category: 'Appointment', image: 'https://picsum.photos/seed/doctor/800/600', link: '#' },
  { id: 2, title: 'Nova Law Firm', category: 'Business', image: 'https://picsum.photos/seed/law/800/600', link: '#' },
  { id: 3, title: 'Aurora Studio', category: 'Portfolio', image: 'https://picsum.photos/seed/design/800/600', link: '#' },
  { id: 4, title: 'HealthSync', category: 'Appointment', image: 'https://picsum.photos/seed/health/800/600', link: '#' },
  { id: 5, title: 'Elite Estate', category: 'Business', image: 'https://picsum.photos/seed/building/800/600', link: '#' },
  { id: 6, title: 'DevSpace', category: 'Portfolio', image: 'https://picsum.photos/seed/tech/800/600', link: '#' },
];

const categories = ['All', 'Business', 'Appointment', 'Portfolio'];

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = projects.filter(project => filter === 'All' || project.category === filter);

  return (
    <section id="projects" className="py-24 md:py-40 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8"
        >
          <div>
            <h2 className="font-syne text-5xl md:text-7xl font-bold mb-4">
              Featured <span className="font-cormorant italic text-[var(--color-accent-teal)] font-medium">Work</span>
            </h2>
            <p className="text-gray-400 font-light max-w-xl text-lg">A selection of my recent frontend projects.</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-6 py-2 text-sm uppercase tracking-wider transition-all duration-300 border ${
                  filter === cat 
                  ? 'bg-[var(--color-accent-teal)] text-black border-[var(--color-accent-teal)]' 
                  : 'bg-transparent text-gray-400 border-white/20 hover:text-white hover:border-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group bento-card aspect-[4/3] !p-0"
              >
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end">
                  <span className="text-[var(--color-accent-teal)] text-xs font-bold tracking-widest uppercase mb-2 block transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 opacity-0 group-hover:opacity-100">
                    {project.category}
                  </span>
                  <div className="flex items-center justify-between">
                    <h3 className="font-syne text-2xl font-bold text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {project.title}
                    </h3>
                    <a href={project.link} className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[var(--color-accent-teal)]">
                      <ArrowUpRight size={24} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
