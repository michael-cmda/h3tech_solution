'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background pt-20 md:pt-32">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent blur-3xl opacity-60" />
        <div className="absolute -top-1/2 -right-1/2 h-full w-full rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Image
              src="/assets/logos/h3tech.png"
              alt="H3 Tech"
              width={200}
              height={200}
              className="h-48 w-auto md:h-64"
            />
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl"
          >
            <span className="text-balance">Engineering modern, scalable</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              digital solutions
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            H3 Tech is a collective of specialized developers building innovative solutions using modern technologies and best practices.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-4 sm:flex-row sm:justify-center"
          >
            <Button
              size="lg"
              className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold"
              onClick={() => document.getElementById('developers')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Meet the Team
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 bg-transparent"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Our Services
            </Button>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <motion.div
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="pointer-events-none mt-24 flex justify-center opacity-30"
        >
          <div className="h-px w-full max-w-md border-t border-cyan-500" />
        </motion.div>
      </div>
    </section>
  );
}
