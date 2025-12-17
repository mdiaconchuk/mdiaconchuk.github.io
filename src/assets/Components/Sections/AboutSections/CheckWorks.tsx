import { ChevronRight } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import useWorkNavigation from "../../../../hooks/useWorkNavigation";
import Spotlight from "../../Spotlight";

const hiddenBgState = {
  x: "-100%",
  borderTopRightRadius: 200,
  borderBottomRightRadius: 200,
};
const visibleBgState = {
  x: "0%",
  borderTopRightRadius: 0,
  borderBottomRightRadius: 0,
};

function CheckWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const handleWorkNav = useWorkNavigation();

  return (
    <div
      ref={ref}
      className="relative w-full xl:py-20 py-15 flex items-center justify-center overflow-hidden"
    >
      <Spotlight color="#778da9" size={300} opacity={0.4} />

      {/* ------ FONDOS ------ */}
      <motion.div
        className="absolute inset-0 z-0 bg-(--light-secondary) dark:bg-(--dark-tertiary) shadow-2xl"
        initial={hiddenBgState}
        animate={isInView ? visibleBgState : {}}
        transition={{ duration: 0.7 }}
      />

      {/* FONDO 2 */}
      <motion.div
        className="absolute inset-0 z-10 bg-(--light-surface-container-high) dark:bg-(--dark-surface-container) shadow-2xl"
        initial={hiddenBgState}
        animate={isInView ? visibleBgState : {}}
        transition={{ duration: 0.8, delay: 0.1 }}
      />

      {/* --- CONTENIDO --- */}
      <motion.div
        className="z-20 flex flex-col items-center justify-center gap-4 text-(--light-text) dark:text-(--dark-text) text-center"
        initial={{ opacity: 0, x: -60 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
        transition={{
          duration: 0.5,
          delay: 0.3,
          type: "spring",
          stiffness: 120,
          damping: 20,
        }}
      >
          <div className="flex flex-col items-center">
            <span className="text-md font-light uppercase tracking-widest opacity-70 mb-2">
              Discover
            </span>

            <motion.div
              className="flex flex-row items-center cursor-pointer relative group"
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              <div className="relative flex flex-col">
                <button className="xl:text-5xl text-4xl merriweather font-bold text-(--light-primary) dark:text-(--dark-primary)"
                onClick={() => handleWorkNav('myWorks', 'Works')}>
                  My works
                </button>

                {/* UNDERLINE */}
                <motion.span
                  className="h-0.75 w-full bg-(--light-secondary) dark:bg-(--dark-secondary) rounded-full absolute -bottom-2 left-0 origin-left"
                  variants={{
                    rest: { scaleX: 0 },
                    hover: { scaleX: 1 },
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>

              {/* FLECHA */}
              <motion.div
                className="mt-2 ml-2 text-(--light-secondary) dark:text-(--dark-secondary)"
                variants={{
                  rest: { x: 0 },
                  hover: { x: 10 },
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <ChevronRight size={40} strokeWidth={1.5} />
              </motion.div>
            </motion.div>
          </div>
      </motion.div>
    </div>
  );
}

export default CheckWorks;
