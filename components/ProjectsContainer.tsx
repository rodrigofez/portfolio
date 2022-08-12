import { FC, ReactNode } from "react";
import projects from "../styles/Projects.module.css";

interface ProjectsContainerProps {
  children: ReactNode;
}

export const ProjectsContainer: FC<ProjectsContainerProps> = ({ children }) => {
  return <div className={projects.container}>{children}</div>;
};

export default ProjectsContainer;
