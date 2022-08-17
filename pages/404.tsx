import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import { Header, Navbar, Footer } from "../components";

const NotFound: NextPage = () => {
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
        <div>Page not found, return to home</div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
