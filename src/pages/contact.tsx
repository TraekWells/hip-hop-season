import { NextSeo } from "next-seo";
import React from "react";
import Header from "../components/Header";

const Contact = () => {
  return (
    <>
      <NextSeo
        title="Contact Me"
        description="The best way to get a hold of me is through social media. Hit me up on Twitter or Instagram if you have a project you'd like me to review or just want to say what's up."
        openGraph={{
          url: "https://www.hiphopseason.com/contact-me",
        }}
        canonical="https://www.hiphopseason.com/contact-me"
      />
      <Header
        type="small"
        title="Contact Me"
        image="/images/contact-header.jpg"
      />
      <section className="post">
        <div className="container">
          <p>
            The best way to get a hold of me is through social media. Hit me up
            on {""}
            <a
              href="https://twitter.com/ItsHipHopSeason"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
            {""} or {""}
            <a
              href="https://www.instagram.com/itshiphopseason/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>{" "}
            if you have a project you&lsquo;d like me to review or just want to
            say what&lsquo;s up.
          </p>
        </div>
      </section>
    </>
  );
};

export default Contact;
