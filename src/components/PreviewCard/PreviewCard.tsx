import styles from "./PreviewCard.module.scss";
import Image from "next/image";
import LinkWithIcon from "../LinkWithIcon";
import { Calendar } from "react-feather";
import useFormatDate from "@/src/hooks/useFormatDate";
import useTruncateText from "@/src/hooks/useTruncateText";
import Link from "next/link";

export type PreviewCardType = {
  params: {
    title: string;
    id: string;
    createdAt: string;
    summary: string;
    featured: boolean;
    draft: boolean;
    image: string;
    artist?: string;
    slug: string;
    finalThoughts?: string;
  };
};

interface PreviewCardProps {
  post: PreviewCardType;
  orientation: "vertical" | "horizontal";
}

const PreviewCard = ({ orientation, post }: PreviewCardProps) => {
  const { finalThoughts, summary, image, title, slug, createdAt, artist } =
    post.params;
  const date = useFormatDate(createdAt);
  const snippet = useTruncateText(finalThoughts || summary);
  return (
    <article className={`${styles["card"]} ${styles[`card--${orientation}`]}`}>
      <div className={styles["card__image"]}>
        <Image src={`${image}`} alt={title} width={400} height={275} />
      </div>
      <div className={styles["card__details"]}>
        <Link href={slug}>
          <h3 className="mb-0">{title}</h3>
        </Link>
        {artist && <p className={styles["card__subtitle"]}>{artist}</p>}
        <p className="date">
          <Calendar />
          {date}
        </p>
        <p>{snippet}</p>
        <LinkWithIcon href={slug}>Read More</LinkWithIcon>
      </div>
    </article>
  );
};

export default PreviewCard;
