import { Sparkle } from "lucide-react";
import type { EducationItemsType } from "../../../../data/EducationItemsData";
import { motion } from "motion/react";

interface EducationItemProps {
  item: EducationItemsType;
  isLast?: boolean;
}

const lineVariants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: {
      duration: 0.8,
      ease: "circOut" as const,
    },
  },
};

function EducationItem({ item, isLast }: EducationItemProps) {
  return (
    <div className="flex 2xl:gap-4 gap-2 xl:w-6/12 w-10/12 mx-auto">
      {/* Icono + linea */}
      <motion.div className="flex flex-col items-center">
        <div className="z-10 bg-background py-1">
          <Sparkle
            size={26}
            className="text-(--light-accent) dark:text-(--dark-accent) fill-(--light-accent) dark:fill-(--dark-accent)"
          />
        </div>

        {!isLast && (
          <motion.div
            className="w-0.5 grow bg-(--light-tertiary) dark:bg-(--dark-secondary) mt-0.5"
            variants={ lineVariants }
            style={{ originY: 0 }}
          />
        )}
      </motion.div>

      {/* Contenido */}
      <div className="flex flex-col pb-7">
        <p className="2xl:text-2xl text-xl font-bold opacity-90">{item.label}</p>
        <p className="text-lg text-(--light-text-secondary) dark:text-(--dark-text-secondary) mt-2">
          {item.description}
        </p>
        <p className="text-sm text-(--light-text-secondary) dark:text-(--dark-text-secondary) merriweather opacity-70 mt-1">
          {item.year}
        </p>
      </div>
    </div>
  );
}

export default EducationItem;
