import { FC, ReactNode } from "react";
import skills from "../styles/Skills.module.css";

interface SkillsContainerProps {
  children: ReactNode;
}

export const SkillsContainer: FC<SkillsContainerProps> = ({ children }) => {
  return <div className={skills.container}>{children}</div>;
};

export default SkillsContainer;
