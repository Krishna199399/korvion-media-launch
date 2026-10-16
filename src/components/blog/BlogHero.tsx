'use client';

import { motion } from 'framer-motion';
import { SearchBar } from './SearchBar';

export function BlogHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-32 pb-16 px-4">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-950/20 via-background to-background pointer-events-none" />
      
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-4xl mx-auto text-center space-y-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-space-grotesk text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
        >
          Insights, Ideas &{' '}
          <span className="bg-gradient-to-r from-primary via-orange-400 to-primary bg-clip-text text-transparent">
            Digital Growth
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
        >
          Expert perspectives on digital marketing, technology, and business growth from the Korvion Media team
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-4 flex justify-center"
        >
          <SearchBar />
        </motion.div>
      </motion.div>
    </section>
  );
}
