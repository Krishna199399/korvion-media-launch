'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Share2, Check, Copy, Linkedin, Twitter, Facebook, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

interface ShareButtonsProps {
  url: string;
  title: string;
  className?: string;
}

export function ShareButtons({ url, title, className = '' }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  // Fallback to window.location.href if url is relative or empty on client
  const fullUrl = typeof window !== 'undefined' && !url.startsWith('http')
    ? `${window.location.origin}${url}`
    : url;

  const handleCopy = async () => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(fullUrl);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = fullUrl;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      toast.success('Link copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error('Failed to copy link');
    }
  };

  const shareLinks = [
    {
      name: 'X (Twitter)',
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(fullUrl)}`,
      color: 'hover:text-sky-400 hover:border-sky-400/40',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`,
      color: 'hover:text-blue-500 hover:border-blue-500/40',
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      href: `https://api.whatsapp.com/send?text=${encodeURIComponent(`${title} ${fullUrl}`)}`,
      color: 'hover:text-emerald-500 hover:border-emerald-500/40',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`,
      color: 'hover:text-blue-600 hover:border-blue-600/40',
    },
  ];

  return (
    <div className={`flex flex-wrap items-center gap-2 pt-2 ${className}`}>
      <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground mr-1">
        <Share2 className="w-3.5 h-3.5 text-primary" />
        <span>Share:</span>
      </div>

      <div className="flex items-center gap-2">
        {shareLinks.map((item) => (
          <motion.a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className={`p-2 rounded-lg border border-border bg-card/70 hover:bg-card text-muted-foreground transition-all duration-200 ${item.color}`}
            title={`Share on ${item.name}`}
            aria-label={`Share on ${item.name}`}
          >
            <item.icon className="w-4 h-4" />
          </motion.a>
        ))}

        <motion.button
          onClick={handleCopy}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-border bg-card/70 hover:bg-card text-muted-foreground hover:text-primary hover:border-primary/40 transition-all text-xs font-medium"
          title="Copy link"
          aria-label="Copy article link"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-500" />
              <span className="text-emerald-500">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </motion.button>
      </div>
    </div>
  );
}
