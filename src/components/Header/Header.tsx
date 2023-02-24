import styles from "./Header.module.scss";

interface HeaderProps {
  type: "large" | "small";
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const Header = ({ type, title, subtitle, children }: HeaderProps) => {
  return (
    <header className={`${styles["header"]} ${styles["header--home"]}`}>
      <div className="container">
        <h1>{title}</h1>
        {children}
      </div>
    </header>
  );
};

export default Header;
