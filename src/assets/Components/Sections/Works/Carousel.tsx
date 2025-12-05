import { ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "../../../../data/carouselItems";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Spotlight from "../../Spotlight";

export default function Carousel() {
  const [indexSelected, setIndexSelected] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // -------------- FUNCIONES FLECHAS --------------
  const onRight = () => {
    setIndexSelected((prev) => (prev + 1) % projects.length);
  };

  const onLeft = () => {
    setIndexSelected((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  // -------------- OFFSET CIRCULAR --------------
  const getOffset = (i: number) => {
    const total = projects.length;
    const raw = i - indexSelected;
    return ((raw % total) + total) % total;
  };

  // --- VARIANTS  ---
  const getAnimation = (offset: number) => ({
    x: offset * (isMobile ? 20 : 50),
    scale: 1 - offset * (isMobile ? 0.04 : 0.07),
    opacity: offset === 0 ? 1 : 0.7,
    zIndex: projects.length - offset,
    filter: offset === 0 ? "blur(0px)" : "blur(1px)",
    brightness: offset === 0 ? 1 : 0.7,
  });

  const springTransition = {
    type: "spring" as const,
    stiffness: 200,
    damping: 20,
    mass: 0.8,
  };

  return (
    <>
      {/* ---------------- CONTENEDOR ---------------- */}
      <div className="overflow-hidden">
      <div
        className="
          2xl:w-full w-10/12 relative mx-auto
          h-64 2xl:h-100 xl:h-90
          2xl:max-w-3xl xl:max-w-2xl
        "
      >
        <Spotlight
          color="#778da9"
          size={400}
          opacity={0.4}
        />
        {/* ---------------- CARDS ---------------- */}
        {projects.map((project, i) => {
          const offset = getOffset(i);

          return (
            <motion.div
              key={project.id}
              className="absolute inset-0 rounded-xl overflow-hidden shadow-lg origin-center border  dark:border-(--dark-outline) border-(--light-outline)"
              custom={offset}
              animate={getAnimation(offset)}
              initial={false}
              transition={springTransition}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover"
              />

              {/* ------- OVERLAY NEGRO CARD --------------- */}
              <a href={project.path} target="_blank">
                <div
                  className={`absolute inset-0 flex flex-col justify-end p-4 sm:p-6
                  text-(--dark-text) font-bold duration-500 transition clickable
                  ${i === indexSelected
                      ? "bg-black/40 backdrop-blur-[2px]"
                      : "bg-none"
                    }`}
                >
                  <p className="text-xl sm:text-2xl md:text-3xl mb-1 underline">
                    {project.title}
                  </p>
                  <p className="text-(--dark-text-secondary) text-sm sm:text-base">
                    {project.description}
                  </p>
                </div>
              </a>
            </motion.div>
          );
        })}
      </div>

      {/* ---------------- FLECHAS ---------------- */}
      <div className="flex justify-center gap-6 mt-6 mb-5">
        <button
          onClick={onLeft}
          className="size-14 rounded-full flex items-center justify-center shadow-md
            bg-(--light-surface) hover:bg-(--light-surface-container)
            dark:bg-(--dark-surface-container) hover:dark:bg-(--dark-surface-container-high)
            transition transform hover:scale-105"
        >
          <ChevronLeft
            className="text-(--light-accent) dark:text-(--dark-accent)"
            size={isMobile ? 22 : 28}
          />
        </button>

        <button
          onClick={onRight}
          className="size-14 rounded-full flex items-center justify-center shadow-md
            bg-(--light-surface) hover:bg-(--light-surface-container-high)
            dark:bg-(--dark-surface-container) hover:dark:bg-(--dark-surface-container-high)
            transition transform hover:scale-105"
        >
          <ChevronRight
            className="text-(--light-accent) dark:text-(--dark-accent)"
            size={isMobile ? 22 : 28}
          />
        </button>
      </div>
      </div>
    </>
  );
}