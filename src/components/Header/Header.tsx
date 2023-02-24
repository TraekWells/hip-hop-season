import styles from "./Header.module.scss";

interface HeaderProps {
  type: "large" | "small";
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

const Header = ({ type, title, subtitle, children }: HeaderProps) => {
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
        <div className="container">
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
