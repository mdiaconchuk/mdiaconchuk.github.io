import { MeshGradient } from "@mesh-gradient/react";
import { useTheme } from "../../../context/themeContext";
import { useMemo } from "react";

function MeshBackground() {
  const { theme } = useTheme();

  const darkColors = useMemo<[string, string, string, string]>(
  () => [
    "#121212", // 0: dark-bg
    "#1A1A1A", // 1: dark-surface
    "#1b263b", // 2: dark-tertiary
    "#415a77", // 3: dark-primary
  ],
  []
);

const lightColors = useMemo<[string, string, string, string]>(
  () => [
    "#ffffff", // 0: Blanco puro para la luz
    "#b4c0cc", // 1: light-outline - Para generar una sombra sutil
    "#6c88a3", // 2: light-secondary - Color intermedio
    "#39506b"  // 3: light-primary - El color más oscuro para la definición
  ],
  []
);

  const options = useMemo(() => {
    return {
      colors: theme === "dark" ? darkColors : lightColors,
      isStatic: false,
      pauseOnOutsideViewport: true,
      seed: 10,
      transition: true,
    };
  }, [theme]);

  return (
    <div className="absolute -z-10 inset-0">
      <div className="absolute inset-0 pointer-events-none bg-black/40 dark:bg-transparent" />
      <MeshGradient
        options={options}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}

export default MeshBackground;
