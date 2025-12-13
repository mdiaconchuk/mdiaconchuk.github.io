export interface ProjectType {
    id: number;
    title: string;
    img: string;
    path: string;
    description: string;
}

export const projects: ProjectType[] = [
  {
    id: 2,
    title: "Parkly",
    img: "/parkly.png",
    path: "https://parkly-ebon.vercel.app/",
    description: "Simply parking check system!"
  },
  {
    id: 3,
    title: "Vibra",
    img: "/vibra.png",
    path: "https://vibra-events.vercel.app/",
    description: "Check events coming soon around you!"
  }]