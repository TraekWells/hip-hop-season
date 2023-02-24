import Link from "next/link";
import styles from "./LinkWithIcon.module.scss";

interface LinkWithIconProps {
  href: string;
  className: string;
  children: React.ReactNode;
}

const LinkWithIcon = ({
  href,
  className,
  children,
  ...props
}: LinkWithIconProps) => {
  return (
    <Link
      href={href}
      className={`${styles["link-with-icon"]} ${className}`}
      {...props}
    >
      {children} (icon)
    </Link>
  );
};

export default LinkWithIcon;
