'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const reasons = [
  'Specialized developers per domain',
  'Modern, scalable technology stack',
  'Clean, maintainable code',
  'Collaborative and client-focused',
  'Proven track record of success',
  'Continuous learning and innovation',
];

export function WhyChooseUs() {
  return (
    <section className="relative bg-background py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 h-full w-full bg-gradient-to-l from-cyan-500/5 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
              <span className="text-balance">Why choose</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                H3 Tech?
              </span>
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              We're not just developers—we're partners in your success. Every project is an opportunity to create something
              exceptional that drives real business value.
            </p>
          </motion.div>

          {/* Right side - Checklist */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-cyan-400" />
                  <span className="text-lg text-foreground">{reason}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
