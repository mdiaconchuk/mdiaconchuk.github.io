import { navItems, navIcons } from "../../../../data/navItems";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "../../../../context/themeContext";
import { motion } from "motion/react";
import LogoSVG from "../../LogoSVG";

function MobileNavbar() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      {/* ------------- MOBILE NAVBAR ------------- */}
      <nav className="xl:hidden absolute top-0 z-50 w-full text-(--dark-text)">
        {/* ------------- MOBILE Head icons ------------- */}
        <div className="flex w-full h-15 justify-between p-8 relative items-center z-20">
          <LogoSVG className="size-12 text-(--dark-text)" />

          <div className="flex items-center">
             <div className="mx-5">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={`w-14 h-8 rounded-full flex items-center transition-transform px-1 dark:bg-(--dark-surface-container)
               bg-(--light-surface-container-high)`}
              >
                <motion.div
                  layout
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className={`w-6 h-6 rounded-full shadow-xl ${
                    theme === "dark"
                      ? "translate-x-full bg-(--dark-accent)"
                      : "translate-x-0 bg-(--light-accent)"
                  }`}
                >
                  {theme === "dark" ? (
                    <Sun className="text-black p-1" />
                  ) : (
                    <Moon className="text-white p-1" />
                  )}
                </motion.div>
              </button>
            </div>
            <button
              className="rounded-md size-12 relative flex justify-center"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu
                className={`absolute size-full text-(--dark-text) transition ${
                  !isOpen ? "opacity-100" : "opacity-0"
                }`}
              />
              <X
                className={`absolute size-full text-(--dark-text) transition ${
                  !isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
            </button>
          </div>
        </div>

        {/* ------------- MOBILE Menu ------------- */}
        <div
          className={`pt-20 pb-10 z-10 absolute top-0 w-full bg-black/20 backdrop-blur-xl transition font-bold ${
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
           <div className="flex flex-col justify-center items-center *:text-2xl gap-y-3">
            {navItems.map((item, i) => {
              if (item.type === "section") {
                return (
                  <button key={i} onClick={() => alert("lmao")}>
                    {item.label}
                  </button>
                );
              }
              if (item.type === "route") {
                return (
                  <Link key={i} to={item.value}>
                    {item.label}
                  </Link>
                );
              }
            })}
          </div>

          <div className="items-center justify-center flex gap-x-7 mt-10">
            {navIcons.map(({ icon: Icon, color, path }, i) => (
              <a key={i} href={path} target="_blank">
                <Icon
                  key={i}
                  size={25}
                  className={`text-(--dark-text-secondary) hover:${color} transition duration-200 cursor-pointer`}
                />
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}

export default MobileNavbar;