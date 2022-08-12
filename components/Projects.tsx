import { useTranslation } from "next-i18next";
import { Project } from "../interfaces/project";
import ProjectCard from "./ProjectCard";
import ProjectsContainer from "./ProjectsContainer";
import { Section } from "./Section";

export const Projects = () => {
  const { t } = useTranslation("projects");
  const projects: Project[] = t("projectsList", { returnObjects: true });

  return (
    <Section id="projects" title={t("title")} subtitle={t("subtitle")}>
      <ProjectsContainer>
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </ProjectsContainer>
    </Section>
  );
};

export default Projects;
