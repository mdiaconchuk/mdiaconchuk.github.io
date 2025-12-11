import { EducationItems } from "../../../../data/EducationItemsData";
import EducationItem from "./EducationItem";
import { motion } from "motion/react";

const containerVariants = {
  hidden: {  },
  visible: {
    transition: {
      staggerChildren: 0.25 
    }
  }
};

function Education() {
  return (
    <div>
      {/* TÍTULO */}
      <p className="text-4xl merriweather mt-15 text-center font-bold mb-5">
        Education
      </p>

      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once:true, amount: 0.7 }}>
      { EducationItems.map((item, index) => <EducationItem key={item.label} item={item} isLast={index === EducationItems.length - 1} />) }
      </motion.div>
    </div>
  );
}

export default Education;
