import { motion } from "motion/react";

interface SpotlightProps {
  color?: string;       
  size?: number;  
  opacity?: number;   
  blur?: number;      
  delay?: number;      
}

export default function Spotlight({
  color = "var(--dark-primary)",
  size = 400,
  opacity = 0.2,
  blur = 80,
  delay = 0
}: SpotlightProps) {
  
  return (
    <motion.div
      // --- ANIMACIÓN DE ENTRADA ---
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: opacity, scale: 1 }}
      transition={{ duration: 1.5, delay: delay, ease: "easeOut" }}
      
      // --- POSICIONAMIENTO ---
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none rounded-full"
      
      // --- GRADIENTE ---
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, rgba(0,0,0,0) 70%)`,
        filter: `blur(${blur}px)`,
      }}
    />
  );
}