import Link from "next/link";
import styles from "./Button.module.scss";

interface ButtonProps {
  href: string;
  type: "primary" | "ghost";
  children: React.ReactNode;
}

const Button = ({ href, type, children, ...props }: ButtonProps) => {
  if (type === "primary") {
    return (
      <Link
        href={href}
        className={`${styles["button"]} ${styles["button__primary"]}`}
        {...props}
      >
        {children}
      </Link>
    );
  }
  if (type === "ghost") {
    return (
      <Link
        href={href}
        className={`${styles["button"]} ${styles["button__ghost"]}`}
        {...props}
      >
        {children}
      </Link>
    );
  }
  return null;
};

export default Button;
