import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImagePlaceholder3DProps {
  className?: string;
  text?: string;
}

export function ImagePlaceholder3D({ 
  className, 
  text = "Premium Visual Asset"
}: ImagePlaceholder3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, -15]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [-15, 15]);
  const translateZ = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <div className={cn("perspective-1000 w-full h-full min-h-[300px]", className)} ref={containerRef}>
      <motion.div
        style={{
          rotateX,
          rotateY,
          translateZ,
          transformStyle: "preserve-3d"
        }}
        className={cn(
          "relative w-full h-full rounded-3xl overflow-hidden border border-border/50 bg-surface/30 backdrop-blur-xl shadow-elegant"
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-50" />
        
        <motion.div 
          animate={{ rotateZ: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-32 -right-32 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div 
          animate={{ rotateZ: [360, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-32 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"
        />

        <div 
          className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground z-10"
          style={{ transform: "translateZ(40px)" }}
        >
          <div className="p-5 rounded-full bg-background/50 backdrop-blur-md mb-4 border border-border/50 shadow-glow-sm">
            <ImageIcon className="w-8 h-8 text-primary" />
          </div>
          <p className="font-mono text-sm tracking-widest uppercase text-foreground">{text}</p>
        </div>
        
        <div 
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            transform: 'translateZ(-20px)'
          }}
        />
      </motion.div>
    </div>
  );
}
