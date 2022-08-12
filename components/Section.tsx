import { FC, ReactNode } from "react";
import useOnScreen, { useAnimateOnScreen } from "../hooks/useAnimateOnScreen";
import section from "../styles/Section.module.css";
import animations from "../styles/Animations.module.css";

interface SectionProps {
  id?: string;
  children: ReactNode;
  title: string;
  subtitle?: string;
}

export const Section: FC<SectionProps> = ({
  id,
  children,
  title,
  subtitle,
}) => {
  const [titleRef, titleAnimation] = useAnimateOnScreen({
    animationClass: "fadeInFromLeft",
  });
  const [subtitleRef, subtitleAnimation] = useAnimateOnScreen({
    animationClass: "fadeInFromLeft",
    delay: 50,
  });

  return (
    <section id={id} className={section.container}>
      <h2 className={`${section.title} ${titleAnimation}`} ref={titleRef}>
        {title}
      </h2>
      {subtitle && (
        <h3
          className={`${section.subtitle} ${subtitleAnimation}`}
          ref={subtitleRef}
        >
          {subtitle}
        </h3>
      )}
      {children}
    </section>
  );
};
