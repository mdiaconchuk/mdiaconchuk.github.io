export interface ProjectType {
    id: number;
    title: string;
    img: string;
    path: string;
    description: string;
}

export const projects: ProjectType[] = [{
    id: 1,
    title: "Sample text",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    path: "/",
    description: "A placeholder card"
  },
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