'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Github, Linkedin, Mail, Globe } from 'lucide-react';

const links = [
  { name: 'About', href: '#' },
  { name: 'Services', href: '#services' },
  { name: 'Team', href: '#developers' },
  { name: 'Contact', href: 'mailto:hello@h3tech.io' },
];

const social = [
  { name: 'GitHub', icon: Github, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Email', icon: Mail, href: 'mailto:hello@h3tech.io' },
  { name: 'Website', icon: Globe, href: '#' },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/assets/logos/h3tech.png"
                alt="H3 Tech"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold text-foreground">H3 Tech</span>
            </div>
            <p className="text-sm text-muted-foreground">Engineering modern, scalable digital solutions.</p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-4 font-semibold text-foreground">Navigation</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-cyan-400"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-4 font-semibold text-foreground">Connect</h4>
            <div className="flex gap-4">
              {social.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-cyan-400"
                    title={item.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-4 font-semibold text-foreground">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                <a href="mailto:hello@h3tech.io" className="hover:text-cyan-400">
                  hello@h3tech.io
                </a>
              </p>
              <p>Philippines</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground"
        >
          <p>&copy; 2025 H3 Tech. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
