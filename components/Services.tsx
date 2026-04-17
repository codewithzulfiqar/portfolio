'use client';

import { motion } from 'motion/react';
import { Briefcase, Building2, Stethoscope } from 'lucide-react';

const services = [
  {
    title: 'Business Website',
    description: 'Establish a strong digital presence with a premium, high-converting corporate website.',
    icon: Building2,
    features: ['Custom Design', 'SEO Optimized', 'CMS Integration']
  },
  {
    title: 'Doctor Appointment',
    description: 'Streamlined scheduling systems designed for healthcare professionals and clinics.',
    icon: Stethoscope,
    features: ['Patient Booking', 'Doctor Profiles', 'Responsive Interface']
  },
  {
    title: 'Personal Portfolio',
    description: 'Showcase your skills, projects, and career with an elegant, modern portfolio.',
    icon: Briefcase,
    features: ['Sleek Animations', 'Project Gallery', 'Contact Integration']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-40 relative bg-[#0a0a0a]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="font-syne text-5xl md:text-7xl font-bold mb-4">
            Specialized <span className="font-cormorant italic text-[var(--color-accent-teal)] font-medium glow-text">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Delivering end-to-end frontend solutions designed to elevate your brand and engage your users.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group bento-card bento-card-accent"
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[var(--color-accent-teal)] opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500 rounded-full"/>
              
              <div className="mb-8 p-4 rounded-full bg-white/5 text-[var(--color-accent-teal)] inline-block border border-white/10 group-hover:bg-[var(--color-accent-teal)] group-hover:text-black transition-colors duration-300">
                <service.icon size={40} />
              </div>
              <h3 className="font-syne text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-8 font-light leading-relaxed">{service.description}</p>
              
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm font-medium text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-teal)] mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
