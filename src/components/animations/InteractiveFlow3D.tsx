import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface InteractiveFlow3DProps {
  nodes?: string[];
  className?: string;
}

export function InteractiveFlow3D({ 
  nodes = ["Strategy", "Creation", "Distribution", "Optimization"],
  className 
}: InteractiveFlow3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const z = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div ref={containerRef} className={`relative h-[60vh] lg:h-[80vh] w-full flex items-center justify-center perspective-[1500px] overflow-hidden ${className}`}>
      <motion.div 
        style={{ rotateX, rotateY, z }}
        className="relative w-full max-w-4xl h-full flex flex-col items-center justify-center transform-style-3d gap-6"
      >
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-50 blur-3xl translate-z-[-100px]" />
        
        {nodes.map((node, i) => {
          const isCenter = i === Math.floor(nodes.length / 2);
          const zOffset = isCenter ? 100 : ((i * 17) % 60) - 30;
          const xOffset = isCenter ? 0 : (i % 2 === 0 ? 1 : -1) * (((i * 37) % 100) + 50);
          
          return (
            <motion.div
              key={node}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              style={{
                transform: `translate3d(${xOffset}px, 0px, ${zOffset}px)`,
              }}
              className={`p-4 rounded-xl border backdrop-blur-md shadow-elegant flex items-center gap-3 transition-colors ${
                isCenter 
                  ? 'border-primary/50 bg-primary/10 text-primary font-bold scale-125' 
                  : 'border-border/50 bg-surface/30 text-muted-foreground hover:border-primary/30 hover:text-foreground'
              }`}
            >
              <div className={`w-3 h-3 rounded-full ${isCenter ? 'bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]' : 'bg-primary/40'}`} />
              {node}
            </motion.div>
          );
        })}

        {/* Connecting lines SVG background */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none translate-z-[-50px] opacity-20" style={{ transformStyle: 'preserve-3d' }}>
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="1" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path 
            d="M 100 100 Q 400 300 700 500 T 1000 800" 
            fill="none" 
            stroke="url(#lineGrad)" 
            strokeWidth="2"
            strokeDasharray="10 10"
            className="animate-[dash_20s_linear_infinite]"
          />
        </svg>
      </motion.div>
    </div>
  );
}
