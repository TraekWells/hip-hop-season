import type { AppProps } from "next/app";
import "../styles/_reset.scss";
import "../styles/_base.scss";
import "../styles/_variables.scss";
import "../styles/_typography.scss";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
