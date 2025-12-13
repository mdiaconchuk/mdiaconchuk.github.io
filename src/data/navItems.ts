import { LinkedinIcon, Mail, Github } from "lucide-react";
import type { ComponentType } from "react";

export interface navItemType {
    label: string;
    type: "section" | "route";
    value: string;
}
export interface navIconType {
    label: string;
    icon: ComponentType<{size?: number, className?: string}>;
    color: string,
    path: string,
}

export const navItems: navItemType[] = [
    { label: "Home", type: "route", value: "/"  },
    { label: "Works", type: "section", value: "myWorks"  },
    { label: "About", type: "route", value: "/about"  },
    { label: "Contact", type: "section", value: "contact"  },
];
export const navIcons: navIconType[] = [
    { label: "Linkedin", icon: LinkedinIcon, color: "text-blue-400", path: "https://www.linkedin.com/in/diaconchukm/" },
    { label: "Mail", icon: Mail, color: "text-red-400", path: "mailto:mdiaconchuk@gmail.com" },
    { label: "Github", icon: Github, color: "text-gray-500", path: "https://github.com/mdiaconchuk" },
];