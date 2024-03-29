import type { AppProps } from "next/app";
import "../styles/_reset.scss";
import "../styles/_base.scss";
import "../styles/_variables.scss";
import "../styles/_typography.scss";
import "../styles/_utilities.scss";
import Layout from "../components/Layout";
import SEO from "@/next-seo.config";
import { DefaultSeo } from "next-seo";
import PlausibleProvider from "next-plausible";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <PlausibleProvider domain="hiphopseason.com">
        <Layout>
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </Layout>
      </PlausibleProvider>
    </>
  );
}
