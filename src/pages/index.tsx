import Head from "next/head";
import Button from "../components/Button";
import ButtonGroup from "../components/ButtonGroup";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hip Hop Season</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header type="large" title="Welcome to Hip Hop Season">
        <p className="lead">
          Your home for <span className="underline">underground</span> Hip-Hop
          album reviews and blogs about all things related to Hip-Hop music and
          the culture.
        </p>
        <ButtonGroup>
          <Button type="primary" href="/reviews">
            Read the Reviews
          </Button>
          <Button type="ghost" href="/blog">
            Read the Blog
          </Button>
        </ButtonGroup>
      </Header>
    </>
  );
}
