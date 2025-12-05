import { ChevronRight } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Spotlight from "../Spotlight";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div
      ref={ref}
      className="relative w-full xl:py-20 py-15 mt-20 flex items-center justify-center overflow-hidden"
    >
      <Spotlight color="#778da9" size={300} opacity={0.4} />
      {/* ------ FONDOS ------ */}
      <motion.div
        className="absolute inset-0 z-0 bg-(--light-secondary) dark:bg-(--dark-tertiary) shadow-2xl"
        initial={{
          x: "-100%",
          borderTopRightRadius: 200,
          borderBottomRightRadius: 200,
        }}
        animate={
          isInView
            ? { x: "0%", borderTopRightRadius: 0, borderBottomRightRadius: 0 }
            : {}
        }
        transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.div
        className="absolute inset-0 z-10 bg-(--light-surface) dark:bg-(--dark-surface) shadow-2xl"
        initial={{
          x: "-100%",
          borderTopRightRadius: 200,
          borderBottomRightRadius: 200,
        }}
        animate={
          isInView
            ? { x: "0%", borderTopRightRadius: 0, borderBottomRightRadius: 0 }
            : {}
        }
        transition={{ duration: 1.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* --- CONTENIDO --- */}
      <motion.div
        className="z-20 flex flex-col items-center justify-center gap-4 text-(--light-text) dark:text-(--dark-text) text-center"
        initial={{ opacity: 0, x: -60 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
        transition={{
          duration: 0.5,
          delay: 0.4,
          type: "spring",
          stiffness: 120,
          damping: 20,
        }}
      >
        <div className="flex flex-col items-center">
          <span className="text-md font-light uppercase tracking-widest opacity-70 mb-2">
            Discover
          </span>

          <Link to="/about">
            <motion.div
              className="flex flex-row items-center cursor-pointer relative clickable"
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              <div className="relative flex flex-col">
                <p className="xl:text-5xl text-4xl merriweather font-bold">
                  About me
                </p>

                {/* UNDERLINE */}
                <motion.span
                  className="h-[3px] w-full bg-(--light-secondary) dark:bg-(--dark-secondary) rounded-full absolute -bottom-2 left-0 origin-left"
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
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
