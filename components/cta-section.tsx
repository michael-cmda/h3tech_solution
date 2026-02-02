'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, ExternalLink } from 'lucide-react';

export function CTASection() {
  return (
    <section className="relative bg-background py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent blur-3xl opacity-60" />
        <div className="absolute -bottom-1/2 -left-1/2 h-full w-full rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
            <span className="text-balance">Ready to build something great?</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Let's collaborate
            </span>
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Whether you need a new web application, mobile app, or want to enhance your existing infrastructure, our team
            is ready to help you achieve your goals.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a href="mailto:hello@h3tech.io">
              <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold gap-2">
                <Mail className="h-5 w-5" />
                Get in Touch
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 gap-2 bg-transparent"
              onClick={() => document.getElementById('developers')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ExternalLink className="h-5 w-5" />
              Meet the Team
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
