'use client';

import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Salman Ahmed',
    role: 'CEO, TechNova',
    content: 'Zulfiqar transformed our completely outdated business site into a modern masterpiece. The attention to detail and responsiveness is top-notch.',
  },
  {
    name: 'Dr. Fatima Tariq',
    role: 'Head of MediCare Clinic',
    content: 'The appointment booking system he built for our clinic is flawless. Patients love the new interface, and our workload has significantly reduced.',
  },
  {
    name: 'Usman Khalid',
    role: 'Real Estate Broker',
    content: 'A highly professional frontend developer. The property listings website is fast, easy to navigate, and the animations make it feel very premium.',
  },
  {
    name: 'Aisha Imran',
    role: 'Creative Director',
    content: 'As a designer myself, I rarely find developers who matched my Figma designs pixel-perfect. Zulfiqar delivered exactly what was promised.',
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-40 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 text-center"
        >
          <h2 className="font-syne text-5xl md:text-7xl font-bold mb-4">
            Client <span className="font-cormorant italic text-[var(--color-accent-teal)] font-medium">Stories</span>
          </h2>
          <p className="text-gray-400 font-light max-w-xl text-lg mx-auto">What people say about my work.</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="lg:w-[calc(50%-1rem)] w-full bento-card flex flex-col justify-center"
            >
              <Quote size={48} strokeWidth={1} className="text-[var(--color-accent-teal)]/20 absolute top-8 right-8" />
              <p className="text-gray-300 font-light text-[15px] italic leading-relaxed mb-6 relative z-10 flex-grow">&quot;{t.content}&quot;</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center font-syne font-bold text-sm text-[var(--color-accent-teal)]">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-syne font-bold text-[var(--color-accent-teal)] uppercase text-[11px] tracking-wider">{t.name}</h4>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
