// import App from 'next/app'
import "semantic-ui-css/semantic.min.css";

import style from "../css/style.css";

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
