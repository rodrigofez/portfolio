import { useTranslation } from "next-i18next";
import { Project } from "../interfaces/project";
import ProjectCard from "./ProjectCard";
import ProjectsContainer from "./ProjectsContainer";
import { Section } from "./Section";
import styles from "../styles/Projects.module.css";
import useAnimateOnScreen from "../hooks/useAnimateOnScreen";

export const Projects = () => {
  const { t } = useTranslation("projects");
  const [elementRef, animation] = useAnimateOnScreen({
    animationClass: "fadeInFromLeft",
  });
  const projects: Project[] = t("projectsList", { returnObjects: true });

  return (
    <Section id="projects" title={t("title")} subtitle={t("subtitle")}>
      <ProjectsContainer>
        {projects
          .filter((project) => project.type !== "Backend")
          .map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
      </ProjectsContainer>
      <h2 className={`${styles.subtitle} ${animation}`} ref={elementRef}>
        Backend
      </h2>
      <ProjectsContainer>
        {projects
          .filter((project) => project.type === "Backend")
          .map((project) => (
            <ProjectCard key={project.title} {...project} showImage={false} />
          ))}
      </ProjectsContainer>
    </Section>
  );
};

export default Projects;
