import SkillsIcons from "./SkillsIcons";
import { motion } from "motion/react";
import useScrollInto from "../../../../hooks/useScrollInto";

function Skills() {
  const scrollInto = useScrollInto();
  return (
    <>
      {/* TÍTULO */}
      <div className="bg-(--light-surface-container) dark:bg-(--dark-surface) py-12">
        <p className="text-4xl font-bold text-center mb-3 merriweather text-(--light-primary) dark:(--dark-primary)">
          Skills
        </p>
        {/* DESCRIPCIÓN */}
        <p className="2xl:text-2xl text-xl text-(--light-text-secondary) dark:text-(--dark-text-secondary) text-center mb-5 mx-4">
          These are the tools I use to bring my projects to life.
        </p>

        {/* FILA ITEMS */}
        <motion.div
          className="overflow-hidden w-full max-w-5xl mx-auto relative py-8 
        bg-black/5 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-black/5
         dark:border-white/5 mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex w-max slideX">
            {/* SET 1 */}
            <SkillsIcons />
            {/* SET 2 */}
            <SkillsIcons />
            {/* SET 3 */}
            <SkillsIcons />
            {/* SET 4 */}
            <SkillsIcons />
          </div>
        </motion.div>

        <div className="flex justify-center">
          <button
            onClick={() => scrollInto("resumeButton")}
            className="mx-auto mt-5 text-center"
          >
            <p className="underline opacity-80 font-semibold text-md">
              Check my resume
            </p>
          </button>
        </div>
      </div>
    </>
  );
}

export default Skills;
