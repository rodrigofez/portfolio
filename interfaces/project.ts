export interface Projects {
  title: string;
  subtitle: string;
  projectsList: Project[];
}

export interface Project {
  title: string;
  description: string;
  type: "Frontend" | "Mobile" | "Backend";
  tags: string[];
  github: string | null;
  website: string | null;
  images: string[];
}
