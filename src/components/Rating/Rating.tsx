import Image from "next/image";
import styles from "./Rating.module.scss";

interface RatingProps {
  lyrics: number;
  production: number;
  replayValue: number;
  variety: number;
  image: string;
  title: string;
}

const Rating = ({
  lyrics,
  production,
  replayValue,
  variety,
  image,
  title,
}: RatingProps) => {
  return (
    <div className={`${styles["rating"]}`}>
      <div className={styles["rating__image"]}>
        <img src={`${image}`} alt={`Album cover for ${title}`} />
      </div>
      <div className={styles["rating__overall"]}>
        <p className={styles["rating__score"]}>
          {lyrics + production + replayValue + variety} / 100
        </p>
        <p className={styles["rating__name"]}>Overall</p>
      </div>
      <div className={styles["rating__category"]}>
        <p className={styles["rating__score"]}>
          {lyrics}
          <span> / 35</span>
        </p>
        <p className={styles["rating__name"]}>Lyrics</p>
      </div>
      <div className={styles["rating__category"]}>
        <p className={styles["rating__score"]}>{production}/ 35</p>
        <p className={styles["rating__name"]}>Production</p>
      </div>
      <div className={styles["rating__category"]}>
        <p className={styles["rating__score"]}>{replayValue}/ 15</p>
        <p className={styles["rating__name"]}>Replay Value</p>
      </div>
      <div className={styles["rating__category"]}>
        <p className={styles["rating__score"]}>{variety}/ 15</p>
        <p className={styles["rating__name"]}>Variety</p>
      </div>
    </div>
  );
};

export default Rating;
