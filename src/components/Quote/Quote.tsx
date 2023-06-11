import styles from "./Quote.module.scss";

interface QuoteProps {
  song: string;
  children: React.ReactNode;
}

const Quote = ({ children, song }: QuoteProps) => {
  return (
    <div className={styles["quote"]}>
      {children}
      {song && <cite className={styles["song"]}>– {song}</cite>}
    </div>
  );
};

export default Quote;
