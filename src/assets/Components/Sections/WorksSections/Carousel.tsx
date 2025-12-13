import { ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "../../../../data/carouselItems";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Spotlight from "../../Spotlight";

const SPRING_TRANSITION = {
  type: "spring" as const,
  stiffness: 200,
  damping: 20,
  mass: 0.8,
};

export default function Carousel() {
  const [indexSelected, setIndexSelected] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
  
    // valor inicial
    setIsMobile(mediaQuery.matches);
    // Listener optimizado
    const handleChange = (e: any) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const onRight = () => {
    setIndexSelected((prev) => (prev + 1) % projects.length);
  };

  const onLeft = () => {
    setIndexSelected((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const getOffset = (i: number) => {
    const total = projects.length;
    const raw = i - indexSelected;
    return ((raw % total) + total) % total;
  };

  const getAnimation = (offset: number) => ({
    x: offset * (isMobile ? 20 : 50),
    scale: 1 - offset * (isMobile ? 0.04 : 0.07),
    opacity: offset === 0 ? 1 : 0.7,
    zIndex: projects.length - offset,
    filter: offset === 0 ? "blur(0px)" : "blur(1px)", 
    brightness: offset === 0 ? 1 : 0.6,
  });

  return (
    <div className="overflow-hidden py-10">
      <div className="2xl:w-full w-10/12 relative mx-auto h-64 2xl:h-100 xl:h-90 2xl:max-w-3xl xl:max-w-2xl">
        
        <Spotlight color="#778da9" size={400} opacity={0.4} />
        
        {projects.map((project, i) => {
          const offset = getOffset(i);
          
          return (
            <motion.div
              key={project.id}
              className="absolute inset-0 rounded-xl overflow-hidden shadow-2xl origin-center border dark:border-(--dark-outline) border-(--light-outline) bg-(--light-surface) dark:bg-(--dark-surface)"
              animate={getAnimation(offset)}
              initial={false}
              transition={SPRING_TRANSITION}
              style={{ willChange: "transform, opacity" }} 
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover"
                loading="lazy"  
              />

              <a 
                href={project.path} 
                target="_blank" 
                className={`${offset !== 0 ? 'pointer-events-none' : ''}`}
              >
                <div
                  className={`absolute inset-0 flex flex-col justify-end p-4 sm:p-6
                  text-(--dark-text) font-bold duration-500 transition clickable
                  ${i === indexSelected
                      ? "bg-black/50 backdrop-blur-[2px]"
                      : "bg-transparent"
                    }`}
                >
                  <p className="text-xl sm:text-2xl md:text-3xl mb-1 underline decoration-(--dark-accent)">
                    {project.title}
                  </p>
                  <p className="text-(--dark-text-secondary) text-sm sm:text-base line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </a>
            </motion.div>
          );
        })}
      </div>

      {/* CONTROLES */}
      <div className="flex justify-center gap-6 mt-8 mb-5">
        <NavButton onClick={onLeft} isMobile={isMobile}>
          <ChevronLeft size={isMobile ? 22 : 28} />
        </NavButton>
        <NavButton onClick={onRight} isMobile={isMobile}>
          <ChevronRight size={isMobile ? 22 : 28} />
        </NavButton>
      </div>
    </div>
  );
}

function NavButton({ onClick, children }: any) {
  return (
    <button
      onClick={onClick}
      className="size-14 rounded-full flex items-center justify-center shadow-lg
        bg-(--light-surface) hover:bg-(--light-surface-container)
        dark:bg-(--dark-surface-container) hover:dark:bg-(--dark-surface-container-high)
        text-(--light-accent) dark:text-(--dark-accent)
        transition-all transform hover:scale-110 active:scale-95 cursor-pointer"
    >
      {children}
    </button>
  );
}