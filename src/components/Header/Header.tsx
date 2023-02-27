import styles from "./Header.module.scss";

interface HeaderProps {
  type: "large" | "small";
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  narrow?: boolean;
}

const Header = ({ type, title, subtitle, children, narrow }: HeaderProps) => {
  if (type === "large") {
    return (
      <header className={`${styles["header"]} ${styles["header--home"]}`}>
        <div className="container">
          <h1>{title}</h1>
          {children}
        </div>
      </header>
    );
  }

  if (type === "small") {
    return (
      <header className={`${styles["header"]}`}>
        <div
          className={`${narrow === true ? "container--narrow" : "container"}`}
        >
          <h1>{title}</h1>
          {subtitle && subtitle}
          {children}
        </div>
      </header>
    );
  }
  return null;
};

export default Header;
