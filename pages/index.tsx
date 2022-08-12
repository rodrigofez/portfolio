import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Section } from "../components/Section";

import projectsData from "../data/projects.json";
import skillsData from "../data/skills.json";

import {
  Header,
  ProjectCard,
  ProjectsContainer,
  SkillCard,
  SkillsContainer,
} from "../components";
import { Navbar } from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rodrigo López - Portfolio</title>
        <meta
          name="description"
          content="Rodrigo López portfolio frontend developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Header />
      <main>
        <Section
          id="skills"
          title="Skills and tools"
          subtitle="that I've worked with"
        >
          <SkillsContainer>
            {skillsData.map((skill, index) => (
              <SkillCard key={skill.name} {...skill} index={index} />
            ))}
          </SkillsContainer>
        </Section>
        <Section id="projects" title="Projects" subtitle="that I've built">
          <ProjectsContainer>
            {projectsData.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </ProjectsContainer>
        </Section>
        <Section id="contact" title="Contact">
          <div>Conracto</div>
        </Section>
      </main>
      <footer className={styles.footer}>
        <div>Rodrigo López - Portfolio</div>
      </footer>
    </div>
  );
};

export default Home;
