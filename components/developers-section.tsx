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

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

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
      scale: isActive ? 1.05 : 0.8,
      x: diff * 340,
      opacity: Math.abs(diff) > 2 ? 0 : 1 - Math.abs(diff) * 0.3,
      rotateY: diff * -12,
    };
  };

  return (
    <section id="developers" className="relative bg-background py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        
        {/* Category Filter Buttons */}
        <div className="mb-16 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                selectedCategory === category
                  ? 'bg-cyan-500 border-cyan-400 text-black shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                  : 'bg-transparent border-white/10 text-muted-foreground hover:border-cyan-500/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Carousel Area */}
        <div className="relative flex h-[550px] items-center justify-center">
          
          {/* Main Navigation Buttons (The "Correct" Floating Style) */}
          <div className="absolute inset-x-0 top-1/2 z-50 flex -translate-y-1/2 justify-between px-4 md:px-10">
            <Button
              onClick={handlePrev}
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full border-cyan-500/20 bg-background/20 backdrop-blur-md hover:bg-cyan-500/20 hover:border-cyan-400 text-cyan-400 transition-all active:scale-95"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              onClick={handleNext}
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full border-cyan-500/20 bg-background/20 backdrop-blur-md hover:bg-cyan-500/20 hover:border-cyan-400 text-cyan-400 transition-all active:scale-95"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Cards Container */}
          <div className="relative h-full w-full max-w-sm">
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
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    className="absolute inset-0 cursor-pointer"
                    onClick={() => styles.isActive ? null : setCurrentIndex(index)}
                  >
                    <div className={`h-full rounded-2xl transition-all duration-500 ${
                      styles.isActive ? 'shadow-[0_0_40px_rgba(6,182,212,0.3)]' : 'grayscale-[50%] opacity-50'
                    }`}>
                      <DeveloperCard {...developer} index={index} />
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Pagination Dots (Optional Visual Indicator) */}
        <div className="mt-8 flex justify-center gap-2">
          {filteredDevelopers.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 transition-all duration-300 rounded-full ${i === currentIndex ? 'w-8 bg-cyan-500' : 'w-2 bg-white/20'}`} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}