export interface ProjectType {
    id: number;
    title: string;
    img: string;
    path: string;
}

export const projects: ProjectType[] = [{
    id: 1,
    title: "E-Commerce",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    path: "/"
  },
  {
    id: 2,
    title: "Restoration Blog",
    img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2300&auto=format&fit=crop",
    path: "/"
  },
  {
    id: 3,
    title: "Finance App",
    img: "https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg",
    path: "/"
  }]