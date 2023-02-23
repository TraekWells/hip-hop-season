import Logo from "../Logo";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Logo />
        <ul className={styles.nav__list}>
          <li className={styles.nav__item}>Reviews</li>
          <li className={styles.nav__item}>Blog</li>
          <li className={styles.nav__item}>Lists</li>
          <li className={styles.nav__item}>Contact Me</li>
          <div className={styles.social}>
            <a className={styles["nav__social-link"]} target="_blank">
              <p>Twitter Icon</p>
            </a>
            <a className={styles["nav__social-link"]} target="_blank">
              <p>Instagram Icon</p>
            </a>
          </div>
        </ul>
        <div className={styles.nav__burger}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
