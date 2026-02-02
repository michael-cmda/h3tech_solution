'use client';

import { useState, useMemo, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { developers, categories } from '@/lib/developers';
import { DeveloperCard } from './developer-card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function DevelopersSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredDevelopers = useMemo(() => {
    if (selectedCategory === 'All') return developers;
    return developers.filter((dev) => dev.category === selectedCategory);
  }, [selectedCategory]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % filteredDevelopers.length);
  }, [filteredDevelopers.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + filteredDevelopers.length) % filteredDevelopers.length);
  }, [filteredDevelopers.length]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory]);

  const getCardStyles = (index: number) => {
    const total = filteredDevelopers.length;
    let diff = index - currentIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    const isActive = diff === 0;
    return {
      isActive,
      zIndex: isActive ? 30 : 20 - Math.abs(diff),
      scale: isActive ? 1.1 : 0.8,
      x: diff * 350, // Slightly wider spacing
      opacity: Math.abs(diff) > 2 ? 0 : 1 - Math.abs(diff) * 0.4,
      rotateY: diff * -15,
    };
  };

  return (
    <section id="developers" className="relative bg-black py-24 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4">
        
        {/* Category Filter Buttons */}
        <div className="mb-20 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-8 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-300 border-2 ${
                selectedCategory === category
                  ? 'bg-cyan-500 border-cyan-400 text-black shadow-[0_0_20px_rgba(6,182,212,0.6)]'
                  : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-cyan-500/50 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Carousel Area */}
        <div className="relative flex h-[600px] items-center justify-center">
          
          {/* HIGH VISIBILITY LARGE BUTTONS */}
          <div className="absolute inset-x-0 z-[60] flex justify-between px-2 md:px-8">
            <button
              onClick={handlePrev}
              className="group flex h-20 w-20 items-center justify-center rounded-full bg-zinc-900/80 border-2 border-cyan-500/50 text-cyan-400 backdrop-blur-xl transition-all hover:scale-110 hover:bg-cyan-500 hover:text-black hover:border-cyan-300 active:scale-90 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
              aria-label="Previous Developer"
            >
              <ChevronLeft className="h-10 w-10 transition-transform group-hover:-translate-x-1" />
            </button>

            <button
              onClick={handleNext}
              className="group flex h-20 w-20 items-center justify-center rounded-full bg-zinc-900/80 border-2 border-cyan-500/50 text-cyan-400 backdrop-blur-xl transition-all hover:scale-110 hover:bg-cyan-500 hover:text-black hover:border-cyan-300 active:scale-90 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
              aria-label="Next Developer"
            >
              <ChevronRight className="h-10 w-10 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Cards Container */}
          <div className="relative h-full w-full max-w-md pointer-events-none">
            <AnimatePresence mode="popLayout">
              {filteredDevelopers.map((developer, index) => {
                const styles = getCardStyles(index);
                return (
                  <motion.div
                    key={`${developer.name}-${selectedCategory}`}
                    animate={{
                      x: styles.x,
                      scale: styles.scale,
                      zIndex: styles.zIndex,
                      opacity: styles.opacity,
                      rotateY: styles.rotateY,
                    }}
                    transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                    className="absolute inset-0 pointer-events-auto"
                    onClick={() => styles.isActive ? null : setCurrentIndex(index)}
                  >
                    <div className={`h-full rounded-2xl transition-all duration-700 ${
                      styles.isActive 
                        ? 'shadow-[0_0_50px_rgba(6,182,212,0.4)] ring-2 ring-cyan-500/50' 
                        : 'grayscale-[80%] brightness-50'
                    }`}>
                      <DeveloperCard {...developer} index={index} />
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Pagination (Larger Dots) */}
        <div className="mt-12 flex justify-center gap-3">
          {filteredDevelopers.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setCurrentIndex(i)}
              className={`h-3 transition-all duration-500 rounded-full ${
                i === currentIndex ? 'w-12 bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]' : 'w-3 bg-zinc-800 hover:bg-zinc-600'
              }`} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}