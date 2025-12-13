import Carousel from "./Carousel";
import { useRef } from "react";
import { useInView, motion } from "motion/react";

function WorkSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 60, opacity: 0 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.1}}
      id="myWorks"
    >
      <p className="text-4xl font-bold text-center 2xl:mt-25 mt-15 mb-3 merriweather text-(--light-primary) dark:text-(--dark-primary)">
        My works
      </p>
      <p className="2xl:text-2xl text-xl text-(--light-text-secondary) dark:text-(--dark-text-secondary) text-center mb-5 mx-4">
        Selected projects combining clean interfaces, performance, and
        thoughtful UX.
      </p>
      <Carousel />
    </motion.div>
  );
}

export default WorkSection;
