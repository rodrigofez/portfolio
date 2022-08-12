import Image from "next/image";
import { FC } from "react";
import { useAnimateOnScreen } from "../hooks/useAnimateOnScreen";
import skills from "../styles/Skills.module.css";

interface SkillCardProps {
  name: string;
  logo: string;
  index: number;
}

export const SkillCard: FC<SkillCardProps> = ({ name, logo, index }) => {
  const [elementRef, animation] = useAnimateOnScreen({
    animationClass: "fadeInFromTop",
    delay: index * 50,
  });

  return (
    <div
      className={`${skills.skillcard} ${animation}`}
      key={name}
      ref={elementRef}
    >
      <div className={skills.content}>
        <Image src={logo} layout="fill" alt={`${name} logo`}></Image>
      </div>
      <div className={skills.tooltip}>{name}</div>
    </div>
  );
};

export default SkillCard;
