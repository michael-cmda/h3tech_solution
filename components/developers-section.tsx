'use client';

import { useState, useMemo, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { developers, categories } from '@/lib/developers';
import { DeveloperCard } from './developer-card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Users, Sparkles, Plus, Trash2, Mail } from 'lucide-react';

export function DevelopersSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // CART STATE: Stores the selected developer objects
  const [team, setTeam] = useState<any[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

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

  // Add/Remove from Team
  const toggleSelection = (dev: any) => {
    setTeam((prev) => {
      const exists = prev.find((item) => item.name === dev.name);
      if (exists) return prev.filter((item) => item.name !== dev.name);
      return [...prev, dev];
    });
  };

  const handlePurchase = () => {
    const teamNames = team.map(d => `${d.name} (${d.role})`).join(', ');
    const subject = encodeURIComponent("New Team Recruitment Request");
    const body = encodeURIComponent(`I would like to recruit the following team:\n\n${teamNames}\n\nPlease contact me to discuss the project.`);
    window.location.href = `mailto:recruitment@yourcompany.com?subject=${subject}&body=${body}`;
  };

  const activeDev = filteredDevelopers[currentIndex];
  const isInTeam = team.some(d => d.name === activeDev?.name);

  return (
    <section id="developers" className="relative bg-black py-24 overflow-hidden min-h-screen">
      
      {/* --- CART OVERLAY SIDEBAR --- */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-zinc-950 border-l border-cyan-500/30 z-[100] p-8 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-black text-white italic">YOUR SQUAD</h3>
              <button onClick={() => setIsCartOpen(false)} className="text-zinc-500 hover:text-white">CLOSE</button>
            </div>

            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
              {team.length === 0 && <p className="text-zinc-600 italic">No characters selected...</p>}
              {team.map((dev) => (
                <div key={dev.name} className="flex items-center justify-between p-4 bg-zinc-900 border border-white/5 rounded-lg group">
                  <div>
                    <p className="text-white font-bold uppercase text-sm">{dev.name}</p>
                    <p className="text-cyan-500 text-xs tracking-widest">{dev.category}</p>
                  </div>
                  <button onClick={() => toggleSelection(dev)} className="text-zinc-600 hover:text-red-500 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            <div className="absolute bottom-8 left-8 right-8">
              <button 
                onClick={handlePurchase}
                disabled={team.length === 0}
                className="w-full py-4 bg-cyan-500 text-black font-black uppercase tracking-tighter hover:bg-white transition-all disabled:opacity-30 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Purchase Team & Email
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- MAIN CONTENT --- */}
      <div className="mx-auto max-w-[1400px] px-4">
        
        {/* Header Area with Cart Trigger */}
        <div className="flex justify-between items-start mb-16">
          <div className="flex-1 text-center">
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4">
              SELECT YOUR <span className="text-cyan-500">TEAM</span>
            </h2>
          </div>
          
          {/* Cart Toggle Button */}
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative p-4 bg-zinc-900 border border-cyan-500/50 rounded-full text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all"
          >
            <Users className="w-8 h-8" />
            {team.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-white text-black text-[10px] font-bold h-6 w-6 flex items-center justify-center rounded-full border-2 border-black">
                {team.length}
              </span>
            )}
          </button>
        </div>

        {/* Carousel Container */}
        <div className="relative flex h-[600px] items-center justify-center">
          
          {/* NAVIGATION BUTTONS */}
          <div className="absolute inset-x-0 z-[60] flex justify-between px-2 md:px-10 pointer-events-none">
            <button onClick={handlePrev} className="pointer-events-auto group h-20 w-20 bg-black/50 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-cyan-500 transition-all">
              <ChevronLeft className="h-10 w-10" />
            </button>
            <button onClick={handleNext} className="pointer-events-auto group h-20 w-20 bg-black/50 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-cyan-500 transition-all">
              <ChevronRight className="h-10 w-10" />
            </button>
          </div>

          {/* Cards */}
          <div className="relative h-full w-full max-w-md pointer-events-none">
            <AnimatePresence mode="popLayout">
              {filteredDevelopers.map((developer, index) => {
                const total = filteredDevelopers.length;
                let diff = index - currentIndex;
                if (diff > total / 2) diff -= total;
                if (diff < -total / 2) diff += total;

                const isActive = diff === 0;

                return (
                  <motion.div
                    key={`${developer.name}-${selectedCategory}`}
                    animate={{ x: diff * 350, scale: isActive ? 1.1 : 0.7, zIndex: isActive ? 30 : 10, opacity: Math.abs(diff) > 1 ? 0 : 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className="absolute inset-0 pointer-events-auto"
                  >
                    <div className={`h-full relative ${isActive ? 'ring-4 ring-cyan-500 rounded-2xl' : 'grayscale brightness-50'}`}>
                      <DeveloperCard {...developer} index={index} />
                      
                      {/* ADD TO SQUAD BUTTON (Only on active card) */}
                      {isActive && (
                        <button 
                          onClick={() => toggleSelection(developer)}
                          className={`absolute bottom-[-40px] left-1/2 -translate-x-1/2 px-8 py-3 rounded-full font-black uppercase text-xs tracking-widest transition-all ${
                            isInTeam ? 'bg-red-500 text-white' : 'bg-cyan-500 text-black'
                          }`}
                        >
                          {isInTeam ? 'Remove from Squad' : 'Add to Squad'}
                        </button>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}