import Link from "next/link";
import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className="container">
        <div className={styles["footer__nav"]}>
          <div className={styles["footer__group"]}>
            <p className={styles["footer__header"]}>Pages</p>
            <p>
              <Link href="/reviews" className={styles["footer__link"]}>
                Reviews
              </Link>
            </p>
            <p>
              <Link href="/blog" className={styles["footer__link"]}>
                Blog
              </Link>
            </p>
            <p>
              <Link href="/contact" className={styles["footer__link"]}>
                Contact Me
              </Link>
            </p>
          </div>
          <div className={styles["footer__group"]}>
            <p className={styles["footer__header"]}>Connect</p>
            <p>
              <a
                href="https://twitter.com/ItsHipHopSeason"
                className={styles["footer__link"]}
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
            </p>
            <p>
              <a
                href="https://www.instagram.com/itshiphopseason/"
                className={styles["footer__link"]}
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </p>
          </div>
          <div className={styles["footer__group"]}>
            <p className={styles["footer__header"]}>Hip-Hop Season</p>
            <p>
              I believe that non-mainstream hip hop is majorly underrated and
              under-appreciated. Here at Hip-Hop Season, I review non-mainstream
              hip-hop albums and share my thoughts on hip-hop culture and music.
            </p>
          </div>
        </div>
        <p className={styles["copyright"]}>
          © {new Date().getFullYear()} Hip-Hop Season. All rights reserved.
          Designed and built by{" "}
          <a href="https://traekwells.com" target="_blank" rel="noreferrer">
            Traek Wells
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
