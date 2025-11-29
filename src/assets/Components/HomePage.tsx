import { motion } from "motion/react";
import MeshBackground from "./Backgrounds/MeshBackground";

function HomePage() {
  return (
    <div className="relative w-full lg:h-130 2xl:h-220 h-150 flex flex-col items-center justify-center overflow-hidden">
      <MeshBackground />

      <div className="relative text-center flex flex-col mx-0">
        <div className="text-(--dark-text) font-bold">
          <motion.p
            className="2xl:text-8xl xl:text-7xl text-5xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
            }}
          >
            <span className="font-normal text-(--dark-accent)">Hi!</span> I'm
          </motion.p>

          <motion.p
            className="2xl:text-8xl xl:text-7xl text-4xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
            }}
          >
            Matías Diaconchuk.
          </motion.p>
        </div>

        <motion.p
          className="2xl:text-2xl md:text-lg text-lg text-(--dark-text-secondary) 2xl:mx-120 xl:mx-80 lg:mx-80 mx-8 xl:mt-15 mt-10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
        >
          A Front-End Developer crafting modern, interactive, and enjoyable web
          experiences that people actually love to use.
        </motion.p>
      </div>
    </div>
  );
}

export default HomePage;
