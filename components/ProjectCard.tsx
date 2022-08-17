import { FC, useCallback } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BrandGithub,
  ExternalLink,
} from "tabler-icons-react";
import useEmblaCarousel from "embla-carousel-react";

import { useAnimateOnScreen } from "../hooks/useAnimateOnScreen";
import projects from "../styles/Projects.module.css";
import { Project } from "../interfaces/project";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
}

export const ProjectCard: FC<Project> = ({
  title,
  description,
  tags,
  github,
  images,
  website,
}) => {
  const [elementRef, animation] = useAnimateOnScreen({
    animationClass: "fadeInFromTop",
  });

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className={`${projects.card} ${animation}`} ref={elementRef}>
      <div className={projects["card-content-container"]}>
        <div className={projects["card-header"]}>
          <h4 className={projects["card-title"]}>{title}</h4>
          <div className={projects["links"]}>
            {github && (
              <a
                className={projects.actionbutton}
                aria-label={title + website}
                rel="noopener noreferrer"
                target="_blank"
                href={github}
              >
                <BrandGithub size={18} color="white" />
              </a>
            )}
            {website && (
              <a
                className={projects.actionbutton}
                aria-label={title + website}
                href={website}
                rel="noopener noreferrer"
                target="_blank"
              >
                <ExternalLink size={18} color="white" />
              </a>
            )}
          </div>
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
      {images.length > 0 ? (
        <div className={`${projects["card-image-container"]}`} ref={emblaRef}>
          <div className={`embla__container ${projects["carousel-container"]}`}>
            {images.map((image, index) => (
              <div
                key={image}
                className={`embla__slide ${projects["carousel-slide"]}`}
              >
                <Image
                  src={image}
                  alt={title + index}
                  layout="fill"
                  unoptimized
                />
              </div>
            ))}
          </div>
          {images.length > 1 && (
            <>
              <button
                className={`embla__prev ${projects["carousel-prev"]}`}
                onClick={scrollPrev}
              >
                <ArrowLeft />
              </button>
              <button
                className={`embla__next ${projects["carousel-next"]}`}
                onClick={scrollNext}
              >
                <ArrowRight />
              </button>
            </>
          )}
        </div>
      ) : (
        <div className={projects["card-image-container"]}></div>
      )}
    </div>
  );
};

export default ProjectCard;
