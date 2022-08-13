import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import {
  Header,
  Skills,
  Projects,
  Navbar,
  Footer,
  Affix,
  Contact,
} from "../components";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rodrigo López - Portfolio</title>
        <meta
          name="description"
          content="Rodrigo López frontend developer portfolio"
        />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Navbar />
      <Header />
      <main>
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
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
