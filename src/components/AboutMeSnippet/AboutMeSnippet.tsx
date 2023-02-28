import styles from "./AboutMeSnippet.module.scss";
import Image from "next/image";
import { Twitter, Instagram } from "react-feather";

const AboutMeSnippet = () => {
  return (
    <div className={styles["about-the-author"]}>
      <div className={styles["about-the-author__image"]}>
        <Image
          src={"/images/about-the-author-image.jpg"}
          alt="About the author image"
          width={225}
          height={300}
        />
      </div>
      <div className={styles["about-the-author__bio"]}>
        <h4>About the author</h4>
        <p>
          I'm not music expert but I know what good hip hop sounds like. I'm
          just a dude who loves music and feels that non-mainstream hip hop is
          under-represented and under-appreciated. All thoughts and opinions are
          my own but I'd love to discuss.
        </p>
        <a
          className={styles["about-the-author__link"]}
          href="https://twitter.com/ItsHipHopSeason"
          target="_blank"
        >
          <Twitter />
        </a>
        <a
          className={styles["about-the-author__link"]}
          href="https://www.instagram.com/itshiphopseason/"
          target="_blank"
        >
          <Instagram />
        </a>
      </div>
    </div>
  );
};

export default AboutMeSnippet;
