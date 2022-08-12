import { FC } from "react";
import { BrandGithub } from "tabler-icons-react";
import { useAnimateOnScreen } from "../hooks/useAnimateOnScreen";
import projects from "../styles/Projects.module.css";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
}

export const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  tags,
}) => {
  const [elementRef, animation] = useAnimateOnScreen({
    animationClass: "fadeInFromTop",
  });

  return (
    <div className={`${projects.card} ${animation}`} ref={elementRef}>
      <div className={projects["card-content-container"]}>
        <div className={projects["card-header"]}>
          <h4 className={projects["card-title"]}>{title}</h4>
          <button className={projects.actionbutton}>
            <BrandGithub size={18} color="white" />
          </button>
        </div>
        <p className={projects["card-description"]}>{description}</p>
        <div className={projects["tags-container"]}>
          {tags.map((tag, index) => (
            <div className={projects.tag} key={index}>
              {tag}
            </div>
          ))}
        </div>
      </div>
      <div className={projects["card-image-container"]}></div>
    </div>
  );
};

export default ProjectCard;
