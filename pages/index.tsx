import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Section, Header, Skills, Projects, Navbar } from "../components";
import Affix from "../components/Affix";
import Contact from "../components/Contact";

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
        <Contact />
      </main>
      <footer className={styles.footer}>
        <div>Rodrigo López - Portfolio</div>
      </footer>
      <Affix />
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
        "contact",
      ])),
    },
  };
};

export default Home;
