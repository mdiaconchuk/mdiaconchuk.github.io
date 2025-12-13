import { navItems, navIcons } from "../../../../data/navItems";
import { Link } from "react-router-dom";
import LogoSVG from "../../LogoSVG";
import { motion } from "motion/react";
import { useTheme } from "../../../../context/themeContext";
import { Sun, Moon } from "lucide-react";
import useScrollInto from "../../../../hooks/useScrollInto";

function PCNavbar() {
  const { theme, setTheme } = useTheme();
  const scrollInto = useScrollInto();
  return (
    <>
      <nav
        className="xl:flex items-center text-xl transition
      h-30 absolute top-0 w-full pt-5 justify-evenly merriweather hidden z-50"
      >
        <div className="flex">
          {/* ------------- Logo ------------- */}
          <LogoSVG className="size-20 hover:rotate-3 transition drop-shadow-lg mr-8 text-(--dark-text) xl:block" />

          {/* ------------- NavItems ------------- */}
          <div className="flex gap-8 group/nav items-center">
            {navItems.map((item, i) => {
              const commonClasses = `
      cursor-pointer relative group/item transition-colors duration-300
      text-(--dark-text)
      group-hover/nav:text-(--dark-text-disabled)
      hover:!text-(--dark-text)
    `;

              // Si es sección
              if (item.type === "section") {
                return (
                  <button
                    key={i}
                    onClick={() => scrollInto(item.value)}
                    className={commonClasses}
                  >
                    {item.label}
                    <span
                      className="
                absolute translate-y-1 left-0 bottom-0 h-0.5 dark:bg-(--dark-secondary) w-0 group-hover/item:w-full transition-all duration-200
                0 bg-(--dark-secondary)"
                    ></span>
                  </button>
                );
              }

              // Si es ruta
              if (item.type === "route") {
                return (
                  <Link key={i} to={item.value} className={commonClasses}>
                    {item.label}
                    <span
                      className="
                absolute translate-y-1 left-0 bottom-0 h-0.5 dark:bg-(--dark-secondary) w-0 group-hover/item:w-full transition-all
                duration-200 bg-(--dark-secondary)"
                    ></span>
                  </Link>
                );
              }
            })}
          </div>
        </div>

        {/* ------------- Toggle theme ------------- */}
        <div className="xl:flex gap-x-7 mr-4 hidden">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`w-14 h-8 rounded-full flex items-center transition-transform px-1 dark:bg-(--dark-surface-container)
               bg-(--light-surface-container-high) hover:scale-105`}
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
          {/* ------------- NavIcons ------------- */}
          <div className="items-center flex gap-x-7">
            {navIcons.map(({ icon: Icon, color, path }, i) => (
              <a key={i} href={path} target="_blank">
                <Icon
                  key={i}
                  size={25}
                  className={`text-(--dark-text-secondary) hover:${color} transition duration-200`}
                />
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}

export default PCNavbar;
