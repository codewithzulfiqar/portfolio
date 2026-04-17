'use client';

import { motion } from 'motion/react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

const projectTypes = ['Business Website', 'Portfolio', 'Doctor Appointment', 'Other'];

export default function Contact() {
  const [selectedType, setSelectedType] = useState('Business Website');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Message sent successfully! (This is a demo)');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-40 relative bg-[#050505] border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Info Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="font-syne text-5xl md:text-7xl font-bold mb-8">
              Let&apos;s craft <br />
              <span className="font-cormorant italic text-[var(--color-accent-teal)] font-medium glow-text">together.</span>
            </h2>
            <p className="text-gray-400 font-light text-lg mb-12">
              Ready to take your digital presence to the next level? Reach out to me, and let&apos;s build something exceptional.
            </p>
            
            <div className="space-y-8">
              <a href="mailto:Zulfali1010@gmail.com" className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full border border-white/10 bg-[#111111] flex items-center justify-center text-[var(--color-accent-teal)] group-hover:bg-[var(--color-accent-teal)] group-hover:text-black transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest mb-1">Email</p>
                  <p className="text-xl font-syne font-bold text-white">Zulfali1010@gmail.com</p>
                </div>
              </a>
              
              <a href="https://wa.me/923123477418" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full border border-white/10 bg-[#111111] flex items-center justify-center text-[var(--color-accent-teal)] group-hover:bg-[var(--color-accent-teal)] group-hover:text-black transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest mb-1">WhatsApp</p>
                  <p className="text-xl font-syne font-bold text-white">+92 312 347 7418</p>
                </div>
              </a>
              
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full border border-white/10 bg-[#111111] flex items-center justify-center text-[var(--color-accent-teal)]">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest mb-1">Location</p>
                  <p className="text-xl font-syne font-bold text-white">Shikarpur, Pakistan</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 bento-card"
          >
            <form onSubmit={handleSubmit} className="p-2 md:p-4">
              <h3 className="font-syne text-2xl font-bold text-white mb-8">Send a Message</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-3">Project Type</label>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map(type => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setSelectedType(type)}
                        className={`rounded-full px-4 py-2 text-sm transition-all duration-300 border ${
                          selectedType === type 
                          ? 'bg-[var(--color-accent-teal)] text-black border-[var(--color-accent-teal)]' 
                          : 'bg-transparent text-gray-400 border-white/10 hover:text-white hover:border-white/40'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Name</label>
                    <input required type="text" className="w-full bg-transparent border-b border-white/20 focus:border-[var(--color-accent-teal)] py-3 text-white outline-none transition-colors" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email</label>
                    <input required type="email" className="w-full bg-transparent border-b border-white/20 focus:border-[var(--color-accent-teal)] py-3 text-white outline-none transition-colors" placeholder="Your email" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Project Details</label>
                  <textarea required rows={4} className="w-full bg-transparent border-b border-white/20 focus:border-[var(--color-accent-teal)] py-3 text-white outline-none transition-colors resize-none" placeholder="Tell me about your vision..."></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-white text-black font-bold uppercase tracking-wider py-4 mt-4 transition-all hover:bg-[var(--color-accent-teal)] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
