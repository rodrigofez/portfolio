import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

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

      <main className={styles.main}>
        <div>main</div>
      </main>

      <footer className={styles.footer}>
        <div>footer</div>
      </footer>
    </div>
  );
};

export default Home;
