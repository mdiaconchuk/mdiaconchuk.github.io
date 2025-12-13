import type { IconType } from "react-icons";
import {
  LiaHtml5,
  LiaCss3,
  LiaJsSquare,
  LiaGithub,
  LiaReact,
} from "react-icons/lia";
import { RiTailwindCssLine, RiNextjsLine } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";

export interface Skill {
  id: number;
  name: string;
  Icon: IconType;
  colorClass: string;
}

export const skillsData: Skill[] = [
  {
    id: 1,
    name: "HTML",
    Icon: LiaHtml5,
    colorClass: "text-orange-600 dark:text-orange-500",
  },
  {
    id: 2,
    name: "CSS",
    Icon: LiaCss3,
    colorClass: "text-blue-700 dark:text-blue-500",
  },
  {
    id: 3,
    name: "Tailwind",
    Icon: RiTailwindCssLine,
    colorClass: "text-cyan-600 dark:text-cyan-400",
  },
  {
    id: 4,
    name: "JavaScript",
    Icon: LiaJsSquare,
    colorClass: "text-yellow-600 dark:text-yellow-400",
  },
  {
    id: 5,
    name: "TypeScript",
    Icon: TbBrandTypescript,
    colorClass: "text-blue-600 dark:text-blue-400",
  },
  {
    id: 6,
    name: "React",
    Icon: LiaReact,
    colorClass: "text-sky-500 dark:text-sky-400",
  },
  {
    id: 7,
    name: "Next.js",
    Icon: RiNextjsLine,
    colorClass: "text-black dark:text-white",
  },
  {
    id: 8,
    name: "GitHub",
    Icon: LiaGithub,
    colorClass: "text-gray-900 dark:text-white",
  },
];