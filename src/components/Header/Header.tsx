import styles from "./Header.module.scss";

interface HeaderProps {
  type: "large" | "small";
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  narrow?: boolean;
  artist?: string;
  image: string;
}

const Header = ({
  type,
  title,
  subtitle,
  children,
  narrow,
  artist,
  image,
}: HeaderProps) => {
  const background = `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${image}`;
  if (type === "large") {
    return (
      <header
        className={`${styles["header"]} ${styles["header--home"]}`}
        style={{ backgroundImage: background }}
      >
        <div className="container">
          <h1>{title}</h1>
          {children}
        </div>
      </header>
    );
  }

  if (type === "small") {
    return (
      <header
        className={`${styles["header"]}`}
        style={{ backgroundImage: background }}
      >
        <div
          className={`${narrow === true ? "container--narrow" : "container"}`}
        >
          {artist ? (
            <h1>
              <span className="lead">{artist}</span>
              {title}
            </h1>
          ) : (
            <h1>{title}</h1>
          )}
          {subtitle && subtitle}
          {children}
        </div>
      </header>
    );
  }
  return null;
};

export default Header;
