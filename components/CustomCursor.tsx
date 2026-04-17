'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (['A', 'BUTTON', 'INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName) || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[100] h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-accent-teal)] mix-blend-difference"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isHovering ? 2 : 1,
        }}
        transition={{ type: 'spring', mass: 0.1, stiffness: 800, damping: 50 }}
      />
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[99] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--color-accent-teal)] opacity-50 mix-blend-difference"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: 'spring', mass: 0.2, stiffness: 200, damping: 25 }}
      />
    </>
  );
}
