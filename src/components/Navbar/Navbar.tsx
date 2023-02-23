import Logo from "../Logo";
import Link from "next/link";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles["nav"]}>
      <div className={`${styles["container"]} container`}>
        <Link href="/" className={styles["nav__logo"]}>
          <Logo />
        </Link>
        <ul className={styles["nav__list"]}>
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
            <a className={styles["nav__social-link"]} target="_blank">
              <p>Twitter Icon</p>
            </a>
            <a className={styles["nav__social-link"]} target="_blank">
              <p>Instagram Icon</p>
            </a>
          </div>
        </ul>
        <div className={styles["nav__burger"]}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
