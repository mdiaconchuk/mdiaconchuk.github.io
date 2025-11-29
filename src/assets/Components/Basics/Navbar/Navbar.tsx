import MobileNavbar from "./MobileNavbar";
import PCNavbar from "./PCNavbar";
import { motion } from "motion/react";

function Navbar() {
  return (
    <>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          delay: 1.7
        }}
      >
        {/* ------------- DESKTOP NAVBAR ------------- */}
        <PCNavbar />
        {/* ------------- MOBILE NAVBAR ------------- */}
        <MobileNavbar />
      </motion.div>
    </>
  );
}

export default Navbar;
