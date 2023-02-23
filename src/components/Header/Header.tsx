import styles from "./Header.module.scss";

interface Props {
  type: "large" | "small";
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const Header = ({ type, title, subtitle, children }: Props) => {
  if (type === "large") {
    return (
      <header className={`${styles["header"]} ${styles["header--home"]}`}>
        <div className="container">
          <h1>{title}</h1>
          {children}
        </div>
      </header>
    );
  } else {
    return (
      <header className={styles.header}>
        <div className="container">
          <h1>{title}</h1>
          <p className="lead">{subtitle}</p>
        </div>
      </header>
    );
  }
};

export default Header;
