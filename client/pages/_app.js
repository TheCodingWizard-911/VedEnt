import Layout from "../components/Layout";

import "../styles/globals.css";

function VedEnt({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default VedEnt;
