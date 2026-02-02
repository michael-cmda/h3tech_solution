'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ArrowUpRight, Zap } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0a0a0a] selection:bg-blue-500/30">
      {/* Modern Background: Tight Grid + Sharp Radial light */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* pt-8 is the sweet spot for "not too much space" */}
        <div className="flex flex-col items-center justify-center pt-8 md:pt-14 text-center">
          
          {/* Logo: Scaled up 3x with a Glass Stage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative mb-8"
          >
            <div className="absolute -inset-6 bg-blue-500/5 blur-2xl rounded-full" />
            <Image
              src="/assets/logos/h3tech.png"
              alt="H3 Tech"
              width={450} // 3x the standard visual size
              height={450}
              priority
              className="relative z-10 h-32 w-auto md:h-48 lg:h-56 drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
            />
          </motion.div>

          {/* Heading: Tighter tracking and balanced text */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
              Engineering <span className="text-zinc-400 font-medium italic">modern</span> <br />
              <span className="bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-500 bg-clip-text text-transparent">
                digital solutions
              </span>
            </h1>
            
            <p className="mt-4 mx-auto max-w-xl text-base text-zinc-500 md:text-lg">
              A specialized developer collective building high-performance 
              architectures with precision and scale.
            </p>
          </motion.div>

          {/* Buttons: Sleek "pill-shape" with tighter margins */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="h-12 px-8 rounded-full bg-blue-600 text-white hover:bg-blue-500 transition-all font-semibold shadow-lg shadow-blue-900/20"
              onClick={() => document.getElementById('developers')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Meet the Team
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="h-12 px-8 rounded-full border-zinc-800 bg-transparent text-zinc-300 hover:bg-zinc-900 hover:text-white transition-all"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Our Services <ArrowUpRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>

        {/* The "Bottom Space": Tightened but distinct */}
        <div className="mt-20 mb-12 flex flex-col items-center">
           <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
           <div className="mt-8 flex gap-8 opacity-20 grayscale transition-all hover:grayscale-0 hover:opacity-50">
             {/* Optional: Add small tech icons here like React, Next.js logos */}
             <Zap className="w-5 h-5 text-white" />
           </div>
        </div>
      </div>
    </section>
  );
}