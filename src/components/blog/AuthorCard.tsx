'use client';

import { motion } from 'framer-motion';
import { UserCheck, Sparkles, ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface AuthorCardProps {
  author: string;
  bio?: string;
  role?: string;
  avatarUrl?: string;
  className?: string;
}

export function AuthorCard({
  author,
  bio = 'Growth architects and digital strategists at Korvion Media. We build high-impact performance systems, AI automation, and high-converting brand engines.',
  role = 'Growth & Technology Team',
  avatarUrl,
  className = '',
}: AuthorCardProps) {
  const initial = author ? author.charAt(0).toUpperCase() : 'K';

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`rounded-2xl border border-border bg-gradient-to-br from-card via-card to-primary/5 p-6 sm:p-8 shadow-sm ${className}`}
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
        {/* Avatar */}
        <div className="relative shrink-0">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-primary via-orange-500 to-amber-600 flex items-center justify-center text-white text-2xl font-bold font-space-grotesk shadow-md">
            {avatarUrl ? (
              <img
                src={avatarUrl}
                alt={author}
                className="w-full h-full object-cover rounded-2xl"
              />
            ) : (
              <span>{initial}</span>
            )}
          </div>
          <div
            className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center"
            title="Verified Contributor"
          >
            <UserCheck className="w-3 h-3 text-primary" />
          </div>
        </div>

        {/* Info */}
        <div className="flex-1 space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-space-grotesk text-xl font-bold text-foreground">
                  {author}
                </h3>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                  <Sparkles className="w-2.5 h-2.5" />
                  Editor
                </span>
              </div>
              <p className="text-xs sm:text-sm text-primary font-medium">
                {role}
              </p>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              <span>About Team</span>
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {bio}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
