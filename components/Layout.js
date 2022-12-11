import Head from "next/head";
import styles from "./layout.module.css";

import { Container } from "semantic-ui-react";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Claqueta Final 0.1.0</title>
      </Head>
      <Container className={styles.wrapper}>{children}</Container>
    </>
  );
};

export default Layout;
