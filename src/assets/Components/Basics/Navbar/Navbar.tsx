import MobileNavbar from "./MobileNavbar";
import PCNavbar from "./PCNavbar";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          delay: 1.3,
        }}
      >
        {/* ------------- DESKTOP NAVBAR ------------- */}
        <PCNavbar isScrolled={isScrolled} />
        {/* ------------- MOBILE NAVBAR ------------- */}
        <MobileNavbar isScrolled={isScrolled} />
      </motion.div>
    </>
  );
}

export default Navbar;
