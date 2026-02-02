'use client';

import { useState, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { developers, categories } from '@/lib/developers';
import { DeveloperCard } from './developer-card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function DevelopersSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredDevelopers = useMemo(() => {
    if (selectedCategory === 'All') return developers;
    return developers.filter((dev) => dev.category === selectedCategory);
  }, [selectedCategory]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newPosition = direction === 'left' 
        ? scrollPosition - scrollAmount 
        : scrollPosition + scrollAmount;
      scrollContainerRef.current.scrollTo({ left: newPosition, behavior: 'smooth' });
      setScrollPosition(newPosition);
    }
  };

  return (
    <section id="developers" className="relative bg-background py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
              <span className="text-balance">Meet our talented</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                developers
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              A specialized team of full-stack, frontend, backend, and mobile developers focused on delivering excellence.
            </p>
          </motion.div>
        </div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-wrap justify-center gap-3"
        >
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? 'default' : 'outline'}
              className={
                selectedCategory === category
                  ? 'bg-cyan-500 hover:bg-cyan-600 text-black font-semibold'
                  : 'border-cyan-500/30 text-foreground hover:border-cyan-500/60'
              }
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Developer slider */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-8"
            style={{ 
              scrollBehavior: 'smooth',
              scrollbarWidth: 'thin',
              scrollbarColor: '#00d9ff #1a1a1a'
            }}
          >
            {filteredDevelopers.map((developer, index) => (
              <div key={developer.name} className="flex-shrink-0 w-80">
                <DeveloperCard {...developer} index={index} />
              </div>
            ))}
          </div>

          {/* Slider controls */}
          <div className="absolute -bottom-16 left-0 right-0 flex justify-center gap-3">
            <Button
              onClick={() => scroll('left')}
              size="sm"
              variant="outline"
              className="border-cyan-500/30 text-foreground hover:border-cyan-500 hover:bg-cyan-500/10"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              onClick={() => scroll('right')}
              size="sm"
              variant="outline"
              className="border-cyan-500/30 text-foreground hover:border-cyan-500 hover:bg-cyan-500/10"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
