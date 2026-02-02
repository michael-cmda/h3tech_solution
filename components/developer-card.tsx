'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Linkedin } from 'lucide-react';

interface DeveloperCardProps {
  name: string;
  role: string;
  category: string;
  skills: string[];
  avatar: string;
  linkedIn: string;
  index?: number;
}

export function DeveloperCard({ name, role, category, skills, avatar, linkedIn, index = 0 }: DeveloperCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group h-full"
    >
      <div className="h-full rounded-xl border border-border bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/50 hover:bg-card/80 p-6 flex flex-col">
        {/* Avatar */}
        <div className="mb-6 overflow-hidden rounded-lg">
          <Image
            src={avatar || "/placeholder.svg"}
            alt={name}
            width={400}
            height={400}
            className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="mb-1 text-xl font-bold text-foreground">{name}</h3>
          <p className="mb-3 text-sm text-muted-foreground">{role}</p>

          {/* Category badge */}
          <div className="mb-4">
            <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30">
              {category}
            </Badge>
          </div>

          {/* Skills */}
          <div className="mb-6">
            <p className="mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Skills</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="outline" className="border-border text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* LinkedIn link */}
        <a
          href={linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-cyan-400 transition-colors hover:text-cyan-300"
        >
          <Linkedin className="h-4 w-4" />
          <span className="text-sm font-medium">LinkedIn</span>
        </a>
      </div>
    </motion.div>
  );
}
