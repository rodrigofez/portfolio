import { useTranslation } from "next-i18next";
import { Skill } from "../interfaces/skills";
import { Section } from "./Section";
import SkillCard from "./SkillCard";
import SkillsContainer from "./SkillsContainer";

export const Skills = () => {
  const { t } = useTranslation("skills");

  const skills: Skill[] = t("skillsList", { returnObjects: true });

  return (
    <Section id="skills" title={t("title")} subtitle={t("subtitle")}>
      <SkillsContainer>
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} {...skill} index={index} />
        ))}
      </SkillsContainer>
    </Section>
  );
};

export default Skills;
