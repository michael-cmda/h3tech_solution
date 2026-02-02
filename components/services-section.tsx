'use client';

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

export function ServicesSection() {
  return (
    <section id="services" className="relative bg-background py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-cyan-500/5 via-transparent to-transparent blur-3xl" />
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
              <span className="text-balance">Our specialized</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                services
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              We provide comprehensive tech solutions tailored to your business needs, from concept to deployment.
            </p>
          </motion.div>
        </div>

        {/* Services grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="group h-full border-border bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/50 hover:bg-card/80 p-6">
                  <div className="mb-4 inline-block rounded-lg bg-cyan-500/10 p-3 text-cyan-400 transition-colors group-hover:bg-cyan-500/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
