import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import "../styles/_reset.scss";
import "../styles/_base.scss";
import "../styles/_variables.scss";
import "../styles/_typography.scss";
import "../styles/_utilities.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
