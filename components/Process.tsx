'use client';

import { motion } from 'motion/react';

const steps = [
  { id: '01', title: 'Discovery', desc: 'Understanding your goals, target audience, and project requirements to set a clear direction.' },
  { id: '02', title: 'Design', desc: 'Crafting wireframes and high-fidelity UI/UX mockups that align with your brand identity.' },
  { id: '03', title: 'Development', desc: 'Writing clean, performant, and responsive code using HTML, CSS, JavaScript, and modern frameworks.' },
  { id: '04', title: 'Delivery', desc: 'Testing across devices, optimizing for speed, and launching the polished product.' },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-40 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 text-center"
        >
          <h2 className="font-syne text-5xl md:text-7xl font-bold mb-4">
            The <span className="font-cormorant italic text-[var(--color-accent-teal)] font-medium">Process</span>
          </h2>
          <p className="text-gray-400 font-light max-w-xl text-lg mx-auto">A seamless workflow from an idea to a highly optimized digital reality.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bento-card relative z-10 flex flex-col p-8"
            >
              <div className="text-[var(--color-accent-teal)] font-syne text-5xl font-bold mb-6 opacity-30 mt-auto">
                {step.id}
              </div>
              <h3 className="font-syne text-2xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-gray-400 font-light text-[15px]">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
