import React from "react";
import Logo from "../Logo";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import { Twitter, Instagram } from "react-feather";
import { useRouter } from "next/router";

const Navbar = () => {
  const route = useRouter();
  const [scrollPosition, setScrollPosition] = React.useState<number | null>(0);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuActive, setMobileMenuActive] = React.useState(false);
  const navRef = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    setMobileMenuActive(false);
  }, [route.asPath]);

  React.useEffect(() => {
    const navHeight = navRef.current?.clientHeight;
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      if (navHeight && scrollPosition) {
        if (scrollPosition >= navHeight || scrollPosition === 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const toggleNavMenu = () => {
    setMobileMenuActive(!mobileMenuActive);
  };

  return (
    <nav
      className={`${styles["nav"]} ${isScrolled ? styles["scrolled"] : ""}`}
      ref={navRef}
    >
      <div className={`${styles["container"]} container`}>
        <Link href="/" className={styles["nav__logo"]}>
          <Logo />
        </Link>
        <ul
          className={`${styles["nav__list"]} ${
            mobileMenuActive ? styles["active"] : ""
          }`}
        >
          <li className={styles["nav__item"]}>
            <Link href="/reviews" className={styles["nav__link"]}>
              Reviews
            </Link>
          </li>
          <li className={styles["nav__item"]}>
            <Link href="/blog" className={styles["nav__link"]}>
              Blog
            </Link>
          </li>
          <li className={styles["nav__item"]}>
            <Link href="/lists" className={styles["nav__link"]}>
              Lists
            </Link>
          </li>
          <li className={styles["nav__item"]}>
            <Link href="/contact" className={styles["nav__link"]}>
              Contact Me
            </Link>
          </li>
          <div className={styles["nav__social"]}>
            <a
              className={styles["nav__social-link"]}
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/ItsHipHopSeason"
            >
              <Twitter />
            </a>
            <a
              className={styles["nav__social-link"]}
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/itshiphopseason/"
            >
              <Instagram />
            </a>
          </div>
        </ul>
        <div
          className={`${styles["nav__burger"]} ${
            mobileMenuActive ? styles["active"] : ""
          }`}
          onClick={toggleNavMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
