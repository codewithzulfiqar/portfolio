'use client';

import { motion } from 'motion/react';
import { Code2, Monitor, MousePointerClick, Zap } from 'lucide-react';

const skills = [
  { name: 'HTML & CSS', icon: Code2 },
  { name: 'JavaScript', icon: Zap },
  { name: 'UI / UX Design', icon: MousePointerClick },
  { name: 'Responsive Web', icon: Monitor },
];

const techTags = ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Tailwind CSS', 'React.js', 'Next.js', 'Figma', 'Framer Motion'];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-40 relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <h2 className="font-syne text-4xl md:text-6xl font-bold mb-8">
              Hi, I&apos;m <span className="font-cormorant italic text-[var(--color-accent-teal)] font-medium">Zulfiqar Ali</span>
            </h2>
            <div className="space-y-6 text-gray-400 font-light text-lg leading-relaxed">
              <p>
                Based in Shikarpur, Pakistan, I specialize in crafting beautiful and highly responsive websites. My passion lies in blending exceptional UI/UX design with robust front-end development architecture.
              </p>
              <p>
                Whether it&apos;s a doctor&apos;s appointment system, a stunning business showcase, or a personal portfolio, I bring visions to life using modern technologies like HTML, CSS, JavaScript, and beyond. Every project is an opportunity to create digital harmony.
              </p>
            </div>
            
            <div className="mt-12">
              {techTags.map((tag, i) => (
                <span key={i} className="skill-tag">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bento-card flex flex-col items-start gap-6"
              >
                <div className="p-4 rounded-full bg-[var(--color-accent-teal)]/10 text-[var(--color-accent-teal)]">
                  <skill.icon size={32} />
                </div>
                <h3 className="font-syne text-xl font-bold text-white">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
