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
    description: "Simply parking check system!",
  },
  {
    id: 3,
    title: "Vibra",
    img: "/vibra.png",
    path: "https://vibra-events.vercel.app/",
    description: "Check events coming soon around you!",
  },
  {
    id: 4,
    title: "Mini Web Music Player",
    img: "/miniwmp.png",
    path: "https://mini-wmp.vercel.app/",
    description: "A Vanilla simple WMP made with TypeScript, HTML and CSS.",
  },
  {
    id: 5,
    title: "Roomie Chat",
    img: "/roomie.png",
    path: "https://mini-wmp.vercel.app/",
    description: "Simple full-stack chat app made with Express and Postgres.",
  },
];
