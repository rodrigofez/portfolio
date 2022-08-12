export interface Projects {
  title: string;
  subtitle: string;
  projectsList: Project[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
}
