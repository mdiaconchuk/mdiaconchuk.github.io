import { MeshGradient } from "@mesh-gradient/react";
import { useTheme } from "../../../context/themeContext";
import { useMemo } from "react";
import { motion } from "motion/react";

function MeshBackground() {
  const { theme } = useTheme();

  const darkColors = useMemo<[string, string, string, string]>(
    () => [
      "#121212", 
      "#1A1A1A", 
      "#1b263b", 
      "#415a77", 
    ],
    []
  );

  const lightColors = useMemo<[string, string, string, string]>(
    () => [
      "#ffffff", 
      "#b4c0cc", 
      "#6c88a3", 
      "#39506b" 
    ],
    []
  );

  const options = useMemo(() => {
    return {
      colors: theme === "dark" ? darkColors : lightColors,
      isStatic: false,
      pauseOnOutsideViewport: true,
      seed: 10,
      transition: true,
      speed: 0,
    };
  }, [theme, darkColors, lightColors]);

  return (
    <motion.div 
      className="absolute -z-10 inset-0 bg-[#eff2f6] dark:bg-[#121212] transition-colors duration-500" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      
      <div className="absolute inset-0 w-full h-full">
          <MeshGradient
            options={options}
            style={{ width: "100%", height: "100%" }}
          />
      </div>


      <motion.div 
        className="absolute inset-0 pointer-events-none"
        initial={false}
        animate={{
            backgroundColor: theme === "dark" ? "rgba(0,0,0,0)" : "rgba(0,0,0,0.4)"
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
      
    </motion.div>
  );
}

export default MeshBackground;
