'use client';

import { Github, Linkedin, MessageCircle, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#030303] py-12">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <a href="#" className="font-syne text-2xl font-bold tracking-wider text-white">
            ZULFIQAR<span className="text-[var(--color-accent-teal)]">.</span>
          </a>
        </div>
        
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Zulfiqar Ali. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[var(--color-accent-teal)] hover:border-[var(--color-accent-teal)] transition-all">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[var(--color-accent-teal)] hover:border-[var(--color-accent-teal)] transition-all">
            <Linkedin size={18} />
          </a>
          <a href="https://fiverr.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[var(--color-accent-teal)] hover:border-[var(--color-accent-teal)] transition-all">
            <ExternalLink size={18} />
          </a>
          <a href="https://wa.me/923123477418" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[var(--color-accent-teal)] hover:border-[var(--color-accent-teal)] transition-all">
            <MessageCircle size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
