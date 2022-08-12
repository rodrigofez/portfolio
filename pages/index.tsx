import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Section, Header, Skills, Projects, Navbar } from "../components";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rodrigo López - Portfolio</title>
        <meta
          name="description"
          content="Rodrigo López frontend developer portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Header />
      <main>
        <Skills />
        <Projects />
        <Section id="contact" title="Contact">
          <div>Contacto</div>
        </Section>
      </main>
      <footer className={styles.footer}>
        <div>Rodrigo López - Portfolio</div>
      </footer>
    </div>
  );
};
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ? locale : "en", [
        "nav",
        "skills",
        "projects",
        "header",
      ])),
    },
  };
};

export default Home;
