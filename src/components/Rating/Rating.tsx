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
    <div className="rating mb-4">
      <div className="rating__image">
        <Image
          src={`/images/${image}`}
          alt={`Album cover for ${title}`}
          width={400}
          height={400}
        />
      </div>
      <div className="rating__overall">
        <p className="rating__score">
          {lyrics + production + replayValue + variety} / 100
        </p>
        <p className="rating__name">Overall</p>
      </div>
      <div className="rating__category">
        <p className="rating__score">
          {lyrics}
          <span> / 35</span>
        </p>
        <p className="rating__name">Lyrics</p>
      </div>
      <div className="rating__category">
        <p className="rating__score">{production}/ 35</p>
        <p className="rating__name">Production</p>
      </div>
      <div className="rating__category">
        <p className="rating__score">{replayValue}/ 15</p>
        <p className="rating__name">Replay Value</p>
      </div>
      <div className="rating__category">
        <p className="rating__score">{variety}/ 15</p>
        <p className="rating__name">Variety</p>
      </div>
    </div>
  );
};

export default Rating;
