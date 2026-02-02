'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  Code2,
  Database,
  Smartphone,
  Zap,
  Shield,
} from 'lucide-react';
import { Card } from '@/components/ui/card';

// --- Data ---

const services = [
  {
    title: 'Web Application Development',
    description: 'Custom web applications built with modern frameworks like React and Next.js for optimal performance.',
    icon: Globe,
  },
  {
    title: 'Frontend & UI Engineering',
    description: 'Beautiful, responsive user interfaces with accessibility in mind, creating engaging user experiences.',
    icon: Code2,
  },
  {
    title: 'Backend & API Development',
    description: 'Robust server-side solutions with REST APIs, microservices, and real-time data handling.',
    icon: Database,
  },
  {
    title: 'Mobile App Development',
    description: 'Cross-platform mobile applications for iOS and Android using React Native and Flutter.',
    icon: Smartphone,
  },
  {
    title: 'Cloud & Database Solutions',
    description: 'Scalable cloud infrastructure and database design with Supabase, AWS, and modern DevOps practices.',
    icon: Zap,
  },
  {
    title: 'Security & Optimization',
    description: 'Code optimization, security best practices, and performance monitoring for production systems.',
    icon: Shield,
  },
];

// --- Animation Variants ---

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each card's appearance
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for smooth motion
    },
  },
};

// --- Component ---

export function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-background py-24 md:py-32">
      {/* Background ambient glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute -bottom-1/4 -left-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute -top-1/4 -right-1/4 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Our specialized{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                services
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
              We provide comprehensive tech solutions tailored to your business needs, 
              leveraging modern architecture to ensure scale and security.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="flex"
              >
                <Card className="group relative flex flex-col overflow-hidden border-border bg-card/50 p-8 transition-colors duration-300 hover:border-cyan-500/50 hover:bg-card/80 backdrop-blur-sm">
                  {/* Icon Container */}
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 transition-colors duration-300 group-hover:bg-cyan-500 group-hover:text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>

                  {/* Text Content */}
                  <h3 className="mb-3 text-xl font-bold tracking-tight text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  {/* Decorative corner accent */}
                  <div className="absolute right-0 top-0 -mr-4 -mt-4 h-16 w-16 bg-cyan-500/5 transition-all duration-300 group-hover:bg-cyan-500/10 blur-2xl" />
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}